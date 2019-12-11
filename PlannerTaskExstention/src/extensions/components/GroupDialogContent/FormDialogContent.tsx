import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DialogFooter, DialogContent } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { IFormDialogState } from './IFormDialogState';
import { IGroupFormDialogProps } from './IGroupFormDialogProps';
import { GroupServiceManager } from '../services';
import { PlannerTask } from '@microsoft/microsoft-graph-types';
import { GroupDropdownContent } from '../GroupDropDownContent';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export class FormDialogContent extends React.Component<IGroupFormDialogProps, IFormDialogState>   {
  private _groupServiceManager = new GroupServiceManager(this.props.graphClientFactory);

  constructor(props: IGroupFormDialogProps) {
    super(props);

    this.state = {
      groups: [],
      plannerTask: [],
      plannerBucket: [],
      planner:[],
      hideDialog: false,
      Title: '',
      Description: '',
      groupID: ''
    };

    this._handleTitleOnChange = this._handleTitleOnChange.bind(this);
    this._createPlanner = this._createPlanner.bind(this);
    //this.getPlanner = this.getPlanner.bind(this);

  }
  public componentDidMount() {
    this._getGroups();
    this._getMyPlanners();
    this._getPlannerBucket();

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
    return (<div>
      <Stack>
        <GroupDropdownContent {...this.props} onSelectedValue={this.handleDropdownValue.bind(this)} />
        <TextField label="Title" value={this.state.Title} onChanged={inputValue => this._handleTitleOnChange(inputValue)} />
        <TextField label="Description" value={this.state.Description} onChanged={inputValue => this._handleDescOnChange(inputValue)} />
      </Stack>
    </div>
    );
  }
  public handleDropdownValue({key, text}) {
    this.setState({
      groupID: key
    })
    this.getPlanner();
  }
  public getPlanner() {

    this._groupServiceManager.getPlanner(this.state.groupID)
    .then(() =>{})
  }
  private _handleTitleOnChange(inputValue) {
    //  console.log(inputValue);
    this.setState({
      Title: inputValue
    });
  }
  private _handleDescOnChange(inputValue) {
    //   console.log(inputValue);
    this.setState({
      Description: inputValue
    });
  }
  public _createPlanner(): any {

    let planId: string;
    let bucketId: string;

    this.state.plannerTask.map(item => {
      bucketId = item.bucketId;
      planId = item.planId;
    });

    const newItem: PlannerTask = {
      title: this.state.Title,
      details: {
        description: this.state.Description
      },
      planId: planId,
      bucketId: bucketId,
      assignments: {
        "f4be8305-3b7c-4e04-ab6b-fda34d5cd4fb": {
          "@odata.type": "#microsoft.graph.plannerAssignment",
          "orderHint": " !"
        }
      }
    };
    this._groupServiceManager.createPlanner(newItem);
  }

  public _getMyPlanners(): void {
    this._groupServiceManager.getPlanners().then(planner => {
      this.setState({
        plannerTask: planner
      });
    });
  }
  public _getPlannerBucket(): void {
    this._groupServiceManager.getPlannerBucket().then(plannerBucket => {
      this.setState({
        plannerBucket: plannerBucket
      });
    });
  }
  public _getGroup(): void {
    let firstGroupID = this.state.groups[1].id;
    this._groupServiceManager.getGroup(firstGroupID)
      .then(() => {});
  }

  public _getGroups(): void {
    this._groupServiceManager.getGroups().then(group => {
      this.setState({
        groups: group
      });
    });
  }
  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }
}

