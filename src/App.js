import React from 'react';
import './App.scss';

import TaskList from './components/Organisms/TaskList';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
        </header>
      <main id="mainWrap">
        <TaskList />
        </main>
      </div>
  )
}

export default App
