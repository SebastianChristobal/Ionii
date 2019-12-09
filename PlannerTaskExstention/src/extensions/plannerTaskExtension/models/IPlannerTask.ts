export interface ITask {
  ['@odata.type']?:string;
    id?: string;
    title?:string;
    dueDateTime?: string;
    createdDateTime?: string;
  }
  
  export interface IPlannerTaskCollection {
    value: ITask[];
  }