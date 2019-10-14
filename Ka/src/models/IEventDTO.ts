import {IEvent} from './';
export interface IEventDTO{
    ['@odata.type']?: string;
    value:IEvent[];
    calendarInternalName:string;
}