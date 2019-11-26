import { SPHttpClient } from "@microsoft/sp-http";

export interface IMessageMainProps{
    siteAbsoluteUrl:string;
    spHttpClient:SPHttpClient;
}