"use strict";
// Copyright 2022 - 2024 The MathWorks, Inc.
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
exports.deactivate = exports.sendConnectionActionNotification = exports.activate = exports.connectionStatusNotification = exports.CONNECTION_STATUS_LABELS = void 0;
const path = require("path");
const vscode = require("vscode");
const node_1 = require("vscode-languageclient/node");
const NotificationConstants_1 = require("./NotificationConstants");
const TelemetryLogger_1 = require("./telemetry/TelemetryLogger");
const MVM_1 = require("./commandwindow/MVM");
const TerminalService_1 = require("./commandwindow/TerminalService");
const Notifications_1 = require("./Notifications");
const ExecutionCommandProvider_1 = require("./commandwindow/ExecutionCommandProvider");
const DeprecationPopupService_1 = require("./DeprecationPopupService");
let client;
const OPEN_SETTINGS_ACTION = 'workbench.action.openSettings';
const MATLAB_INSTALL_PATH_SETTING = 'matlab.installPath';
exports.CONNECTION_STATUS_LABELS = {
    CONNECTED: 'MATLAB: Connected',
    NOT_CONNECTED: 'MATLAB: Not Connected',
    CONNECTING: 'MATLAB: Establishing Connection'
};
const CONNECTION_STATUS_COMMAND = 'matlab.changeMatlabConnection';
let telemetryLogger;
let deprecationPopupService;
let mvm;
let terminalService;
let executionCommandProvider;
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        // Initialize telemetry logger
        telemetryLogger = new TelemetryLogger_1.default(context.extension.packageJSON.version);
        telemetryLogger.logEvent({
            eventKey: 'ML_VS_CODE_ENVIRONMENT',
            data: {
                machine_hash: vscode.env.machineId,
                locale: vscode.env.language,
                os_platform: process.platform,
                vs_code_version: vscode.version
            }
        });
        // Set up status bar indicator
        exports.connectionStatusNotification = vscode.window.createStatusBarItem();
        exports.connectionStatusNotification.text = exports.CONNECTION_STATUS_LABELS.NOT_CONNECTED;
        exports.connectionStatusNotification.command = CONNECTION_STATUS_COMMAND;
        exports.connectionStatusNotification.show();
        context.subscriptions.push(exports.connectionStatusNotification);
        context.subscriptions.push(vscode.commands.registerCommand(CONNECTION_STATUS_COMMAND, () => handleChangeMatlabConnection()));
        // Set up langauge server
        const serverModule = context.asAbsolutePath(path.join('server', 'out', 'index.js'));
        const args = getServerArgs(context);
        const serverOptions = {
            run: {
                module: serverModule,
                transport: node_1.TransportKind.ipc,
                args
            },
            debug: {
                module: serverModule,
                transport: node_1.TransportKind.ipc,
                options: {
                    // --inspect=6009: runs the server in Node's Inspector mode so
                    // Visual Studio® Code can attach to the server for debugging
                    execArgv: ['--nolazy', '--inspect=6009']
                },
                args
            }
        };
        // Options to control the language client
        const clientOptions = {
            // Register the server for plain text documents
            documentSelector: ['matlab']
        };
        // Create and start the language client
        client = new node_1.LanguageClient('matlabls', 'MATLAB Language Server', serverOptions, clientOptions);
        // Set up notification listeners
        client.onNotification(Notifications_1.default.MatlabConnectionServerUpdate, (data) => handleConnectionStatusChange(data));
        client.onNotification(Notifications_1.default.MatlabLaunchFailed, () => handleMatlabLaunchFailed());
        client.onNotification(Notifications_1.default.MatlabFeatureUnavailable, () => handleFeatureUnavailable());
        client.onNotification(Notifications_1.default.MatlabFeatureUnavailableNoMatlab, () => handleFeatureUnavailableWithNoMatlab());
        client.onNotification(Notifications_1.default.LogTelemetryData, (data) => handleTelemetryReceived(data));
        mvm = new MVM_1.default(client);
        terminalService = new TerminalService_1.default(client, mvm);
        executionCommandProvider = new ExecutionCommandProvider_1.default(mvm, terminalService, telemetryLogger);
        context.subscriptions.push(vscode.commands.registerCommand('matlab.runFile', () => __awaiter(this, void 0, void 0, function* () { return yield executionCommandProvider.handleRunFile(); })));
        context.subscriptions.push(vscode.commands.registerCommand('matlab.runSelection', () => __awaiter(this, void 0, void 0, function* () { return yield executionCommandProvider.handleRunSelection(); })));
        context.subscriptions.push(vscode.commands.registerCommand('matlab.interrupt', () => executionCommandProvider.handleInterrupt()));
        context.subscriptions.push(vscode.commands.registerCommand('matlab.openCommandWindow', () => __awaiter(this, void 0, void 0, function* () { return yield terminalService.openTerminalOrBringToFront(); })));
        context.subscriptions.push(vscode.commands.registerCommand('matlab.addFolderToPath', (uri) => __awaiter(this, void 0, void 0, function* () { return yield executionCommandProvider.handleAddFolderToPath(uri); })));
        context.subscriptions.push(vscode.commands.registerCommand('matlab.addFolderAndSubfoldersToPath', (uri) => __awaiter(this, void 0, void 0, function* () { return yield executionCommandProvider.handleAddFolderAndSubfoldersToPath(uri); })));
        context.subscriptions.push(vscode.commands.registerCommand('matlab.changeDirectory', (uri) => __awaiter(this, void 0, void 0, function* () { return yield executionCommandProvider.handleChangeDirectory(uri); })));
        deprecationPopupService = new DeprecationPopupService_1.default(context);
        deprecationPopupService.initialize(client);
        yield client.start();
    });
}
exports.activate = activate;
/**
 * Handles user input about whether to connect or disconnect from MATLAB®
 */
