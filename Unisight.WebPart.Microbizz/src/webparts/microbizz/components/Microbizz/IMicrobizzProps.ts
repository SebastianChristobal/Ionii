import { SPHttpClient } from "@microsoft/sp-http";

export interface IMicrobizzProps {
  description: string;
  SPHttpClient : SPHttpClient;
  currentUserEmail: string;
  currentUserDisplayName: string;
  httpClient: any;
  context: any;
  currentUserPermissions: any;
}
