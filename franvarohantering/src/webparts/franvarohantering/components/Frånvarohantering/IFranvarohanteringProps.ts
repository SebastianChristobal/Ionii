import { SPHttpClient } from "@microsoft/sp-http";

export interface IFranvarohanteringProps {
  description: string;
  siteUrl: string;
  SPHttpClient: SPHttpClient;
}
