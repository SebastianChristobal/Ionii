export interface ITask {
    id: string;
    title:string;
    dueDateTime: string;
    createdDateTime: string;
  }
  
  export interface ITaskCollection {
    value: ITask[];
  }