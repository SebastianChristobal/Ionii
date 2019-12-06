import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog, Dialog } from '@microsoft/sp-dialog';

import { IDialogProps } from 'office-ui-fabric-react';
import { DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ComboBox, IComboBoxOption, SelectableOptionMenuItemType } from 'office-ui-fabric-react/lib/index';
import {FormDialogContent} from './FormDialogContent/FormDialogContent';




export class GroupFormDialog extends BaseDialog {

  public render(): void {
    ReactDOM.render(<FormDialogContent
    close={this.close}
    />, this.domElement);
  }



  protected onAfterClose(): void {
    super.onAfterClose();
    ReactDOM.unmountComponentAtNode(this.domElement);
  }
}

