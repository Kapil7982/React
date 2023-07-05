import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <span className="logo">TODO App</span>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="App.jsx">Home</a>
          </li>
          <li className="nav-link">
            <a href="App.jsx">About</a>
          </li>
          <li className="nav-link">
            <a href="App.jsx">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Todo />
      </div>
    </div>
  );
}

export default App;
