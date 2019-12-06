import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DialogFooter, DialogContent } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import {IFormDialogState} from './IFormDialogState';
import {IGroupFormDialogProps} from './IGroupFormDialogProps';
import {GroupServiceManager} from '../../components/services/';


export class FormDialogContent extends React.Component<IGroupFormDialogProps, IFormDialogState>   {

  private _groupServiceManager = new GroupServiceManager;

  constructor(props: IGroupFormDialogProps) {
    super(props);

    this.state = {
      groups: [],
      tasks:[],
      hideDialog: false,
      optionSelected: '',
      myInput: '',
      Title: '',
      Description: ''
    };

    this._handleTitleOnChange = this._handleTitleOnChange.bind(this);
  }

   public componentDidMount(){
    this._getPlannerTasks();
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
          <PrimaryButton onClick={this._closeDialog} text="Send"/>
          <DefaultButton onClick={this._closeDialog} text="Don't send" />
        </DialogFooter>
      </DialogContent>
    </div>);
  }

  private renderForm(): any {
    return (<div>
      <Stack>
        <TextField label="Title" value={this.state.Title} onChanged={inputValue =>this._handleTitleOnChange(inputValue)} />
        <TextField label="Description" value ={this.state.Description} onChanged={inputValue =>this._handleDescOnChange(inputValue)} />
      </Stack>
      </div>
    );
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

  public _getPlannerTasks(): void{
    console.log("planner funk");
    this._groupServiceManager.getPlannerTasks().then(task =>{
      this.setState({
        tasks: task
      })
    })
  
  }

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }
}

