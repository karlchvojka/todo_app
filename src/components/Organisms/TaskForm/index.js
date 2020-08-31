import React from 'react';
import './index.scss';

const TaskForm = (props) => {
  return (
    <section className="taskForm">
      <form action="/newtweet" method="POST">
        <input type="text" name="title" />
        <textarea id="textAreaMain" name="text"></textarea>
        <input type="submit" value="tweet" />
      </form>
    </section>
  )
}

export default TaskForm
