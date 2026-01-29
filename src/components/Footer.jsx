import { Box, Globe, Settings, Users } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Box className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-bold text-white">SKU Generator</span>
            </div>
            <p className="text-sm text-gray-400">
              Automate SKU creation for your Shopify store and save hours every week.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 SKU Generator. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Users className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Settings className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
