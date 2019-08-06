import moment from 'moment';

import { MAX } from './Main.constants';

export function getLineValues(values) {
  return values.map(({ value }) => value);
}

export function getLineCategories(values) {
  return values.map(({ timestamp }) => moment(timestamp).format('HH:mm:ss'));
}

function getRangeByIndex(index) {
  const start = 10 * index - MAX;
  const end = 10 * (index + 1) - MAX;
  return { start, end };
}

function geBarCategories() {
  return Array.from({ length: 20 }, (value, index) => {
    const { start, end } = getRangeByIndex(index);
    return `${start} - ${end}`;
  });
}

export function getBarValues(values) {
  const data = Array.from({ length: 20 }, () => 0);
  values.forEach(({ value }) => {
    const index = Math.floor((value + MAX) / 10);
    data[index] = data[index] + 1;
  });
  return data;
}

export const barCategories = geBarCategories();
