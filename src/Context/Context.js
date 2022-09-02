import React, { createContext } from 'react';

const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {

  const value = {

  }
  return (
    <PortfolioContext.Provider value={value} >
      {children}
    </PortfolioContext.Provider>
  )
}
export { PortfolioContextProvider, PortfolioContext };