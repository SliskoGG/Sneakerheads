import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Instagram, Twitter, Youtube } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'Sneaker Collector',
      image: 'https://images.pexels.com/photos/27206758/pexels-photo-27206758.jpeg',
      rating: 5,
      text: "SoleStash has completely transformed my sneaker game. The curation is incredible and I've discovered brands I never knew existed. The monthly accessory boxes are always a pleasant surprise!",
      platform: 'Instagram',
      handle: '@alexsneakerhead'
    },
    {
      id: 2,
      name: 'Maya Rodriguez',
      role: 'Lifestyle Blogger',
      image: 'https://images.pexels.com/photos/2364589/pexels-photo-2364589.jpeg',
      rating: 5,
      text: "As someone who values both style and convenience, SoleStash is perfect. The Collector's Drop tier gives me just the right amount of sneakers, and the accessory boxes help me maintain my collection perfectly.",
      platform: 'Youtube',
      handle: 'MayaLifestyle'
    },
    {
      id: 3,
      name: 'Jordan Williams',
      role: 'Street Style Influencer',
      image: 'https://images.pexels.com/photos/6968672/pexels-photo-6968672.jpeg',
      rating: 5,
      text: "The Grail Tier is worth every penny. Getting 6 premium sneakers a year plus exclusive access to limited drops? This is a sneakerhead's dream come true. The unboxing experience is always incredible.",
      platform: 'Twitter',
      handle: '@jordanstreets'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Subscribers', icon: '👥' },
    { number: '500,000+', label: 'Sneakers Delivered', icon: '👟' },
    { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
    { number: '98%', label: 'Retention Rate', icon: '❤️' }
  ];

  const socialPosts = [
    {
      platform: 'Instagram',
      image: 'https://images.pexels.com/photos/4816753/pexels-photo-4816753.jpeg',
      likes: '2.3k',
      caption: 'Monthly unboxing from @solestash never disappoints! 🔥'
    },
    {
      platform: 'Twitter',
      image: 'https://images.pexels.com/photos/2918534/pexels-photo-2918534.jpeg',
      likes: '1.8k',
      caption: 'My SoleStash collection is growing fast! Best subscription ever 👟'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted by 
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Thousands</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Join a community of passionate sneaker enthusiasts who trust SoleStash for their monthly dose of premium footwear and accessories.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Our <span className="text-orange-500">Community</span> Says
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="bg-gradient-to-r from-orange-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="h-6 w-6 text-white" />
                </motion.div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-orange-500 to-red-600">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-orange-500 text-sm">
                      {testimonial.platform === 'Instagram' && <Instagram className="h-4 w-4" />}
                      {testimonial.platform === 'Twitter' && <Twitter className="h-4 w-4" />}
                      {testimonial.platform === 'Youtube' && <Youtube className="h-4 w-4" />}
                      <span>{testimonial.handle}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Social <span className="text-orange-500">Buzz</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt="Social post"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {post.platform === 'Instagram' ? (
                        <Instagram className="h-5 w-5 text-orange-500" />
                      ) : (
                        <Twitter className="h-5 w-5 text-orange-500" />
                      )}
                      <span className="text-orange-500 font-semibold">{post.platform}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Star className="h-4 w-4 fill-current text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{post.caption}</p>
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
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Join the SoleStash Community</h3>
            <p className="text-lg text-gray-300 mb-6">Become part of a passionate community of sneaker enthusiasts. Share your unboxings, connect with fellow collectors.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Subscription
              </motion.button>
              <motion.button
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow on Instagram
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;