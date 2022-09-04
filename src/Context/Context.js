import React, { createContext, useState } from 'react';

const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
     setTheme(theme === 'light' ? 'dark' : 'light')
  }

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