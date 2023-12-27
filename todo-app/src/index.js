// src/index.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './App.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

// Check if the user is already authenticated from localStorage
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: 'LOGIN_SUCCESS', payload: { token } });
}

const RootComponent = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

reactRoot.render(<RootComponent />);
