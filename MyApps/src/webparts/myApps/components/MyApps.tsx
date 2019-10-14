import * as React from 'react';
import styles from './MyApps.module.scss';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { IMyAppsProps } from './IMyAppsProps';
import {IMyAppsPnP} from '../Model';
import {Calendar} from './';
import { escape } from '@microsoft/sp-lodash-subset';
import { TaxonomyPicker, IPickerTerms } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";
import { PeoplePicker } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import {default as pnp, ItemAddResult, Item} from 'sp-pnp-js';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/components/Button';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import {List} from 'office-ui-fabric-react/lib/List';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

import { IListItem } from '../../../models';
import {CalendarListService} from '../services';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px'
});
export interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  value: number;
}



export default class MyApps extends React.Component<IMyAppsProps, IMyAppsPnP> {
  private _selection: Selection;
  private _allItems: IListItem[];
  private _columns: IColumn[];
  private _listService: CalendarListService;

  constructor(props: IMyAppsProps) {   

    super(props);

    
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleLocation = this.handleLocation.bind(this);

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() })
    });
     // Populate with items for demos.
     this._allItems = [];
     for (let i = 0; i < 200; i++) {
       this._allItems.push({
         Id: i,
         Title: 'Item ' + i,
       });
     }

  
   // this._onCheckboxChange = this._onCheckboxChange.bind(this);
   // this._onRenderFooterContent = this._onRenderFooterContent.bind(this);
   // this.createItem = this.createItem.bind(this);
   // this.onTaxPickerChange = this.onTaxPickerChange.bind(this);
   // this._getManager = this._getManager.bind(this);
    this.state = {
      Id: null,
      title:"",
      description:"",
      location:"",
      endDate: "",
      eventDate: "",
      category: "",
      selectedItems: [],
      listItems: [],
      hideDialog: true,
      showPanel: false,
      dpselectedItem: undefined,
      dpselectedItems: [],  
      disableToggle:false,
      defaultChecked:false,
      termKey: undefined,
      userIDs: [],
   //   userManagerIDs: [],
      pplPickerType: "",
      status:"",
      isChecked: false,
      required:"This is required",
      onSubmission:false,
      termnCond:false,
      items: this._allItems,
      selectionDetails: this._getSelectionDetails()
    };
  }
 public async componentDidMount(){
  await this.showAllItems();
}
 
