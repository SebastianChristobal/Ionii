import {IUserCollection, IUser} from '../models';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import {IPeoplePickerUserItem} from '../models';
export interface IPeoplepickerState {
  users?: IPeoplePickerUserItem[];
  currentPicker?: number | string;
  delayResults?: boolean;
  mostRecentlyUsed: IPeoplePickerUserItem[];
  currentSelectedItems?: IPersonaProps[];
  isPickerDisabled?: boolean;
}