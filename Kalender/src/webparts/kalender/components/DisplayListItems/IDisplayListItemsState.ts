import { SPHttpClient } from "@microsoft/sp-http";
import { ServiceScope } from "@microsoft/sp-core-library";

export interface IDisplayProcessProps{
    spSiteUrl: string;
    spHttpClient: SPHttpClient;
    serviceScope:ServiceScope;
}