
import { DayOfWeek } from 'office-ui-fabric-react';
import { EventInput } from '@fullcalendar/core';
export interface ICalenderState {
    firstDayOfWeek?: DayOfWeek;
    date: string;
    inputValue: string;
    calenderEvents: EventInput[];
    calendarWeekends: boolean;
  }
  