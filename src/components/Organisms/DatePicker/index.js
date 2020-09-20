import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import './index.scss';
import { getDateRange, monthHelp, yearHelp } from './helpers/dateHelp.js'

function Datepicker(props) {
  const today = dayjs();
  const [selectedDay, setSelectedDay] = useState(today.toISOString().slice(0, 10));
  const [displayMonth, setDisplayMonth] = useState(today.month());
  const [displayYear, setDisplayYear] = useState(today.year());
  const [days, setDays] = useState([]);

  useEffect(() => { // This updates the state with a days list on load.
    setDays(getDateRange(displayYear, displayMonth));
  }, [displayMonth]);

  // IMPORTANT. HANDLES THE CLICK CALLBACK.
  const handleClick = newDay => () => {
    setSelectedDay(newDay);
    props.clickHandlerCB && props.clickHandlerCB(newDay);
  }

  // Increases the chosen month by one
  const modifyMonth = ({ target: { value: operation }}) => {
    setDisplayMonth(monthHelp(displayMonth, operation));
    setDisplayYear(yearHelp(displayYear, displayMonth, operation));
  }

  const dayList = (
    <div className={`${displayMonth + 1}-monthWrap`}>
    <p>{dayjs(`${displayYear}-${displayMonth + 1}`).format('MMM')}</p>
      <div className="daysWrap">
        {
          days.map((undefined, index) => {
            const thisDay = index;
            const newDay = dayjs(`${
              displayYear}-${
              displayMonth + 1}-${
              thisDay
            }`).toISOString().slice(0,10);

            return (
              <div
                onClick={handleClick(newDay)}
                key={`${thisDay}-dayTile`}
                id={thisDay}
                className={`day${newDay === selectedDay ? ' selected' : ''}`}
                >
                <p>{thisDay}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );

  return (
    <section className="datepicker">
      <div>
        <button onClick={modifyMonth} value="+">+</button>
        <button onClick={modifyMonth} value="-">-</button>
        <select onChange={() => selectYear}>
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
