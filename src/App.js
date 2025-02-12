import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Things from './pages/things';
import Restaurants from './pages/Restorant';
import Hotels from './pages/Hotels';
import NeighBorhoodsPage from './pages/NeghbourhoodPage';
import ExploreKigali from './pages/ExporeKigali';
import ErrorPage from './Dropdown/Error';
import ErrorBoundary from './pages/ErrorBoundary'; // Import ErrorBoundary
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/things' element={<Things />} />
          <Route path='/Restaurants' element={<Restaurants />} />
          <Route path='/Hotels' element={<Hotels />} />
          <Route path='/NeighBorhoods' element={<NeighBorhoodsPage />} />
          <Route path='/ExploreKigali' element={<ExploreKigali />} />
          {/* 404 route for undefined paths */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
