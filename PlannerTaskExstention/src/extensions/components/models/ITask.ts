export interface ITask {
  ['@odata.etag']?: string;
    id?: string;
    title?:string;
    dueDateTime?: string;
    createdDateTime?: string;
    planId?: string;
    bucketId?: string;
  }
  
  export interface ITaskCollection {
    value: ITask[];
  }