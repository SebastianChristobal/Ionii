import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import { 
  IGroup, 
  IGroupCollection, 
  ITaskCollection,
  ITask
 } from "../models";
import { MSGraphClientFactory, MSGraphClient } from "@microsoft/sp-http";
import { autobind } from "@uifabric/utilities";


export class GroupServiceManager {

  constructor(private _msGraphClientFactory: MSGraphClientFactory) {
  }

  @autobind
  public getPlanners(): Promise<MicrosoftGraph.PlannerTask[]>  {
    return new Promise<MicrosoftGraph.PlannerTask[]>((resolve, reject) => {
      try {
        this._msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient) => {
          client.api("me/planner/tasks/")
          .get((error: any, plannerTask: ITaskCollection, rawResponse: any) => {
           console.log(plannerTask.value);
            resolve(plannerTask.value);
          });
        });
      } catch(error) {
        console.error(error);
      }
    });
  }

  @autobind
  public createPlanner(newItem: MicrosoftGraph.PlannerTask):Promise<any>{

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




