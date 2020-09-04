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

  useEffect(() => {
    let daysArr = GetDateRange(picker.currentDate);
    setPicker(prev => ({
      ...prev,
      days: daysArr
    }));
  }, [])

  useEffect(() => {
    props.updateDate(picker);
  }, [picker])

  const updatePicker = (data) => {
      let newStuff = picker['chosen'];
      let afterStuff = [...newStuff, parseInt(data)];
      setPicker(prev => ({
        ...prev,
        chosen: afterStuff
      }))
      props.updateDate(picker);
  }

  const selectDay = event => {
    updatePicker(event.currentTarget.id)
  }

  const selectYear = (event) => {
    setPicker(prev => ({
      ...prev,
      currentDate: {
        year: parseInt(event)
        }
    }))
  }

  const incMonth = (e) => {
    setCurrDate(prev => ({
      ...prev,
      month: currDate.month + 1
    }))
  }
  const decMonth = (e) => {
    setCurrDate(prev => ({
      ...prev,
      month: currDate.month - 1
    }))
  }
  const dayArray = picker.days;

  const dayList = dayArray.map((day, index) => {
    return (
      <div onClick={selectDay} key={index} id={index} className="day"><p>{day.split(' ')[2]}</p></div>
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
      <div className="dayswrap">
        {dayList}
        </div>
      </section>
  )
}

export default Datepicker
