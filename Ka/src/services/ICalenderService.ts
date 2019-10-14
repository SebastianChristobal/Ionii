import { IEvent,IEventDTO } from '../models';
import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions,
    SPHttpClientConfiguration
} from '@microsoft/sp-http';

import { IPropertyPaneDropdownOption } from '@microsoft/sp-webpart-base';

export class CalendarService {

    private _siteUrl: string;
    private _spHttpOptions: any = {
        getNoMetaData: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none'
            }
        },
        getMetaData: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json'
            }
        },
        postNoMetadata: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none',
                'CONTENT-TYPE': 'application/json'
            }
        }
    };

    constructor( siteUrl: string, private client: SPHttpClient) {
        this._siteUrl = siteUrl;
    }


    private _getItemEntityType(): Promise<string>{
        const LIST_API_ENDPOINT: string = `/_api/web/Lists/GetByTitle('Calendar')`;
        let promise: Promise<string> = new Promise<string>((resolve, reject) =>{
            this.client.get(`${this.siteAbsoluteUrl}${LIST_API_ENDPOINT}?$select=ListItemEntityTypeFullName`,
            SPHttpClient.configurations.v1,
            this._spHttpOptions.getNoMetaData
            ).
            then((response: SPHttpClientResponse): Promise<{ListItemEntityTypeFullName: string}> =>{
                return response.json();
            }).
            then((response: {ListItemEntityTypeFullName: string}): void =>{
                resolve(response.ListItemEntityTypeFullName);
            }).
            catch((error: any) =>{
                reject(error);
            })
        })
        return promise;
    }

    public createItem(newItem: IEventDTO): Promise<void>{
        const LIST_API_ENDPOINT: string = `/_api/web/Lists/GetByTitle('Calendar')`;
        let promise: Promise<void> = new Promise<void>((resolve, reject) =>{
                
            this._getItemEntityType().
            then((spEntityType: string) =>{
                let newListItem: IEventDTO = newItem;
                
             newListItem['@odata.type'] = spEntityType;

                let requestDetails: any = this._spHttpOptions.postNoMetadata;
                requestDetails.body = JSON.stringify(newListItem);

                return this.client.post(`${this.siteAbsoluteUrl}${LIST_API_ENDPOINT}/items`,
                SPHttpClient.configurations.v1,
                requestDetails
                );
            }).
            then((response: SPHttpClientResponse): Promise<IEventDTO> =>{
                    return response.json();
            }).
            then((newSpListItem: IEventDTO): void =>{
                resolve();
            }).catch((error: any) =>{
                reject(error);
            })
        })
        return promise;
    }

    public getAllItems() {
       
        const LIST_API_ENDPOINT: string = `/_api/web/Lists/GetByTitle('Calendar')`;
        const SELECT_QUERY: string = `$select=Title,ID`;

      
        let promise: Promise<IEventDTO> = new Promise<IEventDTO>((resolve, reject) => {
            let query = `${this._siteAbsoluteUrl}${LIST_API_ENDPOINT}/items`;
            this.client.get(
                query,
                SPHttpClient.configurations.v1,
                this._spHttpOptions.getMetaData
            )
                .then((response: SPHttpClientResponse): Promise<IEventDTO> => {
                    return response.json();
                })
                .then((response: IEventDTO) => {
                 //   response.calendarInternalName = response["@odata.context"].substring(response["@odata.context"].lastIndexOf('.') + 1).replace("ListItems", ""); //TODO: Nothing to see here... carry on...     
                    resolve(response);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
        return promise;
    }

    public getCalendarEvents(eventList: string, showCount:number): Promise<IEventDTO> {
        const LIST_API_ENDPOINT: string = `/_api/web/lists('Calendar')`;
        const SELECT_QUERY: string = `$select=Title,ID`;

        let promise: Promise<IEventDTO> = new Promise<IEventDTO>((resolve, reject) => {
            let query = `${this._siteAbsoluteUrl}${LIST_API_ENDPOINT}/items?${SELECT_QUERY}`;
            this.client.get(
                query,
                SPHttpClient.configurations.v1,
                this._spHttpOptions.getMetaData
            )
                .then((response: SPHttpClientResponse): Promise<IEventDTO> => {
                    return response.json();
                })
                .then((response: IEventDTO) => {
                 //   response.calendarInternalName = response["@odata.context"].substring(response["@odata.context"].lastIndexOf('.') + 1).replace("ListItems", ""); //TODO: Nothing to see here... carry on...     
                    resolve(response);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
        return promise;
    }
    public getEventLists() {

        const LIST_API_ENDPOINT = `/_api/web/Lists`;
        const SELECT_QUERY: string = `$filter=BaseTemplate%20eq%20106&$select=Id,Title`;

        let promise: Promise<any[]> = new Promise<any[]>((resolve, reject) => {
            let query = `${this._siteAbsoluteUrl}${LIST_API_ENDPOINT}?${SELECT_QUERY}`;
            this.client.get(
                query,
                SPHttpClient.configurations.v1,
                this._spHttpOptions.getNoMetaData
            )
                .then((response: SPHttpClientResponse): Promise<{ value: any[] }> => {
                    return response.json();
                })
                .then((response: { value: any[] }) => {
                    let options: Array<IPropertyPaneDropdownOption> = new Array<IPropertyPaneDropdownOption>();
                    response.value.map((list: any) => {
                        options.push({ key: list.Id, text: list.Title });
                    });
                    resolve(options);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
        return promise;
    }


}