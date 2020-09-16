import dayjs from 'dayjs';

export const MonthHelp = (prev, value) => {
  // value === "+" ? prev.currentDate.month + 1 : prev.currentDate.month - 1
  console.log('prev', prev)

  if(value === "+" && prev === 12) {
    return 0
  } else if (value === "+" && prev < 12) {
    return prev + 1
  } else if (value === "-" && prev === 12) {
    return prev + 1
  } else if (value === "-" && prev === 0) {
    return 12
  } else if (value === "-" && prev > 0) {
    return prev - 1
  }
};
