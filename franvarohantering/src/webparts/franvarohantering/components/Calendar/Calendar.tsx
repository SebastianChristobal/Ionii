import * as React from 'react';
import {ICalenderState} from './CalenderState';
import { DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets } from 'office-ui-fabric-react';

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
  

export  class Calendar extends React.Component<{}, ICalenderState>{

    public constructor(props: {}) {
        super(props);
    
        this.state = {
          firstDayOfWeek: DayOfWeek.Sunday
        };
      }

       public render(){

        return(
            <DatePicker
            className={controlClass.control}
            firstDayOfWeek={this.state.firstDayOfWeek}
            strings={DayPickerStrings}
            onSelectDate={this._handleDate.bind(this)}
            placeholder="Select a date..."
            ariaLabel="Select a date"
          />
        )
       }

       private _handleDate(date){
        console.log(date);
        
      }
}