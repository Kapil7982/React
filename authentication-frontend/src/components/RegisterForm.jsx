import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = ({ handleRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState([]);

  const handleRoleChange = (e) => {
    const selectedRoles = Array.from(e.target.selectedOptions, (option) => option.value);
    setRoles(selectedRoles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ first_name: firstName, last_name: lastName, email, password, roles });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRoles([]);
  };



  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
      className="input"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
      className="input"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
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
      <select multiple value={roles} onChange={handleRoleChange} className="select">
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="seller">Seller</option>
      </select>
      <button type="submit" className="button">Register</button>
    </form>
  );
};

export default RegisterForm;
