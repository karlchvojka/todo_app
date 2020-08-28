import React from 'react';
import {render} from '@testing-library/react'

import App from '../src/App.js';

it('should render properly', () => {
  const { asFragment } = render(<App />)
  expect (asFragment(<App />)).toMatchSnapshot()
});
