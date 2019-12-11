import { MSGraphClientFactory} from "@microsoft/sp-http";

export interface IGroupFormDialogProps {
    close?: () => void;
    graphClientFactory: MSGraphClientFactory;
  
  }
  