import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'KaWebPartStrings';
import Ka from './components/Ka';
import { IKaProps } from './components/IKaProps';

import { CalendarService } from '../../services';
export interface IKaWebPartProps {
  description: string;
  title: string;
  eventList: string;
  showCount: number;
  webPartBorder: boolean;
  webPartBackgroundColor: string;
  webPartTitleFilledColor:boolean;
}

export default class KaWebPart extends BaseClientSideWebPart<IKaWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IKaProps > = React.createElement(
      Ka,
      {
        description: this.properties.description,
        siteAbsoluteUrl: this.context.pageContext.web.absoluteUrl,
        spHttpClient: this.context.spHttpClient,
        title: this.properties.title,
        displayMode: this.displayMode,
        updateProperty: (value: string) => {
          this.properties.title = value;
        },
        eventList: this.properties.eventList,
        showCount: this.properties.showCount,
        webPartBorder: this.properties.webPartBorder,
        webPartBackgroundColor: this.properties.webPartBackgroundColor,
        webPartTitleFilledColor:this.properties.webPartTitleFilledColor
       
        
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
