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
const Utilities_1 = require("./Utilities");
const CommandWindow_1 = require("./CommandWindow");
const Notifications_1 = require("../Notifications");
/**
 * Manages the MATLAB VS Code terminal ensuring that only a single one is open at a time
 */
class TerminalService {
    constructor(client, mvm) {
        this._mvm = mvm;
        this._client = client;
        this._commandWindow = new CommandWindow_1.default(mvm);
        this._terminalOptions = {
            name: 'MATLAB',
            pty: this._commandWindow,
            isTransient: true
        };
        vscode.window.onDidOpenTerminal((terminal) => {
            if (terminal.creationOptions.name === 'MATLAB') {
                this._currentMatlabTerminal = terminal;
                client.sendNotification(Notifications_1.default.MatlabRequestInstance);
                this._currentMatlabTerminal.show();
                setTimeout(() => {
                    if (this._terminalCreationPromise != null) {
                        this._terminalCreationPromise.resolve();
                    }
                }, 100);
            }
        });
        vscode.window.onDidCloseTerminal((terminal) => {
            if (terminal === this._currentMatlabTerminal) {
                this._currentMatlabTerminal = undefined;
            }
        });
        vscode.window.registerTerminalProfileProvider('matlab.terminal-profile', new MatlabTerminalProvider(this, this._terminalOptions));
        vscode.window.onDidChangeActiveTerminal(terminal => {
            if ((this._currentMatlabTerminal != null) && terminal === this._currentMatlabTerminal) {
                void vscode.commands.executeCommand('setContext', 'matlab.isActiveTerminal', true);
            }
            else {
                void vscode.commands.executeCommand('setContext', 'matlab.isActiveTerminal', false);
            }
        });
        // Required to ensure that Ctrl+C keybinding is handled by vscode and not the terminal itself
        const terminalConfiguration = vscode.workspace.getConfiguration('terminal.integrated');
        const commandsToNotSendToTerminal = terminalConfiguration.get('commandsToSkipShell');
        if ((commandsToNotSendToTerminal != null) && !commandsToNotSendToTerminal.includes('matlab.interrupt')) {
            commandsToNotSendToTerminal.push('matlab.interrupt');
            void terminalConfiguration.update('commandsToSkipShell', commandsToNotSendToTerminal, true);
        }
    }
    /**
     * Opens or brings the MATLAB termianl to the front.
     * @returns resolves when the terminal is visible
     */
    openTerminalOrBringToFront() {
        return __awaiter(this, void 0, void 0, function* () {
            this._client.sendNotification(Notifications_1.default.MatlabRequestInstance);
            if (this._currentMatlabTerminal != null) {
                this._currentMatlabTerminal.show();
            }
            else {
                vscode.window.createTerminal(this._terminalOptions);
                this._terminalCreationPromise = (0, Utilities_1.createResolvablePromise)();
                yield this._terminalCreationPromise;
            }
        });
    }
    /**
     * Close the current MATLAB terminal
     */
    closeTerminal() {
        if (this._currentMatlabTerminal != null) {
            this._currentMatlabTerminal.dispose();
        }
    }
    /**
     * @returns The command window
     */
    getCommandWindow() {
        return this._commandWindow;
    }
}
exports.default = TerminalService;
/**
 * Provides a VS Code terminal window backed by the command window.
 */
class MatlabTerminalProvider {
    constructor(terminalService, terminalOptions) {
        this._terminalService = terminalService;
        this._terminalOptions = terminalOptions;
    }
    provideTerminalProfile(token) {
        this._terminalService.closeTerminal();
        return new vscode.TerminalProfile(this._terminalOptions);
    }
}
//# sourceMappingURL=TerminalService.js.map