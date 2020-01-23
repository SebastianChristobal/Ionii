import {
    MSGraphClientFactory, MSGraphClient
} from '@microsoft/sp-http';
import { IPeoplePickerUserItem } from "../models/IPeoplePickerUserItem";
import {
    IUserCollection
} from "../models";

export class UserService {

    constructor(private _msGraphClientFactory: MSGraphClientFactory) {
    }

    public getUsers(): Promise<IPeoplePickerUserItem[]> {
        return new Promise<IPeoplePickerUserItem[]>((resolve) => {

            try {
                this._msGraphClientFactory
                    .getClient()
                    .then((client: MSGraphClient) => {
                        client
                            .api('users')
                            .version('v1.0')
                            .select("id,displayName,mail,userPrincipalName")
                            .get((error: any, users: IUserCollection) => {
                                let userValuesArray: Array<IPeoplePickerUserItem> = new Array<IPeoplePickerUserItem>();

                                users.value.forEach((user) => {
                                    userValuesArray.push({
                                        id: user.id,
                                        imageUrl: `/_layouts/15/userphoto.aspx?size=S&username=${user.mail}`,
                                        imageInitials: "",
                                        text: user.displayName, // name
                                        secondaryText: user.mail, // email
                                        tertiaryText: "", // status
                                        optionalText: "", // anything
                                        loginName: user.mail
                                    });
                                });
                                resolve(userValuesArray);
                            });
                    });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}