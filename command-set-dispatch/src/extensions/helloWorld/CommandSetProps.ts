import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions
} from '@microsoft/sp-http';

export interface CommandSetProps {
    siteAbsoluteUrl: string;
    spHttpClient: SPHttpClient;
  }
  