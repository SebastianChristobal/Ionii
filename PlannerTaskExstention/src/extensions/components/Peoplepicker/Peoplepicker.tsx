import * as React from 'react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { UserService } from '../services';
import { IUser, IPeoplePickerUserItem } from '../models';

import {
  IBasePickerSuggestionsProps,
  IBasePicker,
  ListPeoplePicker,
  NormalPeoplePicker,
  ValidationState
} from 'office-ui-fabric-react/lib/Pickers';

import { IPeoplepickerProps } from './IPeoplepickerProps';
import { IPeoplepickerState } from './IPeoplepickerState';

const suggestionProps: IBasePickerSuggestionsProps = {
  suggestionsHeaderText: 'Suggested People',
  mostRecentlyUsedHeaderText: 'Suggested Contacts',
  noResultsFoundText: 'No results found',
  loadingText: 'Loading',
  showRemoveButtons: true,
  suggestionsAvailableAlertText: 'People Picker Suggestions available',
  suggestionsContainerAriaLabel: 'Suggested contacts'
};

export class Peoplepicker extends React.Component<IPeoplepickerProps, IPeoplepickerState>{

  private _userService = new UserService(this.props.graphClientFactory);
  private _picker = React.createRef<IBasePicker<IUser>>();

  constructor(props: IPeoplepickerProps) {
    super(props);

    this.state = {
      users: [],
      mostRecentlyUsed: [],
      currentSelectedItems: [],
      currentPicker: 1,
      isPickerDisabled: false,
      delayResults: false,
    };
  }
  public componentDidMount() {
    this._getUsers();
  }
  public render() {
    let currentPicker: JSX.Element | undefined = undefined;

    switch (this.state.currentPicker) {
      case 1:
        currentPicker = this._renderNormalPicker();
        break;
      default:
    }
    return (<div>
        {currentPicker}
    </div>);
  }

  private _getUsers() {
    this._userService.getUsers().then(people => {
      this.setState({
        users: people
      });
    });
  }
  private _onItemsChange = (items: any[]): void => {
    this.setState({
      currentSelectedItems: items
    });
  }
  private _renderNormalPicker() {
    return (
      <NormalPeoplePicker
        onResolveSuggestions={this._onFilterChanged}
        onEmptyInputFocus={this._returnMostRecentlyUsed}
        getTextFromItem={this._getTextFromItem}
        pickerSuggestionsProps={suggestionProps}
        
        className={'ms-PeoplePicker'}
        onChange={this._handleAssignedUser.bind(this)}
        key={'normal'}
        onRemoveSuggestion={this._onRemoveSuggestion}
        onValidateInput={this._validateInput}
        removeButtonAriaLabel={'Remove'}
        inputProps={{
          onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
          onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
          'aria-label': 'People Picker'
        }}
        componentRef={this._picker}
        onInputChange={this._onInputChange}
        resolveDelay={300}
        disabled={this.state.isPickerDisabled}
      />
    );
  }

  private _handleAssignedUser(user) {
    this.props.onAssignedUsers(user);
  }

  private _onFilterChanged = (
    filterText: string, currentPersonas: IPeoplePickerUserItem[], limitResults?: number): IPeoplePickerUserItem[] | Promise<IPeoplePickerUserItem[]> => {

    if (filterText) {
      let filteredPersonas: IPeoplePickerUserItem[] = this._filterPersonasByText(filterText);


      filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);
      filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
      return this._filterPromise(filteredPersonas);
    } else {
      return [];
    }
  }
  private _returnMostRecentlyUsed = (currentPersonas: IPeoplePickerUserItem[]): IPeoplePickerUserItem[] | Promise<IPeoplePickerUserItem[]> => {
    let { mostRecentlyUsed } = this.state;
    mostRecentlyUsed = this._removeDuplicates(mostRecentlyUsed, currentPersonas);
    return this._filterPromise(mostRecentlyUsed);
  }
  private _getTextFromItem(persona: IPeoplePickerUserItem): string {
    return persona.text as string;
  }

  private _onRemoveSuggestion = (item: IPeoplePickerUserItem): void => {
    const { users, mostRecentlyUsed: mruState } = this.state;
    const indexPeopleList: number = users.indexOf(item);
    const indexMostRecentlyUsed: number = mruState.indexOf(item);

    if (indexPeopleList >= 0) {
      const newPeople: IPeoplePickerUserItem[] = users.slice(0, indexPeopleList).concat(users.slice(indexPeopleList + 1));
      this.setState({ users: newPeople });
    }

    if (indexMostRecentlyUsed >= 0) {
      const newSuggestedPeople: IPeoplePickerUserItem[] = mruState
        .slice(0, indexMostRecentlyUsed)
        .concat(mruState.slice(indexMostRecentlyUsed + 1));
      this.setState({ mostRecentlyUsed: newSuggestedPeople });
    }
  }
  private _validateInput = (input: string): ValidationState => {
    if (input.indexOf('@') !== -1) {
      return ValidationState.valid;
    } else if (input.length > 1) {
      return ValidationState.warning;
    } else {
      return ValidationState.invalid;
    }
  }
  private _onInputChange(input: string): string {
    const outlookRegEx = /<.*>/g;
    const emailAddress = outlookRegEx.exec(input);

    if (emailAddress && emailAddress[0]) {
      return emailAddress[0].substring(1, emailAddress[0].length - 1);
    }
    return input;
  }
  private _filterPersonasByText(filterText: string): IPeoplePickerUserItem[] {
    return this.state.users.filter(item => this._doesTextStartWith(item.text as string, filterText));
  }

  private _removeDuplicates(personas: IPeoplePickerUserItem[], possibleDupes: IPeoplePickerUserItem[]) {
    return personas.filter(persona => !this._listContainsPersona(persona, possibleDupes));
  }
  private _filterPromise(personasToReturn: IPeoplePickerUserItem[]): IPeoplePickerUserItem[] | Promise<IPeoplePickerUserItem[]> {
    if (this.state.delayResults) {
      return this._convertResultsToPromise(personasToReturn);
    } else {
      return personasToReturn;
    }
  }
  private _doesTextStartWith(text: string, filterText: string): boolean {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
  }
  private _listContainsPersona(persona: IPeoplePickerUserItem, personas: IPeoplePickerUserItem[]) {
    if (!personas || !personas.length || personas.length === 0) {
      return false;
    }
    return personas.filter(item => item.text === persona.text).length > 0;
  }
  private _convertResultsToPromise(results: IPeoplePickerUserItem[]): Promise<IPeoplePickerUserItem[]> {
    return new Promise<IPeoplePickerUserItem[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
  }

}