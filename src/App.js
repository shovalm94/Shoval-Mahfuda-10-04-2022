import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import backgroundVideo from './images/production ID_3843103.mp4';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <video autoPlay muted loop id='video'>
        <source src={backgroundVideo} />
      </video>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
