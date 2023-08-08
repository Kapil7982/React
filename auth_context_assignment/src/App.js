import React from 'react';
import AuthContextProvider from './components/AuthContextProvider';
import Navbar from './components/Navbar';
import UserStatus from './components/UserStatus';

const App = () => {
  return (
    <AuthContextProvider>
      <div className="app-container">
        <Navbar />
        <UserStatus />
      </div>
    </AuthContextProvider>
  );
};

export default App;
