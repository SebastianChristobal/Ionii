
import { SPHttpClient } from "@microsoft/sp-http";

export interface ICurrentUsersTodoProps{
 SPHttpClient : SPHttpClient;
 httpClient: any;
 currentUserEmail:string;
}