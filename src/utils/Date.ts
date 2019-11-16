import { DateTime } from 'luxon';

interface diffDateTime {
  years: number;
  months: number;
  days: number;
}

export function now(): DateTime {
  return DateTime.local();
}

export function diff(birthday: DateTime): diffDateTime {
  const n = now();
  const d = n
    .diff(birthday, ['years', 'months', 'days'])
    .toObject() as diffDateTime;
  return d;
}
