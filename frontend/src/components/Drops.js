import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Star, Bell } from 'lucide-react';

const Drops = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const latestDrops = [
    {
      id: 1,
      name: 'Air Jordan 1 High OG "Taxi"',
      brand: 'Nike',
      releaseDate: '2024-01-15',
      status: 'Available Now',
      image: 'https://images.unsplash.com/photo-1661324257527-ce9379163e1b',
      tier: 'All Tiers',
      featured: true
    },
    {
      id: 2,
      name: 'Nike Dunk Low "Panda"',
      brand: 'Nike',
      releaseDate: '2024-01-20',
      status: 'Available Now',
      image: 'https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c',
      tier: 'Collector\'s Choice+'
    },
    {
      id: 3,
      name: 'Air Jordan 1 "Dark Mocha"',
      brand: 'Nike',
      releaseDate: '2024-01-25',
      status: 'Available Now',
      image: 'https://images.unsplash.com/photo-1612821745127-53855be9cbd1',
      tier: 'Grail Hunter'
    }
  ];

  const upcomingDrops = [
    {
      id: 4,
      name: 'Air Force 1 "Triple White"',
      brand: 'Nike',
      releaseDate: '2024-02-15',
      status: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1597350584914-55bb62285896',
      tier: 'All Tiers'
    },
    {
      id: 5,
      name: 'Nike Innovation Series',
      brand: 'Nike',
      releaseDate: '2024-03-01',
      status: 'Early Access',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
      tier: 'Grail Hunter'
    }
  ];

  const exclusiveDrops = [
    {
      id: 6,
      name: 'SoleStash x Nike Collaboration',
      brand: 'Nike',
      releaseDate: '2024-02-20',
      status: 'Subscriber Exclusive',
      image: 'https://images.pexels.com/photos/9537431/pexels-photo-9537431.jpeg',
      tier: 'Collector\'s Choice+',
      exclusive: true
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available Now':
        return 'bg-green-100 text-green-800';
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800';
      case 'Early Access':
        return 'bg-purple-100 text-purple-800';
      case 'Subscriber Exclusive':
        return 'bg-black text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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

  const getCurrentDrops = () => {
    switch (activeTab) {
      case 'latest':
        return latestDrops;
      case 'upcoming':
        return upcomingDrops;
      case 'exclusive':
        return exclusiveDrops;
      default:
        return latestDrops;
    }
  };

  return (
    <section id="drops" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Latest Drops
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the game with the newest releases, exclusive collaborations, and limited edition drops available to SoleStash subscribers.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
            <div className="flex space-x-1">
              {[
                { id: 'latest', label: 'Latest Drops', icon: Star },
                { id: 'upcoming', label: 'Coming Soon', icon: Clock },
                { id: 'exclusive', label: 'Subscriber Exclusive', icon: Bell }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-black text-white shadow-sm'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Drops Grid */}
        <motion.div
          key={activeTab}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getCurrentDrops().map((drop, index) => (
            <motion.div
              key={drop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all group cursor-pointer ${
                drop.featured ? 'ring-2 ring-black' : ''
              }`}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={drop.image}
                  alt={drop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(drop.status)}`}>
                    {drop.status}
                  </span>
                </div>

                {/* Featured Badge */}
                {drop.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-black text-white p-2 rounded-full">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                )}

                {/* Exclusive Badge */}
                {drop.exclusive && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-purple-600 text-white p-2 rounded-full">
                      <Bell className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">{drop.brand}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(drop.tier)}`}>
                    {drop.tier}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors">
                  {drop.name}
                </h3>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(drop.releaseDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-black text-white rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Never Miss a Drop</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about exclusive releases, early access opportunities, and subscriber-only collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Drops;