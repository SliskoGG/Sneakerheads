import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSneakers = [
    {
      id: 1,
      name: 'Air Jordan 1 High OG "Taxi"',
      description: 'Featured in this month\'s drop',
      image: 'https://images.unsplash.com/photo-1661324257527-ce9379163e1b'
    },
    {
      id: 2,
      name: 'Air Jordan 1 "Dark Mocha"',
      description: 'Collector\'s favorite',
      image: 'https://images.unsplash.com/photo-1612821745127-53855be9cbd1'
    },
    {
      id: 3,
      name: 'Nike Dunk Low "Panda"',
      description: 'Street culture icon',
      image: 'https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c'
    },
    {
      id: 4,
      name: 'Air Force 1 Classic White',
      description: 'Timeless essential',
      image: 'https://images.unsplash.com/photo-1597350584914-55bb62285896'
    },
    {
      id: 5,
      name: 'Air Jordan 1 Premium',
      description: 'Limited edition drop',
      image: 'https://images.pexels.com/photos/9537431/pexels-photo-9537431.jpeg'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSneakers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSneakers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSneakers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSneakers.length) % heroSneakers.length);
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold text-black leading-none">
                  Join the<br />
                  <span className="italic">Sneaker</span><br />
                  Culture
                </h1>
                
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Discover exclusive drops, connect with the community, and build your perfect sneaker collection through our curated subscription service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-900 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Collection
                </motion.button>
                
                <motion.button
                  className="flex items-center space-x-2 text-black hover:text-gray-700 transition-colors px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="h-5 w-5" />
                  <span className="font-medium">Watch Story</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Sneaker Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden bg-gray-50 rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={heroSneakers[currentSlide].image}
                    alt={heroSneakers[currentSlide].name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="h-5 w-5 text-black" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroSneakers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-black w-6' : 'bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating Product Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100"
                >
                  <h3 className="font-bold text-black text-lg">{heroSneakers[currentSlide].name}</h3>
                  <p className="text-gray-600">{heroSneakers[currentSlide].description}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Brand Elements */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-50 text-9xl font-bold pointer-events-none select-none">
        SOLE
      </div>
    </section>
  );
};

export default Hero;