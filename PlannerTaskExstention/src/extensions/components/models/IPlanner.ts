export interface IPlanner {
  ['@odata.etag']?: string;
    id: string;
    title:string;
    createdDateTime?: string;
  }
  
  export interface IPlannerCollection {
    value: IPlanner[];
  }