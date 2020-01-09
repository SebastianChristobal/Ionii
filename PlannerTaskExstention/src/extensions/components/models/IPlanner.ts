import * as MicrosoftGroup from '@microsoft/microsoft-graph-types';
export interface IPlanner {
  ['@odata.etag']?: string;
    id?: string;
    title:string;
  }
  
  export interface IPlannerCollection {
    value: MicrosoftGroup.PlannerPlan[];
  }