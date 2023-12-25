import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function toggleAuth() {
    setIsAuthenticated((prev) => !prev);
  }
//console.log('context:', AuthContext);
function logout() {
  
  setIsAuthenticated(false);
}
return <AuthContext.Provider value ={{isAuthenticated,toggleAuth, logout}}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);
