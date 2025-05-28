import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    'Shop': [
      { name: 'New Releases', href: '#' },
      { name: 'Collection', href: '#collection' },
      { name: 'Subscription', href: '#subscription' },
      { name: 'Gift Cards', href: '#' }
    ],
    'Community': [
      { name: 'Stories', href: '#community' },
      { name: 'Events', href: '#' },
      { name: 'Style Guide', href: '#' },
      { name: 'Size Guide', href: '#' }
    ],
    'Support': [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Shipping', href: '#' }
    ],
    'Company': [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Sustainability', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-gray-800 pb-12 mb-12"
        >
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-8">
              Get the latest drops, exclusive access, and sneaker culture updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900 border border-gray-700 px-6 py-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4">SoleStash</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Where sneaker culture meets curation. Join thousands of enthusiasts in discovering your next favorite pair.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([section, links], index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
            >
              <h4 className="font-semibold mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
        >
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <p className="text-gray-400 text-sm">
              © 2024 SoleStash. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            Made for sneaker culture 🔥
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;