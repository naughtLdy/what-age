import { DateTime } from 'luxon';
import { diff } from './Date';

export function now(): DateTime {
  return DateTime.local();
}

interface seventeen {
  age: number;
  month: number;
}

export function calc(year: number, month: number, day: number): seventeen {
  const d = diff(DateTime.local(year, month, day));
  const age = d.years;

  return {
    age,
    month: d.months,
  };
}
