import {ICurrentUser} from '../models';
import {ISharePointGroup} from '../models';
export interface INewTodoState{
    currentUser: ICurrentUser[]; 
    currentUserGroups: ISharePointGroup[];
    tabLabel: string;
    CanCurrentUserViewMembership: boolean;
}