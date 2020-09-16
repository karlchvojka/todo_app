import moment from 'moment';
import { extendMoment } from 'moment-range';
const moment2 = extendMoment(moment);

export const GetDateRange = (currDate) => {
  const currMonth = currDate.month;
  let currDateStr = currDate.year.toString() + " " + currDate.month.toString();
  let start = moment(currDateStr).startOf('month');
  let end   = moment(currDateStr).endOf('month');
  let range = moment2.range(start, end);
  let daysObj = {};
  let idTracker = 0;

  let stuff = moment(currDateStr).endOf('month');

  for (let day of range.by('day')) {
    let dayNew = day._d.toString().split(' ');
    dayNew.push(idTracker + 1);
    if(!daysObj[dayNew[1]]) {
      daysObj[dayNew[1]] = [dayNew]
    } else {
      daysObj[dayNew[1]].push(dayNew);
    }

    idTracker++
  }

  return daysObj;
};
