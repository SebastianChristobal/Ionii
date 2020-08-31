import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneButton
} from '@microsoft/sp-webpart-base';


import * as strings from 'MicrobizzWebPartStrings';
import Microbizz from './components/Microbizz/Microbizz';
import { IMicrobizzProps } from './components/Microbizz/IMicrobizzProps';


export interface IMicrobizzWebPartProps {
  description: string;
}


export default class MicrobizzWebPart extends BaseClientSideWebPart<IMicrobizzWebPartProps> {

  

  public render(): void {

   
    const element: React.ReactElement<IMicrobizzProps > = React.createElement(
      Microbizz,
      {
        description: this.properties.description,
        SPHttpClient: this.context.spHttpClient,
        currentUserEmail : this.context.pageContext.user.email,
        currentUserDisplayName: this.context.pageContext.user.displayName,
        httpClient: this.context.httpClient,
        context: this.context,
        currentUserPermissions: this.context.pageContext.web.permissions
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
