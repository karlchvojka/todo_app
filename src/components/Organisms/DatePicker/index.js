import React, { useState, useEffect } from 'react';
import './index.scss';


// Helper Import

function Datepicker(props) {

  const selectDay = event => {
    props.chooseDate(event.currentTarget.id)
  }

  const dayList = props.daysData.map((day, index) => {
    return (
      <div onClick={selectDay} key={index} id={index} className="day"><p>{day.split(' ')[2]}</p></div>
    )
  })
  console.log("days", dayList.length);

  function selectYear(event) {
    props.setCurrYear(parseInt(event))
  }


  return (
    <section className="datepicker">
      <div>
        <button>+</button>
        <button>-</button>
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
