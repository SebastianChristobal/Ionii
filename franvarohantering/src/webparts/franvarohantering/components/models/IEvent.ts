export interface IEvent{
    ['@odata.type']?: string;
    Id?:number;
    Title:string;
    Location?:string;
    EventDate:string;
    EndDate?:string;
    Description?:string;
   // fAllDayEvent:string;
}

export interface IEventCollection{
    value: IEvent[];
}