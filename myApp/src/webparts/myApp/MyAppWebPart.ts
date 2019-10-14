import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MyAppWebPartStrings';
import MyApp from './components/MyApp';
import { IMyAppProps } from './components/IMyAppProps';

export default class MyAppWebPart extends BaseClientSideWebPart<IMyAppProps> {

  public render(): void {
    const element: React.ReactElement<IMyAppProps > = React.createElement(
      MyApp,
      {
        description: this.properties.description,
        graphClientFactory: this.context.msGraphClientFactory,
        msGraphClient: this.properties.msGraphClient
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
