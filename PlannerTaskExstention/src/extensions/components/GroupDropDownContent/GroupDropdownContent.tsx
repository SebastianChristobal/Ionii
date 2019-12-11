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
      dropDownValue: []
    };
  }
  public componentDidMount() {
    this._getGroups();
  }

  public render() {

    return (<div>
      <Stack tokens={stackTokens}>
        <Dropdown
          placeholder="Klicka här"
          label="Välj Teams"
          children={this.state}
          options={this.state.options}
          onChanged={dropDownValue => this._handleSelectedGroup(dropDownValue)}
          styles={dropdownStyles} />
      </Stack>
    </div>);
  }
  public _handleSelectedGroup(dropDownValue) {
   
    this.setState({
      dropDownValue: dropDownValue
    })
    this.props.onSelectedValue(dropDownValue);
  }
  public _renderAllGroups() {
    let myItem: IDropdownOption[] = [];
    this.state.groups.map(group => {
      myItem.push({
        key: group.id,
        text: group.displayName
      })
    });
    this.setState({
      options: myItem
    })
  
  }
  public _getGroups(): void {
    this._groupServiceManager.getGroups().then(group => {
      this.setState({
        groups: group
      });
      this._renderAllGroups();
    });
    
  }
}