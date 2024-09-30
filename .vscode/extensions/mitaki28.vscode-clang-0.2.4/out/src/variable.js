"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolve = void 0;
const vscode = require("vscode");
function resolve(s) {
    return s.replace(/\$\{(.*?)\}/ig, (match, $1) => {
        var _a;
        switch ($1) {
            case "workspaceRoot": {
                if (vscode.workspace.rootPath != null) {
                    return vscode.workspace.rootPath;
                }
                else {
                    vscode.window.showWarningMessage(`${"${workspaceRoot}"} is undefined. Alternatively use cwd (${process.cwd()}).`);
                    return process.cwd();
                }
            }
            case "cwd": {
                return process.cwd();
            }
        }
        if ($1.startsWith("env.")) {
            return (_a = process.env[$1.slice("env.".length)]) !== null && _a !== void 0 ? _a : '';
        }
        vscode.window.showWarningMessage(`configuration variable ${match} is not supported.`);
        return match;
    });
}
exports.resolve = resolve;
//# sourceMappingURL=variable.js.map