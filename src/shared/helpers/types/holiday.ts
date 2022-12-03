import { HolidayType } from '../constants';

export type Holiday = {
  date: Date;
  ends_at: Date;
  id?: number;
  starts_at: Date;
  title?: string;
  type?: keyof typeof HolidayType;
};
