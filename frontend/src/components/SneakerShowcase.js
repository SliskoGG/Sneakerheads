import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, List, Gift } from 'lucide-react';

const SneakerShowcase = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'nike', 'adidas', 'jordan', 'lifestyle'];

  const sneakers = [
    {
      id: 1,
      name: 'Air Jordan 1 High OG "Taxi"',
      brand: 'nike',
      category: 'jordan',
      image: 'https://images.unsplash.com/photo-1661324257527-ce9379163e1b',
      tier: 'All Tiers'
    },
    {
      id: 2,
      name: 'Classic Collection',
      brand: 'various',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/2759779/pexels-photo-2759779.jpeg',
      tier: 'Kick Starter+'
    },
    {
      id: 3,
      name: 'Jordan Premium Collection',
      brand: 'nike',
      category: 'jordan',
      image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3',
      tier: 'Collector\'s Choice+'
    },
    {
      id: 4,
      name: 'Retail Display Collection',
      brand: 'various',
      category: 'all',
      image: 'https://images.pexels.com/photos/2918534/pexels-photo-2918534.jpeg',
      tier: 'All Tiers'
    },
    {
      id: 5,
      name: 'Vans Classic Collection',
      brand: 'vans',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1577208288347-b24488f3efa5',
      tier: 'Kick Starter+'
    },
    {
      id: 6,
      name: 'Nike Air Max',
      brand: 'nike',
      category: 'nike',
      image: 'https://images.unsplash.com/photo-1618677831741-6260a73ff4f9',
      tier: 'Collector\'s Choice+'
    },
    {
      id: 7,
      name: 'Street Culture',
      brand: 'various',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/32268273/pexels-photo-32268273.jpeg',
      tier: 'All Tiers'
    },
    {
      id: 10,
      name: 'Adidas Ultraboost 22',
      brand: 'adidas',
      category: 'adidas',
      image: 'https://images.unsplash.com/photo-1580902394743-1394a7ec93d2',
      tier: 'Collector\'s Choice+'
    },
    {
      id: 11,
      name: 'Adidas Stan Smith',
      brand: 'adidas',
      category: 'adidas',
      image: 'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d',
      tier: 'All Tiers'
    }
  ];

  const filteredSneakers = activeFilter === 'all' 
    ? sneakers 
    : sneakers.filter(sneaker => sneaker.category === activeFilter || sneaker.brand === activeFilter);

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Kick Starter+':
        return 'bg-blue-100 text-blue-800';
      case 'Collector\'s Choice+':
        return 'bg-purple-100 text-purple-800';
      case 'Grail Hunter':
        return 'bg-black text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="collection" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                What You Could Get
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Explore the types of premium sneakers that could be delivered to your door with your SoleStash subscription. Each month brings new possibilities from the world's most coveted brands.
              </p>
              
              {/* Callout */}
              <div className="mt-6 bg-gray-50 rounded-2xl p-6 max-w-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Gift className="h-6 w-6 text-black" />
                  <h3 className="font-semibold text-black">Included with Subscription</h3>
                </div>
                <p className="text-gray-600">
                  These sneakers are delivered as part of your monthly subscription - no additional purchase required.
                </p>
              </div>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-gray-200"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 font-medium capitalize transition-colors ${
                activeFilter === filter
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Immersive Wide Products Display - Nike.com Style */}
      <div className="w-full">
        <motion.div
          layout
          className="space-y-8"
        >
          {filteredSneakers.map((sneaker, index) => (
            <motion.div
              key={sneaker.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              {/* Full-Width Immersive Image - Nike.com Style */}
              <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <div className="relative aspect-[5/2] lg:aspect-[7/2] overflow-hidden bg-gray-50">
                  <img
                    src={sneaker.image}
                    alt={sneaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  {/* Product Info Overlay */}
                  <div className="absolute bottom-8 left-8 lg:left-16 text-white">
                    <div className="mb-3">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${getTierColor(sneaker.tier)} bg-opacity-90`}>
                        {sneaker.tier}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-shadow">
                      {sneaker.name}
                    </h3>
                    <p className="text-lg text-gray-200">Available with subscription</p>
                  </div>

                  {/* Right Side CTA */}
                  <div className="absolute bottom-8 right-8 lg:right-16">
                    <button className="bg-white text-black px-8 py-3 font-semibold rounded-lg hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subscription CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-black text-white rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Collection?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of sneaker enthusiasts who get premium kicks and accessories delivered monthly through our curated subscription service.
            </p>
            <button className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors rounded-lg">
              Choose Your Subscription
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SneakerShowcase;
