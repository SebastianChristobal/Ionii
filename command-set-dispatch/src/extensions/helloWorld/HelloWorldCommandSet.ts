import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  IListViewCommandSetExecuteEventParameters,
  IListViewCommandSetListViewUpdatedParameters,
  Command
} from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';
import * as strings from 'HelloWorldCommandSetStrings';
import { ListService } from './services';
import { IListItem } from './models';
import { CommandSetProps } from './CommandSetProps';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
const LOG_SOURCE: string = 'HelloWorldCommandSet';

export default class HelloWorldCommandSet extends BaseListViewCommandSet<CommandSetProps> {

  private _listService: ListService;

  @override
  public onInit(): Promise<void> {
    this._listService = new ListService(this.context.pageContext.web.absoluteUrl, this.context.spHttpClient);
    Log.info(LOG_SOURCE, 'Initialized HelloWorldCommandSet');
    return Promise.resolve();
    
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    const compareOneCommand: Command = this.tryGetCommand('ASSIGNED_TO');
    if (compareOneCommand) {
      // This command should be hidden unless exactly one row is selected.
      compareOneCommand.visible = event.selectedRows.length >= 1;
    }
  }
  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {

    switch (event.itemId) {
      case 'ASSIGNED_TO':
        this._updateSelectedItem(event);
        break;
        default:
          throw new Error('Unknown command');
    }
  }
  private _updateSelectedItem(event: IListViewCommandSetExecuteEventParameters): any {

    let currentLoggedInUser = this.context.pageContext.user;
    this._listService.ensureUser(currentLoggedInUser.email)
      .then((currentUserResponse) => {

        event.selectedRows.map(row => {
        let selectedRowID = row.getValueByName('ID');

          this._listService.getItem(selectedRowID)
          .then((item: IListItem) => {           

            let updatedItem: IListItem = { TilldeladId: currentUserResponse.Id, ID: item.ID };
            updatedItem['@odata.etag'] = item['@odata.etag'];
            return this._listService.updateSelectedListItem(updatedItem);
          })
          .then(() => {
            location.reload(true);
          });
        });
      });
  }
''

}
