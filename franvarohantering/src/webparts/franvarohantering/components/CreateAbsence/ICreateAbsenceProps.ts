import { SPHttpClient } from "@microsoft/sp-http";

export interface ICreateAbsenceProps {
  description: string;
  siteUrl: string;
  SPHttpClient: SPHttpClient;
}
