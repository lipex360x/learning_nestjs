import { GetNextBusinessDay } from 'src/shared/helpers/common';
import { Holiday } from 'src/shared/helpers/types';

describe('Get next business day validator', () => {
  beforeEach(async () => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  type TestCasesForNextBusinessDaysProps = {
    expectedNextWorkingDay: Date;
    mockedHolidays: Holiday[] | undefined;
    next: boolean;
    validCurrentDatetime: Date;
  };
  const anyDatetime = new Date();
  const mockedHolidayRegister: Holiday = {
    id: 123,
    date: anyDatetime,
    ends_at: anyDatetime,
    starts_at: anyDatetime,
  };
  const testCasesForNextBusinessDays: TestCasesForNextBusinessDaysProps[] = [
    {
      validCurrentDatetime: new Date('2022-09-30 12:00'), // friday
      expectedNextWorkingDay: new Date('2022-10-03 12:00'), // monday
      mockedHolidays: undefined,
      next: true,
    },
    {
      validCurrentDatetime: new Date('2022-10-01 12:00'), // saturday
      expectedNextWorkingDay: new Date('2022-10-03 12:00'), // monday
      mockedHolidays: undefined,
      next: true,
    },
    {
      validCurrentDatetime: new Date('2022-10-02 12:00'), // sunday
      expectedNextWorkingDay: new Date('2022-10-03 12:00'), // monday
      mockedHolidays: undefined,
      next: true,
    },
    {
      validCurrentDatetime: new Date('2022-09-30 12:00'), // friday
      mockedHolidays: [
        { ...mockedHolidayRegister, date: new Date('2022-10-03 00:00') },
      ], // monday
      expectedNextWorkingDay: new Date('2022-10-04 12:00'), // tuesday
      next: true,
    },
    {
      validCurrentDatetime: new Date('2022-09-29 12:00'), // thursday
      mockedHolidays: [
        { ...mockedHolidayRegister, date: new Date('2022-09-30 00:00') },
      ], // friday
      expectedNextWorkingDay: new Date('2022-10-03 12:00'), // monday
      next: true,
    },
    {
      validCurrentDatetime: new Date('2022-09-29 12:00'), // thursday
      mockedHolidays: [
        { ...mockedHolidayRegister, date: new Date('2022-09-30 00:00') },
      ], // friday
      expectedNextWorkingDay: new Date('2022-10-03 12:00'), // monday
      next: true,
    },
    {
      validCurrentDatetime: new Date('2022-09-30 12:00'), // friday
      mockedHolidays: [
        { ...mockedHolidayRegister, date: new Date('2022-09-30 00:00') },
      ], // friday
      expectedNextWorkingDay: new Date('2022-10-03 12:00'), // monday
      next: false,
    },
    {
      validCurrentDatetime: new Date('2022-09-28 12:00'), // wednesday
      mockedHolidays: [
        { ...mockedHolidayRegister, date: new Date('2022-09-28 00:00') },
      ], // thursday
      expectedNextWorkingDay: new Date('2022-09-29 12:00'), // friday
      next: false,
    },
    {
      validCurrentDatetime: new Date('2022-09-30 12:00'), // friday
      mockedHolidays: [
        { ...mockedHolidayRegister, date: new Date('2022-09-30 00:00') },
        { ...mockedHolidayRegister, date: new Date('2022-10-03 00:00') },
      ], // friday and monday
      expectedNextWorkingDay: new Date('2022-10-04 12:00'), // tuesday
      next: false,
    },
    {
      validCurrentDatetime: new Date('2022-09-28 12:00'), // wednesday
      mockedHolidays: undefined,
      expectedNextWorkingDay: new Date('2022-09-28 12:00'), // monday
      next: false,
    },
  ];

  test.each(testCasesForNextBusinessDays)(
    'It should return correct next business day',
    async (testCaseProps: TestCasesForNextBusinessDaysProps) => {
      // arrange

      // act
      const result = GetNextBusinessDay(
        testCaseProps.validCurrentDatetime,
        testCaseProps.mockedHolidays,
        testCaseProps.next,
      );

      // assert
      expect(result).toEqual(testCaseProps.expectedNextWorkingDay);
    },
  );
});