function handleChangeMatlabConnection() {
    void vscode.window.showQuickPick(['Connect to MATLAB', 'Disconnect from MATLAB'], {
        placeHolder: 'Change MATLAB Connection'
    }).then(choice => {
        if (choice == null) {
            return;
        }
        if (choice === 'Connect to MATLAB') {
            sendConnectionActionNotification('connect');
        }
        else if (choice === 'Disconnect from MATLAB') {
            sendConnectionActionNotification('disconnect');
            terminalService.closeTerminal();
        }
    });
}
/**
 * Handles the notifiaction that the connection to MATLAB has changed (either has connected,
 * disconnected, or is in the process of connecting)
 *
 * @param data The notification data
 */
function handleConnectionStatusChange(data) {
    if (data.connectionStatus === 'connected') {
        exports.connectionStatusNotification.text = exports.CONNECTION_STATUS_LABELS.CONNECTED;
    }
    else if (data.connectionStatus === 'disconnected') {
        terminalService.closeTerminal();
        if (exports.connectionStatusNotification.text === exports.CONNECTION_STATUS_LABELS.CONNECTED) {
            const message = NotificationConstants_1.default.MATLAB_CLOSED.message;
            const options = NotificationConstants_1.default.MATLAB_CLOSED.options;
            vscode.window.showWarningMessage(message, ...options).then(choice => {
                if (choice != null) {
                    // Selected to restart MATLAB
                    telemetryLogger.logEvent({
                        eventKey: 'ML_VS_CODE_ACTIONS',
                        data: {
                            action_type: 'restartMATLAB',
                            result: ''
                        }
                    });
                    sendConnectionActionNotification('connect');
                }
            }, reject => console.error(reject));
        }
        exports.connectionStatusNotification.text = exports.CONNECTION_STATUS_LABELS.NOT_CONNECTED;
    }
    else if (data.connectionStatus === 'connecting') {
        exports.connectionStatusNotification.text = exports.CONNECTION_STATUS_LABELS.CONNECTING;
    }
}
/**
 * Handles the notification that MATLAB failed to launch successfully. This most likely indicates that
 * either MATLAB is not installed or the installPath setting is not configured correctly.
 */
function handleMatlabLaunchFailed() {
    var _a;
    const message = NotificationConstants_1.default.MATLAB_LAUNCH_FAILED.message;
    const options = NotificationConstants_1.default.MATLAB_LAUNCH_FAILED.options;
    const url = 'https://www.mathworks.com/products/get-matlab.html';
    terminalService.closeTerminal();
    const configuration = vscode.workspace.getConfiguration('MATLAB');
    const shouldShowPopup = (_a = configuration.get('showFeatureNotAvailableError')) !== null && _a !== void 0 ? _a : true;
    if (shouldShowPopup) {
        vscode.window.showErrorMessage(message, ...options).then(choice => {
            switch (choice) {
                case options[0]: // Get MATLAB
                    void vscode.env.openExternal(vscode.Uri.parse(url));
                    break;
                case options[1]: // Open settings
                    void vscode.commands.executeCommand(OPEN_SETTINGS_ACTION, MATLAB_INSTALL_PATH_SETTING);
                    break;
                case options[2]: // Do not show again
                    // Selected to not show again
                    void configuration.update('showFeatureNotAvailableError', false, true);
                    break;
            }
        }, reject => console.error(reject));
    }
}
/**
 * Handles the notification that a triggered feature is unavailable without MATLAB running
 */
