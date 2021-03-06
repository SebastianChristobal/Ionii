/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file PerformanceGraph.tsx
 */
import * as React from 'react';
import { IPerfItem } from '../../../../DataProviders/PerformanceDisplayStateProvider';
export interface IPerformanceGraphProps {
    /**
     * Performance data items to be shown on the graph
     */
    perfItems: IPerfItem[];
    /**
     * Integer value representing the time in ms that the page started loading
     */
    startTime: number;
    /**
     * Integer value representing how long the page took to load overall. Used for calculations
     */
    overallDuration: number;
}
export default class PerformanceGraph extends React.Component<IPerformanceGraphProps, {}> {
    private _scale;
    constructor(props: IPerformanceGraphProps);
    render(): React.ReactElement<IPerformanceGraphProps>;
}
//# sourceMappingURL=PerformanceGraph.d.ts.map