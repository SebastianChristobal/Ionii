import {IPlannerCollection, IPeoplePickerUserItem, IDocument, IDocumentCollection} from '../models';
import * as MicrosoftGroup from '@microsoft/microsoft-graph-types';
export interface IFormDialogState {
    groups: MicrosoftGroup.Group[];
    planner: IPlannerCollection[];
    plannerTask: MicrosoftGroup.PlannerTask[];
    plannerBucket: MicrosoftGroup.PlannerBucket[];
    hideDialog: boolean;
    title: string;
    description: string;
    groupID: string;
    firstDayOfWeek: number;
    dueDate: string;
    assignedUsers: IPeoplePickerUserItem[];
    documentItem: IDocument[];
}