import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth(prevIsAuth => !prevIsAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
