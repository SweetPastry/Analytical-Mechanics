"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processString = exports.ErrorCode = void 0;
const child_process = require("child_process");
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["Cancel"] = 0] = "Cancel";
    ErrorCode[ErrorCode["BufferLimitExceed"] = 1] = "BufferLimitExceed";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
function processString(cmd, args, opt, token, input) {
    return new Promise((resolve, reject) => {
        let proc = child_process.execFile(cmd, args, opt, (error, stdout, stderr) => {
            if (error != null && error.message === "stdout maxBuffer exceeded.") {
                reject({
                    errorCode: ErrorCode.BufferLimitExceed,
                    result: { error, stdout, stderr }
                });
            }
            else {
                resolve({ error, stdout, stderr });
            }
        });
        proc.stdin.end(input);
        token.onCancellationRequested(() => {
            process.nextTick(() => proc.kill());
            reject({
                errorCode: ErrorCode.Cancel
            });
        });
    });
}
exports.processString = processString;
//# sourceMappingURL=execution.js.map