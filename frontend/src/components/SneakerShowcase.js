import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, List } from 'lucide-react';

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
      price: '$170'
    },
    {
      id: 2,
      name: 'Classic Collection',
      brand: 'various',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/2759779/pexels-photo-2759779.jpeg',
      price: '$120-200'
    },
    {
      id: 3,
      name: 'Jordan Premium Collection',
      brand: 'nike',
      category: 'jordan',
      image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3',
      price: '$150-250'
    },
    {
      id: 4,
      name: 'Retail Display Collection',
      brand: 'various',
      category: 'all',
      image: 'https://images.pexels.com/photos/2918534/pexels-photo-2918534.jpeg',
      price: '$80-300'
    },
    {
      id: 5,
      name: 'Vans Classic Collection',
      brand: 'vans',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1577208288347-b24488f3efa5',
      price: '$60-90'
    },
    {
      id: 6,
      name: 'Nike Air Max',
      brand: 'nike',
      category: 'nike',
      image: 'https://images.unsplash.com/photo-1618677831741-6260a73ff4f9',
      price: '$130'
    },
    {
      id: 7,
      name: 'Street Culture',
      brand: 'various',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/32268273/pexels-photo-32268273.jpeg',
      price: '$90-150'
    },
    {
      id: 8,
      name: 'Nike Premium White',
      brand: 'nike',
      category: 'nike',
      image: 'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d',
      price: '$110'
    },
    {
      id: 9,
      name: 'Clean Lifestyle',
      brand: 'various',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/32219102/pexels-photo-32219102.jpeg',
      price: '$85-120'
    },
    {
      id: 10,
      name: 'Collector\'s Archive',
      brand: 'various',
      category: 'all',
      image: 'https://images.pexels.com/photos/2364589/pexels-photo-2364589.jpeg',
      price: '$200-500'
    },
    {
      id: 11,
      name: 'Street Style Focus',
      brand: 'various',
      category: 'lifestyle',
      image: 'https://images.pexels.com/photos/32268269/pexels-photo-32268269.jpeg',
      price: '$95-140'
    },
    {
      id: 12,
      name: 'Nike Innovation',
      brand: 'nike',
      category: 'nike',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
      price: '$160'
    }
  ];

  const filteredSneakers = activeFilter === 'all' 
    ? sneakers 
    : sneakers.filter(sneaker => sneaker.category === activeFilter || sneaker.brand === activeFilter);

  return (
    <section id="collection" className="py-20 bg-white">
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
                The Collection
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Explore our curated selection of premium sneakers from the world's most coveted brands. Each piece tells a story of innovation, culture, and style.
              </p>
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

        {/* Products Grid */}
        <motion.div
          layout
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 lg:grid-cols-2'
          }`}
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
              whileHover={{ y: -5 }}
            >
              <div className={`${
                viewMode === 'grid' ? 'space-y-4' : 'flex space-x-6'
              }`}>
                {/* Image */}
                <div className={`overflow-hidden bg-gray-50 ${
                  viewMode === 'grid' 
                    ? 'aspect-square' 
                    : 'w-48 h-48 flex-shrink-0'
                }`}>
                  <img
                    src={sneaker.image}
                    alt={sneaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className={`space-y-2 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="font-semibold text-black group-hover:text-gray-700 transition-colors">
                    {sneaker.name}
                  </h3>
                  <p className="text-gray-600">{sneaker.price}</p>
                  {viewMode === 'list' && (
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Discover the perfect blend of style and comfort in this carefully curated piece from our premium collection.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <button className="border-2 border-black text-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors">
            View All Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SneakerShowcase;