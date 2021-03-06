/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceList.tsx
 *
 * Sub-component for TraceDisplay. This component displays the log
 * events from the trace in table form.
 * It will show the name and the level, message, scope, source.
 */
import * as React from 'react';
import { _LogEvent } from '@microsoft/sp-diagnostics';
import { ITraceFilter } from '../../../../Stores/TraceDisplayStore';
export interface ITraceListProps {
    filters: ITraceFilter;
    allTraces: _LogEvent[];
}
export default class TraceList extends React.Component<ITraceListProps, {}> {
    render(): React.ReactElement<ITraceListProps>;
    private _addFilterLabel;
}
//# sourceMappingURL=TraceList.d.ts.map