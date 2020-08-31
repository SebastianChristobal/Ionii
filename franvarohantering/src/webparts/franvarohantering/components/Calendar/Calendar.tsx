import * as React from 'react';
import { ICalenderState } from './CalenderState';
import { ICalenderProps } from './ICalendarProps';
import { DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { AbcsenceService } from '../services';
import { IEvent } from '../models';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './main.scss';

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


export class Calendar extends React.Component<ICalenderProps, ICalenderState>{



  private _service = new AbcsenceService(this.props.siteUrl, this.props.SPHttpClient);

  public constructor(props: ICalenderProps) {
    super(props);

    this.getCalenderItem();

    this.state = {
      firstDayOfWeek: DayOfWeek.Sunday,
      date: '',
      inputValue: '',
      calenderEvents: [],
      calendarWeekends: false
    };
  }

  public render() {

    const {calenderEvents} = this.state;

   
    return (
      <div>
        <TextField onChange={this._handleInputValue.bind(this)}

        />
        <DatePicker
          className={controlClass.control}
          firstDayOfWeek={this.state.firstDayOfWeek}
          strings={DayPickerStrings}
          onSelectDate={this._handleDate.bind(this)}
          placeholder="Select a date..."
          ariaLabel="Select a date"
        />
        <PrimaryButton text="Save" onClick={this.create.bind(this)} />

        <div className='demo-app'>
          <div className='demo-app-top'>
            <FullCalendar 
            defaultView="dayGridMonth"
            events={this.buildEvent()}
            plugins={[dayGridPlugin]} />
          </div>
        </div>
      </div>
    );
  }
  public buildEvent() {
    return { title: 'event', date: '2020-03-11' } // consistent datetime
  }
  public _handleDate(date) {
    this.setState({
      date: date
    });

  }
  public _handleInputValue(inputValue) {
    let inputVal = inputValue.target.value;
    this.setState({
      inputValue: inputVal
    });
  }

  public create() {
    let date = this.state.date;
    let inputValue = this.state.inputValue;

    const newItem: IEvent = {
      Title: inputValue,
      EventDate: date
    };

    this._service.createItem(newItem);
  }
  public getCalenderItem(){

    this._service.getlistItems().then((items) =>{

      this.setState({
        calenderEvents: items
      });
    });
  }
}