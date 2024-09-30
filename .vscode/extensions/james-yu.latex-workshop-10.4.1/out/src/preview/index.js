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
exports.preview = exports.server = exports.viewer = void 0;
const hover_1 = require("./hover");
const mathjax_1 = require("./mathjax");
const mathpreview = __importStar(require("./math-preview-panel"));
exports.viewer = __importStar(require("./viewer"));
exports.server = __importStar(require("./server"));
exports.preview = {
    graph2md: hover_1.graph2md,
    provider: hover_1.provider,
    mathjax: {
        ref2svg: hover_1.ref2svg,
        tex2svg: hover_1.tex2svg,
        typeset: mathjax_1.mathjax.typeset
    },
    mathpreview
};
//# sourceMappingURL=index.js.map