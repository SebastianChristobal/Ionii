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
import styles from './PerformanceLegend.module.scss';
import strings from './../../PerformanceDisplay.resx';
var PerformanceLegend =  (function (_super) {
    __extends(PerformanceLegend, _super);
    function PerformanceLegend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PerformanceLegend.prototype.render = function () {
        var legendBlue = [styles.colorSquare, styles.msBlue].join(' ');
        var legendPurple = [styles.colorSquare, styles.msPurpleLight].join(' ');
        var legendDarkBlue = [styles.colorSquare, styles.msBlueMid].join(' ');
        var legendTeal = [styles.colorSquare, styles.msTealLight].join(' ');
        return (React.createElement("table", { className: styles.legend },
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", { className: styles.legendCells },
                        React.createElement("div", { className: legendBlue }),
                        React.createElement("span", null, strings.ModulesLoadedLegendLabel)),
                    React.createElement("td", { className: styles.legendCells },
                        React.createElement("div", { className: legendPurple }),
                        React.createElement("span", null, strings.InitializationLegendLabel)),
                    React.createElement("td", { className: styles.legendCells },
                        React.createElement("div", { className: legendDarkBlue }),
                        React.createElement("span", null, strings.RenderTimeLegendLabel)),
                    React.createElement("td", { className: styles.legendCells },
                        React.createElement("div", { className: legendTeal }),
                        React.createElement("span", null, strings.DataFetchLegendLabel))))));
    };
    return PerformanceLegend;
}(React.Component));
export default PerformanceLegend;
