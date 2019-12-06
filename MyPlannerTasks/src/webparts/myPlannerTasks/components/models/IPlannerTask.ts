export interface ITasks {
    id?: string;
    title?:string
    dueDateTime?: string
    createdDateTime?: string;
  }
  
  export interface IPlannerTaskCollection {
    value: ITasks[];
  }