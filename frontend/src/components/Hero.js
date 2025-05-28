import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
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

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square lg:aspect-[4/5] overflow-hidden bg-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1661324257527-ce9379163e1b"
                  alt="Featured Sneaker"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Product Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
              >
                <h3 className="font-semibold text-black">Air Jordan 1 High OG</h3>
                <p className="text-gray-600 text-sm">Featured in this month's drop</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Brand Elements */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-100 text-9xl font-bold pointer-events-none">
        SOLE
      </div>
    </section>
  );
};

export default Hero;