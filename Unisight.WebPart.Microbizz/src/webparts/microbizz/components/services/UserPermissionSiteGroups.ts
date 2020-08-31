import { HttpClientResponse, SPHttpClient, SPHttpClientResponse,ISPHttpClientOptions } from '@microsoft/sp-http';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ISharePointGroup } from '../models';



export class UserPermissionSiteGroups {

    private _spHttpOptions: any = {
        headers: {
            'ACCEPT': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded"
        },
        getNoMetaData: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none'
            }
        },
    };

    constructor(private client: SPHttpClient, private context: WebPartContext) {
    }

    public getCurrentUserSiteGroups(): Promise<ISharePointGroup[]> {

        const absoluteSiteUrl = this.context.pageContext.web.absoluteUrl;
        //const USER_ID_ENDPOINT = '/_api/Web/CurrentUser?$select=ID';
        //const GET_GROUP_WITH_USER_ID_ENDPOINT = '/_api/Web/GetUserById';
        const SITE_GROUPS = "/_api/web/sitegroups";

        let promise: Promise<ISharePointGroup[]> = new Promise<ISharePointGroup[]>((resolve, reject) => {

            this.client.get(`${absoluteSiteUrl}${SITE_GROUPS}`,
                SPHttpClient.configurations.v1,
                this._spHttpOptions
            )
                .then((response: HttpClientResponse) => {
                    response.json()
                        .then((user: any) => {
                           //let userId = user.Id;

                            this.client.get(`${absoluteSiteUrl}${SITE_GROUPS}`,
                                SPHttpClient.configurations.v1
                            )
                                .then((groupResponse: SPHttpClientResponse) => {
                                    groupResponse.json()
                                        .then((groupData: { value: ISharePointGroup[] }) => {
                                            // let groups = groupData;
                                            resolve(groupData.value);
                                        });
                                });
                        });
                })
                .catch((error) => {
                    reject(error);
                });
        });
        return promise;
    }
    
    public getCurrentUserSiteGroupId(groupId:string): Promise<boolean> {
        
        const absoluteSiteUrl = this.context.pageContext.web.absoluteUrl;
        const LIST_API_ENDPOINT = `https://skansen.sharepoint.com/sites/intranet/_api/web/sitegroups(${groupId})/CanCurrentUserViewMembership`; 
     
        let promise: Promise<boolean> = new Promise<boolean>((resolve, reject) => {
            let query = `${LIST_API_ENDPOINT}`;
            this.client.get(
                query,
                SPHttpClient.configurations.v1,
                this._spHttpOptions.getNoMetaData
            )
                .then((response: SPHttpClientResponse): Promise<{ value: boolean }> => {
                    return response.json();
                })
                .then((response: { value: boolean }) => {
                let hasGroup = response.value;
                resolve(hasGroup);

                })
            .catch((error: any)=>{
                reject(error);
            });
        });
        return promise;

    }
}