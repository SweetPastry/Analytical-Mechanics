"use strict";
// Copyright 2024 The MathWorks, Inc.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
// These values must match the results returned by mdbfileonpath.m in FilePathState.m
var FILE_PATH_STATE;
(function (FILE_PATH_STATE) {
    FILE_PATH_STATE[FILE_PATH_STATE["FILE_NOT_ON_PATH"] = 0] = "FILE_NOT_ON_PATH";
    FILE_PATH_STATE[FILE_PATH_STATE["FILE_WILL_RUN"] = 1] = "FILE_WILL_RUN";
    FILE_PATH_STATE[FILE_PATH_STATE["FILE_SHADOWED_BY_PWD"] = 2] = "FILE_SHADOWED_BY_PWD";
    FILE_PATH_STATE[FILE_PATH_STATE["FILE_SHADOWED_BY_TBX"] = 3] = "FILE_SHADOWED_BY_TBX";
    FILE_PATH_STATE[FILE_PATH_STATE["FILE_SHADOWED_BY_PFILE"] = 4] = "FILE_SHADOWED_BY_PFILE";
    FILE_PATH_STATE[FILE_PATH_STATE["FILE_SHADOWED_BY_MEXFILE"] = 5] = "FILE_SHADOWED_BY_MEXFILE";
    FILE_PATH_STATE[FILE_PATH_STATE["FILE_SHADOWED_BY_MLXFILE"] = 6] = "FILE_SHADOWED_BY_MLXFILE";
    FILE_PATH_STATE[FILE_PATH_STATE["FILE_SHADOWED_BY_MLAPPFILE"] = 7] = "FILE_SHADOWED_BY_MLAPPFILE";
})(FILE_PATH_STATE || (FILE_PATH_STATE = {}));
class ExecutionCommandProvider {
    constructor(mvm, terminalService, telemetryLogger) {
        this._mvm = mvm;
        this._terminalService = terminalService;
        this._telemetryLogger = telemetryLogger;
    }
    /**
     * Handle the run file action
     * @returns
     */
    handleRunFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const editor = vscode.window.activeTextEditor;
            this._telemetryLogger.logEvent({
                eventKey: 'ML_VS_CODE_ACTIONS',
                data: {
                    action_type: 'runFile',
                    result: ''
                }
            });
            // Early return if the editor isn't valid or isn't MATLAB
            if (editor === undefined || editor.document.languageId !== 'matlab') {
                return;
            }
            // Open the terminal and wait for the MVM to be started.
            // This could take a while, so should double check the editor state after this point.
            yield this._terminalService.openTerminalOrBringToFront();
            try {
                yield this._mvm.getReadyPromise();
            }
            catch (e) {
                return;
            }
            // If the editor has been closed or is untitled, return
            if (editor.document.isClosed || editor.document.isUntitled) {
                return;
            }
            // If the editor is dirty, or an untitled document, the save it and notify MATLAB of the change.
            if (editor.document.isDirty) {
                try {
                    yield editor.document.save();
                    const filePath = editor.document.fileName;
                    yield this._mvm.feval('fschange', 0, [filePath]);
                    yield this._mvm.feval('clear', 0, [filePath]);
                }
                catch (e) {
                    return;
                }
            }
            if (editor.document.isUntitled) {
                return;
            }
            const filePath = editor.document.fileName;
            const fileParts = filePath.split(path.sep);
            const filenameWithExtension = fileParts[fileParts.length - 1];
            // Verify that this is an m file.
            if (!filenameWithExtension.endsWith('.m')) {
                return;
            }
            // Extract the command to run the file. That is, the default run configuration.
            const filenameWithoutExtension = filenameWithExtension.substring(0, filenameWithExtension.length - 2);
            let commandToRun = filenameWithoutExtension;
            // Handle the case where the file is in a class folder
            let parentIndex = fileParts.length - 2;
            const parentFolder = fileParts[parentIndex];
            if (parentFolder.startsWith('@')) {
                commandToRun = parentFolder.substring(1) + '.' + commandToRun;
                parentIndex--;
            }
            // Handle MATLAB namespaces by prepending the folder names until the first "+" folder.
            while (parentIndex >= 0) {
                const parentFolder = fileParts[parentIndex];
                if (!parentFolder.startsWith('+')) {
                    break;
                }
                commandToRun = parentFolder.substring(1) + '.' + commandToRun;
                parentIndex--;
            }
            // Check whether the file is runnable, shadowed, etc.
            let mdbfileonpathResult;
            try {
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                mdbfileonpathResult = yield this._mvm.feval('mdbfileonpath', 2, [filePath]);
            }
            catch (e) {
                return;
            }
            if (mdbfileonpathResult.error !== undefined) {
                return;
            }
            const status = mdbfileonpathResult.result[1];
            // Handle the results of the path check
            try {
                switch (status) {
                    case FILE_PATH_STATE.FILE_WILL_RUN:
                        this._terminalService.getCommandWindow().insertCommandForEval(commandToRun);
                        break;
                    case FILE_PATH_STATE.FILE_NOT_ON_PATH:
                    case FILE_PATH_STATE.FILE_SHADOWED_BY_TBX:
                        yield this._handleNotOnPath(filePath, commandToRun);
                        break;
                    case FILE_PATH_STATE.FILE_SHADOWED_BY_PWD:
                        yield this._handleShadowedByPwd(filePath, commandToRun);
                        break;
                    default:
                        void vscode.window.showErrorMessage('Unable to run file as it is shadowed by another file in the same folder.');
                }
            }
            catch (e) {
            }
        });
    }
    /**
     *
     * @param fileParts
     * @param commandToRun
     * @returns
     */
    _handleNotOnPath(filePath, commandToRun) {
        return __awaiter(this, void 0, void 0, function* () {
            const choice = yield vscode.window.showWarningMessage('File is not found in the current folder or on the MATLAB path.', 'Add to Path', 'Change Folder', 'Cancel');
            if (choice === undefined || choice === 'Cancel') {
                return;
            }
            const filePathWithoutFilename = path.dirname(filePath);
            if (choice === 'Add to Path') {
                yield this._mvm.feval('addpath', 0, [filePathWithoutFilename]);
            }
            else {
                yield this._mvm.feval('cd', 0, [filePathWithoutFilename]);
            }
            yield this._terminalService.openTerminalOrBringToFront();
            this._terminalService.getCommandWindow().insertCommandForEval(commandToRun);
        });
    }
    _handleShadowedByPwd(filePath, commandToRun) {
        return __awaiter(this, void 0, void 0, function* () {
            const choice = yield vscode.window.showWarningMessage('File is shadowed by another file in the current folder.', 'Change Folder', 'Cancel');
            if (choice === undefined || choice === 'Cancel') {
                return;
            }
            const filePathWithoutFilename = path.dirname(filePath);
            yield this._mvm.feval('cd', 0, [filePathWithoutFilename]);
            yield this._terminalService.openTerminalOrBringToFront();
            this._terminalService.getCommandWindow().insertCommandForEval(commandToRun);
        });
    }
    /**
     * Implements the run selection action
     * @returns
     */
    handleRunSelection() {
        return __awaiter(this, void 0, void 0, function* () {
            this._telemetryLogger.logEvent({
                eventKey: 'ML_VS_CODE_ACTIONS',
                data: {
                    action_type: 'runSelection',
                    result: ''
                }
            });
            const editor = vscode.window.activeTextEditor;
            if (editor === undefined || editor.document.languageId !== 'matlab') {
                return;
            }
            const text = editor.document.getText(editor.selection);
            yield this._terminalService.openTerminalOrBringToFront();
            try {
                yield this._mvm.getReadyPromise();
            }
            catch (e) {
                return;
            }
            this._terminalService.getCommandWindow().insertCommandForEval(text);
        });
    }
    /**
     * Implements the interrupt action
     */
    handleInterrupt() {
        this._telemetryLogger.logEvent({
            eventKey: 'ML_VS_CODE_ACTIONS',
            data: {
                action_type: 'interrupt',
                result: ''
            }
        });
        this._mvm.interrupt();
    }
    /**
     * Implements the add to path action
     * @param uri The file path that should be added to the MATLAB path
     * @returns
     */
    handleAddFolderToPath(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            this._telemetryLogger.logEvent({
                eventKey: 'ML_VS_CODE_ACTIONS',
                data: {
                    action_type: 'addToPath',
                    result: ''
                }
            });
            yield this._terminalService.openTerminalOrBringToFront();
            try {
                yield this._mvm.getReadyPromise();
            }
            catch (e) {
                return;
            }
            void this._mvm.feval('addpath', 0, [uri.fsPath]);
        });
    }
    handleAddFolderAndSubfoldersToPath(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            this._telemetryLogger.logEvent({
                eventKey: 'ML_VS_CODE_ACTIONS',
                data: {
                    action_type: 'addFolderAndSubfoldersToPath',
                    result: ''
                }
            });
            yield this._terminalService.openTerminalOrBringToFront();
            try {
                yield this._mvm.getReadyPromise();
            }
            catch (e) {
                return;
            }
            // Escape any single quotes in the folder's path
            const escapedPath = uri.fsPath.replace(/'/g, "''");
            const command = `addpath(genpath('${escapedPath}'))`;
            void this._mvm.eval(command);
        });
    }
    /**
     * Implements the MATLAB change directory action
     * @param uri The file path that MATLAB should "cd" to
     * @returns
     */
    handleChangeDirectory(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            this._telemetryLogger.logEvent({
                eventKey: 'ML_VS_CODE_ACTIONS',
                data: {
                    action_type: 'changeDirectory',
                    result: ''
                }
            });
            yield this._terminalService.openTerminalOrBringToFront();
            try {
                yield this._mvm.getReadyPromise();
            }
            catch (e) {
                return;
            }
            void this._mvm.feval('cd', 0, [uri.fsPath]);
        });
    }
}
exports.default = ExecutionCommandProvider;
//# sourceMappingURL=ExecutionCommandProvider.js.map