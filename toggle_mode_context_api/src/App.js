import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeToggle from '../src/components/ThemeToggle';
import Dashboard from '../src/components/Dashborad';
import './App.css';

const lightTheme = {
  background: '#F0F0F0',
  color: '#333',
};

const darkTheme = {
  background: '#222',
  color: '#FFF',
};

const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: background 0.3s, color 0.3s;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppWrapper>
        <Header>
          <h1>Dashborad</h1>
        </Header>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Dashboard />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
