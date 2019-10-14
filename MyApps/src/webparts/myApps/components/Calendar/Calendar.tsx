import * as React from 'react';
import {ICalendarProps, ICalendarState} from '.';
import {ListService} from '../../services';

import {
    Dropdown,
    IDropdownOption,
    DropdownMenuItemType,
    TextField,
    autobind,
    PrimaryButton,
    DefaultButton,
    Modal,
    Dialog,
    DialogBase,
    DialogType,
    DialogFooter,
    IListProps
} from 'office-ui-fabric-react';



export class Calendar extends  React.Component<ICalendarProps, ICalendarState>{

    private _listService : ListService;

    constructor(props: ICalendarProps){
        super(props);

        this.state = {
            listItems: {}
        };

        this._listService = new ListService(this.props.spSiteUrl, this.props.spHttpClient);

    }


    public componentDidMount() {
           this.showListItems();
    }

    private showListItems(){

        let listItems = this.state.listItems;

        this.setState({
            listItems: listItems 
        });
    }

    public render(): React.ReactElement<ICalendarProps>{

        console.log("My calendar");

        return(<div>My Calendar</div>);
    }
}
