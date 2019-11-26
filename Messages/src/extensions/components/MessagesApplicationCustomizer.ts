import * as React from 'react';
import * as ReactDom from 'react-dom';
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { escape} from '@microsoft/sp-lodash-subset';
import { Dialog } from '@microsoft/sp-dialog';
import * as strings from 'MessagesApplicationCustomizerStrings';
const LOG_SOURCE: string = 'MessagesApplicationCustomizer';

import {MessageMain, IMessageMainProps} from './MessageMain';

export interface IMessagesApplicationCustomizerProperties {
 
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class MessagesApplicationCustomizer
  extends BaseApplicationCustomizer<IMessagesApplicationCustomizerProperties> {
    
    private _topPlaceHolder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    
    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceholder);
    this._renderPlaceholder();
    return Promise.resolve<void>();
  }
  private _onDispose(): void { }

  private async _renderPlaceholder(): Promise<void> {
    // check if the application customizer has already been rendered
    if (!this._topPlaceHolder) {
      // create a DOM element in the bottom placeholder for the application customizer to render
      this._topPlaceHolder = this.context.placeholderProvider
        .tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });
    }

    // if the top placeholder is not available, there is no place in the UI
    // for the app customizer to render, so quit.
    if (!this._topPlaceHolder) {
      return;
    }

    const element: React.ReactElement<IMessageMainProps> = React.createElement(
      MessageMain,
      {
        siteAbsoluteUrl:this.context.pageContext.web.absoluteUrl,
        spHttpClient:this.context.spHttpClient
        
      }
    );

   // this._bottomPlaceholder.domElement.parentElement.parentElement.setAttribute('style', 'z-index: 999;');

    // render the UI using a React component
    ReactDom.render(element, this._topPlaceHolder.domElement);
  }


}
