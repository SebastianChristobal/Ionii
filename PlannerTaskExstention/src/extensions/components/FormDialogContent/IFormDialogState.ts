
import * as MicrosoftGroup from '@microsoft/microsoft-graph-types';
import {ITask} from '../models';
export interface IFormDialogState {
    groups: MicrosoftGroup.Group[];
    tasks: ITask[];

    hideDialog: boolean;
    optionSelected: string;
    myInput: any;
    Title: string;
    Description: string;
}