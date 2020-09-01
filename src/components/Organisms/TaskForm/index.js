import React, { useState, useEffect } from 'react';
import './index.scss';

import Datepicker from '../DatePicker'

function onDatePick(e) {
  e.preventDefault();
  // DO STUFF
  // 1. Show date DatePicker

  // 2. return back the date selected
}

function TaskForm() {
  const [picker, setPicker] = useState([]);

  const updatePicker = (data) => {
    let current = picker;
    if (current.length < 2) {
      setPicker([...picker, data])
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
            <label>Start Date: {picker[0]}<br/>
              <input type="text" name="startDate" onClick={onDatePick} />
            </label>
          </div>

          <div className="endDate">
            <label>End Date: {picker[1]} <br/>
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
      <Datepicker chooseDate={updatePicker} />
      </section>
  )
}

export default TaskForm