function handleFeatureUnavailable() {
    var _a;
    const message = NotificationConstants_1.default.FEATURE_UNAVAILABLE.message;
    const options = NotificationConstants_1.default.FEATURE_UNAVAILABLE.options;
    terminalService.closeTerminal();
    const configuration = vscode.workspace.getConfiguration('MATLAB');
    const shouldShowPopup = (_a = configuration.get('showFeatureNotAvailableError')) !== null && _a !== void 0 ? _a : true;
    if (shouldShowPopup) {
        vscode.window.showErrorMessage(message, ...options).then(choice => {
            switch (choice) {
                case options[0]: // Get MATLAB
                    // Selected to start MATLAB
                    sendConnectionActionNotification('connect');
                    break;
                case options[1]: // Do not show again
                    // Selected to not show again
                    void configuration.update('showFeatureNotAvailableError', false, true);
                    break;
            }
        }, reject => console.error(reject));
    }
}
/**
 * Handles the notification that a triggered feature is unavailable without MATLAB running,
 * and MATLAB is also unavailable on the system.
 */
function handleFeatureUnavailableWithNoMatlab() {
    var _a;
    const message = NotificationConstants_1.default.FEATURE_UNAVAILABLE_NO_MATLAB.message;
    const options = NotificationConstants_1.default.FEATURE_UNAVAILABLE_NO_MATLAB.options;
    const url = 'https://www.mathworks.com/products/get-matlab.html';
    terminalService.closeTerminal();
    const configuration = vscode.workspace.getConfiguration('MATLAB');
    const shouldShowPopup = (_a = configuration.get('showFeatureNotAvailableError')) !== null && _a !== void 0 ? _a : true;
    if (shouldShowPopup) {
        vscode.window.showErrorMessage(message, ...options).then(choice => {
            switch (choice) {
                case options[0]: // Get MATLAB
                    void vscode.env.openExternal(vscode.Uri.parse(url));
                    break;
                case options[1]: // Open settings
                    void vscode.commands.executeCommand(OPEN_SETTINGS_ACTION, MATLAB_INSTALL_PATH_SETTING);
                    break;
                case options[2]: // Do not show again
                    // Selected to not show again
                    void configuration.update('showFeatureNotAvailableError', false, true);
            }
        }, reject => console.error(reject));
    }
}
function handleTelemetryReceived(event) {
    event.eventKey = `ML_VS_CODE_${event.eventKey}`;
    telemetryLogger.logEvent(event);
}
/**
 * Gets the arguments with which to launch the language server
 *
 * @param context The extension context
 * @returns An array of arguments
 */
function getServerArgs(context) {
    var _a, _b, _c;
    const configuration = vscode.workspace.getConfiguration('MATLAB');
    const args = [
        `--matlabInstallPath=${(_a = configuration.get('installPath')) !== null && _a !== void 0 ? _a : ''}`,
        `--matlabConnectionTiming=${(_b = configuration.get('launchMatlab')) !== null && _b !== void 0 ? _b : 'onStart'}`
    ];
    if ((_c = configuration.get('indexWorkspace')) !== null && _c !== void 0 ? _c : false) {
        args.push('--indexWorkspace');
    }
    return args;
}
/**
 * Sends notification to language server to instruct it to either connect to or disconnect from MATLAB.
 * @param connectionAction The action - either 'connect' or 'disconnect'
 */
function sendConnectionActionNotification(connectionAction) {
    void client.sendNotification(Notifications_1.default.MatlabConnectionClientUpdate, {
        connectionAction
    });
}
exports.sendConnectionActionNotification = sendConnectionActionNotification;
// this method is called when your extension is deactivated
function deactivate() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.stop();
        void client.dispose();
    });
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map