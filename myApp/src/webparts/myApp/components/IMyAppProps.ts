import { MSGraphClientFactory, MSGraphClient} from "@microsoft/sp-http";

export interface IMyAppProps {
  description: string;
  graphClientFactory: MSGraphClientFactory;
  msGraphClient: MSGraphClient;
}
