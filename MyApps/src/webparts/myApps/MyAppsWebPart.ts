import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'MyAppsWebPartStrings';
import MyApps from './components/MyApps';
import { IMyAppsProps } from './components/IMyAppsProps';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { IListItem } from '../../models';

export interface IMyAppsWebPartProps {
  description: string;
}


const LIST_API_ENDPOINT: string = `/_api/web/lists/GetByTitle('Calendar')`;
const SELECT_QUERY: string = `$select=Id,Title,Created,Description,EndDate,EventDate,Location,Category`;

export default class MyAppsWebPart extends BaseClientSideWebPart<IMyAppsWebPartProps> {

  private _listItems: IListItem[] = [];

  private _onGetListItems = (): void =>{
  
    this._getListItems()
    .then(response =>{
      this._listItems = response;
      this.render();
    });

  }
  private _getListItems(): Promise<IListItem[]>{
    return this.context.spHttpClient.get(
      this.context.pageContext.web.absoluteUrl + LIST_API_ENDPOINT +`/items?`+ SELECT_QUERY , 
      SPHttpClient.configurations.v1)
      .then(res =>{
        return res.json();
      })
      .then (jsonRes =>{
        return jsonRes.value;
      })as Promise<IListItem[]>;

  }

  public render(): void {
    const element: React.ReactElement<IMyAppsProps > = React.createElement(
      MyApps,
      {
        description: this.properties.description,
        spListItems: this._listItems,
        onGetListItems: this._onGetListItems,
        context: this.context,
         spHttpClient:this.context.spHttpClient,
        spSiteUrl:this.context.pageContext.web.absoluteUrl,
        serviceScope:this.context.serviceScope
        
       // onAddListItem: this._onAddListItem,
       // onUpdateListItem: this._onUpdateListItem,
       // onDeleteListItem: this._onDeleteListItem

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
