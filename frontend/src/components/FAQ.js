import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      category: 'Subscription',
      question: 'How does the subscription work?',
      answer: 'Choose your tier based on how many sneakers you want per year. You\'ll receive premium sneakers according to your tier schedule, plus curated accessory boxes in the months between sneaker deliveries. All subscriptions are monthly billing with the flexibility to cancel anytime.'
    },
    {
      id: 2,
      category: 'Subscription',
      question: 'Can I change my subscription tier?',
      answer: 'Yes! You can upgrade or downgrade your subscription tier at any time. Changes will take effect on your next billing cycle. If you upgrade mid-cycle, you\'ll be charged the prorated difference.'
    },
    {
      id: 3,
      category: 'Products',
      question: 'What brands do you carry?',
      answer: 'We partner with premium brands including Nike, Adidas, Jordan, New Balance, Puma, and many exclusive streetwear collaborations. Our curation team ensures you get authentic, high-quality sneakers that match your style preferences.'
    },
    {
      id: 4,
      category: 'Products',
      question: 'What comes in the monthly accessory boxes?',
      answer: 'Accessory boxes include premium laces, cleaning kits, sneaker care products, stickers, socks, branded merchandise, and sometimes exclusive items like t-shirts or limited edition accessories. Contents vary each month to keep it exciting!'
    },
    {
      id: 5,
      category: 'Shipping',
      question: 'How much does shipping cost?',
      answer: 'Shipping for monthly accessory boxes is always free and included in your subscription. For sneaker deliveries, standard shipping costs apply ($9.99 in the US, international rates vary). Grail Tier members get free expedited shipping on all orders.'
    },
    {
      id: 6,
      category: 'Shipping',
      question: 'Which countries do you ship to?',
      answer: 'We currently ship to the United States, Canada, United Kingdom, Australia, and select European countries. We\'re actively expanding to more regions. Check our shipping page for the most up-to-date list of available countries.'
    },
    {
      id: 7,
      category: 'Account',
      question: 'How do I update my style preferences?',
      answer: 'You can update your style preferences anytime in your account dashboard. We recommend retaking the style quiz every few months or whenever your preferences change to ensure you get the best possible curation.'
    },
    {
      id: 8,
      category: 'Account',
      question: 'What is the loyalty program?',
      answer: 'Our loyalty program rewards continuous subscribers with points for every month of active subscription, referrals, and community engagement. Points can be redeemed for discounts, exclusive items, early access to limited drops, and special perks.'
    },
    {
      id: 9,
      category: 'Returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for sneakers if they don\'t fit or you\'re not satisfied. Items must be unworn with original packaging. Accessory box items are generally final sale unless defective. Return shipping is free for exchanges.'
    },
    {
      id: 10,
      category: 'Returns',
      question: 'Can I skip a month?',
      answer: 'Yes! You can pause your subscription for up to 3 months per year through your account dashboard. This is perfect for vacation, budget planning, or if you need time to catch up with your current collection.'
    }
  ];

  const categories = ['All', 'Subscription', 'Products', 'Shipping', 'Account', 'Returns'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked 
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about SoleStash subscriptions, shipping, returns, and more. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div layout className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-full text-xs font-semibold text-orange-400">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  {openFAQ === faq.id ? (
                    <Minus className="h-6 w-6 text-orange-500" />
                  ) : (
                    <Plus className="h-6 w-6 text-gray-400 group-hover:text-orange-500 transition-colors" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 border-t border-gray-700/50">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-300 leading-relaxed pt-4"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-lg text-gray-300 mb-6">Our support team is here to help you get the most out of your SoleStash subscription.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Chat
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;