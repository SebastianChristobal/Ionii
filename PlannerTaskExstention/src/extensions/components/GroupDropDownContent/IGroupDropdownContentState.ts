import * as MicrosoftGroup from '@microsoft/microsoft-graph-types';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import {IPlannerCollection, IPlanner} from '../models';
export interface IGroupDropdownContentState {
    groups: MicrosoftGroup.Group[];
    recentPlans: microsoftgraph.PlannerPlan[];
    options: IDropdownOption[];
    dropDownValue: microsoftgraph.PlannerPlan[];
}