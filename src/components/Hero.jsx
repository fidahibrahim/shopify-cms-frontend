import { Zap } from 'lucide-react';
import React from 'react'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Now integrated with Shopify</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Generate Smart SKUs in Seconds
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Automate SKU creation for your Shopify store. Save hours, eliminate errors, and scale effortlessly with intelligent product codes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold text-lg shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-semibold text-lg">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">No credit card required • 14-day free trial</p>
          </div>
          <div className="relative">
            <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="font-semibold text-gray-900">SKU Generator</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Active</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">SKUs Generated Today</span>
                    <span className="font-bold text-gray-900">1,247</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Time Saved This Week</span>
                    <span className="font-bold text-indigo-600">12.5 hours</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Error Rate</span>
                    <span className="font-bold text-green-600">0.02%</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="text-xs text-gray-500 mb-2">Recent SKUs</div>
                  <div className="space-y-2">
                    <div className="text-sm font-mono bg-gray-50 px-3 py-2 rounded">TSH-BLK-M-2024-001</div>
                    <div className="text-sm font-mono bg-gray-50 px-3 py-2 rounded">TSH-WHT-L-2024-002</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
