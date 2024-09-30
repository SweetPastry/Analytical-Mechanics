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
exports.texfmt = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const lw_1 = require("../../lw");
const logger = lw_1.lw.log('Format', 'tex-fmt');
exports.texfmt = {
    formatDocument
};
async function formatDocument(document, range) {
    const config = vscode.workspace.getConfiguration('latex-workshop');
    const program = config.get('formatting.tex-fmt.path');
    const args = ['--stdin'];
    if (config.get('formatting.tex-fmt.doNotWrap')) {
        args.push('--keep');
    }
    const process = lw_1.lw.external.spawn(program, args, { cwd: path.dirname(document.uri.fsPath) });
    let stdout = '';
    process.stdout?.on('data', (msg) => {
        stdout += msg;
    });
    const promise = new Promise(resolve => {
        process.on('error', err => {
            logger.logError(`Failed to run ${program}`, err);
            logger.showErrorMessage(`Failed to run ${program}. See extension log for more information.`);
            resolve(undefined);
        });
        process.on('exit', code => {
            if (code !== 0) {
                logger.log(`${program} returned ${code} .`);
                logger.showErrorMessage(`${program} returned ${code} . Be cautious on the edits.`);
                resolve(undefined);
            }
            // tex-fmt adds an extra newline at the end
            if (stdout.endsWith('\n\n')) {
                stdout = stdout.slice(0, -1);
            }
            logger.log(`Formatted using ${program} .`);
            resolve(vscode.TextEdit.replace(range ?? document.validateRange(new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE)), stdout));
        });
    });
    process.stdin?.write(document.getText(range));
    process.stdin?.end();
    const edits = await promise;
    return edits;
}
//# sourceMappingURL=tex-fmt.js.map