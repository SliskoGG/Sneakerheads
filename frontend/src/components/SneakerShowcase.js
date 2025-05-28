import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingCart } from 'lucide-react';

const SneakerShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('featured');

  const categories = [
    { id: 'featured', name: 'Featured', count: 8 },
    { id: 'limited', name: 'Limited Edition', count: 4 },
    { id: 'classics', name: 'Classics', count: 6 },
    { id: 'accessories', name: 'Accessories', count: 12 }
  ];

  const sneakers = [
    {
      id: 1,
      name: 'Air Force 1 Premium',
      brand: 'Nike',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwY29sbGVjdGlvbnxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NDg0NTI2OTR8MA&ixlib=rb-4.1.0&q=85',
      category: 'featured',
      isLimited: true
    },
    {
      id: 2,
      name: 'Ultra Boost 22',
      brand: 'Adidas',
      price: '$180',
      image: 'https://images.unsplash.com/photo-1580902394743-1394a7ec93d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwc3Vic2NyaXB0aW9uJTIwYm94fGVufDB8fHxyZWR8MTc0ODQ1MjcxMnww&ixlib=rb-4.1.0&q=85',
      category: 'featured',
      isLimited: false
    },
    {
      id: 3,
      name: 'Jordan 4 Retro',
      brand: 'Nike',
      price: '$200',
      image: 'https://images.unsplash.com/photo-1696954895463-343839741541?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwc25lYWtlcnN8ZW58MHx8fHJlZHwxNzQ4NDUyNjkwfDA&ixlib=rb-4.1.0&q=85',
      category: 'limited',
      isLimited: true
    },
    {
      id: 4,
      name: 'Classic Leather',
      brand: 'Reebok',
      price: '$80',
      image: 'https://images.pexels.com/photos/6968672/pexels-photo-6968672.jpeg',
      category: 'classics',
      isLimited: false
    }
  ];

  const accessories = [
    {
      id: 5,
      name: 'Premium Care Kit',
      type: 'Cleaning Kit',
      image: 'https://images.pexels.com/photos/5625046/pexels-photo-5625046.jpeg',
      description: 'Complete sneaker maintenance kit'
    },
    {
      id: 6,
      name: 'Luxury Laces Pack',
      type: 'Laces',
      image: 'https://images.pexels.com/photos/5625038/pexels-photo-5625038.jpeg',
      description: 'Premium waxed cotton laces'
    }
  ];

  const filteredSneakers = sneakers.filter(sneaker => 
    activeCategory === 'featured' || sneaker.category === activeCategory
  );

  return (
    <section id="sneakers" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sneaker 
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the premium sneakers and accessories that could be part of your monthly subscription. Quality, authenticity, and style guaranteed.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Sneakers Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
        >
          {filteredSneakers.map((sneaker, index) => (
            <motion.div
              key={sneaker.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Limited Edition Badge */}
              {sneaker.isLimited && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  LIMITED
                </div>
              )}

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="h-4 w-4" />
                </motion.button>
                <motion.button
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Eye className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={sneaker.image}
                  alt={sneaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-orange-500 font-semibold">{sneaker.brand}</span>
                  <span className="text-lg font-bold text-white">{sneaker.price}</span>
                </div>
                <h3 className="text-white font-semibold mb-4">{sneaker.name}</h3>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Wishlist</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accessories Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Monthly <span className="text-orange-500">Accessories</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accessories.map((accessory, index) => (
              <motion.div
                key={accessory.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-6 bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-orange-500 font-semibold mb-1">{accessory.type}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{accessory.name}</h4>
                  <p className="text-gray-300">{accessory.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Start Getting These Amazing Products</h3>
            <p className="text-lg text-gray-300 mb-6">Join thousands of sneakerheads who get premium sneakers and accessories delivered monthly.</p>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Choose Your Subscription
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SneakerShowcase;