import React, { useState, useEffect } from 'react';
import './index.scss';
import Moment from 'react-moment';
import moment from 'moment';
import { extendMoment } from 'moment-range';
const moment2 = extendMoment(moment);

function Datepicker(props) {
  const [days, setDays] = useState([])

  useEffect(() => {
    const currMonth = new Date().getMonth() + 1;
    const currYear = new Date().getYear() + 1900;
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
    setDays(daysArr)
  }, [])

  const dayList = days.map((day, index) => {
    return (
      <div key={index} className="day"><p>{day.split(' ')[2]}</p></div>
    )
  })

  console.log('daylist: ', dayList)
  return (
    <section className="datepicker">
    {dayList}
    </section>
  )
}

export default Datepicker
