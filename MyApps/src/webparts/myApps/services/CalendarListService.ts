import {ICalendarListItem} from '../models/';
import { SPHttpClient, SPHttpClientConfiguration, ISPHttpClientOptions, SPHttpClientResponse } from "@microsoft/sp-http";

const LIST_API_ENDPOINT = `/_api/web/Lists/GetByTitle('Calendar')`;

export class CalendarListService {
    
    private _spHttpOptions: any = {
        getMetaData: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=full'
            }
        },
        getNoMetaData: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none'
            }
        },
        updateNoMetaData: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none',
                'CONTENT-TYPE': 'application/json',
                'X-HTTP-METHOD': 'MERGE'
            }
        },
        postVerboseMetaData: <ISPHttpClientOptions>{
            headers: {
                'Accept': 'application/json;odata=verbose',
                'Content-type': 'application/json;odata=verbose'
            }
        },
        postNoMetaData: <ISPHttpClientOptions>{
            headers: {
                'Accept': 'application/json;odata=nometadata',
                'Content-type': 'application/json;odata=nometadata'
            }
        }
    };
    constructor(private _siteUrl: string, private _client: SPHttpClient) {

    }

    public getListItems(): Promise<ICalendarListItem[]>{

        let promise: Promise<ICalendarListItem[]> = new  Promise<ICalendarListItem[]>((resolve, reject) =>{

            let query = `${LIST_API_ENDPOINT}/items`;

        });
        return promise;
    }
}