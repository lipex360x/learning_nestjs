import { format, isWeekend } from 'date-fns';

import {
  DatetimeFormats,
  saturdayInJavascript,
  sundayInJavascript,
} from '../constants';
import { Holiday } from '../types';

/**
 *
 * @param datetime - Date
 * @param holidays - Array
 * @param next - Boolean default to true
 * @returns
 */
export function GetNextBusinessDay(
  datetime: Date,
  holidays?: Holiday[],
  next = true,
): Date {
  const nextBusinessDatetime = validateWeekdays(datetime, next);
  const holiday = holidays?.find(
    (item) =>
      format(item.date, DatetimeFormats.DATE) ===
      format(nextBusinessDatetime, DatetimeFormats.DATE),
  );

  if (holiday) {
    nextBusinessDatetime.setDate(nextBusinessDatetime.getDate() + 1);
  }

  if (isWeekend(nextBusinessDatetime)) {
    GetNextBusinessDay(nextBusinessDatetime, holidays);
  }

  return nextBusinessDatetime;
}

function validateWeekdays(date: Date, next: boolean) {
  if (next) {
    date.setDate(date.getDate() + 1);
  }

  if (date.getDay() === saturdayInJavascript) {
    date.setDate(date.getDate() + 2);
  }

  if (date.getDay() === sundayInJavascript) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}
