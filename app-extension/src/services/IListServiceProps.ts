import { SPHttpClient } from "@microsoft/sp-http";
import {IListItem} from '../models';

export interface IListService {
    spHttpClient: SPHttpClient;
    siteAbsoluteUrl: string;
    listItems?: IListItem[];
}