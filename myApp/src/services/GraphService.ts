import {IUserItem} from '../models';
import { MSGraphClient, MSGraphClientFactory } from '@microsoft/sp-http';
import { ThemeSettingName } from '@uifabric/styling';

const endpointUsers = '/users/';
const endPointImage = '/me/photo/$value';

export class GraphService {

  
    constructor(private _msGraphClientFactory: MSGraphClientFactory, public _msGraphClient : MSGraphClient) {
    }
    public getUserProfileProps(): Promise<IUserItem[]>{
        let userItem = [];
        let promise : Promise<IUserItem[]> = new Promise<IUserItem[]>((resolve, reject) =>{
            this._msGraphClientFactory.getClient()
            .then((client: MSGraphClient): void  =>{
                client.api(endpointUsers)
                .get()
                .then((res :{value: IUserItem[] }) =>{
                    userItem = userItem.concat(res.value);
                    resolve(userItem);
                    console.log(userItem);
                })
                .catch((err: any) =>{
                    reject(err);
                });  
            });
        });
           return promise;    
    }

    public getUserProfileImage() {        
     
   }
}