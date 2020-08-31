import * as React from 'react';
import { escape } from '@microsoft/sp-lodash-subset';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { mergeStyleSets, mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import { ICurrentUsersTodoProps } from './ICurrentUsersTodoProps';
import { ICurrentUsersTodoState } from './ICurrentUsersTodoState';
import { ITodos } from '../models';
import { TodosService } from '../services';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px'
});




export class CurrentUsersTodos extends React.Component<ICurrentUsersTodoProps, ICurrentUsersTodoState> {
  private _todosService = new TodosService(this.props.httpClient);
  private _selection: Selection;
  private _columns: IColumn[];

  constructor(props: ICurrentUsersTodoProps) {
    super(props);
    this.getTodos();

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() })
    });

    this._columns = [
      {
        key: 'column1',
        name: 'Uppgiftsnummer',
        fieldName: 'Uppgiftsnummer',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        onRender: (item: ITodos) => {
          return <span>{item.number}</span>;
        }
      },
      {
        key: 'column2',
        name: 'Uppgiftstitel',
        fieldName: 'Uppgiftstitel',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        onRender: (item: ITodos) => {
          return <span>{item.title}</span>;
        }
      },
      {
        key: 'column3',
        name: 'Beskrivning',
        fieldName: 'Beskrivning',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        onRender: (item: ITodos) => {
          return <span>{item.description}</span>;
        }
      },
      {
        key: 'column4',
        name: 'Status',
        fieldName: 'Status',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        onRender: (item: ITodos) => {
          return <span>{item.statetext}</span>;
        }
      },
      {
        key: 'column5',
        name: 'Skapat datum',
        fieldName: 'Skapat datum',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        onRender: (item: ITodos) => {
          return <span>{item.createdate}</span>;
        }
      },
      {
        key: 'column6',
        name: 'Ansvarig',
        fieldName: 'Ansvarig',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        onRender: (item: ITodos) => {
          return <span>{item.usertext}</span>;
        }
      },
      {
        key: 'column7',
        name: 'Arbetsområde',
        fieldName: 'Arbetsområde',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        onRender: (item: ITodos) => {
          return <span>{item.workareatext}</span>;
        }
      },
    ];

    this.state = {
      filteredItems: [],
      allItems: [],
      selectionDetails: this._getSelectionDetails()
    };
  }

  public render(): React.ReactElement<ICurrentUsersTodoProps> {
    const { filteredItems, selectionDetails } = this.state;


    if (filteredItems == null) {
      return <div>Loading..</div>;
    }
    else {
      return (
        <Fabric>
          <div className={exampleChildClass}>{selectionDetails}</div>
          <Announced message={selectionDetails} />
          <TextField
            className={exampleChildClass}
            label="Filtrera på titel:"
            onChange={this._onFilter}
            styles={{ root: { maxWidth: '300px' } }}
          />
          <Announced message={`Number of items after filter applied: ${filteredItems.length}.`} />
          <MarqueeSelection selection={this._selection}>
            <DetailsList
              items={filteredItems}
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
      );
    }
  }
  public getTodos() {

    let _userEmail = this.props.currentUserEmail;
    this._todosService.getPersonIdFromMicroBizzCall(_userEmail).then((userId) => {

      let _userId = userId;
      this._todosService.getMyTodosFromMicroBizzCall(_userId).then((todos: ITodos[]) => {

        this.setState({
          filteredItems: todos,
          allItems: todos
        });
      });
    });
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as ITodos).title;
      default:
        return `${selectionCount} items selected`;
    }
  }

  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    this.setState({
      filteredItems: text ? this.state.allItems.filter(i => i.title.toLowerCase().indexOf(text) > -1) : this.state.allItems
    });
  }
  private _onItemInvoked = (item: ITodos): void => {
    alert(`Item invoked: ${item.title}`);
  }
}

