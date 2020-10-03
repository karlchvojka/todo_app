import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import './index.scss';
import dayjs from 'dayjs';

import Datepicker from '../DatePicker'

function TaskForm() {
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const pickDate = (data, source) => (
    source === 'startDate'
      ? setStartDate
    : source === 'endDate'
      ? setEndDate
    : () => {}
  )(data);

  const showDatePick = (source, show) => () => (
    source === 'startDate'
      ? setShowStartDatePicker
    : source === 'endDate'
      ? setShowEndDatePicker
    : () => {}
  )(show);

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
            <label>Start Date: {startDate} <br/>
              <input
                name="startDate"
                // onBlur={showDatePick('startDate', false)}
                onClick={showDatePick('startDate', true)}
                readOnly
                type="text"
                value={startDate}
                />

              {showStartDatePicker && (
                <Datepicker
                  clickHandlerCB={(e) => { pickDate(e, 'startDate'); }}
                  />
              )}
            </label>
          </div>

          <div className="endDate">
            <label>
              End Date: {endDate}
              <br />
              <input
                name="endDate"
                // onBlur={showDatePick('endDate', false)}
                onClick={showDatePick('endDate', true)}
                readOnly
                type="text"
                value={endDate}
                />

              {showEndDatePicker && (
                <Datepicker
                  clickHandlerCB={(e) => { pickDate(e, 'endDate')}}
                  />
              )}
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
  );
}

export default TaskForm;
