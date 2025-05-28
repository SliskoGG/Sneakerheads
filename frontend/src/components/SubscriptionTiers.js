import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap, Gift } from 'lucide-react';

const SubscriptionTiers = () => {
  const [hoveredTier, setHoveredTier] = useState(null);

  const tiers = [
    {
      id: 'kick-starter',
      name: 'Kick Starter',
      price: '$8',
      period: '/month',
      description: 'Perfect for casual sneaker lovers',
      icon: Zap,
      sneakers: '1 pair per year',
      accessories: '11 monthly accessory boxes',
      popular: false,
      features: [
        '1 premium sneaker per year',
        'Monthly curated accessory box',
        'Premium laces & stickers',
        'Cleaning kit samples',
        'Community access',
        'Style preference matching'
      ],
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-500/20 to-purple-600/20',
      borderGradient: 'from-blue-500/50 to-purple-600/50'
    },
    {
      id: 'collectors-drop',
      name: "Collector's Drop",
      price: '$11',
      period: '/month',
      description: 'For the growing sneaker collection',
      icon: Star,
      sneakers: '2 pairs per year',
      accessories: '10 premium accessory boxes',
      popular: true,
      features: [
        '2 premium sneakers per year',
        'Enhanced monthly accessory box',
        'Premium branded merchandise',
        'Priority customer support',
        'Early access to limited drops',
        'Advanced style customization',
        'Loyalty point bonuses'
      ],
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-500/20 to-red-600/20',
      borderGradient: 'from-orange-500/50 to-red-600/50'
    },
    {
      id: 'grail-tier',
      name: 'Grail Tier',
      price: '$20',
      period: '/month',
      description: 'Ultimate sneakerhead experience',
      icon: Crown,
      sneakers: '6 pairs per year',
      accessories: '6 exclusive premium boxes',
      popular: false,
      features: [
        '6 premium sneakers per year',
        'Exclusive collaboration access',
        'Limited edition merchandise',
        'White-glove customer service',
        'First access to all drops',
        'Personal style consultant',
        'VIP community access',
        'Free expedited shipping'
      ],
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/20 to-pink-600/20',
      borderGradient: 'from-purple-500/50 to-pink-600/50'
    }
  ];

  return (
    <section id="subscription" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Subscription 
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Tiers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect subscription tier for your sneaker journey. Each tier is designed to match your passion level and collection goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredTier(tier.id)}
              onHoverEnd={() => setHoveredTier(null)}
              className={`relative group ${tier.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`relative h-full bg-gradient-to-b ${tier.bgGradient} border border-gray-700 rounded-3xl p-8 backdrop-blur-sm hover:border-transparent transition-all duration-500`}
                style={{
                  background: hoveredTier === tier.id 
                    ? `linear-gradient(135deg, ${tier.bgGradient.split(' ')[1].replace('/20', '/30')}, ${tier.bgGradient.split(' ')[3].replace('/20', '/30')})`
                    : undefined
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: tier.popular 
                    ? '0 25px 50px rgba(234, 88, 12, 0.25)' 
                    : '0 25px 50px rgba(0, 0, 0, 0.25)'
                }}
              >
                {/* Icon and Title */}
                <div className="text-center mb-8">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tier.gradient} rounded-2xl mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <tier.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400">{tier.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-xl text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-center text-sm text-gray-300">
                      <Gift className="h-4 w-4 mr-2 text-orange-500" />
                      {tier.sneakers}
                    </div>
                    <div className="text-sm text-gray-400">{tier.accessories}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-r ${tier.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${tier.gradient} hover:shadow-lg transition-all duration-300 ${
                    tier.popular ? 'shadow-orange-500/25' : ''
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tier.popular ? 'Start Free Trial' : 'Get Started'}
                </motion.button>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 overflow-hidden rounded-3xl">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">All Subscriptions Include</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Free shipping on accessories</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionTiers;