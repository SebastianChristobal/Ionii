import { MSGraphClient } from "@microsoft/sp-http";
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { 
  IGroup, 
  IGroupCollection, 
  IPlannerTaskCollection, 
  ITask
 } from "../models";
import { GraphRequest } from "@microsoft/microsoft-graph-client";


export class GroupServiceManager {
  public context: WebPartContext;

  public setup(context: WebPartContext): void {
    this.context = context;
   
  }
  public getPlannerTasks(): Promise<MicrosoftGraph.Group[]>  {
    return new Promise<MicrosoftGraph.Group[]>((resolve, reject) => {
      try {
        this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api("/me/planner/tasks")
          .get((error: any, planner: IPlannerTaskCollection, rawResponse: any) => {
         //console.log(planner.value);
            resolve(planner.value);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }
  public getGroups(): Promise<MicrosoftGraph.Group[]>  {
    return new Promise<MicrosoftGraph.Group[]>((resolve, reject) => {
      try {
        this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api("/me/memberOf/$/microsoft.graph.group?$filter=groupTypes/any(a:a eq 'unified')")
          .get((error: any, groups: IGroupCollection, rawResponse: any) => {
    
            resolve(groups.value);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }
  public getPlansForGroup(groups: IGroup): Promise<MicrosoftGraph.Planner>  {
    return new Promise<MicrosoftGraph.Planner>((resolve, reject) => {
      try {
        this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api(`/groups/${groups.id}/planner/plans`)
          .get((error: any, planner: ITask, rawResponse: any) => {
            //console.log(planner);
            resolve(planner);
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
  //       this.context.msGraphClientFactory
  //       .getClient()
  //       .then((client: MSGraphClient) => {
  //         client
  //         .api(`/groups/${groups.id}/sites/root/weburl`)
  //         .get((error: any, group: any, rawResponse: any) => {
  //          // console.log(group);
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
  //       this.context.msGraphClientFactory
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




