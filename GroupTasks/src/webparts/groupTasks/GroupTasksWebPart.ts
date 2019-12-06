import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import GroupService from './components/services/GroupService';
import * as strings from 'GroupTasksWebPartStrings';
import GroupTasks from './components/GroupTasks';
import { IGroupTasksProps } from './components/IGroupTasksProps';

export interface IGroupTasksWebPartProps {
  description: string;
}

export default class GroupTasksWebPart extends BaseClientSideWebPart<IGroupTasksWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGroupTasksProps > = React.createElement(
      GroupTasks,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }
  protected onInit(): Promise<void> {
    return super.onInit().then(() => {
      GroupService.setup(this.context);
    });
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
