import { override } from '@microsoft/decorators';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';
import {sp} from "@pnp/sp";



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
      '../components/GroupDialog/GroupFormDialog'
    );
    const dialog = new component.GroupFormDialog;
    dialog.msGraphFactory = this.context.msGraphClientFactory;
    dialog.show();
  }

}
