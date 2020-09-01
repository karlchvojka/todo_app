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



  return (
    <section className="datepicker">
    <p>These are the current 90 days. The current month, + 1 month before, and one month after</p>
      <div className="dayswrap">
        {dayList}
      </div>
    </section>
  )
}

export default Datepicker
