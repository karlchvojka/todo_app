import dayjs from 'dayjs';

export const getDateRange = (year, month) => {
  let endOfMonth =
    dayjs(`${year}-${month}`)
    .endOf('month')
    .get('date');
  let daysArr =[...Array(endOfMonth).keys()]
  return Array(endOfMonth).fill(0);
};

export const monthHelp = (currMonth, op) => (
  op === '+'
    ? currMonth < 11
      ? currMonth + 1
      : 0
  // else '-'
    : currMonth > 0
      ? currMonth - 1
      : 11
);

export const yearHelp = (currYear, currMonth, op) => {
  if(op === '+') {
    if(currMonth === 11) {
      return currYear + 1
    } else {
      return currYear
    }
  } else if(op === '-') {
    if(currMonth === 0) {
      return currYear - 1
    } else {
      return currYear
    }
  }

};
