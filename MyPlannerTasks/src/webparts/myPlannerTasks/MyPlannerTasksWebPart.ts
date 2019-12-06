import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import GroupService from './components/services/GroupService';
import * as strings from 'MyPlannerTasksWebPartStrings';
import MyPlannerTasks from './components/MyPlannerTasks';
import { IMyPlannerTasksProps } from './components/IMyPlannerTasksProps';
import {sp} from "@pnp/sp";

export interface IMyPlannerTasksWebPartProps {
  description: string;
}

export default class MyPlannerTasksWebPart extends BaseClientSideWebPart<IMyPlannerTasksWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMyPlannerTasksProps > = React.createElement(
      MyPlannerTasks,
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