public async componentDidUpdate(){
 
}
  public render(): React.ReactElement<IMyAppsPnP> {
    const { items, selectionDetails } = this.state;

  console.log(this.props);    
    const { dpselectedItem, dpselectedItems } = this.state;
    const { title, description } = this.state;   
    pnp.setup({
      spfxContext: this.props.context
    });
 
    return (<div className={styles.myApps}>

      
                        <div className={styles.container}>
                      
                            <div className="ms-Grid-col ms-u-sm2 block">
                            <DefaultButton text="Create new item" onClick={() => { this.onShowDialog();}} />
                            <DefaultButton text="All items" onClick={() => { this.showAllItems();}} />
                          </div> 
                          <Calendar  spHttpClient={this.props.spHttpClient} spSiteUrl={this.props.spSiteUrl} />
                          <div>                         
                                <div>
                                  <Fabric>
                                  <div className={exampleChildClass}>{selectionDetails}</div>
                                  <TextField
                                    className={exampleChildClass}
                                    label="Filter by name:"
                                    onChange={this._onFilter}
                                    styles={{ root: { maxWidth: '300px' } }}
                                  />
                                  <MarqueeSelection selection={this._selection}>
                                    <DetailsList
                                      items={items}
                                      columns={this._columns}
                                      setKey="set"
                                      layoutMode={DetailsListLayoutMode.justified}
                                      selection={this._selection}
                                      selectionPreservedOnEmptyClick={true}
                                      ariaLabelForSelectionColumn="Toggle selection"
                                      ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                                      checkButtonAriaLabel="Row checkbox"
                                      onItemInvoked={this._onItemInvoked}
                                    />
                                  </MarqueeSelection>
                                </Fabric>
                                </div>
                           
                         </div>
                        </div>
    <div>
          <Dialog
                hidden={this.state.hideDialog}
                onDismiss={this._closeDialog} 
                dialogContentProps={{
                  type: DialogType.close,
                }}
                modalProps={{
                  titleAriaId: 'myLabelId',
                  subtitleAriaId: 'mySubTextId',
                  isBlocking: false,
                  containerClassName: 'ms-dialogMainOverride'
                }}>
                <form>
                      <div className={styles.container}>
                        <div className={`ms-Grid-row ms-bgColor-neutralLight ms-fontColor-white ${styles.row}`}>
                          <div className="ms-Grid-col ms-u-sm4 block">
                            <label className="ms-Label">Employee Name</label>
                          </div>
                          <div className="ms-Grid-col ms-u-sm8 block">
                            <TextField value={this.state.title} required={true} onChanged={this.handleTitle}
                              errorMessage={(this.state.title.length === 0 && this.state.onSubmission === true) ? this.state.required : ""} />
                          </div>
                          <div className="ms-Grid-col ms-u-sm4 block">
                            <label className="ms-Label">Location</label>
                          </div>
                          <div className="ms-Grid-col ms-u-sm8 block">
                            <TextField value={this.state.location} required={true} onChanged={this.handleLocation}
                              errorMessage={(this.state.title.length === 0 && this.state.onSubmission === true) ? this.state.required : ""} />
                          </div>
                          <div className="ms-Grid-col ms-u-sm4 block">
                              <label className="ms-Label">Category</label><br />
                            </div>
                            <div className="ms-Grid-col ms-u-sm8 block">
                              <Dropdown
                                placeHolder="Select an Option"
                                label=""
                                id="component"
                                selectedKey={dpselectedItem ? dpselectedItem.key : undefined}
                                ariaLabel="Basic dropdown example"
                                options={[
                                  { key: 'Meeting', text: 'Meeting' },
                                  { key: 'Work hours', text: 'Work hours' },
                                  { key: 'Business', text: 'Business' },
                                  { key: 'Holiday', text: 'Holiday' },
                                  { key: 'Get-together', text: 'Get-together' },
                                  { key: 'Gifts', text: 'Gifts' },
                                  { key: 'Birthday', text: 'Birthday' },
                                  { key: 'Anniversary', text: 'Anniversary' }
                                  

                                ]}
                                onChanged={this._changeState}
                                onFocus={this._log('onFocus called')}
                                onBlur={this._log('onBlur called')}
                              />
                            </div>
                          <div className="ms-Grid-col ms-u-sm4 block">
                            <label className="ms-Label">Job Description</label>
                          </div>
                          <div className="ms-Grid-col ms-u-sm8 block">
                            <TextField multiline autoAdjustHeight value={this.state.description} onChanged={this.handleDesc}
                            />
                          </div>
                        </div>
                      </div>
                  </form>
                <DialogFooter>
                          <div className="ms-Grid-col ms-u-sm2 block">
                            <PrimaryButton text="Create" onClick={() => { this.onSave(); this._closeDialog(); }} />
                          </div>
                          <div className="ms-Grid-col ms-u-sm2 block">
                            <DefaultButton text="Cancel" onClick={() => { this._closeDialog(); }} />
                          </div> 
                </DialogFooter>
              </Dialog>
    </div>
    </div>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as IListItem).Title;
      default:
        return `${selectionCount} items selected`;
    }
  }
  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    this.setState({
      items: text ? this._allItems.filter(i => i.Title.toLowerCase().indexOf(text) > -1) : this._allItems
    });
  };

  private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.name}`);
  };

    /**HANDLE INPUT VALUE */
  private handleLocation(value: string): any {
    return this.setState({
      location: value
    });
 
  }
  private handleTitle(value: string): any {
    return this.setState({
      title: value
    });
 
  }
  
  private handleDesc(value: string): void {
    return this.setState({
      description: value
    });
  }
    /**HANDLE INPUT VALUE */

    private _changeState = (item: IDropdownOption): void => {
     
      console.log('here is the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
      this.setState({ dpselectedItem: item });
    //  if (item.text == "Meeting") {
    //    this.setState({ defaultChecked: false });
    //    this.setState({ disableToggle: true });
    //  }
    //  else {
    //    this.setState({ disableToggle: false });
    //  }
    }
    private _log(str: string): () => void {
      return (): void => {
        console.log(str);
      };
    }

    /**HANDLE ONSAVE */
private onSave(){
  
  pnp.sp.web.lists.getByTitle("Calendar").items.add({
    Title: this.state.title,
    Description: this.state.description,
    Location: this.state.location,
    Category: this.state.dpselectedItem.key
  })
  .then((iar: ItemAddResult) => {
    console.log(iar);
    this.setState({ status: "Your request has been submitted sucessfully." });
    this._closeDialog();
  });

 
}
   /**HANDLE ONSAVE */

   private showAllItems(){

    pnp.sp.web.lists.getByTitle('Calendar').items.get().then((items: any[]) => {
      
      this.setState({
        selectedItems: items
      });
       
      this._columns = [
        { key: 'column1', name: 'ID', fieldName: 'ID', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Title', fieldName: this.state.title, minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Title', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true }
      ];
  });

 

   }



   private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }
  private _showDialog = (status: string): void => {
    this.setState({ hideDialog: false });
    this.setState({ status: status });
  } 

private _onClosePanel = () => {
  this.setState({ showPanel: false });
}
 
private _onShowPanel = () => {
  this.setState({ showPanel: true });
}
 
private onShowDialog(): void {

  this._showDialog("Submitting Request");
 
}
 
private validateForm():void{
  let allowCreate: boolean = true;
  this.setState({ onSubmission : true });
   
  if(this.state.title.length === 0)
  {
    allowCreate = false;
  }
  if(this.state.termKey === undefined)
  {
    allowCreate = false;
  }   
  
  if(allowCreate)
  {
     this._onShowPanel();
  }
  else
  {
    //do nothing
  } 
}
 
}
