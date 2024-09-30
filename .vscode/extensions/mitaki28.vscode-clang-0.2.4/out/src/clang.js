"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.check = exports.complete = exports.command = exports.getConf = exports.checkInsecureKeys = void 0;
const vscode = require("vscode");
const variable = require("./variable");
const state = require("./state");
const renamedKeyMap = new Map(new Array(["diagnostic.delay", "diagnosticDelay"], ["diagnostic.enable", "enableDiagnostic"], ["completion.enable", "enableCompletion"]));
const insecureKeys = new Set([
    'executable',
    'cflags',
    'cxxflags',
    'objcflags',
]);
function checkInsecureKeys() {
    if (state.getWorkspaceState().getWorkspaceIsTrusted() !== undefined) {
        return Promise.resolve();
    }
    const customInsecureSettings = [];
    for (const key of insecureKeys) {
        if (getConf(key) !== undefined && JSON.stringify(getConf(key)) !== JSON.stringify(vscode.workspace.getConfiguration("clang").get(key))) {
            customInsecureSettings.push(key);
        }
    }
    if (customInsecureSettings.length > 0) {
        return vscode.window.showWarningMessage("Some of workspace-level setting (" + customInsecureSettings.map((s) => "`clang." + s + "`").join(", ") + ") is disabled by default. "
            + "These settings may cause security issue, if you are opening a malicious workspece. "
            + "Do you trust the current workspace and enable these settings? ", { modal: false }, { title: "Yes" }, { title: "No" }, { title: "More Info" }).then((answer) => {
            switch (answer === null || answer === void 0 ? void 0 : answer.title) {
                case "Yes": {
                    state.getWorkspaceState().updateWorkspaceIsTrusted(true);
                    break;
                }
                case "No": {
                    state.getWorkspaceState().updateWorkspaceIsTrusted(false);
                    break;
                }
                case "More Info":
                    vscode.env.openExternal(vscode.Uri.parse(`https://github.com/mitaki28/vscode-clang/blob/master/README.md#Security`));
                    return checkInsecureKeys();
                default:
                // do nothing (keep unanswerd state)
            }
        });
    }
    else {
        return Promise.resolve();
    }
}
exports.checkInsecureKeys = checkInsecureKeys;
function getConf(name) {
    var _a, _b;
    const conf = vscode.workspace.getConfiguration("clang");
    if (renamedKeyMap.has(name)) {
        let deprecatedName = renamedKeyMap.get(name);
        if (conf.has(deprecatedName)) {
            vscode.window.showWarningMessage(`clang.${deprecatedName} is deprecated. Please use ${name} instead.`);
            name = deprecatedName;
        }
    }
    if (!conf.has(name)) {
        throw new Error(`implementation error: ${name} is not defined`);
    }
    if (insecureKeys.has(name) && state.getWorkspaceState().getWorkspaceIsTrusted() !== true) {
        const inspection = conf.inspect(name);
        return ((_b = (_a = inspection.globalLanguageValue) !== null && _a !== void 0 ? _a : inspection.globalValue) !== null && _b !== void 0 ? _b : inspection.defaultValue);
    }
    else {
        return conf.get(name);
    }
}
exports.getConf = getConf;
function command(language, ...options) {
    let cmd = variable.resolve(getConf("executable"));
    let args = [];
    if (language === "cpp") {
        args.push("-x", "c++");
        args.push(...getConf("cxxflags").map(variable.resolve));
    }
    else if (language === "c") {
        args.push("-x", "c");
        args.push(...getConf("cflags").map(variable.resolve));
    }
    else if (language === "objective-c") {
        args.push("-x", "objective-c");
        args.push(...getConf("objcflags").map(variable.resolve));
    }
    args.push(...options);
    return [cmd, args];
}
exports.command = command;
function complete(language, line, char) {
    let args = [];
    args.push("-fsyntax-only");
    args.push("-fparse-all-comments");
    if (getConf("completion.completeMacros")) {
        args.push("-Xclang", "-code-completion-macros");
    }
    args.push("-Xclang", "-code-completion-brief-comments");
    args.push("-Xclang", `-code-completion-at=<stdin>:${line}:${char}`);
    args.push("-");
    return command(language, ...args);
}
exports.complete = complete;
function check(language) {
    return command(language, "-fsyntax-only", "-fno-caret-diagnostics", "-fdiagnostics-print-source-range-info", "-fno-color-diagnostics", "-");
}
exports.check = check;
function version(language) {
    return command(language, "--version");
}
exports.version = version;
//# sourceMappingURL=clang.js.map