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
  const [picker, setPicker] = useState({});


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
            <label>Start Date:<br/>
              <input type="text" name="startDate" onClick={onDatePick}/>
            </label>
          </div>

          <div className="endDate">
            <label>End Date:<br/>
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
      <Datepicker chooseDate={setPicker} />
      </section>
  )
}

export default TaskForm
