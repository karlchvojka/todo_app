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
  const dayArray = picker.days;

  useEffect(() => {
    let daysArr = GetDateRange(picker.currentDate)
    // update picker.days with the new array.
    setPicker(prevState => ({
      ...prevState,
      days: daysArr
    }));
  }, []);

  useEffect(() => {
    props.updateDate(picker);
  }, [picker]);

  const selectDay = event => {
    console.log(parseInt('selectDay: ', event.currentTarget.id))
  }

  const dayList = dayArray.map((day, index) => {
    return (
      <div onClick={selectDay} key={index} id={index} className="day"><p>{day.split(' ')[2]}</p></div>
    )
  })

  function incMonth() {
    const currDate = picker.currentDate.month;

    setPicker(prev => ({
      ...prev,
      currentDate: {
        ...prev,
        month: currDate + 1
     }
    }))
  }

  function decMonth() {
    const currDate = picker.currentDate.month;
    setPicker(prev => ({
     ...prev,
     currentDate: {
       ...prev,
       month: currDate - 1
     }
    }))
  }

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
      <div className="dayswrap">
        {dayList}
        </div>
      </section>
  )
}

export default Datepicker
