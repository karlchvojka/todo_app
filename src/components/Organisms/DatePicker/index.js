import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import './index.scss';
import { GetDateRange } from './Helpers/getDateRange.js'
import { MonthHelp } from './Helpers/monthHelp.js'

function Datepicker(props) {
  const [picker, setPicker] = useState({
    currentDate: {
      today: new Date(),
      year: new Date().getYear() + 1900,
      month: new Date().getMonth() + 1
    },
    days: [],
    chosen: new Date()
  });

  useEffect(() => {
  }, [picker.currentDate.month]);

  // This updates the state with a days list on load.
  useEffect(() => {
    updateDaysArr();
  }, []);

  // Variable sets used in the component functionality
  const dayObj = picker.days;
  const day = picker.chosen;

  // IMPORTANT. HANDLES THE CLICK CALLBACK.
  const handleClick = (day, event) => {
    let dateFormat = dayjs(`${day[2]}-${day[0]}-${day[1]}`);
    props.clickHandlerCB && props.clickHandlerCB(dateFormat)
  }

  const updateDaysArr = () => {
    setPicker(prev => ({
      ...prev,
      days: GetDateRange(prev.currentDate)
    }));
  }

  // Increases the chosen month by one
  function incMonth(value) {
    setPicker(prev => ({
      ...prev,
      currentDate: {
        today: prev.currentDate.today,
        year: prev.currentDate.year,
        month: MonthHelp(prev.currentDate.month, value)
     }
    }))
    updateDaysArr();
  }

  const dayList = Object.keys(dayObj).map(function(key, index) {
    return (
      <div key={index} className={key + ' monthWrap'}>
      <p>{dayjs(key).format('MMM')}</p>
        <div className="daysWrap">
          {dayObj[key].map((day, index) => {
            return (
              <div onClick={(e) => {handleClick([parseInt(key), (day + 1), picker.currentDate.year], e)}} key={index} id={day} className="day"><p>{day + 1}</p></div>
            )
          })}
        </div>
      </div>
    )
  })

  return (
    <section className="datepicker">
      <div>
        <button onClick={(e) => incMonth(e.target.value)} value="+">+</button>
        <button onClick={(e) => incMonth(e.target.value)} value="-">-</button>
        <select onChange={e => selectYear(e.target.value)}>
          <option value="2020">2020</option>
           <option value="2021">2021</option>
           <option value="2022">2022</option>
           <option value="2023">2023</option>
        </select>
        </div>
      <div className="monthsWrap">
        {dayList}
        </div>
    </section>
  )
}

export default Datepicker
