import React from 'react';
import {render} from '@testing-library/react';
import { create, renderer } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import TaskForm from '../src/components/Organisms/TaskForm';
import Datepicker from '../src/components/Organisms/DatePicker';

describe("The Task Form component", () => {
  test('should render properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TaskForm />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('section');
    expect(result.props.children).toEqual([
      <section className="taskForm">
        <form action="/newtweet" method="POST">
          <input type="text" name="title" />
          <textarea id="textAreaMain" name="text"></textarea>
          <input type="submit" value="tweet" />
        </form>
        <Datepicker />
      </section>
    ]);
  })
});
