export interface IBucket {
    ['@odata.etag']?: string;
      id: string;
      name:string;
      planID: String;
    }
    
    export interface IPlannerBucketCollection {
      value: IBucket[];
    }