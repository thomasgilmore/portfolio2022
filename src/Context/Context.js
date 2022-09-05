import React, { createContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
  const isDarkMode = () => {
    let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return darkMode ? 'dark' : 'light';
  }
  const [theme, setTheme] = useState(isDarkMode());

  const handleThemeChange = () => {
     setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, []);

  const value = {
    theme, 
    setTheme,
    handleThemeChange
  }
  return (
    <PortfolioContext.Provider value={value} >
      {children}
    </PortfolioContext.Provider>
  )
}
export { PortfolioContextProvider, PortfolioContext };