import * as React from 'react';
export interface IDebugPromptProps {
    title: string;
    callback: (allowed: boolean) => void;
}
export interface IDebugPromptState {
    showDialog?: boolean;
    showCallout?: boolean;
    dismissed?: boolean;
}
export default class DebugPrompt extends React.Component<IDebugPromptProps, IDebugPromptState> {
    private _calloutTarget;
    constructor(props: IDebugPromptProps);
    componentDidMount(): void;
    render(): React.ReactElement<IDebugPromptProps> | null;
}
//# sourceMappingURL=DebugPrompt.d.ts.map