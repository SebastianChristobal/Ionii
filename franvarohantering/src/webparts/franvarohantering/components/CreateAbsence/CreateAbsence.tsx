import * as React from 'react';
import styles from '../Franvarohantering.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { AbcsenceService } from '../services';
import {ICreateAbsenceProps} from './ICreateAbsenceProps';
import { IEvent} from '../models'
import {Calendar} from '../Calendar';

export class CreateAbsence extends React.Component<ICreateAbsenceProps, {}> {

  private _abcsenceService = new AbcsenceService(this.props.siteUrl, this.props.SPHttpClient);

  constructor(props: ICreateAbsenceProps){
    super(props)  
  }
ICreateAbsenceProps
  public render(): React.ReactElement<ICreateAbsenceProps> {

    return (
      <div className={styles.franvarohantering}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
                <Calendar {...this.props} />
              </div>
            </div>
          </div>
      </div>
    );
  }
  public _createEvent() {
   //this._abcsenceService.createItem();

  }
}
