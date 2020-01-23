import { SPHttpClient } from "@microsoft/sp-http";
import { IPeoplePickerUserItem } from '../models';
import {
  MSGraphClientFactory
} from '@microsoft/sp-http';

export interface IPeoplepickerProps {
  graphClientFactory: MSGraphClientFactory;
  // siteUrl: string;
  onAssignedUsers: any;
}
