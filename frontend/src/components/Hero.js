import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const heroImages = [
    {
      id: 1,
      name: 'Air Jordan 1 High OG "Taxi"',
      image: 'https://images.unsplash.com/photo-1661324257527-ce9379163e1b'
    },
    {
      id: 2,
      name: 'Air Jordan 1 "Dark Mocha"',
      image: 'https://images.unsplash.com/photo-1612821745127-53855be9cbd1'
    },
    {
      id: 3,
      name: 'Nike Dunk Low "Panda"',
      image: 'https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c'
    },
    {
      id: 4,
      name: 'Air Force 1 Classic White',
      image: 'https://images.unsplash.com/photo-1597350584914-55bb62285896'
    },
    {
      id: 5,
      name: 'Air Jordan 1 Premium',
      image: 'https://images.pexels.com/photos/9537431/pexels-photo-9537431.jpeg'
    }
  ];

  // Auto-advance images like a video
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change every 3 seconds for video-like feel
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollToCollection = () => {
    const collectionSection = document.getElementById('collection');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Full-Page Video-Style Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex].image}
              alt={heroImages[currentImageIndex].name}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center">
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-bold text-white leading-none text-shadow">
                  Join the<br />
                  <span className="italic">Sneaker</span><br />
                  Culture
                </h1>
                
                <p className="text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed text-shadow">
                  Discover exclusive drops, connect with the community, and build your perfect sneaker collection through our curated subscription service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <motion.button
                  onClick={scrollToCollection}
                  className="bg-white text-black px-12 py-5 text-xl font-semibold hover:bg-gray-100 transition-colors rounded-lg shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Explore Collection
                </motion.button>
                
                <motion.button
                  onClick={() => setShowVideoModal(true)}
                  className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors px-12 py-5 text-xl font-semibold border-2 border-white/30 hover:border-white/50 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Play className="h-6 w-6" />
                  <span>Watch Story</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Video Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-8' : 'bg-white/40 w-4'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-black">Our Story</h2>
                
                {/* Video Placeholder */}
                <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <Play className="h-16 w-16 mx-auto opacity-60" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">SoleStash Story</h3>
                      <p className="text-gray-300">Video coming soon</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-left space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    SoleStash was born from a simple belief: every sneakerhead deserves access to the culture's most coveted drops, regardless of their location or connections.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our curation team works tirelessly to source authentic, premium sneakers from exclusive collaborations and limited releases, delivering them directly to passionate collectors worldwide.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    More than just a subscription service, we're building a global community of sneaker enthusiasts who share stories, styles, and the pure joy of unboxing that perfect pair.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-sm font-medium">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center mt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;