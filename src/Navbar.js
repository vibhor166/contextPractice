import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const content = {
  english: {
    search: 'Search',
    flag: 'English Flag',
    themeToggle: 'Toggle Theme',
  },
  hindi: {
    search: 'Dhund',
    flag: 'Indian Flag',
    themeToggle: 'Rang badal',
  },
  french: {
    search: 'Chercher',
    flag: 'French Flag',
    themeToggle: 'thème de bascule',
  },
};
function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { search, flag, themeToggle } = content[language];
  const myStyle = {
    backgroundColor: isDarkMode ? 'grey' : 'white',
    padding: '10px',
  };
  return (
    <div style={myStyle}>
      {flag} {'   '}
      <button onClick={toggleTheme}>{themeToggle}</button>
      {'  '}
      <input type='text' placeholder={search} /> <button>{search}</button>
    </div>
  );
}

export default Navbar;
