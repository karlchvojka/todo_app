import React from 'react';
import {render} from '@testing-library/react';
import { create, renderer } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../src/App.js';
import TaskList from '../src/components/Organisms/TaskList';

describe("The App component", () => {
  it('should render properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([
      <header>
        <h1>Todo App</h1>
      </header>,
      <main id="mainWrap">
        <TaskList />
      </main>
    ]);
  })
});
