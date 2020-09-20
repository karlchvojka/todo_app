import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import './index.scss';
import dayjs from 'dayjs';

import Datepicker from '../DatePicker'

function onDatePick(e) {
  e.preventDefault();
}

function TaskForm() {
  const [startDatePicker, setStartDatePicker] = useState('hidden');
  const [endDatePicker, setEndDatePicker] = useState('hidden');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const pickDate = (data, source) => {
    if (source === 'startDate') {
      setStartDate(data);
      setStartDatePicker('hidden');
    } else if (source === 'endDate') {
      setEndDate(data);
      setEndDatePicker('hidden');
    }
  }

  const showDatePick = source => () => {
    if (source === 'startDate') {
      setStartDatePicker('show');
    } else if (source === 'endDate') {
      setEndDatePicker('show');
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
            <label>Start Date: <br/>
              <input type="text" name="startDate" onClick={showDatePick('startDate')} />
              <Datepicker className={`datePicker ` + startDatePicker} clickHandlerCB={(e) => { pickDate(e, 'startDate') }} />
            </label>
          </div>

          <div className="endDate">
            <label>End Date:<br/>
              <input type="text" name="endDate" onClick={showDatePick('endDate')} />
              <Datepicker className={`datePicker ` + endDatePicker} clickHandlerCB={(e) => { pickDate(e, 'endDate')}} />
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
