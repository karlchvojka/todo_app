import React, { useState, useEffect } from 'react';
import './index.scss';
import Moment from 'react-moment';

import Datepicker from '../DatePicker'
import { GetDateRange } from '../../../helpers/getDateRange.js'

function onDatePick(e) {
  e.preventDefault();
  // DO STUFF
  // 1. Show date DatePicker

  // 2. return back the date selected
}

function TaskForm() {
  const [picker, setPicker] = useState([0]);
  const [days, setDays] = useState([]);
  const [currYear, setCurrYear] = useState(new Date().getYear() + 1900);

  useEffect(() => {
    let daysArr = GetDateRange(currYear);
    setDays(daysArr)
  }, [currYear])

  const updatePicker = (data) => {
    let current = picker;
    if (current.length < 3) {
      setPicker([...picker, parseInt(data)])
    } else {
      setPicker([data])
    }
  }

  return (
    <section className="taskForm">
      <form action="/newtweet" method="POST">
        <div className="titleWrap">
          <label>Task Title:<br/>
            <input type="text" name="taskTitle" />
          </label>
        </div>

        <div className="dateWrap">
          <div className="startDate">
            <label>Start Date: {picker[1] ? <Moment format="DD MMM">{days[picker[1]]}</Moment>: ''}<br/>
              <input type="text" name="startDate" onClick={onDatePick} />
            </label>
          </div>

          <div className="endDate">
            <label>End Date:{picker[2] ? <Moment format="DD MMM">{days[picker[2]]}</Moment>: ''} <br/>
              <input type="text" name="endDate" />
            </label>
          </div>
        </div>

        <div className="descWrap">
          <label>Description:<br/>
            <textarea id="textAreaMain" name="taskText"></textarea>
          </label>
        </div>

        <input type="submit" value="tweet" />
        </form>
      <Datepicker chooseDate={updatePicker} daysData={days} currYear={currYear} setCurrYear={setCurrYear}/>
      </section>
  )
}

export default TaskForm
