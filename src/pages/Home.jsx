import React from 'react';
import { motion } from 'framer-motion';
import HomeNews from '../components/HomeNews';

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeNews />
    </motion.div>
  );
}

export default Home;
