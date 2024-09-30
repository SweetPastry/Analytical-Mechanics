"use strict";
// Copyright 2023-2024 The MathWorks, Inc.
Object.defineProperty(exports, "__esModule", { value: true });
var Notification;
(function (Notification) {
    // Connection Status Updates
    Notification["MatlabConnectionClientUpdate"] = "matlab/connection/update/client";
    Notification["MatlabConnectionServerUpdate"] = "matlab/connection/update/server";
    // Errors
    Notification["MatlabLaunchFailed"] = "matlab/launchfailed";
    Notification["MatlabFeatureUnavailable"] = "feature/needsmatlab";
    Notification["MatlabFeatureUnavailableNoMatlab"] = "feature/needsmatlab/nomatlab";
    // MATLAB Version Deprecation
    Notification["MatlabVersionDeprecation"] = "matlab/version/deprecation";
    // Execution
    Notification["MatlabRequestInstance"] = "matlab/request";
    Notification["MVMEvalRequest"] = "evalRequest";
    Notification["MVMEvalComplete"] = "evalRequest";
    Notification["MVMFevalRequest"] = "fevalRequest";
    Notification["MVMFevalComplete"] = "fevalRequest";
    Notification["MVMText"] = "text";
    Notification["MVMClc"] = "clc";
    Notification["MVMInterruptRequest"] = "interruptRequest";
    Notification["MVMStateChange"] = "mvmStateChange";
    // Telemetry
    Notification["LogTelemetryData"] = "telemetry/logdata";
})(Notification || (Notification = {}));
exports.default = Notification;
//# sourceMappingURL=Notifications.js.map