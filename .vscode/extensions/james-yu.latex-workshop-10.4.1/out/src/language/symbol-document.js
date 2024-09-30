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
exports.DocSymbolProvider = void 0;
const vscode = __importStar(require("vscode"));
const types_1 = require("../types");
const bibtex_1 = require("../outline/structure/bibtex");
const latex_1 = require("../outline/structure/latex");
const doctex_1 = require("../outline/structure/doctex");
class DocSymbolProvider {
    async provideDocumentSymbols(document) {
        if (document.languageId === 'bibtex') {
            return (0, bibtex_1.buildBibTeX)(document).then((sections) => this.sectionToSymbols(sections));
        }
        else if (document.languageId === 'doctex') {
            return (0, doctex_1.construct)(document).then((sections) => this.sectionToSymbols(sections));
        }
        if (document.uri.scheme !== 'file') {
            return [];
        }
        const sections = await (0, latex_1.construct)(document.fileName, false);
        return this.sectionToSymbols(sections);
    }
    sectionToKind(section) {
        if (section.type === types_1.TeXElementType.Section || section.type === types_1.TeXElementType.SectionAst) {
            return vscode.SymbolKind.Struct;
        }
        if (section.type === types_1.TeXElementType.Environment) {
            return vscode.SymbolKind.Package;
        }
        if (section.type === types_1.TeXElementType.Macro) {
            return vscode.SymbolKind.Number;
        }
        if (section.type === types_1.TeXElementType.SubFile) {
            return vscode.SymbolKind.File;
        }
        if (section.type === types_1.TeXElementType.BibItem) {
            return vscode.SymbolKind.Class;
        }
        if (section.type === types_1.TeXElementType.BibField) {
            return vscode.SymbolKind.Constant;
        }
        return vscode.SymbolKind.String;
    }
    sectionToSymbols(sections) {
        const symbols = [];
        sections.forEach(section => {
            const range = new vscode.Range(section.lineFr, 0, section.lineTo, 65535);
            const symbol = new vscode.DocumentSymbol(section.label || 'empty', '', this.sectionToKind(section), range, range);
            symbols.push(symbol);
            if (section.children.length > 0) {
                symbol.children = this.sectionToSymbols(section.children);
            }
        });
        return symbols;
    }
}
exports.DocSymbolProvider = DocSymbolProvider;
//# sourceMappingURL=symbol-document.js.map