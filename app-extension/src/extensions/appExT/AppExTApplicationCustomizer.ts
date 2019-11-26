import * as React from 'react';
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { SPHttpClient } from "@microsoft/sp-http";
import styles from './AppCostumizer.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import {ListService} from '../../services';
import {IListItem} from '../../models'

import * as strings from 'AppExTApplicationCustomizerStrings';


const LOG_SOURCE: string = 'AppExTApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAppExTApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  Top: string;
  Bottom: string;
  
}


/** A Custom Action which can be run during execution of a Client Side Application */
export default class AppExTApplicationCustomizer
  extends BaseApplicationCustomizer<IAppExTApplicationCustomizerProperties> {
 
    private _listService; 
    // These have been added
    private _topPlaceholder: PlaceholderContent | undefined;
    private _bottomPlaceholder: PlaceholderContent | undefined;
   
  @override
  public onInit(): Promise<void> {
    this._listService = new ListService(this.context.pageContext.web.absoluteUrl, this.context.spHttpClient);

    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);


    // Wait for the placeholders to be created (or handle them being changed) and then
	// render.
  this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
	
  return Promise.resolve<void>();
  }
  private listItems(){
    this._listService.getAllListItems().then((items: IListItem[]) =>{
      console.log(items);
    });
  }


  private _renderPlaceHolders(): void {
    
    this.listItems();
    console.log("HelloWorldApplicationCustomizer._renderPlaceHolders()");
    console.log(
      "Available placeholders: ",
      this.context.placeholderProvider.placeholderNames
        .map(name => PlaceholderName[name])
        .join(", ")
    );

    // Handling the top placeholder
    if (!this._topPlaceholder) {
      this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this._topPlaceholder) {
        console.error("The expected placeholder (Top) was not found.");
        return;
      }

      if (this.properties) {
        let topString: string = this.properties.Top;
        if (!topString) {
          topString = "(Top property was not defined.)";
        }

        if (this._topPlaceholder.domElement) {
          this._topPlaceholder.domElement.innerHTML = `
          <div class="${styles.app}">
            <div class="${styles.top}">
              <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(
                topString + " Meddelanden"
              )}
            </div>
          </div>`;
        }
      }
    }

    // Handling the bottom placeholder
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Bottom,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this._bottomPlaceholder) {
        console.error("The expected placeholder (Bottom) was not found.");
        return;
      }

      if (this.properties) {
        let bottomString: string = this.properties.Bottom;
        if (!bottomString) {
          bottomString = "(Bottom property was not defined.)";
        }

        if (this._bottomPlaceholder.domElement) {
          this._bottomPlaceholder.domElement.innerHTML = `
          <div class="${styles.app}">
            <div class="${styles.bottom}">
              <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(
                bottomString
              )}
            </div>
          </div>`;
        }
      }
    }
  }
  private _onDispose(): void {
    console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }
}
