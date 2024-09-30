"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.glossary = exports.provider = void 0;
const vscode = __importStar(require("vscode"));
const lw_1 = require("../../lw");
const types_1 = require("../../types");
const parser_1 = require("../../utils/parser");
const utils_1 = require("../../utils/utils");
exports.provider = { from };
exports.glossary = {
    parse,
    getItem
};
const data = {
    glossaries: new Map(),
    acronyms: new Map()
};
function from(result) {
    updateAll();
    let suggestions;
    if (result[1] && result[1].match(/^ac/i)) {
        suggestions = data.acronyms;
    }
    else {
        suggestions = new Map([...data.acronyms, ...data.glossaries]);
    }
    // Compile the suggestion object to array
    const items = Array.from(suggestions.values());
    return items;
}
function getItem(token) {
    updateAll();
    return data.glossaries.get(token) || data.acronyms.get(token);
}
function updateAll() {
    // Extract cached references
    const glossaryList = [];
    lw_1.lw.cache.getIncludedTeX().forEach(cachedFile => {
        const cachedGlossaries = lw_1.lw.cache.get(cachedFile)?.elements.glossary;
        if (cachedGlossaries === undefined) {
            return;
        }
        cachedGlossaries.forEach(ref => {
            if (ref.type === types_1.GlossaryType.glossary) {
                data.glossaries.set(ref.label, ref);
            }
            else {
                data.acronyms.set(ref.label, ref);
            }
            glossaryList.push(ref.label);
        });
    });
    // Remove references that has been deleted
    data.glossaries.forEach((_, key) => {
        if (!glossaryList.includes(key)) {
            data.glossaries.delete(key);
        }
    });
    data.acronyms.forEach((_, key) => {
        if (!glossaryList.includes(key)) {
            data.acronyms.delete(key);
        }
    });
}
function parse(cache) {
    if (cache.ast !== undefined) {
        cache.elements.glossary = parseAst(cache.ast, cache.filePath);
    }
    else {
        cache.elements.glossary = parseContent(cache.content, cache.filePath);
    }
}
function parseAst(node, filePath) {
    let glos = [];
    let entry = { label: '', description: '' };
    let type;
    if (node.type === 'macro' && ['newglossaryentry', 'provideglossaryentry'].includes(node.content)) {
        type = types_1.GlossaryType.glossary;
        let description = (0, parser_1.argContentToStr)(node.args?.[1]?.content || [], true);
        const index = description.indexOf('description=');
        if (index >= 0) {
            description = description.slice(index + 12);
            if (description.charAt(0) === '{') {
                description = (0, utils_1.getLongestBalancedString)(description) ?? '';
            }
            else {
                description = description.split(',')[0] ?? '';
            }
        }
        else {
            description = '';
        }
        entry = {
            label: (0, parser_1.argContentToStr)(node.args?.[0]?.content || []),
            description
        };
    }
    else if (node.type === 'macro' && ['longnewglossaryentry', 'longprovideglossaryentry', 'newacronym', 'newabbreviation', 'newabbr'].includes(node.content)) {
        if (['longnewglossaryentry', 'longprovideglossaryentry'].includes(node.content)) {
            type = types_1.GlossaryType.glossary;
        }
        else {
            type = types_1.GlossaryType.acronym;
        }
        entry = {
            label: (0, parser_1.argContentToStr)(node.args?.[1]?.content || []),
            description: (0, parser_1.argContentToStr)(node.args?.[3]?.content || []),
        };
    }
    if (type !== undefined && entry.label && entry.description && node.position !== undefined) {
        glos.push({
            type,
            filePath,
            position: new vscode.Position(node.position.start.line - 1, node.position.start.column - 1),
            label: entry.label,
            detail: entry.description,
            kind: vscode.CompletionItemKind.Reference
        });
    }
    const parseContentNodes = (content) => {
        for (const subNode of content) {
            glos = [...glos, ...parseAst(subNode, filePath)];
        }
    };
    if (node.type === 'macro' && node.args) {
        for (const arg of node.args) {
            parseContentNodes(arg.content);
        }
    }
    else if ('content' in node && typeof node.content !== 'string') {
        parseContentNodes(node.content);
    }
    return glos;
}
function parseContent(content, filePath) {
    const glossaries = [];
    const glossaryList = [];
    // We assume that the label is always result[1] and use getDescription(result) for the description
    const regexes = {
        'glossary': {
            regex: /\\(?:provide|new)glossaryentry{([^{}]*)}\s*{(?:(?!description).)*description=(?:([^{},]*)|{([^{}]*))[,}]/gms,
            type: types_1.GlossaryType.glossary,
            getDescription: (result) => { return result[2] ? result[2] : result[3]; }
        },
        'longGlossary': {
            regex: /\\long(?:provide|new)glossaryentry{([^{}]*)}\s*{[^{}]*}\s*{([^{}]*)}/gms,
            type: types_1.GlossaryType.glossary,
            getDescription: (result) => { return result[2]; }
        },
        'acronym': {
            regex: /\\newacronym(?:\[[^[\]]*\])?{([^{}]*)}{[^{}]*}{([^{}]*)}/gm,
            type: types_1.GlossaryType.acronym,
            getDescription: (result) => { return result[2]; }
        }
    };
    for (const key in regexes) {
        while (true) {
            const result = regexes[key].regex.exec(content);
            if (result === null) {
                break;
            }
            const positionContent = content.substring(0, result.index).split('\n');
            if (glossaryList.includes(result[1])) {
                continue;
            }
            glossaries.push({
                type: regexes[key].type,
                filePath,
                position: new vscode.Position(positionContent.length - 1, positionContent[positionContent.length - 1].length),
                label: result[1],
                detail: regexes[key].getDescription(result),
                kind: vscode.CompletionItemKind.Reference
            });
        }
    }
    return glossaries;
}
//# sourceMappingURL=glossary.js.map