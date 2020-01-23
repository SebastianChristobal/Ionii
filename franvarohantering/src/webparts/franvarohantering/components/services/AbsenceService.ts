import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions
} from '@microsoft/sp-http';

import {IEvent} from '../models'
import { IPropertyPaneDropdownOption } from '@microsoft/sp-webpart-base';
export class AbcsenceService{

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

    constructor( private siteUrl: string, private client: SPHttpClient) {
    
    }
    
    private _getItemEntityType(): Promise<string>{
      
       console.log(this.client);
        const LIST_API_ENDPOINT: string = `/_api/web/Lists/GetByTitle('Franvarohantering')`;
        let promise: Promise<string> = new Promise<string>((resolve, reject) =>{
            this.client.get(`${this.siteUrl}${LIST_API_ENDPOINT}?$select=ListItemEntityTypeFullName`,
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
    public createItem(newItem: IEvent): Promise<void>{

        const LIST_API_ENDPOINT: string = `/_api/web/Lists/GetByTitle('Franvarohantering')`;
        let promise: Promise<void> = new Promise<void>((resolve, reject) =>{
                
            this._getItemEntityType().
            then((spEntityType: string) =>{
                let newListItem: IEvent = newItem;
                
             newListItem['@odata.type'] = spEntityType;

                let requestDetails: any = this._spHttpOptions.postNoMetadata;
                requestDetails.body = JSON.stringify(newListItem);

                return this.client.post(`${this.siteUrl}${LIST_API_ENDPOINT}/items`,
                SPHttpClient.configurations.v1,
                requestDetails
                );
            }).
            then((response: SPHttpClientResponse): Promise<IEvent> =>{
                    return response.json();
            }).
            then((newSpListItem: IEvent): void =>{
                resolve();
            }).catch((error: any) =>{
                reject(error);
            })
        })
        return promise;
    }

}