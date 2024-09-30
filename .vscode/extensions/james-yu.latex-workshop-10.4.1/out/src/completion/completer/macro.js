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
exports.macro = exports.provider = void 0;
exports.isTriggerSuggestNeeded = isTriggerSuggestNeeded;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
const lw_1 = require("../../lw");
const types_1 = require("../../types");
const environment_1 = require("./environment");
const completerutils_1 = require("./completerutils");
exports.provider = { from };
exports.macro = {
    parse,
    surround,
    getPackageCmds,
    setPackageCmds,
    provideCmdInPkg,
    getData
};
function getData() { return data; }
const data = {
    definedCmds: new Map(),
    defaultCmds: [],
    defaultSymbols: [],
    packageCmds: new Map()
};
Object.values(JSON.parse(fs.readFileSync(`${lw_1.lw.extensionRoot}/data/unimathsymbols.json`).toString()))
    .forEach(symbol => data.defaultSymbols.push(entryCmdToCompletion({ name: symbol.command, doc: symbol.documentation, detail: symbol.detail }, 'latex')));
lw_1.lw.onConfigChange(['intellisense.command.user', 'intellisense.package.exclude'], initialize);
initialize();
function initialize() {
    const excludeDefault = vscode.workspace.getConfiguration('latex-workshop').get('intellisense.package.exclude').includes('lw-default');
    const macros = excludeDefault ? [] : JSON.parse(fs.readFileSync(`${lw_1.lw.extensionRoot}/data/macros.json`, { encoding: 'utf8' }));
    const mathMacros = excludeDefault ? [] : JSON.parse(fs.readFileSync(`${lw_1.lw.extensionRoot}/data/packages/tex.json`, { encoding: 'utf8' })).macros;
    let all = [...macros, ...mathMacros].map(m => {
        const macroInfo = {
            ...m,
            package: 'latex',
        };
        return macroInfo;
    });
    const defaultEnvs = environment_1.environment.getDefaultEnvs(types_1.EnvSnippetType.AsMacro);
    const userCmds = vscode.workspace.getConfiguration('latex-workshop').get('intellisense.command.user');
    Object.entries(userCmds).forEach(([key, snippet]) => {
        const candidate = all.find(m => m.name + (m.arg?.format ?? '') === key);
        if (candidate && snippet !== '') {
            candidate.name = '';
            candidate.arg = { format: snippet, snippet };
            candidate.package = 'user';
        }
        else if (candidate && snippet === '') {
            all = all.filter(m => m !== candidate);
        }
        else {
            all.push({ name: key, package: 'user', arg: { format: '', snippet } });
        }
    });
    data.defaultCmds = [];
    // Initialize default macros and the ones in `tex.json`
    all.forEach(m => data.defaultCmds.push(entryCmdToCompletion(m, m.package, m.action)));
    // Initialize default env begin-end pairs
    defaultEnvs.forEach(cmd => {
        data.defaultCmds.push(cmd);
    });
}
function isTriggerSuggestNeeded(name) {
    const reg = /^(?:[a-z]*(cite|ref|input)[a-z]*|begin|bibitem|(sub)?(import|includefrom|inputfrom)|gls(?:pl|text|first|plural|firstplural|name|symbol|desc|user(?:i|ii|iii|iv|v|vi))?|Acr(?:long|full|short)?(?:pl)?|ac[slf]?p?)/i;
    return reg.test(name);
}
function from(result, args) {
    const suggestions = provide(args.langId, args.line, args.position);
    // Macros ending with (, { or [ are not filtered properly by vscode intellisense. So we do it by hand.
    if (result[0].match(/[({[]$/)) {
        const exactSuggestion = suggestions.filter(entry => entry.label === result[0]);
        if (exactSuggestion.length > 0) {
            return exactSuggestion;
        }
    }
    // Macros starting with a non letter character are not filtered properly because of wordPattern definition.
    return (0, completerutils_1.filterNonLetterSuggestions)(suggestions, result[1], args.position);
}
function provide(langId, line, position) {
    const configuration = vscode.workspace.getConfiguration('latex-workshop');
    const useOptionalArgsEntries = configuration.get('intellisense.optionalArgsEntries.enabled');
    let range = undefined;
    if (line && position) {
        const startPos = line.lastIndexOf('\\', position.character - 1);
        if (startPos >= 0) {
            range = new vscode.Range(position.line, startPos + 1, position.line, position.character);
        }
    }
    const suggestions = [];
    let defined = new Set();
    // Insert default macros
    data.defaultCmds.forEach(cmd => {
        if (!useOptionalArgsEntries && cmd.hasOptionalArgs()) {
            return;
        }
        cmd.range = range;
        suggestions.push(cmd);
        defined.add(cmd.signatureAsString());
    });
    // Insert unimathsymbols
    if (configuration.get('intellisense.unimathsymbols.enabled')) {
        data.defaultSymbols.forEach(symbol => {
            suggestions.push(symbol);
            defined.add(symbol.signatureAsString());
        });
    }
    // Insert macros from packages
    if ((configuration.get('intellisense.package.enabled'))) {
        const packages = lw_1.lw.completion.usepackage.getAll(langId);
        Object.entries(packages).forEach(([packageName, options]) => {
            provideCmdInPkg(packageName, options, suggestions);
            environment_1.environment.provideEnvsAsMacroInPkg(packageName, options, suggestions, defined);
        });
    }
    // Start working on macros in tex. To avoid over populating suggestions, we do not include
    // user defined macros, whose name matches a default macro or one provided by a package
    defined = new Set(suggestions.map(s => s.signatureAsString()));
    lw_1.lw.cache.getIncludedTeX().forEach(tex => {
        const cmds = lw_1.lw.cache.get(tex)?.elements.macro;
        if (cmds !== undefined) {
            cmds.forEach(cmd => {
                if (!defined.has(cmd.signatureAsString())) {
                    cmd.range = range;
                    suggestions.push(cmd);
                    defined.add(cmd.signatureAsString());
                }
            });
        }
    });
    (0, completerutils_1.filterArgumentHint)(suggestions);
    return suggestions;
}
/**
 * Surrounds `content` with a macro picked in QuickPick.
 *
 * @param content A string to be surrounded. If not provided, then we loop over all the selections and surround each of them.
 */
function surround(cmdItems) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    cmdItems = cmdItems ?? provide(editor.document.languageId);
    const candidate = [];
    cmdItems.forEach(item => {
        if (item.insertText === undefined) {
            return;
        }
        if (item.label === '\\begin') { // Causing a lot of trouble
            return;
        }
        let macroStr = (typeof item.insertText !== 'string') ? item.insertText.value : item.insertText;
        if (macroStr.match(/(.*)(\${\d.*?})/)) {
            macroStr = macroStr.replace('\\\\', '\\').replace(/:\${TM_SELECTED_TEXT:?(.*?)}/g, '$1');
            candidate.push({
                macro: macroStr,
                detail: '\\' + macroStr.replace(/[\n\t]/g, '').replace(/\$\{(\d+)\}/g, '$$$1'),
                label: item.label
            });
        }
    });
    void vscode.window.showQuickPick(candidate, {
        placeHolder: 'Press ENTER to surround previous selection with selected macro',
        matchOnDetail: false,
        matchOnDescription: false
    }).then(selected => {
        if (selected === undefined) {
            return;
        }
        void editor.edit(editBuilder => {
            for (const selection of editor.selections) {
                const selectedContent = editor.document.getText(selection);
                const selectedMacro = '\\' + selected.macro;
                editBuilder.replace(new vscode.Range(selection.start, selection.end), selectedMacro.replace(/(.*)(\${\d.*?})/, `$1${selectedContent}`) // Replace text
                    .replace(/\${\d:?(.*?)}/g, '$1') // Remove snippet placeholders
                    .replace(/\$\d/, '')); // Remove $2 etc
            }
        });
    });
    return;
}
function parse(cache) {
    // Remove newcommand macros, because they will be re-insert in the next step
    data.definedCmds.forEach((entry, cmd) => {
        if (entry.filePath === cache.filePath) {
            data.definedCmds.delete(cmd);
        }
    });
    if (cache.ast !== undefined) {
        cache.elements.macro = parseAst(cache.ast, cache.filePath);
    }
    else {
        cache.elements.macro = parseContent(cache.content, cache.filePath);
    }
}
function parseAst(node, filePath, defined) {
    defined = defined ?? new Set();
    let cmds = [];
    let found = false;
    let name = '';
    let args = '';
    if (node.type === 'macro' &&
        ['renewcommand', 'newcommand', 'newrobustcmd', 'renewrobustcmd'].includes(node.content) &&
        node.args?.[2]?.content?.[0]?.type === 'macro') {
        // \newcommand{\fix}[3][]{\chdeleted{#2}\chadded[comment={#1}]{#3}}
        // \newcommand\WARNING{\textcolor{red}{WARNING}}
        found = true;
        name = node.args[2].content[0].content;
        if (node.args?.[3].content?.[0]?.type === 'string' &&
            parseInt(node.args?.[3].content?.[0].content) > 0) {
            args = (node.args?.[4].openMark === '[' ? '[]' : '{}') + '{}'.repeat(parseInt(node.args?.[3].content?.[0].content) - 1);
        }
    }
    else if (node.type === 'macro' &&
        ['DeclarePairedDelimiter', 'DeclarePairedDelimiterX', 'DeclarePairedDelimiterXPP'].includes(node.content) &&
        node.args?.[0]?.content?.[0]?.type === 'macro') {
        // \DeclarePairedDelimiterX\braketzw[2]{\langle}{\rangle}{#1\,\delimsize\vert\,\mathopen{}#2}
        found = true;
        name = node.args[0].content[0].content;
        if (['DeclarePairedDelimiterX', 'DeclarePairedDelimiterXPP'].includes(node.content) &&
            node.args?.[1].content?.[0]?.type === 'string' &&
            parseInt(node.args?.[1].content?.[0].content) > 0) {
            args = (node.args?.[2].openMark === '[' ? '[]' : '{}') + '{}'.repeat(parseInt(node.args?.[1].content?.[0].content) - 1);
        }
    }
    else if (node.type === 'macro' &&
        ['providecommand', 'providerobustcmd', 'DeclareMathOperator', 'DeclareRobustCommand'].includes(node.content) &&
        node.args?.[1]?.content?.[0]?.type === 'macro') {
        found = true;
        name = node.args[1].content[0].content;
        if (node.args?.[2].content?.[0]?.type === 'string' &&
            parseInt(node.args?.[2].content?.[0].content) > 0) {
            args = (node.args?.[3].openMark === '[' ? '[]' : '{}') + '{}'.repeat(parseInt(node.args?.[2].content?.[0].content) - 1);
        }
    }
    else if (node.type === 'macro' &&
        ['ReNewDocumentCommand', 'NewDocumentCommand', 'ProvideDocumentCommand', 'DeclareDocumentCommand'].includes(node.content) &&
        node.args?.length === 3 && node.args[0]?.content?.[0]?.type === 'macro') {
        found = true;
        name = node.args[0].content[0].content;
        node.args[1].content.forEach((entry) => {
            if (entry.type === 'string') {
                if (entry.content === 'm') {
                    args += '{}';
                }
                else if (entry.content === 'o' || entry.content === 'O') {
                    args += '[]';
                }
            }
        });
    }
    if (found && !defined.has(`${name}${args}`)) {
        const cmd = new completerutils_1.CmdEnvSuggestion(`\\${name}${args}`, 'user-defined', [], -1, { name, args }, vscode.CompletionItemKind.Function);
        cmd.documentation = '`' + name + '`';
        let argTabs = args;
        let index = 0;
        while (argTabs.includes('[]')) {
            argTabs = argTabs.replace('[]', '[${' + (index + 1) + '}]');
            index++;
        }
        while (argTabs.includes('{}')) {
            argTabs = argTabs.replace('{}', '{${' + (index + 1) + '}}');
            index++;
        }
        cmd.insertText = new vscode.SnippetString(name + argTabs);
        cmd.filterText = name;
        if (isTriggerSuggestNeeded(name)) {
            cmd.command = { title: 'Post-Action', command: 'editor.action.triggerSuggest' };
        }
        cmds.push(cmd);
        data.definedCmds.set(cmd.signatureAsString(), {
            filePath,
            location: new vscode.Location(vscode.Uri.file(filePath), new vscode.Position((node.position?.start.line ?? 1) - 1, (node.position?.start.column ?? 1) - 1))
        });
        defined.add(cmd.signatureAsString());
    }
    if ('content' in node && typeof node.content !== 'string') {
        for (const subNode of node.content) {
            cmds = [...cmds, ...parseAst(subNode, filePath, defined)];
        }
    }
    return cmds;
}
function parseContent(content, filePath) {
    const cmdInPkg = [];
    const packages = lw_1.lw.completion.usepackage.getAll('latex-expl3');
    Object.entries(packages).forEach(([packageName, options]) => {
        provideCmdInPkg(packageName, options, cmdInPkg);
    });
    const cmdReg = /\\([a-zA-Z@_]+(?::[a-zA-Z]*)?\*?)({[^{}]*})?({[^{}]*})?({[^{}]*})?/g;
    const cmds = [];
    const defined = new Set();
    let explSyntaxOn = false;
    while (true) {
        const result = cmdReg.exec(content);
        if (result === null) {
            break;
        }
        if (result[1] === 'ExplSyntaxOn') {
            explSyntaxOn = true;
            continue;
        }
        else if (result[1] === 'ExplSyntaxOff') {
            explSyntaxOn = false;
            continue;
        }
        if (!explSyntaxOn) {
            const len = result[1].search(/[_:]/);
            if (len > -1) {
                result[1] = result[1].slice(0, len);
            }
        }
        const args = '{}'.repeat(result.length - 1);
        const cmd = new completerutils_1.CmdEnvSuggestion(`\\${result[1]}${args}`, cmdInPkg.find(candidate => candidate.signatureAsString() === result[1] + args)?.packageName ?? '', [], -1, { name: result[1], args }, vscode.CompletionItemKind.Function);
        cmd.documentation = '`' + result[1] + '`';
        cmd.insertText = new vscode.SnippetString(result[1] + (result[2] ? '{${1}}' : '') + (result[3] ? '{${2}}' : '') + (result[4] ? '{${3}}' : ''));
        cmd.filterText = result[1];
        if (isTriggerSuggestNeeded(result[1])) {
            cmd.command = { title: 'Post-Action', command: 'editor.action.triggerSuggest' };
        }
        if (!defined.has(cmd.signatureAsString())) {
            cmds.push(cmd);
            defined.add(cmd.signatureAsString());
        }
    }
    const newCommandReg = /\\(?:(?:(?:re|provide)?(?:new)?command)|(?:DeclarePairedDelimiter(?:X|XPP)?)|DeclareMathOperator)\*?{?\\(\w+)}?(?:\[([1-9])\])?/g;
    while (true) {
        const result = newCommandReg.exec(content);
        if (result === null) {
            break;
        }
        let tabStops = '';
        let args = '';
        if (result[2]) {
            const numArgs = parseInt(result[2]);
            for (let i = 1; i <= numArgs; ++i) {
                tabStops += '{${' + i + '}}';
                args += '{}';
            }
        }
        const cmd = new completerutils_1.CmdEnvSuggestion(`\\${result[1]}${args}`, 'user-defined', [], -1, { name: result[1], args }, vscode.CompletionItemKind.Function);
        cmd.documentation = '`' + result[1] + '`';
        cmd.insertText = new vscode.SnippetString(result[1] + tabStops);
        cmd.filterText = result[1];
        if (!defined.has(cmd.signatureAsString())) {
            cmds.push(cmd);
            defined.add(cmd.signatureAsString());
        }
        data.definedCmds.set(result[1], {
            filePath,
            location: new vscode.Location(vscode.Uri.file(filePath), new vscode.Position(content.substring(0, result.index).split('\n').length - 1, 0))
        });
    }
    return cmds;
}
function entryCmdToCompletion(item, packageName, postAction) {
    const suggestion = new completerutils_1.CmdEnvSuggestion(`\\${item.name}${item.arg?.format ?? ''}`, packageName || 'latex', item.arg?.keys ?? [], item.arg?.keyPos ?? -1, { name: item.name, args: item.arg?.format ?? '' }, vscode.CompletionItemKind.Function, item.if, item.unusual);
    if (item.arg?.snippet) {
        // Wrap the selected text when there is a single placeholder
        if (!(item.arg.snippet.match(/\$\{?2/) || (item.arg.snippet.match(/\$\{?0/) && item.arg.snippet.match(/\$\{?1/)))) {
            item.arg.snippet = item.arg.snippet.replace(/\$1|\$\{1\}/, '$${1:$${TM_SELECTED_TEXT}}').replace(/\$\{1:([^$}]+)\}/, '$${1:$${TM_SELECTED_TEXT:$1}}');
        }
        suggestion.insertText = new vscode.SnippetString(item.arg.snippet);
    }
    else {
        suggestion.insertText = item.name;
    }
    suggestion.filterText = item.name + (item.arg?.format ?? '') + (item.detail ?? '');
    suggestion.detail = item.detail ?? (item.arg?.snippet ? `\\${item.arg?.snippet?.replace(/\$\{\d+:([^$}]*)\}/g, '$1')}` : `\\${item.name}`);
    suggestion.documentation = item.doc ?? `Macro \\${item.name}${item.arg?.format ?? ''}.`;
    if (packageName) {
        suggestion.documentation += ` From package: ${packageName}.`;
    }
    suggestion.sortText = (item.name + (item.arg?.format ?? ''))
        .replace(/([a-z])/g, '$10').toLowerCase()
        .replaceAll('{', '0')
        .replaceAll('[', '1')
        .replace(/^(.+?)\(/g, '$12') // Skip \(
        .replaceAll('|', '3')
        .replaceAll('*', '9');
    if (postAction) {
        suggestion.command = { title: 'Post-Action', command: postAction };
    }
    else if (isTriggerSuggestNeeded(item.name)) {
        // Automatically trigger completion if the macro is for citation, filename, reference or glossary
        suggestion.command = { title: 'Post-Action', command: 'editor.action.triggerSuggest' };
    }
    return suggestion;
}
function setPackageCmds(packageName, macros) {
    data.packageCmds.set(packageName, macros.map(m => entryCmdToCompletion(m, packageName)));
}
function getPackageCmds(packageName) {
    return data.packageCmds.get(packageName) || [];
}
function provideCmdInPkg(packageName, options, suggestions) {
    const defined = new Set();
    const configuration = vscode.workspace.getConfiguration('latex-workshop');
    const useOptionalArgsEntries = configuration.get('intellisense.optionalArgsEntries.enabled');
    // Load macro in pkg
    lw_1.lw.completion.usepackage.load(packageName);
    // No package macro defined
    const pkgCmds = data.packageCmds.get(packageName);
    if (!pkgCmds || pkgCmds.length === 0) {
        return;
    }
    const unusual = configuration.get('intellisense.package.unusual');
    // Insert macros
    pkgCmds.forEach(cmd => {
        if (!useOptionalArgsEntries && cmd.hasOptionalArgs()) {
            return;
        }
        if (!defined.has(cmd.signatureAsString())) {
            if (cmd.ifCond && !options.includes(cmd.ifCond)) {
                return;
            }
            if (cmd.unusual && !unusual) {
                return;
            }
            suggestions.push(cmd);
            defined.add(cmd.signatureAsString());
        }
    });
}
//# sourceMappingURL=macro.js.map