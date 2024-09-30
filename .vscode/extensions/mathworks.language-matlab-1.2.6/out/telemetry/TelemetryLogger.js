"use strict";
// Copyright 2023-2024 The MathWorks, Inc.
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const vscode_1 = require("vscode");
const PRODUCT = 'ML_VS_CODE';
const APPLICATION_NAME = 'MATLAB_EXTENSION_FOR_VSCODE';
const APPLICATION_KEY = 'OWY3N2FkZTMtYWU1My00MjU3LThjZTktMzFmMTAyYjM0Njc5';
const ENDPOINT = 'https://udc-service.mathworks.com/udc/service/v1/events';
class TelemetryLogger {
    constructor(extensionVersion) {
        this.extensionVersion = extensionVersion;
    }
    logEvent(event) {
        if (this.shouldLogTelemetry(event)) {
            this.sendEvent(event);
        }
    }
    shouldLogTelemetry(event) {
        var _a;
        if (!vscode_1.env.isTelemetryEnabled) {
            // Never log when VS Code's general telemetry is disabled
            return false;
        }
        if (event.eventKey === 'ML_VS_CODE_SETTING_CHANGE') {
            // Do log when the `matlab.telemetry` setting changes
            return event.data.setting_name === 'telemetry';
        }
        // Otherwise, adhere to the `matlab.telemetry` setting
        const configuration = vscode_1.workspace.getConfiguration('MATLAB');
        return (_a = configuration.get('telemetry')) !== null && _a !== void 0 ? _a : true;
    }
    sendEvent(event) {
        const eventData = {
            logDDUXData: {
                product: PRODUCT,
                keyValues: event.data
            }
        };
        const eventDataString = JSON.stringify(eventData);
        const eventEntry = {
            sessionKey: vscode_1.env.sessionId,
            eventKey: event.eventKey,
            eventDate: this.getCurrentDateString(),
            eventData: eventDataString
        };
        const message = {
            Event: [eventEntry]
        };
        (0, node_fetch_1.default)(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-mw-udc-client-version': '1.0',
                'x-mw-udc-application-name': APPLICATION_NAME,
                'x-mw-udc-application-version': this.extensionVersion,
                'x-mw-authentication': Buffer.from(APPLICATION_KEY, 'base64').toString()
            },
            body: JSON.stringify(message)
        }).then(response => {
            if (!response.ok) {
                console.error(`Telemetry post failed, code = ${response.status} (${response.statusText})`);
            }
        }).catch(error => {
            console.error('Telemetry post error: ', error);
        });
    }
    getCurrentDateString() {
        return new Date().toISOString().slice(0, 23); // Slice off trailing 'Z'
    }
}
exports.default = TelemetryLogger;
//# sourceMappingURL=TelemetryLogger.js.map