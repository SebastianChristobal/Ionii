import { SPHttpClient } from "@microsoft/sp-http";
import { DisplayMode } from "@microsoft/sp-core-library";

export interface IKaProps {
  description: string;
  siteAbsoluteUrl: string;
  spHttpClient: SPHttpClient;
  title:string;
  displayMode: DisplayMode;
  updateProperty: (value:string) => void;
  eventList:string;
  showCount:number;
  webPartBorder:boolean;
  webPartBackgroundColor:string;
  webPartTitleFilledColor:boolean;
}
