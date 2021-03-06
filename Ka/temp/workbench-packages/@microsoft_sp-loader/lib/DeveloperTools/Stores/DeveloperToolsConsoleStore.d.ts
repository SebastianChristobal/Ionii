/**
 * @file DeveloperToolsConsoleStore.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
import BaseStore from './BaseStore';
import DeveloperToolsTab from './../Models/DeveloperToolsTab';
export declare class DeveloperToolsConsoleStore extends BaseStore {
    private static _instance;
    static readonly instance: DeveloperToolsConsoleStore;
    readonly height: number;
    readonly visible: boolean;
    readonly selectedTabId: number;
    readonly tabs: DeveloperToolsTab[];
    private _height;
    private _visible;
    private _selectedTabId;
    private _tabs;
    constructor();
    resizeConsole(height: number): void;
    showHideConsole(show: boolean): void;
    registerTab(tab: DeveloperToolsTab): void;
}
declare const _default: DeveloperToolsConsoleStore;
export default _default;
//# sourceMappingURL=DeveloperToolsConsoleStore.d.ts.map