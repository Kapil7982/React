// src/App.jsx

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import TodoDetails from './components/TodoDetails';
import Login from './components/Login';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      <Route path="/todo/:id" element={isAuthenticated ? <TodoDetails /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
