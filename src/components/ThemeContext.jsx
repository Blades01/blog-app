// ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // ThemeProvider (inside useEffect)
useEffect(() => {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const darkMode = saved === 'dark' || (!saved && prefersDark);
  setIsDark(darkMode);
  document.documentElement.classList.toggle('dark', darkMode);
}, []);

const toggleTheme = () => {
  const newTheme = !isDark;
  setIsDark(newTheme);
  document.documentElement.classList.toggle('dark', newTheme);
  localStorage.setItem('theme', newTheme ? 'dark' : 'light');
};


  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};