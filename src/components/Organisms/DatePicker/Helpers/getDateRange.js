import moment from 'moment';
import { extendMoment } from 'moment-range';
const moment2 = extendMoment(moment);

export const GetDateRange = (currDate) => {
  const currMonth = currDate.month;
  const currYear = currDate.today.getYear() + 1900;
  const currDateStr = currDate.year.toString() + " " + currMonth;
  let endOfMonth = moment(`${currYear} ${currMonth}`).endOf('month');
  const lastDay = endOfMonth.get('date');
  let daysArr =[...Array(lastDay).keys()]

  let daysObj = {};

  for (let day of daysArr) {

    if(!daysObj[currMonth]) {
      daysObj[currMonth] = [day]
    } else {
      daysObj[currMonth].push(day);
    }
  }

  return daysObj;
};
