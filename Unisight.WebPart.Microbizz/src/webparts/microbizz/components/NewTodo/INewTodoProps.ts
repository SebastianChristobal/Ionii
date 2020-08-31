import { SPHttpClient, HttpClient } from "@microsoft/sp-http";

export interface INewTodoProps{
    SPHttpClient: SPHttpClient;
    HttpClient: HttpClient;
    currentUserEmail: string;
    currentUserDisplayName: string;
    context: any;
   
}