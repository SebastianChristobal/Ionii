import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions
} from '@microsoft/sp-http';
import { IListItem } from '../models';


const LIST_API_ENDPOINT: string = `https://ionii.sharepoint.com/_api/web/Lists/GetByTitle('Meddelanden')`;
const SELECT_QUERY: string = `$select=Title,Beskrivning,ID,Tilldelad/ID&$expand=Tilldelad`;
export class ListService {
    private _spHttpOptions: any = {
        getNoMetaData: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none'
            }
        },
        getFullMetaData: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=full'
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
        },
        updateNoMetadata: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none',
                'CONTENT-TYPE': 'application/json',
                'X-HTTP-Method': 'MERGE'

            }
        },

    };

    constructor(private siteUrl: string, private client: SPHttpClient) {
    }

    public getItem(selectedItemID: number): Promise<IListItem> {
        let promise: Promise<IListItem> = new Promise<IListItem>((resolve, reject) => {

            let query = `${LIST_API_ENDPOINT}/items(${selectedItemID})?${SELECT_QUERY}`;

            this.client.get(
                query,
                SPHttpClient.configurations.v1,
                this._spHttpOptions.getFullMetaData
            )
                .then((response: SPHttpClientResponse): Promise<IListItem> => {
                    return response.json();
                })
                .then((response: IListItem) => {
                    resolve(response);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
        return promise;
    }
    public ensureUser(currentLoggedInName: string): Promise<any> {
        let promise: Promise<any> = new Promise<any>((resolve, reject) => {

            let query = `/_api/web/ensureuser`;
            let requestDetails = this._spHttpOptions.postNoMetadata;
            let data = {
                logonName: currentLoggedInName
            };

            requestDetails.body = JSON.stringify(data);
            this.client.post(
                query,
                SPHttpClient.configurations.v1,
                requestDetails
            )
                .then((response: SPHttpClientResponse): Promise<any> => {
                    return response.json();
                })
                .then((response: any) => {
                    resolve(response);

                })
                .catch((error: any) => {
                    reject(error);
                });
        });
        return promise;
    }
    public updateSelectedListItem(updateSelectedItem: IListItem): Promise<void> {

        let promise: Promise<void> = new Promise<void>((resolve, reject) => {

            let requestDetails: any = this._spHttpOptions.updateNoMetadata;
            requestDetails.headers['IF-MATCH'] = updateSelectedItem['@odata.etag'];
            requestDetails.body = JSON.stringify(updateSelectedItem);

            this.client.post(`${LIST_API_ENDPOINT}/items(${updateSelectedItem.ID})`,
                SPHttpClient.configurations.v1,
                requestDetails
            )
                .then(() => {
                    resolve();
                });
        });
        return promise;
    }

}