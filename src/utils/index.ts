import { DateTime } from 'luxon';
import { diff } from './Date';

export function now(): DateTime {
  return DateTime.local();
}

interface seventeen {
  age: number;
  month: number;
}

export function calc(
  year: number,
  month: number,
  day: number,
  seventeen: boolean = false,
): seventeen {
  const d = diff(DateTime.local(year, month, day));
  const age = d.years;

  if (seventeen && age > 17) {
    const m = (age - 17) * 12 + d.months;
    return {
      age: 17,
      month: m,
    };
  }

  return {
    age,
    month: d.months,
  };
}
