import { IListItem } from '../models';
import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions,
    SPHttpClientConfiguration
} from '@microsoft/sp-http';

const LIST_API_ENDPOINT: string = `/_api/web/Lists/GetByTitle('Meddelanden')`;
const SELECT_QUERY: string = `$select=Title,ID`;

export class ListService {

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
    constructor(private siteUrl: string, private client: SPHttpClient) { }

    public getAllListItems(): Promise<IListItem[]> {
        let promise: Promise<IListItem[]> = new Promise<IListItem[]>((resolve, reject) => {

            let query = `${this.siteUrl}${LIST_API_ENDPOINT}/items?${SELECT_QUERY}`;

            this.client.get(
                query,
                SPHttpClient.configurations.v1,
                this._spHttpOptions.getMetaData
            )
                .then((response: SPHttpClientResponse): Promise<{ value: IListItem[] }> => {
                    return response.json();
                })
                .then((response: { value: IListItem[] }) => {
                    resolve(response.value);
                })

                .catch((error: any) => {
                    reject(error);
                });
        });
        return promise;
    }
}