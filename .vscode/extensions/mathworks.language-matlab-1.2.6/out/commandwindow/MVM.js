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
exports.MatlabState = void 0;
const Utilities_1 = require("./Utilities");
const Notifications_1 = require("../Notifications");
/**
 * The current state of MATLAB
 */
var MatlabState;
(function (MatlabState) {
    MatlabState["DISCONNECTED"] = "disconnected";
    MatlabState["READY"] = "ready";
    MatlabState["BUSY"] = "busy";
})(MatlabState = exports.MatlabState || (exports.MatlabState = {}));
/**
 * A clientside implementation of MATLAB
 */
class MVMImpl {
    constructor(notifier) {
        this._requestMap = {};
        this._stateObservers = [];
        this._currentState = MatlabState.DISCONNECTED;
        this._notifier = notifier;
        this._notifier.onNotification(Notifications_1.default.MVMEvalComplete, this._handleEvalResponse.bind(this));
        this._notifier.onNotification(Notifications_1.default.MVMFevalComplete, this._handleFevalResponse.bind(this));
        this._notifier.onNotification(Notifications_1.default.MVMStateChange, this._handleMatlabStateChange.bind(this));
        this._notifier.onNotification(Notifications_1.default.MVMText, (data) => {
            this.onOutput(data);
        });
        this._notifier.onNotification(Notifications_1.default.MVMClc, () => { this.onClc(); });
        this._currentReadyPromise = (0, Utilities_1.createResolvablePromise)();
        this._pendingUserEvals = 0;
    }
    /**
     *
     * @returns a promise that is resolved when MATLAB is connected an available
     */
    getReadyPromise() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._currentReadyPromise;
        });
    }
    /**
     *
     * @returns The current state of MATLAB
     */
    getMatlabState() {
        if (this._currentState === MatlabState.DISCONNECTED) {
            return this._currentState;
        }
        return this._pendingUserEvals > 0 ? MatlabState.BUSY : MatlabState.READY;
    }
    _handleMatlabStateChange(newState) {
        const oldState = this._currentState;
        this._currentState = MatlabState[newState.toUpperCase()];
        if (this._currentState === MatlabState.DISCONNECTED) {
            this._handleDisconnection();
        }
        this._stateObservers.forEach((observer) => {
            observer(oldState, this._currentState);
        }, this);
        if (this._currentState !== MatlabState.DISCONNECTED) {
            this._pendingUserEvals = 0;
            this._currentReadyPromise.resolve();
        }
    }
    _handleDisconnection() {
        const oldPromise = this._currentReadyPromise;
        this._currentReadyPromise = (0, Utilities_1.createResolvablePromise)();
        oldPromise.reject();
        const requestMap = this._requestMap;
        this._requestMap = {};
        for (const requestIdToCancel in requestMap) {
            requestMap[requestIdToCancel].promise.reject();
        }
        this._pendingUserEvals = 0;
    }
    /**
     * Allow listening to MATLAB state changes
     * @param observer
     */
    addStateChangeListener(observer) {
        this._stateObservers.push(observer);
    }
    eval(command, isUserEval = true) {
        const requestId = this._getNewRequestId();
        const promise = (0, Utilities_1.createResolvablePromise)();
        this._requestMap[requestId] = {
            promise,
            isUserEval
        };
        if (isUserEval) {
            this._pendingUserEvals++;
        }
        this._currentReadyPromise.then(() => {
            this._notifier.sendNotification(Notifications_1.default.MVMEvalRequest, {
                requestId,
                command
            });
        }, () => {
            // Ignored
        });
        return promise;
    }
    /**
     * Evaluate the given function
     * @param functionName The function to run
     * @param nargout the number of output arguments to request
     * @param args The arguments of the function
     * @returns A promise resolved when the feval completes
     */
    feval(functionName, nargout, args) {
        const requestId = this._getNewRequestId();
        const promise = (0, Utilities_1.createResolvablePromise)();
        this._requestMap[requestId] = {
            promise,
            isUserEval: false
        };
        this._currentReadyPromise.then(() => {
            this._notifier.sendNotification(Notifications_1.default.MVMFevalRequest, {
                requestId,
                functionName,
                nargout,
                args
            });
        }, () => {
            // Ignored
        });
        return promise;
    }
    /**
     * Interrupt all pending evaluations
     */
    interrupt() {
        this._notifier.sendNotification(Notifications_1.default.MVMInterruptRequest);
    }
    /**
     * Called with output from any requests
     * @param data
     */
    onOutput(data) {
        throw new Error('Method not overridden.');
    }
    /**
     * Called when a clc is run
     */
    onClc() {
        throw new Error('Method not overridden.');
    }
    _handleEvalResponse(message) {
        const obj = this._requestMap[message.requestId];
        if (obj === undefined) {
            return;
        }
        const promise = obj.promise;
        if (this._requestMap[message.requestId].isUserEval) {
            this._pendingUserEvals--;
        }
        promise.resolve();
    }
    _handleFevalResponse(message) {
        const obj = this._requestMap[message.requestId];
        if (obj === undefined) {
            return;
        }
        const promise = obj.promise;
        if (this._requestMap[message.requestId].isUserEval) {
            this._pendingUserEvals--;
        }
        promise.resolve(message.result);
    }
    _getNewRequestId() {
        return Math.random().toString(36).substr(2, 9);
    }
}
exports.default = MVMImpl;
//# sourceMappingURL=MVM.js.map