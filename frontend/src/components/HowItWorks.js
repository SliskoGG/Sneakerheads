import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Truck, Package, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Choose Your Tier",
      description: "Select from our three subscription tiers based on how many sneakers you want per year. From casual to collector, we've got you covered.",
      image: "https://images.pexels.com/photos/5625046/pexels-photo-5625046.jpeg"
    },
    {
      icon: Star,
      title: "Take Style Quiz",
      description: "Tell us your preferences, favorite brands, colors, and style. Our algorithm will curate the perfect sneakers and accessories for you.",
      image: "https://images.pexels.com/photos/27206758/pexels-photo-27206758.jpeg"
    },
    {
      icon: Package,
      title: "Monthly Surprise",
      description: "Receive premium sneakers on your tier schedule and curated accessory boxes in between. Every delivery is an exciting unboxing experience.",
      image: "https://images.pexels.com/photos/5625038/pexels-photo-5625038.jpeg"
    },
    {
      icon: Truck,
      title: "Enjoy & Share",
      description: "Rock your new kicks, earn loyalty points, and share your unboxing experience. Build your collection while being part of our community.",
      image: "https://images.pexels.com/photos/4816753/pexels-photo-4816753.jpeg"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How It 
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of sneakerheads who never miss a drop. Our simple process ensures you get the best sneakers and accessories delivered to your door.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-2xl">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg font-bold px-4 py-2 rounded-full">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{step.description}</p>
                
                {index === 1 && (
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Preview Style Quiz
                  </motion.button>
                )}
              </div>

              {/* Image */}
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl group-hover:from-black/30 transition-all duration-300"></div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-2xl shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <step.icon className="h-6 w-6" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-gray-300 mb-6">Join thousands of sneaker enthusiasts who never miss a drop.</p>
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

export default HowItWorks;