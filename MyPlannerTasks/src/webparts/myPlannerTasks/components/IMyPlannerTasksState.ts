import * as MicrosoftGroup from '@microsoft/microsoft-graph-types';
import {ITasks} from './models'

export interface IMyPlannerTasksState {
  groups: MicrosoftGroup.Group[];
  tasks: ITasks[];
}