import React, { createContext } from 'react';
import useToggle from '../Toggler';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  return (
    <div>
      {' '}
      <ThemeContext.Provider
        value={{ isDarkMode: isDarkMode, toggleTheme: toggleDarkMode }}
      >
        {props.children}
      </ThemeContext.Provider>
      ;
    </div>
  );
}
