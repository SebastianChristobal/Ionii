import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'FranvarohanteringWebPartStrings';
import Franvarohantering from './components/Frånvarohantering/Franvarohantering';
import { IFranvarohanteringProps } from './components/Frånvarohantering/IFranvarohanteringProps';



export default class FranvarohanteringWebPart extends BaseClientSideWebPart<IFranvarohanteringProps> {

  public render(): void {
    const element: React.ReactElement<IFranvarohanteringProps > = React.createElement(
      Franvarohantering,
      {
        description: this.properties.description,
        siteUrl: this.context.pageContext.web.absoluteUrl,
        SPHttpClient: this.context.spHttpClient
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
