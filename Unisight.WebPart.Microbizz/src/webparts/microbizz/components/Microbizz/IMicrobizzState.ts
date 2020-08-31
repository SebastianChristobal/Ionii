
import { ITodos } from '../models';

export interface IMicrobizzState{
    toggleTodoList: boolean;
    toggleTodoTabs: boolean;
    currentUserEmail: string;
    currentUserDisplayName: string;
    todos: ITodos[];

}