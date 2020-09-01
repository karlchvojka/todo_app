import React, { useState, useEffect } from 'react';
import './index.scss';
import Moment from 'react-moment';


// Helper Import
import { GetDateRange } from '../../../helpers/getDateRange.js'

function Datepicker(props) {
  const [days, setDays] = useState([])

  useEffect(() => {
    let daysArr = GetDateRange();
    setDays(daysArr)
  }, [])

  const selectDay = event => {
    props.chooseDate(event.currentTarget.id)
  }

  const dayList = days.map((day, index) => {
    return (
      <div onClick={selectDay} key={index} id={index} className="day"><p>{day.split(' ')[2]}</p></div>
    )
  })



  return (
    <section className="datepicker">
    {dayList}
    </section>
  )
}

export default Datepicker
