import React from 'react';
import './App.css';
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Todo />
    </div>
  );
}

export default App;
