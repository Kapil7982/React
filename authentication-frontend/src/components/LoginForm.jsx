import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
      className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className='button'>Login</button>
    </form>
  );
};

export default LoginForm;
