import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { GroupServiceManager } from '../services';
import { IGroupDropdownContentProps } from './IGroupDropdownContentProps';
import { IGroupDropdownContentState } from './IGroupDropdownContentState';




const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 }
};

const stackTokens: IStackTokens = { childrenGap: 20 };

export class GroupDropdownContent extends React.Component<IGroupDropdownContentProps, IGroupDropdownContentState>   {

  private _groupServiceManager = new GroupServiceManager(this.props.graphClientFactory);

  constructor(props: IGroupDropdownContentProps) {
    super(props);

    this.state = {
      groups: [],
      options: [],
      dropDownValue: [],
      recentPlans:[],
    };
  }
  public componentDidMount() {
    this._recentPlans();
  }

  public render() {
    this._renderRecentPlans();
    return (<div>
      <Stack tokens={stackTokens}>
        <Dropdown
          placeholder="Klicka här"
          label="Välj Planner"
          options={this.state.options}
          onChanged={dropDownValue => this._handleSelectedGroup(dropDownValue)}
          styles={dropdownStyles} />
      </Stack>
    </div>);
  }
  public _handleSelectedGroup(dropDownValue) {

    this.setState({
      dropDownValue: dropDownValue
    });
    this.props.onSelectedValue(dropDownValue);
  }

  public _recentPlans(): void{
    this._groupServiceManager.recentPlans().then( recentPlans =>{

      let dropDownValue: IDropdownOption[] = [];

      recentPlans.map(plans =>{
        dropDownValue.push({
          key: plans.id,
          text: plans.title
        });
      });

      this.setState({
        options: dropDownValue
      });
    });
  
  }

  public _renderRecentPlans(): void{

    let dropDownValue: IDropdownOption[] = [];
  
     if(this.state.recentPlans.length != 0){

      this.state.recentPlans.map(plans =>{

        dropDownValue.push({
          key: plans.id,
          text: plans.title
        });

      });
       this.setState({
         options: dropDownValue
       });
      
     }
  }
}