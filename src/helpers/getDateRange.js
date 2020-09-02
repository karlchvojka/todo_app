import moment from 'moment';
import { extendMoment } from 'moment-range';
const moment2 = extendMoment(moment);

export const GetDateRange = (currYear) => {
  const currMonth = new Date().getMonth() + 1;
  const start = new Date(currYear, (currMonth - 1 ), 0);
  const end   = new Date(currYear, (currMonth + 1 ), 0);
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
