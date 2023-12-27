import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Use mock server for login
      const response = await fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const users = await response.json();
        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
          dispatch(loginSuccess(user.token));
          // Store token in localStorage
          localStorage.setItem('token', user.token);

          // Redirect to home page
          navigate('/');
        } else {
          // Handle invalid credentials
          console.error('Invalid credentials');
        }
      } else {
        // Handle server error
        console.error('Server error');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
