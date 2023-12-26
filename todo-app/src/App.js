import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TodoDetails from './components/TodoDetails';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/:id" element={<TodoDetails />} />
    </Routes>
  );
}

export default App;
