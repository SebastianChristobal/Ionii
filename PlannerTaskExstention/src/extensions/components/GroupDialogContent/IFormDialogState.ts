import {IPlannerCollection, IPlannerBucketCollection} from '../models';
import * as MicrosoftGroup from '@microsoft/microsoft-graph-types';
export interface IFormDialogState {
    groups: MicrosoftGroup.Group[];
    planner: IPlannerCollection[];
    plannerTask: MicrosoftGroup.PlannerTask[];
    plannerBucket: MicrosoftGroup.PlannerBucket[];
    hideDialog: boolean;
    Title: string;
    Description: string;
    groupID: string;
}