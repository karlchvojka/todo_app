import React, { useState, useEffect } from 'react';
import './index.scss';
import { GetDateRange } from '../../../helpers/getDateRange.js'

// Helper Import

function Datepicker(props) {
  const [picker, setPicker] = useState({
    currentDate: {
      year: new Date().getYear() + 1900,
      month: new Date().getMonth() + 1
    },
    days: [],
    chosen: []
  });

  // Variable sets used in the component functionality
  const dayObj = picker.days;

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


  const selectNextDay = (data) => {
    console.log(data)
    let currentChosen = picker.chosen;
    setPicker(prevState => ({
      ...prevState,
      chosen: [...currentChosen, data]
    }));
  }
  const selectReset = (data) => {
    setPicker(prevState => ({
      ...prevState,
      chosen: [data]
    }));
  }

  const selectDay = event => {
    console.log(event.currentTarget)
    let currentChosen = picker.chosen
    if(currentChosen.length === 2) {
      selectReset(parseInt(event.currentTarget.id))
    } else {
      selectNextDay(parseInt(event.currentTarget.id))
    }
    updateDaysArr();
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
              <div onClick={selectDay} key={index} id={day[9]} className="day"><p>{day[2]}</p></div>
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
