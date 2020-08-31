import * as React from 'react';
import styles from './Franvarohantering.module.scss';
import { IFranvarohanteringProps } from './IFranvarohanteringProps';
import { IFranvarohanteringState} from './IFranvarohanteringState';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { AbcsenceService } from '../services';
import {CreateAbsence} from '../CreateAbsence/';


export default class Franvarohantering extends React.Component<IFranvarohanteringProps, IFranvarohanteringState> {

  private _abcsenceService = new AbcsenceService(this.props.siteUrl, this.props.SPHttpClient);

  constructor(props: IFranvarohanteringProps){
    super(props);  

    this.state ={
      show: false
    };

  }
  public componentDidMount(){
    this.getListItems();
  }

  public render(): React.ReactElement<IFranvarohanteringProps> {
    return (
      <div className={styles.franvarohantering}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <div>
                <PrimaryButton
                  text="Create Event"
                  onClick={() => this.toogleShow()}
                />
                {this.state.show && <div><CreateAbsence {...this.props} /></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  private toogleShow(){
    const { show } = this.state;
    console.log(show);

    this.setState({
      show: !show
    });
  }

  private getListItems(){
    this._abcsenceService.getlistItems();
  }

 

}
