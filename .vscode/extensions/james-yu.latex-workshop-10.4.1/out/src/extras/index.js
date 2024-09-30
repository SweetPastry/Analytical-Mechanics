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
exports.extra = void 0;
const counter_1 = require("./counter");
const cleaner_1 = require("./cleaner");
const texdoc_1 = require("./texdoc");
const texroot_1 = require("./texroot");
const section_1 = require("./section");
const commands = __importStar(require("./activity-bar"));
const snippet = __importStar(require("./snippet-view"));
exports.extra = {
    count: counter_1.count,
    clean: cleaner_1.clean,
    texdoc: texdoc_1.texdoc,
    texroot: texroot_1.texroot,
    section: section_1.section,
    commands,
    snippet
};
//# sourceMappingURL=index.js.map