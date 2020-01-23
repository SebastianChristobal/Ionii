import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions,
    SPHttpClientConfiguration
} from '@microsoft/sp-http';

import {IDocumentCollection, IDocument} from '../models';



export class DocLibraryService{

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
    constructor(private siteUrl: string, private client: SPHttpClient){

    }

   public getDocument(selectedRowId): Promise<IDocument[]>{
      //  console.log(itemId);
        const LIST_API_ENDPOINT: string = `/_api/web/Lists/GetByTitle('Documents')`;
        
        let promise: Promise<IDocument[]> = new Promise<IDocument[]>((resolve, reject) =>{
        let query = `${this.siteUrl}${LIST_API_ENDPOINT}/items?$filter=ID eq ${selectedRowId}`;
        
        this.client.get(
            query,
            SPHttpClient.configurations.v1,
            this._spHttpOptions.getMetaData
        )
        .then((response: SPHttpClientResponse): Promise<IDocumentCollection> =>{
            
            return response.json();
        })
        .then((response: IDocumentCollection) =>{   

            let documents: Array<IDocument> = new Array<IDocument>();
            response.value.forEach((item) =>{
                documents.push({
                    Id: item.Id,
                    Title: item.Title,
                    ServerRedirectedEmbedUri: item.ServerRedirectedEmbedUri
                });
            })

            resolve(documents);
        })
        .catch((error) =>{
            reject(error);
        });

        });
        return promise;
    } 
}