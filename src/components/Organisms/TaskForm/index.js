import React, { useState, useEffect } from 'react';
import './index.scss';
import Moment from 'react-moment';

import Datepicker from '../DatePicker'

function onDatePick(e) {
  e.preventDefault();
  // DO STUFF
  // 1. Show date DatePicker

  // 2. return back the date selected
}

function TaskForm() {
  const [datePicker, setDatePicker] = useState([]);
  const [days, setDays] = useState([]);

  const [dataFromPicker, setDataFromPicker] = useState({});

  console.log('form', datePicker)
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
            <label>Start Date: {days[datePicker[0]] ? <Moment format="DD MMM">{days[datePicker[0]]}</Moment>: ''}<br/>
              <input type="text" name="startDate" onClick={onDatePick} />
            </label>
          </div>

          <div className="endDate">
            <label>End Date:{days[datePicker[1]] ? <Moment format="DD MMM">{days[datePicker[1]]}</Moment>: ''} <br/>
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
      <Datepicker updateDate={setDataFromPicker}/>
      </section>
  )
}

export default TaskForm
