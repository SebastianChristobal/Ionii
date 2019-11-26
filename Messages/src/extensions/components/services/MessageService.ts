import { IMessageItem } from '../models';
import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions
} from '@microsoft/sp-http';

const LIST_API_ENDPOINT: string = `https://ionii.sharepoint.com/_api/web/Lists/GetByTitle('Meddelanden')`;
const SELECT_QUERY: string = `$select=Title,ID,Beskrivning,Kategori,Prioritet,Publiceringsdatum,Avpubliceringsdatum`;

export class MessageService {

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

    public getMessageItem(): Promise<IMessageItem[]> {
        let promise: Promise<IMessageItem[]> = new Promise<IMessageItem[]>((resolve, reject) => {

            let query = `${LIST_API_ENDPOINT}/items?${SELECT_QUERY}`;

            this.client.get(
                query,
                SPHttpClient.configurations.v1,
                this._spHttpOptions.getMetaData
            )
                .then((response: SPHttpClientResponse): Promise<{ value: IMessageItem[] }> => {
                    return response.json();
                })
                .then((response: { value: IMessageItem[] }) => {
                    resolve(response.value);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
        return promise;
    }
}