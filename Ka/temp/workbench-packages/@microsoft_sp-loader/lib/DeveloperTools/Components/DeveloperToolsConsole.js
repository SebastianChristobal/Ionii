var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Pivot, PivotItem, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import DeveloperToolsConsoleStore from './../Stores/DeveloperToolsConsoleStore';
import LoadingOrErrorModule from './DeveloperModules/LoadingOrErrorModule/LoadingOrErrorModule';
import styles from './DeveloperToolsConsole.module.scss';
import strings from './../DeveloperTools.resx';
var DeveloperToolsConsole =  (function (_super) {
    __extends(DeveloperToolsConsole, _super);
    function DeveloperToolsConsole(props) {
        var _this = _super.call(this, props) || this;
        _this._onDrag = function (e) {
            var mouseEvent = e; 
            if (mouseEvent.pageY !== 0) {
                var clientHeight = document.documentElement.clientHeight;
                var height = (clientHeight - mouseEvent.pageY) / clientHeight;
                DeveloperToolsConsoleStore.resizeConsole(height);
            }
        };
        _this._setState = function () {
            _this.setState({
                topPosition: DeveloperToolsConsoleStore.height,
                visible: DeveloperToolsConsoleStore.visible,
                tabs: DeveloperToolsConsoleStore.tabs,
                selectedTabId: DeveloperToolsConsoleStore.selectedTabId
            });
        };
        _this.state = {
            topPosition: DeveloperToolsConsoleStore.height,
            visible: DeveloperToolsConsoleStore.visible,
            tabs: DeveloperToolsConsoleStore.tabs,
            selectedTabId: DeveloperToolsConsoleStore.selectedTabId
        };
        return _this;
    }
    DeveloperToolsConsole.prototype.componentDidMount = function () {
        DeveloperToolsConsoleStore.addListener(this._setState);
    };
    DeveloperToolsConsole.prototype.componentWillUnmount = function () {
        DeveloperToolsConsoleStore.removeListener(this._setState);
    };
    DeveloperToolsConsole.prototype.render = function () {
        var RENDER_NOTHING = null; 
        if (this.state.visible) {
            var tabs = this.state.tabs.map(function (tab, id) {
                return React.createElement(PivotItem, { linkText: tab.title },
                    React.createElement(LoadingOrErrorModule, { tab: tab }));
            });
            return React.createElement("div", { className: styles.container, style: { height: this.state.topPosition * 100 + "%" } },
                React.createElement("div", { className: styles.resizeBar, draggable: true, onDrag: this._onDrag }),
                React.createElement("div", { className: styles.toolsArea },
                    React.createElement(Pivot, { linkSize: PivotLinkSize.normal, linkFormat: PivotLinkFormat.links }, tabs),
                    React.createElement(IconButton, { className: styles.closeButton, iconProps: { iconName: 'Cancel' }, title: strings.closeDeveloperToolsAriaLabel, ariaLabel: strings.closeDeveloperToolsAriaLabel, onClick: function () { return DeveloperToolsConsoleStore.showHideConsole(false); } })));
        }
        else {
            return RENDER_NOTHING;
        }
    };
    return DeveloperToolsConsole;
}(React.Component));
export default DeveloperToolsConsole;
