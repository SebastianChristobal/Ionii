import * as React from 'react';
import styles from './Ka.module.scss';
import { IKaProps } from './IKaProps';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/components/Button';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { escape } from '@microsoft/sp-lodash-subset';

import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import { WebPartTitle } from '@pnp/spfx-controls-react/lib/WebPartTitle';
import {
  IUpCalendarProps,
  IUpCalendarState,

} from './UpCalendar/';
import { IEventDTO, IEvent } from './../../../models';
import { CalendarService } from '../../../services';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px'
});

export interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  value: number;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: {};
}

export default class Ka extends React.Component<IKaProps, IUpCalendarState> {

  private _calendarService = new CalendarService(this.props.siteAbsoluteUrl, this.props.spHttpClient);

  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  

  constructor(props: IKaProps) {
    super(props);
    this.state = {
      title:"",
      calendarEvents: [],
      calendarInternalName: "",
      hideDialog: true,
      status:"",
      showPanel: false,
      description: "",
      location:"",
      dpselectedItems: [],
      onSubmission:false,
      termKey: undefined,
      dpselectedItem: undefined,
      required:"This is required",
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  
  }

  public render(): React.ReactElement<IKaProps> {
    const { dpselectedItem, dpselectedItems } = this.state;
    return (
      <div className={ styles.ka }>
      
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <div>      
                <div className="ms-Grid-col ms-u-sm2 block">
                <DefaultButton text="Create new item" onClick={() => { this.onShowDialog();}} />
                <DefaultButton text="All items" onClick={() => { this._loadEvents();}} />
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
            </div>
          </div>
        </div>
      </div>
    );
  }
      public async componentDidMount() {
       // await  this._loadEvents();
       }

       private onSubmit(){
        let newItem = this.state;

        this._calendarService.createItem(newItem[]).then(() =>{
          
          this._loadEvents();
        })
       }

      private onSave(): void{
       
          this.setState({
            title: this.state.title
          })

          this.onSubmit();
      }
      private _loadEvents() {
        this._calendarService.getAllItems().then((eventDTO: IEventDTO) => {
          console.log(eventDTO.value)
          this.setState({ calendarEvents: eventDTO.value});
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
    private _changeState = (item: IDropdownOption): void => {
      console.log(item);
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
