import { SPHttpClient } from "@microsoft/sp-http";

export interface ICalendarProps{
   
    spSiteUrl: string;
    spHttpClient: SPHttpClient;
    
}