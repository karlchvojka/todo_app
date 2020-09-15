import React, { useState, useEffect } from 'react';
import './index.scss';
import { GetDateRange } from './Helpers/getDateRange.js'

function Datepicker(props) {
  const [picker, setPicker] = useState({
    currentDate: {
      year: new Date().getYear() + 1900,
      month: new Date().getMonth()
    },
    days: [],
    chosen: new Date()
  });

  // Variable sets used in the component functionality
  const dayObj = picker.days;
  const day = picker.chosen;
  console.log(day.getYear() + 1900)

  const updateDaysArr = () => {
    setPicker(prev => ({
      ...prev,
      days: GetDateRange(picker.currentDate)
    }));
  }

  useEffect(() => {
  }, [picker.currentDate.month]);

  // This updates the state with a days list on load.
  useEffect(() => {
    updateDaysArr();
  }, []);

// Watches the picker state, and updates the parent state
  useEffect(() => {
    props.updateDate(picker);
  }, [picker]);

  const selectDay = (day, event) => {
    let currentChosen = picker.chosen
    let newDay = new Date(day.join(' '))
    setPicker(prevState => ({
      ...prevState,
      chosen: newDay
    }));
  }

  // Increases the chosen month by one
  function incMonth() {
    const currDate = picker.currentDate.month;
    const currYear = picker.currentDate.year;
    setPicker(prev => ({
      ...prev,
      currentDate: {
        year: currYear,
        month: currDate + 1
     }
    }))
    updateDaysArr();
  }

  // Decreases chosen month by one
  function decMonth() {
    const currDate = picker.currentDate.month;
    const currYear = picker.currentDate.year;
    setPicker(prev => ({
     ...prev,
     currentDate: {
      year: currYear,
      month: currDate - 1
     }
    }))
    updateDaysArr();
  }

  const dayList = Object.keys(dayObj).map(function(key, index) {
    return (
      <div key={index} className={key + ' monthWrap'}>
        <p>{key}</p>
        <div className="daysWrap">
          {dayObj[key].map((day, index) => {
            return (
              <div onClick={() => (selectDay(day, event))} key={index} id={day[9]} className="day"><p>{day[2]}</p></div>
            )
          })}
        </div>
      </div>
    )
  })

  return (
    <section className="datepicker">
      <div>
        <button onClick={e => incMonth()}>+</button>
        <button onClick={e => decMonth()}>-</button>
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
