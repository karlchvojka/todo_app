import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import './index.scss';
import dayjs from 'dayjs';

import Datepicker from '../DatePicker'

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

  const handleClick = (data) => {
    console.log('Callback: ', data)
  }

  // const startDatePick = () => {
  //   if(document.activeElement === ReactDom.findDOMNode())
  // }

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
            <label>Start Date: {dataFromPicker.chosen[0] ? dataFromPicker.chosen[0].slice(1, 3).join(" "): ''}<br/>
              <input type="text" name="startDate" onClick={startDatePick} />
              <Datepicker className="startDatePick" clickHandlerCB={(e) => { handleClick(e) }} />
            </label>
          </div>

          <div className="endDate">
            <label>End Date:{dataFromPicker.chosen[1] ? dataFromPicker.chosen[1].slice(1, 3).join(" "): ''} <br/>
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
      </section>
  )
}

export default TaskForm
