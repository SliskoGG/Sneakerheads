import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook,
  ArrowRight,
  Star
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Subscription': [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Subscription Tiers', href: '#subscription' },
      { name: 'Style Quiz', href: '#style-quiz' },
      { name: 'Gift Subscriptions', href: '#gifts' }
    ],
    'Support': [
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Size Guide', href: '#size-guide' },
      { name: 'Returns & Exchanges', href: '#returns' }
    ],
    'Company': [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#mission' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Accessibility', href: '#accessibility' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@solestash.com', href: 'mailto:hello@solestash.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the 
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Loop</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Get notified about exclusive drops, new partnerships, and sneaker releases before anyone else. Plus, receive a 10% discount on your first subscription.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <motion.div
                className="flex-1"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </motion.div>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-orange-500/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>50,000+ subscribers</span>
              </div>
              <span>•</span>
              <span>No spam, unsubscribe anytime</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-xl">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                SoleStash
              </span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover exclusive sneakers and premium accessories delivered to your door. Join the community that never misses a drop.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="h-5 w-5 text-orange-500" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`p-3 bg-white/5 border border-gray-700 rounded-xl text-gray-300 ${social.color} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-400 text-sm">
              © 2024 SoleStash. All rights reserved. Made with ❤️ for sneaker enthusiasts.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All systems operational</span>
              </div>
              <div className="text-gray-400">
                Built with sustainability in mind 🌱
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Sneaker Journey?</h3>
            <p className="text-gray-300 mb-6">Join thousands of satisfied subscribers today.</p>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Subscription
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;