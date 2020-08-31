import {ITodos} from '../models';

export interface ICurrentUsersTodoState{
    filteredItems: ITodos[];
    allItems: ITodos[];
    selectionDetails: string;
}