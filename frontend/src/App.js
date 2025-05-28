import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SubscriptionTiers from './components/SubscriptionTiers';
import SneakerShowcase from './components/SneakerShowcase';
import SocialProof from './components/SocialProof';
import StyleQuiz from './components/StyleQuiz';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-900"
    >
      <Navbar />
      <Hero />
      <HowItWorks />
      <SubscriptionTiers />
      <SneakerShowcase />
      <SocialProof />
      <StyleQuiz />
      <FAQ />
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