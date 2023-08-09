import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  background: ${props => props.theme.background};
  cursor: pointer;
  border: 2px solid ${props => props.theme.color}; /* Add border */
`;

const ToggleSwitch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleLabel}::after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  & + ${ToggleLabel}::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background: ${props => props.theme.color};
    transition: 0.3s;
  }
`;

function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <ToggleContainer>
      <ToggleSwitch
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        id="themeToggle"
      />
      <ToggleLabel htmlFor="themeToggle" />
    </ToggleContainer>
  );
}

export default ThemeToggle;
