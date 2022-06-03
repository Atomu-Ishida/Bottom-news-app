import React from 'react';
import Home from './Home';
import Searched from './Searched';
import About from './About';
import CategoryNews from './CategoryNews';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const homeUrl = process.env.PUBLIC_URL;

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path={homeUrl} element={<Home />} />
        <Route path={homeUrl + '/about'} element={<About />} />
        <Route path={homeUrl + '/category/:type'} element={<CategoryNews />} />
        <Route path={homeUrl + '/searched/:search'} element={<Searched />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
