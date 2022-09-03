import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='*' element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;
