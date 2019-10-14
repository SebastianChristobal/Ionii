
import { WebPartContext } from '@microsoft/sp-webpart-base';
import {ButtonClickedCallBack, IListItem} from '../../../models';

import { SPHttpClient } from "@microsoft/sp-http";
import { ServiceScope } from "@microsoft/sp-core-library";

export interface IMyAppsProps {
  description: string;
  spListItems: IListItem[];
  onGetListItems?: ButtonClickedCallBack;
  onAddListItem?: ButtonClickedCallBack;
  onUpdateListItem?: ButtonClickedCallBack;
  onDeleteListItem?: ButtonClickedCallBack;
  context: WebPartContext;
 
  spSiteUrl: string;
  spHttpClient: SPHttpClient;
  serviceScope:ServiceScope;
}
