import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { toggleAuth } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      // Make a POST request to the backend for authentication
      const response = await fetch('http://localhost:8080/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Upon successful login, call toggleAuth() from the AuthContext.
        console.log('Login successful');
        toggleAuth();

        // Get the intended destination from the URL parameters
        const { from } = location.state || { from: { pathname: '/' } };

        // Redirect to the intended destination or home after successful login
        nav(from, { replace: true });
      } else {
        // Handle authentication failure (e.g., show an error message)
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
