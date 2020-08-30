import React from 'react';
import {render} from '@testing-library/react';
import { create, renderer } from 'react-test-renderer';

import TaskList from '../src/components/Organisms/TaskList';

describe("The Task List component", () => {
  it('should render properly', () => {
    const tasklist = create(<TaskList />);
    expect(tasklist.toJSON()).toMatchSnapshot();
  })
});
