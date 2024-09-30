"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkspaceState = exports.initWorkspaceState = exports.WorkspaceState = void 0;
const KEYS = {
    WORKSPACE_IS_TRUSTED: 'WORKSPACE_IS_TRUSTED',
};
class WorkspaceState {
    constructor(state) {
        this.state = state;
    }
    getWorkspaceIsTrusted() {
        return this.state.get(KEYS.WORKSPACE_IS_TRUSTED);
    }
    updateWorkspaceIsTrusted(value) {
        return this.state.update(KEYS.WORKSPACE_IS_TRUSTED, value);
    }
    reset() {
        let result = Promise.resolve();
        for (const key of Object.keys(KEYS)) {
            result = result.then(() => this.state.update(key, undefined));
        }
        return result;
    }
}
exports.WorkspaceState = WorkspaceState;
let workspaceState;
function initWorkspaceState(state) {
    workspaceState = new WorkspaceState(state);
}
exports.initWorkspaceState = initWorkspaceState;
function getWorkspaceState() {
    if (workspaceState === undefined) {
        throw new Error('workspaceState is not initialized');
    }
    return workspaceState;
}
exports.getWorkspaceState = getWorkspaceState;
//# sourceMappingURL=state.js.map