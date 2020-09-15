import React, { useState, useEffect } from 'react';
import './index.scss';
import Moment from 'react-moment';

import Datepicker from '../DatePicker'
import { GetDateRange } from '../../../helpers/getDateRange.js'

function onDatePick(e) {
  e.preventDefault();
}

function TaskForm() {
  const [dataFromPicker, setDataFromPicker] = useState({
    currentDate: {
      year: '',
      month: ''
    },
    days: [],
  chosen: []
  });

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
            <label>Start Date: {dataFromPicker.chosen[0] ? dataFromPicker.chosen[0].slice(1, 4).join(" "): ''}<br/>
              <input type="text" name="startDate" onClick={onDatePick} value={dataFromPicker.chosen[0] ? dataFromPicker.chosen[0].slice(1, 4).join(" "): ''}/>
            </label>
          </div>

          <div className="endDate">
            <label>End Date:{dataFromPicker.chosen[1] ? dataFromPicker.chosen[1].slice(1, 4).join(" "): ''} <br/>
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
