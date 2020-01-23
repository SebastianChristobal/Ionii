import { MSGraphClientFactory, SPHttpClient} from "@microsoft/sp-http";

export interface IGroupFormDialogProps {
    close?: () => void;
    graphClientFactory: MSGraphClientFactory;
    SPHttpClient: SPHttpClient;
    siteUrl: string;
    selectedRowId: string;
  }
  