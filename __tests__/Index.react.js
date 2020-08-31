import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App.js';

describe("The App mounts properly", () => {
  test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
});
