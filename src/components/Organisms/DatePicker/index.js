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
