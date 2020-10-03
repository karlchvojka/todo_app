import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import './index.scss';
import { getDateRange, monthHelp, yearHelp } from './helpers/dateHelp.js';

function Datepicker({
  className = 'datePicker',
  clickHandlerCB = () => {}, // noop
}) {
  const today = dayjs();
  const [selectedDay, setSelectedDay] = useState(today.toISOString().slice(0, 10));
  const [displayMonth, setDisplayMonth] = useState(today.month());
  const [displayYear, setDisplayYear] = useState(today.year());
  const [days, setDays] = useState([]);

  useEffect(() => { // This updates the state with a days list on load.
    setDays(getDateRange(displayYear, displayMonth));
  }, [displayMonth]);

  // IMPORTANT. HANDLES THE CLICK CALLBACK.
  const handleClick = newDay => event => {
    event.preventDefault();
    console.log('handleClick', newDay)
    setSelectedDay(newDay);
    clickHandlerCB && clickHandlerCB(newDay);
  };

  // Increases the chosen month by one
  const modifyMonth = operation => event => {
    event.preventDefault();
    setDisplayMonth(monthHelp(displayMonth, operation));
    setDisplayYear(yearHelp(displayYear, displayMonth, operation));
  };

  // Choose year
  const selectYear = ({ target: { value: year } }) => {
    setDisplayYear(parseInt(year, 10));
  };

  const validateYearInput = ({ target: { value } }) => {
    // if value
  };

  const dayList = (
    <div className={`${displayMonth + 1}-monthWrap`}>
      <p>{dayjs(`${displayYear}-${displayMonth + 1}`).format('MMM')}</p>

      <div className={`${className}-dayWrapper`}>
        {days.map((_, index) => {
          const thisDay = index + 1;
          const newDay = dayjs(`${
            displayYear}-${
            displayMonth + 1}-${
            thisDay
          }`).toISOString().slice(0, 10);

          return (
            <button
              className={`${className}-day${
                newDay === selectedDay ? ' selected' : ''
              }`}
              id={thisDay}
              key={`${thisDay}-dayTile`}
              onClick={handleClick(newDay)}
              type="button"
              >
              {thisDay}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <article className={className}>
      <section className={`${className}-toolbar`}>
        <button onClick={modifyMonth('-')} type="button">-</button>

        <input onChange={validateYearInput} value={displayYear} />

        <button onClick={modifyMonth('+')} type="button">+</button>
      </section>

      <section className={`${className}-monthWrapper`}>
        {dayList}
      </section>
    </article>
  );
}

export default Datepicker;
