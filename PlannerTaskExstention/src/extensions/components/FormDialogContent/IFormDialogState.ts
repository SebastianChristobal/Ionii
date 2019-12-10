
import * as MicrosoftGroup from '@microsoft/microsoft-graph-types';
export interface IFormDialogState {
    groups: MicrosoftGroup.Group[];
    plannerTask: MicrosoftGroup.PlannerTask[];
    plannerBucket: MicrosoftGroup.PlannerBucket[];
    hideDialog: boolean;
    optionSelected: string;
    myInput: any;
    Title: string;
    Description: string;
}