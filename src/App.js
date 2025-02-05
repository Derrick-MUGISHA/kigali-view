import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Things from './pages/things';
import Restaurants from './pages/Restorant';
import Hotels from './pages/Hotels';
import NeighBorhoods from './pages/Negihbourhood';
import ExploreKigali from './pages/ExporeKigali';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path= '/things' element={<Things />} />
        <Route path= '/Restaurants' element={<Restaurants />} />
        <Route path= '/Hotels' element={<Hotels />} />
        <Route path= '/NeighBorhoods' element={<NeighBorhoods />} />
        <Route path= '/ExploreKigali' element={<ExploreKigali />} />
      </Routes>
    </>
  );
}

export default App;