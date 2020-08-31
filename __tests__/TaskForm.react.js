import React from 'react';
import {render} from '@testing-library/react';
import { create, renderer } from 'react-test-renderer';

import TaskForm from '../src/components/Organisms/TaskForm';

describe("The Task Form component", () => {
  test('should render properly', () => {
    const tasklist = create(<TaskForm />);
    expect(tasklist.toJSON()).toMatchSnapshot();
  })
});
