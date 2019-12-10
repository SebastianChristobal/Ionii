export interface IPlanner {
    id: string;
    title:string;
    dueDateTime: string;
    createdDateTime: string;
  }
  
  export interface IPlannerCollection {
    value: IPlanner[];
  }