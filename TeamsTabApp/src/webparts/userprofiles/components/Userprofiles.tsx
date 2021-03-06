import * as React from 'react';
import styles from './Userprofiles.module.scss';
import { IUserprofilesProps } from './IUserprofilesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as microsoftTeams from '@microsoft/teams-js';

export default class Userprofiles extends React.Component<IUserprofilesProps, {}> {

  public _teamsContext: microsoftTeams.Context;
  protected onInit(): Promise<any> {
    let retVal: Promise<any> = Promise.resolve();
    if (this.context.microsoftTeams) {
      retVal = new Promise((resolve, reject) => {
        this.context.microsoftTeams.getContext(context => {
          this._teamsContext = context;
          resolve();
        });
      });
    }
    return retVal;
  }

  constructor(props){
    super(props)

    
  }
  componentDidMount(){
    this._teamsContext;
  }
  public render(): React.ReactElement<IUserprofilesProps> {

    let title: string = '';
    let subTitle: string = '';
    let siteTabTitle: string = '';
    if (this._teamsContext) {
      // We have teams context for the web part
      title = "Welcome to Teams!";
      subTitle = "Building custom enterprise tabs for your business.";
      siteTabTitle = "We are in the context of following Team: " + this._teamsContext.teamName;
    }
    else
    {
      // We are rendered in normal SharePoint context
      title = "Welcome to SharePoint!";
      subTitle = "Customize SharePoint experiences using Web Parts.";
     // siteTabTitle = "We are in the context of following site: " + this.context.pageContext.web.title;
    }
    
    return (
      <div className={ styles.userprofiles }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <span className={ styles.title }>${title}</span>
            <p className={ styles.subTitle }>${subTitle}</p>
            <p className={ styles.description }>${siteTabTitle}</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
