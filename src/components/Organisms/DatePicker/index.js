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

  const dayList = days.map((day, index) => {
    return (
      <div key={index} className="day"><a>{day.split(' ')[2]}</a></div>
    )
  })

  return (
    <section className="datepicker">
    {dayList}
    </section>
  )
}

export default Datepicker
