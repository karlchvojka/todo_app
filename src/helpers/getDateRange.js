import moment from 'moment';
import { extendMoment } from 'moment-range';
const moment2 = extendMoment(moment);

export const GetDateRange = (currDate) => {
  const currMonth = currDate.month;
  const start = new Date(currDate.year, (currDate.month - 2 ), 1);
  const end   = new Date(currDate.year, (currDate.month + 1 ), 0);
  const range = moment2.range(start, end);
  let daysArr = [];

  for (let day of range.by('day')) {
    daysArr.push(
      day['_d']
      .toString()
    );
  }

  return daysArr;
};
