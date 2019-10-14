import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from "@microsoft/sp-http";
import {IKalenderListITem} from '../models';


const LIST_API_ENDPOINT: string = `/_api/web/Lists/GetByTitle('Calendar')`;
const SELECT_QUERY: string = `$select=Id,Title`;

export class ListService{
      
        
    private _spHttpOptions: any = {
        getNoMetadata: <ISPHttpClientOptions>{
            headers: {'ACCEPT': 'application/json: odata.metadata=none'}
        }
    };

    constructor(private siteAbsoluteUrl: string, private client: SPHttpClient){}

    public getListItems(): Promise<IKalenderListITem[]>{
       
        console.log("hej");
        let promise: Promise<IKalenderListITem[]> = new Promise<IKalenderListITem[]>((resolve,reject) =>{
           
            let query = `https://ionii.sharepoint.com/sites/calendr/_api/web/Lists/GetByTitle('Calendar')/items?$select=Id,Title`;
            this.client.get(
                query,
                SPHttpClient.configurations.v1,
                this._spHttpOptions.getNoMetadata
            )
            .then((response: SPHttpClientResponse): Promise<{value: IKalenderListITem[] }> =>{
              return  response.json();
            })
            .then((response: {value: IKalenderListITem[] }) =>{
                resolve(response.value);
            })
            .catch((error: any) =>{
                reject(error);
            });
       
           
        });
        return promise;
    }
    
}