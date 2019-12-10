import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DialogFooter, DialogContent } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import {IFormDialogState} from './IFormDialogState';
import {IGroupFormDialogProps} from './IGroupFormDialogProps';
import {GroupServiceManager} from '../../components/services/';
import { ITaskCollection } from '../models';
import { ThemeSettingName } from '@uifabric/styling';
import { ITask } from '../../plannerTaskExtension/models';
import { PlannerTask } from '@microsoft/microsoft-graph-types';


export class FormDialogContent extends React.Component<IGroupFormDialogProps, IFormDialogState>   {

  private _groupServiceManager = new GroupServiceManager(this.props.graphClientFactory);

  constructor(props: IGroupFormDialogProps) {
    super(props);

    this.state = {
      groups: [],
      plannerTask:[],
      hideDialog: false,
      optionSelected: '',
      myInput: '',
      Title: '',
      Description: ''
    };

    this._handleTitleOnChange = this._handleTitleOnChange.bind(this);
    this._createPlanner = this._createPlanner.bind(this);
  }
   public componentDidMount(){
    this._getGroups();
    this._getMyPlanners();
    this._getPlanner();
  }

  private _handleTitleOnChange(inputValue){
    // console.log(inputValue);
       this.setState({
           Title: inputValue
       });
   }
   private _handleDescOnChange(inputValue){
   //  console.log(inputValue);
       this.setState({
           Description: inputValue
       });
   }
 

  public render() {
    return (<div>
      <DialogContent
        title="My dialog"
        onDismiss={this.props.close}
        showCloseButton={true}
        subText="Hej jag är innehåll"
      >
        {this.renderForm()}
        <DialogFooter>
          <PrimaryButton onClick={this._createPlanner} text="Send"/>
          <DefaultButton onClick={this._closeDialog} text="Don't send" />
        </DialogFooter>
      </DialogContent>
    </div>);
  }

  private renderForm(): JSX.Element {
    return (<div>
      <Stack>
        <TextField label="Title" value={this.state.Title} onChanged={inputValue =>this._handleTitleOnChange(inputValue)} />
        <TextField label="Description" value ={this.state.Description} onChanged={inputValue =>this._handleDescOnChange(inputValue)} />
      </Stack>
      </div>
    );
  }

public _createPlanner(): any{
  
   const newItem: PlannerTask = {
    title:this.state.Title,
    planId: "fvEffTDjp0KQv7m9Oxc6sZcAEiFe"
   }
   this._groupServiceManager.createPlanner(newItem);

}

  public _getMyPlanners(): void{
    this._groupServiceManager.getPlanners().then(plannerTasks =>{});
  }
  public _getPlanner():void{
    let myPlanner = this.state.plannerTask;
    console.log(myPlanner);
  }

  public _getGroup(): void{
    let firstGroupID = this.state.groups[1].id;
    this._groupServiceManager.getGroup(firstGroupID)
   .then(() =>{});
  }

  public _getGroups(): void{
    this._groupServiceManager.getGroups().then(group =>{
      this.setState({
        groups: group
      });
    });
  }
  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }
}

