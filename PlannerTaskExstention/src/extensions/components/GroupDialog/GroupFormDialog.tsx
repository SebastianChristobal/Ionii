import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog } from '@microsoft/sp-dialog';
import {FormDialogContent} from '../GroupDialogContent/FormDialogContent';
import { MSGraphClientFactory } from '@microsoft/sp-http';

export class GroupFormDialog extends BaseDialog {

  public msGraphFactory: MSGraphClientFactory;

  public render(): void {
    ReactDOM.render(<FormDialogContent
    close={this.close}
    graphClientFactory= {this.msGraphFactory}
    />, this.domElement);
  }

  protected onAfterClose(): void {
    super.onAfterClose();
    ReactDOM.unmountComponentAtNode(this.domElement);
  }
}

