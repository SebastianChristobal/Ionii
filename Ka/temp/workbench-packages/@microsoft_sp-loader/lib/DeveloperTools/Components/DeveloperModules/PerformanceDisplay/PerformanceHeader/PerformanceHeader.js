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
import { Text } from '@microsoft/sp-core-library';
import PerformanceLegend from './PerformanceLegend/PerformanceLegend';
import styles from './PerformanceHeader.module.scss';
import strings from './../PerformanceDisplay.resx';
var PerformanceHeader =  (function (_super) {
    __extends(PerformanceHeader, _super);
    function PerformanceHeader(props) {
        var _this = _super.call(this, props) || this;
        _this._serverResponse = 0;
        _this._appStart = 0;
        _this._renderPageDuration = 0;
        _this._renderWebparts = 0;
        _this._hasWebParts = false;
        _this._getPerfTimings = _this._getPerfTimings.bind(_this);
        return _this;
    }
    PerformanceHeader.prototype.render = function () {
        this._getPerfTimings();
        var legend = undefined;
        if (this._hasWebParts) {
            legend = React.createElement(PerformanceLegend, null);
        }
        var tableStyle = [styles.headerTable, styles.msThemeLighter].join(' ');
        return (React.createElement("div", null,
            React.createElement("p", { className: styles.hint }, strings.PerformanceDataHint),
            React.createElement("table", { className: tableStyle },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: styles.headerTableRows }, strings.ServerResponseLabel),
                        React.createElement("th", { className: styles.headerTableRows }, strings.AppLoadLabel),
                        React.createElement("th", { className: styles.headerTableRows }, strings.PageRenderLabel),
                        React.createElement("th", { className: styles.headerTableRows }, strings.RenderWebPartsLabel),
                        React.createElement("th", { className: styles.headerTableRows }, strings.TotalRenderTimeLabel))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", { className: styles.headerTableRows }, Text.format(strings.MillisecondsUnitLabel, this._serverResponse)),
                        React.createElement("td", { className: styles.headerTableRows }, Text.format(strings.MillisecondsUnitLabel, this._appStart)),
                        React.createElement("td", { className: styles.headerTableRows }, Text.format(strings.MillisecondsUnitLabel, this._renderPageDuration)),
                        React.createElement("td", { className: styles.headerTableRows }, this._hasWebParts
                            ? Text.format(strings.MillisecondsUnitLabel, this._renderWebparts)
                            : strings.NAPlaceholder),
                        React.createElement("td", { className: styles.headerTableRows }, Text.format(strings.MillisecondsUnitLabel, this.props.overallDuration))))),
            React.createElement("div", null, legend)));
    };
    PerformanceHeader.prototype._getPerfTimings = function () {
        var renderPageStart = Infinity;
        var renderPageEnd = 0;
        var webPartStart = Infinity;
        var webPartEnd = 0;
        this._hasWebParts = false;
        for (var _i = 0, _a = this.props.perfItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === 'w3cResponseEnd') {
                this._serverResponse = item.duration;
            }
            else if (item.id === 'appStart') {
                this._appStart = item.duration;
            }
            else if ((item.id).indexOf('Component') > -1) {
                if (item.startVal < renderPageStart) {
                    renderPageStart = item.startVal;
                }
                if ((item.duration + item.startVal) > (renderPageEnd)) {
                    renderPageEnd = item.duration + item.startVal;
                }
            }
            else if ((item.id).indexOf('WebPart') > -1) {
                this._hasWebParts = true;
                if (item.startVal < webPartStart) {
                    webPartStart = item.startVal;
                }
                if ((item.duration + item.startVal) > (webPartEnd)) {
                    webPartEnd = item.duration + item.startVal;
                }
            }
        }
        this._renderPageDuration = renderPageEnd - renderPageStart;
        this._renderWebparts = webPartEnd - webPartStart;
    };
    return PerformanceHeader;
}(React.Component));
export default PerformanceHeader;
