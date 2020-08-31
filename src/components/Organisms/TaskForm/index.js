import React from 'react';
import './index.scss';

import Datepicker from '../DatePicker'

function TaskForm() {
  return (
    <section className="taskForm">
      <form action="/newtweet" method="POST">
        <input type="text" name="title" />
        <textarea id="textAreaMain" name="text"></textarea>
        <input type="submit" value="tweet" />
      </form>
      <Datepicker />
    </section>
  )
}

export default TaskForm
