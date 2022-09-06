import './App.css';
import './darkMode.css';
import './lightMode.css';
import React, { useContext } from 'react';
import { PortfolioContext } from './Context/Context';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import WineRecommendations from './Components/WineRecommendations';
import MoodyCreatureSociety from './Components/MoodyCreatureSociety';
import PokemonIndex from './Components/PokemonIndex';
import DesignoMultiPageWebsite from './Components/DesignoMultiPageWebsite';

function App() {
  const { theme } = useContext(PortfolioContext);
  return (
      <div className={`${theme}`}>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/wine-recommendations' element={<WineRecommendations />} />
          <Route path="/moody-creature-society" element={<MoodyCreatureSociety />} />
          <Route path="/pokemon-index" element={<PokemonIndex />} />
          <Route path="/designo-multi-page-website" element={<DesignoMultiPageWebsite />} />
        </Routes>
      </div>
  );
}

export default App;
