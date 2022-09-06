import './App.css';
import './darkMode.css';
import './lightMode.css';
import React, { useContext } from 'react';
import { PortfolioContext } from './Context/Context';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import WineRecommendations from './Components/WineRecommendations';
import MoodyCreatureSociety from './Components/MoodyCreatureSociety';

function App() {
  const { theme } = useContext(PortfolioContext);
  return (
      <div className={`${theme}`}>
        <NavBar />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/wine-recommendations' element={<WineRecommendations />} />
          <Route path="/moody-creature-society" element={<MoodyCreatureSociety />} />
        </Routes>
      </div>
  );
}

export default App;
