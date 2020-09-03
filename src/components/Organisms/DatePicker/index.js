import React, { useState, useEffect } from 'react';
import './index.scss';
import { GetDateRange } from '../../../helpers/getDateRange.js'


// Helper Import

function Datepicker(props) {
  const [currDate, setCurrDate] = useState({
    year: new Date().getYear() + 1900,
    month: new Date().getMonth() + 1
  });
  const [days, setDays] = useState([]);
  const [picker, setPicker] = useState({
    days: [],
    chosen: [0,1]
  });
  const [chosenDate, setChosenDate] = useState([]);

  useEffect(() => {
    updateDate();
  }, [currDate])

  useEffect(() => {
    props.updateDate(picker);
  }, [picker])

  const updatePicker = (data) => {
      let newStuff = picker['chosen'];
      console.log('nstuff: ', newStuff)
      let stuff = newStuff.push(data);
      console.log('stuff: ', stuff)
      props.updateDate(picker);

  }

  const updateDate = () => {
    let daysArr = GetDateRange(currDate);
    setDays(daysArr);
  }

  const selectDay = event => {
    updatePicker(event.currentTarget.id)
  }

  const dayList = days.map((day, index) => {
    return (
      <div onClick={selectDay} key={index} id={index} className="day"><p>{day.split(' ')[2]}</p></div>
    )
  })

  const selectYear = (event) => {
    setCurrDate(prev => ({
      ...prev,
      year: parseInt(event)
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
