"use strict";
// Copyright 2024 The MathWorks, Inc.
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResolvablePromise = void 0;
/**
 * Creates a resolvable promise
 * @returns A resolvable promise
 */
function createResolvablePromise() {
    let res, rej;
    const p = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
    });
    p.resolve = res;
    p.reject = rej;
    return p;
}
exports.createResolvablePromise = createResolvablePromise;
//# sourceMappingURL=Utilities.js.map