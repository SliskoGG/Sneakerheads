import React from 'react';
import { motion } from 'framer-motion';
import { Check, Package, Clock, Truck } from 'lucide-react';

const Subscription = () => {
  const subscriptionTiers = [
    {
      name: 'Kick Starter',
      price: '$8',
      period: '/month',
      description: 'Perfect for new enthusiasts',
      sneakers: '1 pair per year',
      accessories: '11 monthly boxes',
      features: [
        '1 premium sneaker annually',
        'Monthly accessory box',
        'Community access',
        'Basic style matching'
      ]
    },
    {
      name: "Collector's Choice",
      price: '$11',
      period: '/month',
      description: 'For growing collections',
      sneakers: '2 pairs per year',
      accessories: '10 monthly boxes',
      features: [
        '2 premium sneakers annually',
        'Enhanced accessory boxes',
        'Priority support',
        'Advanced style matching',
        'Early access notifications'
      ],
      popular: true
    },
    {
      name: 'Grail Hunter',
      price: '$20',
      period: '/month',
      description: 'Ultimate sneaker experience',
      sneakers: '6 pairs per year',
      accessories: '6 exclusive boxes',
      features: [
        '6 premium sneakers annually',
        'Exclusive collaboration access',
        'White-glove service',
        'First access to all drops',
        'Personal style consultant',
        'VIP community access'
      ]
    }
  ];

  const howItWorks = [
    {
      icon: Package,
      title: 'Choose Your Style',
      description: 'Tell us your preferences and we\'ll curate the perfect selection for you.'
    },
    {
      icon: Clock,
      title: 'Monthly Surprises',
      description: 'Receive carefully selected sneakers and accessories based on your subscription tier.'
    },
    {
      icon: Truck,
      title: 'Delivered to You',
      description: 'Free shipping on accessories, with premium packaging that makes every delivery special.'
    }
  ];

  return (
    <section id="subscription" className="py-20 bg-white">
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
            Choose Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the subscription tier that matches your passion level. Each tier is designed to enhance your sneaker journey with carefully curated products.
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-black text-center mb-12">How It Works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                  <step.icon className="h-12 w-12 mx-auto mb-4 text-black" />
                  <h4 className="text-xl font-semibold text-black mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subscription Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {subscriptionTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative bg-white border-2 rounded-3xl p-8 transition-all hover:shadow-lg ${
                tier.popular 
                  ? 'border-black shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              whileHover={{ y: tier.popular ? 0 : -5 }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier Content */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-black">{tier.price}</span>
                  <span className="text-xl text-gray-600">{tier.period}</span>
                </div>
                
                <div className="space-y-1 text-sm text-gray-600 mb-6">
                  <div>{tier.sneakers}</div>
                  <div>{tier.accessories}</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 font-medium transition-colors ${
                tier.popular
                  ? 'bg-black text-white hover:bg-gray-900'
                  : 'border-2 border-black text-black hover:bg-black hover:text-white'
              }`}>
                {tier.popular ? 'Start Free Trial' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-6">All Subscriptions Include</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-5 w-5 text-black" />
                <span>Free shipping on accessories</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-5 w-5 text-black" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-5 w-5 text-black" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscription;