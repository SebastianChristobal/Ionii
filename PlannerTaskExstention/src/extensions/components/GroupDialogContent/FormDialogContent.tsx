import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DialogFooter, DialogContent } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Stack} from 'office-ui-fabric-react/lib/Stack';
import { IFormDialogState } from './IFormDialogState';
import { IGroupFormDialogProps } from './IGroupFormDialogProps';
import { GroupServiceManager,DocLibraryService } from '../services';
import { PlannerTask } from '@microsoft/microsoft-graph-types';
import { GroupDropdownContent } from '../GroupDropDownContent';
import { DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {Peoplepicker} from '../Peoplepicker/Peoplepicker';
import { IPeoplePickerUserItem, IDocument, IDocumentCollection } from '../models';

const DayPickerStrings: IDatePickerStrings = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker'
};

const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 15px 0',
    maxWidth: '300px'
  }
});

export class FormDialogContent extends React.Component<IGroupFormDialogProps, IFormDialogState>   {
  private _groupServiceManager = new GroupServiceManager(this.props.graphClientFactory);
  private _docLibraryServiceManager = new DocLibraryService(this.props.siteUrl, this.props.SPHttpClient);

public componentDidMount(){
  this._getDocumentBySelectedRowID();
}

  constructor(props: IGroupFormDialogProps) {
    super(props);

    this.state = {
      groups: [],
      plannerTask: [],
      planner:[],
      plannerBucket: [],
      hideDialog: false,
      title: '',
      description: '',
      groupID: '',
      firstDayOfWeek: DayOfWeek.Sunday,
      dueDate: '',
      assignedUsers: [],
      documentItem: []
    };
    //this._handleTitleOnChange = this._handleTitleOnChange.bind(this);
    // this._handleDescOnChange = this._handleDescOnChange.bind(this);
    //  this._handleDate = this._handleDate.bind(this);
    this._createPlanner = this._createPlanner.bind(this);
  }
  public render() {
    return (<div>
      <DialogContent
        title="My dialog"
        onDismiss={this.props.close}
        showCloseButton={true}
      >
        {this.renderForm()}
        <DialogFooter>
          <PrimaryButton onClick={this._createPlanner} text="Send" />
          <DefaultButton onClick={this._closeDialog} text="Don't send" />
        </DialogFooter>
      </DialogContent>
    </div>);
  }
  private renderForm(): JSX.Element {
    const { firstDayOfWeek } = this.state;
    return (<div>
      <Stack>
        <GroupDropdownContent {...this.props} onSelectedValue={this.handleDropdownValue.bind(this)} />
        <TextField label="Title"  value={this.state.title} onChange={this._handleTitleOnChange.bind(this)} />
        <TextField label="Description" multiline rows={3} value={this.state.description} onChange={this._handleDescOnChange.bind(this)} />
        <DatePicker
          label = "Välj datum"
          className={controlClass.control}
          firstDayOfWeek={firstDayOfWeek}
          strings={DayPickerStrings}
          placeholder="Select a date..."
          ariaLabel="Select a date"
          onSelectDate={this._handleDate.bind(this)}
        />
        < Peoplepicker graphClientFactory={this.props.graphClientFactory} onAssignedUsers={this._handleAssignedUser.bind(this)} />
      </Stack>
      <div>{this.renderDoc()}</div>
    </div>
    );
  }
  private renderDoc(): JSX.Element{
    let myItems;
   
    this.state.documentItem.map(item =>{
      myItems = item.Title;
    });
    
  return<div style={{marginTop:'10px'}}><Icon iconName="Attach" /> {myItems}</div>
  }

  private _handleAssignedUser(value: IPeoplePickerUserItem[]){
    
    this.setState({
      assignedUsers:value
    });   
  }
  private _getDocumentBySelectedRowID(){
    this._docLibraryServiceManager.getDocument(this.props.selectedRowId).then((item: IDocument[]) =>{
      
      this.setState({
        documentItem: item
      })
    })
  }
  
  private _handleDate(date){
    //console.log(date);
    this.setState({
      dueDate: date
    });
  }
  private _handleTitleOnChange(inputValue) {
    // console.log(inputValue.target.value);
    this.setState({
      title: inputValue.target.value
    });
  }
  private _handleDescOnChange(inputValue) {
   // console.log(inputValue.target.value);
    this.setState({
      description: inputValue.target.value
    });
  }
  public handleDropdownValue({key, text}) {
   
    if(key != null){
     this._groupServiceManager.getPlannerBucket(key).then(bucket =>{
       this.setState({
         plannerBucket: bucket
       });
     });
  }
  else if (key){
    console.log("Ready");
  }
}
  public _createPlanner(): any {
    let planId: string;
    let bucketId: string;
    let documentUrl: string;
    let documentTitle: string;
    let assignmentsObjekt = {};

    this.state.documentItem.map(item =>{
      documentUrl = item.ServerRedirectedEmbedUri;
      documentTitle = item.Title
    });

    let description: string = this.state.description +', ' + `<a href=${documentUrl}>${documentTitle}</a>`;

    this.state.assignedUsers.map((user) =>{
     assignmentsObjekt[user.id] =  {
          "@odata.type": "#microsoft.graph.plannerAssignment",
          "orderHint": " !"
        };
    });
    

    this.state.plannerBucket.map(bucketItems =>{
      planId = bucketItems.planId;
      bucketId = bucketItems.id;
    });
    //console.log("BucketID: " + bucketId + "," + "PlanID: " + planId);

    const newItem: PlannerTask = {
      title: this.state.title,
      details: {
        description: description
      },
      dueDateTime: this.state.dueDate,
      planId: planId,
      bucketId: bucketId,
      assignments: assignmentsObjekt,
    };
    this._groupServiceManager.createPlanner(newItem);
  }
  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }
}

