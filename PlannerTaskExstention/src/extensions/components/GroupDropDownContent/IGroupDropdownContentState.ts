
import * as MicrosoftGroup from '@microsoft/microsoft-graph-types';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
export interface IGroupDropdownContentState {
    groups: MicrosoftGroup.Group[];
    options: IDropdownOption[];
    dropDownValue:Array<any>;
}