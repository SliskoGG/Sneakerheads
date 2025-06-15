import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SneakerShowcase from './components/SneakerShowcase';
import Drops from './components/Drops';
import Community from './components/Community';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <Hero />
      <Drops />
      <SneakerShowcase />
      <Community />
      <Subscription />
      <Footer />
    </motion.div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
