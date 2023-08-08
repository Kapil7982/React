import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import '../styles/UserStatus.css';

const UserStatus = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className="user-status">
      {isAuth ? (
        <p>User is logged in.</p>
      ) : (
        <p>User is logged out.</p>
      )}
    </div>
  );
};

export default UserStatus;
