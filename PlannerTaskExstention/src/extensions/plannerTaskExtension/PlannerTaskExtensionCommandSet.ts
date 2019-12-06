import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import {sp} from "@pnp/sp";
import {GroupFormDialog} from '../components/GroupFormDialog';

import * as strings from 'PlannerTaskExtensionCommandSetStrings';
import GroupService from '../components/services/GroupService';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IPlannerTaskExtensionCommandSetProperties {
  // This is an example; replace with your own properties
  sampleTextOne: string;
  sampleTextTwo: string;
  spfxContext: string;
  context: any;
}

const LOG_SOURCE: string = 'PlannerTaskExtensionCommandSet';

export default class PlannerTaskExtensionCommandSet extends BaseListViewCommandSet<IPlannerTaskExtensionCommandSetProperties> {

  @override
  public onInit(): Promise<void> {
    this.properties.context = this.context;
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
      GroupService.setup(this.properties.context);
    });
  }
  
  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    const compareOneCommand: Command = this.tryGetCommand('Planner_Task');
    if (compareOneCommand) {
      // This command should be hidden unless exactly one row is selected.
      compareOneCommand.visible = event.selectedRows.length === 1;
    }
  }

  @override
  public async onExecute(event: IListViewCommandSetExecuteEventParameters): Promise<void> {

    const component = await import(
      '../components/GroupFormDialog'
    );
    const dialog = new component.GroupFormDialog;
    dialog.show();
  }

}
