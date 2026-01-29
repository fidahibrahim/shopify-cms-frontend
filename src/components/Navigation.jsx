import { Box, Menu, X } from 'lucide-react';
import React, { useState } from 'react'


const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Box className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">SKU Generator</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
              Start Free Trial
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-3">
            <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#faq" className="block text-gray-600 hover:text-gray-900">FAQ</a>
            <button className="w-full px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation
