import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import { 
  IGroup, 
  IGroupCollection, 
  ITaskCollection,
  ITask,
  IPlannerCollection,
  IPlanner
 } from "../models";
import { MSGraphClientFactory, MSGraphClient } from "@microsoft/sp-http";
import { autobind } from "@uifabric/utilities";
import { IPlannerBucketCollection } from "../models/IPlannerBucket";


export class GroupServiceManager {

  constructor(private _msGraphClientFactory: MSGraphClientFactory) {
  }

  @autobind
  public getPlanners(plannerID: string): Promise<MicrosoftGraph.PlannerPlan[]>  {
    
    return new Promise<MicrosoftGraph.PlannerPlan[]>((resolve, reject) => {
      try {
        this._msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api(`groups/${plannerID}/planner/plans`)
          .get((error: any, planner: IPlannerCollection, rawResponse: any) => {
         
            resolve(planner.value);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }

  @autobind
  public getPlanner(groupID: string): Promise<MicrosoftGraph.Planner[]>  {
  
    
    return new Promise<MicrosoftGraph.Planner[]>((resolve, reject) => {
      try {
        this._msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api(`groups/${groupID}/planner/plans`)
          .get((error: any, planner: IPlannerCollection, rawResponse: any) => {
      
            resolve(planner.value);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }

  public recentPlans(): Promise<MicrosoftGraph.PlannerPlan[]>  {
    return new Promise<MicrosoftGraph.PlannerPlan[]>((resolve, reject) => {
      try {
        this._msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api('/me/planner/recentPlans').version('beta')
          .get((error: any, plans: IPlannerCollection, rawResponse: any) => {
       
            resolve(plans.value);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }
  @autobind
  public getPlannerBucket(groupID: string): Promise<MicrosoftGraph.PlannerBucket[]>  {

    return new Promise<MicrosoftGraph.PlannerBucket[]>((resolve, reject) => {
      try {
        this._msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api(`planner/plans/${groupID}/buckets`)
          .get((error: any, plannerBucket: IPlannerBucketCollection, rawResponse: any) => {
            console.log(plannerBucket.value);
            resolve(plannerBucket.value);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }


  @autobind
  public createPlanner(newItem: MicrosoftGraph.PlannerTask):Promise<any>{
    console.log(newItem);
      return new Promise<any>((resolve, reject) =>{
          try{
            this._msGraphClientFactory
            .getClient()
            .then((client: MSGraphClient) =>{
            client.api('/planner/tasks')
            .post(JSON.stringify(newItem), ()=>{
                resolve(undefined);
              });
            });
          }catch(error){
            console.error(error);
          }
      });
  }
 
  @autobind
  public getGroups(): Promise<MicrosoftGraph.Group[]>  {
    return new Promise<MicrosoftGraph.Group[]>((resolve, reject) => {
      try {
        this._msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api("/me/memberOf/$/microsoft.graph.group?$filter=groupTypes/any(a:a eq 'unified')")
          .get((error: any, groups: IGroupCollection, rawResponse: any) => {
           // console.log(groups.value);
            resolve(groups.value);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }
  @autobind
  public getGroup(groupID: string): Promise<MicrosoftGraph.Group>  {
    return new Promise<MicrosoftGraph.Group>((resolve, reject) => {
      try {
        this._msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api(`/groups/${groupID}`)
          .get((error: any, group: IGroup, rawResponse: any) => {
         //   console.log(group)
            resolve(group);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }

  public getPlansForGroup(groupID: string): Promise<MicrosoftGraph.Group[]>  {
    return new Promise<MicrosoftGraph.Group[]>((resolve, reject) => {
      try {
        this._msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api(`/groups/${groupID}/planner/tasks`)
          .get((error: any, group: IGroupCollection, rawResponse: any) => {
            console.log(group.value);
            resolve(group.value);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }
  // public getGroupLinks(groups: IGroup): Promise<any> {
  //   return new Promise<any>((resolve, reject) => {
  //     try {
  //       this._msGraphClientFactory
  //       .getClient()
  //       .then((client: MSGraphClient) => {
  //         client
  //         .api(`/groups/${groups.id}/sites/root/weburl`)
  //         .get((error: any, group: any, rawResponse: any) => {
          
  //           resolve(group);
  //         });
  //       });
  //     } catch(error) {
  //       console.error(error);
  //     }
  //   });
  // }

  // public getGroupThumbnails(groups: IGroup): Promise<any> {
  //   return new Promise<any>((resolve, reject) => {
  //     try {
  //       this._msGraphClientFactory
  //       .getClient()
  //       .then((client: MSGraphClient) => {
  //         client
  //         .api(`/groups/${groups.id}/photos/48x48/$value`)
  //         .responseType('blob')
  //         .get((error: any, group: any, rawResponse: any) => {
  //           resolve(window.URL.createObjectURL(group));
  //         });
  //       });
  //     } catch(error) {
  //       console.error(error);
  //     }
  //   });
  // }

}




