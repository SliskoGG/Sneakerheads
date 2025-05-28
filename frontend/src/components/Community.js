import React from 'react';
import { motion } from 'framer-motion';
import { Users, Camera, Heart, MessageCircle } from 'lucide-react';

const Community = () => {
  const communityPosts = [
    {
      id: 1,
      user: '@sneaker_alex',
      image: 'https://images.pexels.com/photos/32268273/pexels-photo-32268273.jpeg',
      caption: 'Clean rotation for the weekend 🔥',
      likes: 342,
      comments: 28
    },
    {
      id: 2,
      user: '@jordan_collector',
      image: 'https://images.pexels.com/photos/2364589/pexels-photo-2364589.jpeg',
      caption: 'My SoleStash collection after 8 months',
      likes: 567,
      comments: 43
    },
    {
      id: 3,
      user: '@street_style_maya',
      image: 'https://images.pexels.com/photos/32268269/pexels-photo-32268269.jpeg',
      caption: 'Perfect match for today\'s outfit',
      likes: 234,
      comments: 19
    },
    {
      id: 4,
      user: '@minimal_kicks',
      image: 'https://images.pexels.com/photos/32219102/pexels-photo-32219102.jpeg',
      caption: 'Sometimes less is more',
      likes: 456,
      comments: 32
    }
  ];

  const communityStats = [
    { icon: Users, label: 'Active Members', value: '50K+' },
    { icon: Camera, label: 'Posts Shared', value: '125K+' },
    { icon: Heart, label: 'Likes Given', value: '2.5M+' },
    { icon: MessageCircle, label: 'Conversations', value: '500K+' }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50">
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
            Join the Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow sneaker enthusiasts, share your collection, discover new styles, and be part of a culture that celebrates every step.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-black" />
                <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Latest from the Community</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                whileHover={{ y: -3 }}
              >
                {/* Post Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Post by ${post.user}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Post Content */}
                <div className="p-4">
                  <h4 className="font-semibold text-black mb-1">{post.user}</h4>
                  <p className="text-gray-600 text-sm mb-3">{post.caption}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-black text-white rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your journey with SoleStash and become part of a community that shares your passion for exceptional sneakers.
            </p>
            <motion.button
              className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;