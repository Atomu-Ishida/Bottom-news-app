import React from 'react';
import Home from './Home';
import Searched from './Searched';
import About from './About';
import CategoryNews from './CategoryNews';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/category/:type' element={<CategoryNews />} />
        <Route path='/searched/:search' element={<Searched />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
