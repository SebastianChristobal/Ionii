import * as React from 'react';
import styles from './Kalender.module.scss';
import { IKalenderProps } from './IKalenderProps';
import { escape } from '@microsoft/sp-lodash-subset';

import {IKalenderListITem} from '../../../models';
import {ListService} from '../../../services';

export default class Kalender extends React.Component<IKalenderProps, {}> {
private _listService: ListService;
private kalenderListItem: IKalenderListITem;



constructor(props: IKalenderProps){
  super(props);

  this.state ={
    listItem: []
  };
    this.getListItems = this.getListItems.bind(this);
} 

public getListItems (): void{

  this._listService.getListItems()
  .then((items: IKalenderListITem[]) =>{
    console.log(items);
    this.setState({listItem: items});
  });
}


public componentDidMount(){

}


  public render(): React.ReactElement<IKalenderProps> {
    
    return (
      <div className={ styles.kalender }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  
}
