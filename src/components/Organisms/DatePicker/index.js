import React from 'react';
import './index.scss';
import Moment from 'react-moment';

function Datepicker(props) {
  const now = new Date();
  console.log("now :", now)
  const month = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  console.log('month: ', month);
  const items = [];

  for (let day = 0; day < month; day++ ) {
    items.push(
      <div className="day">
        <p>{day + 1}</p>
        </div>
      )
  }


  return (
    <section className="datepicker">
      {items}
    </section>
  )
}

export default Datepicker
