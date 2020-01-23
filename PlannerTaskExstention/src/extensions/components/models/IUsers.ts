export interface IUser {
    id?: string;
    displayName?:string;
    mail?: string;
    userPrincipalName?: string;
  }
  
  export interface IUserCollection {
    value: IUser[];
  }