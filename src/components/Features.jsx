import { BarChart, Box, Globe, Settings, Shield, Zap } from 'lucide-react';
import React from 'react'

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automatic SKU Generation",
      description: "Create SKUs instantly based on product attributes like category, color, size, and more"
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Bulk SKU Creation",
      description: "Generate SKUs for hundreds of products at once with CSV import/export"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Format Rules",
      description: "Define your own SKU structure with prefixes, suffixes, and category-based logic"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Shopify Integration",
      description: "Seamless two-way sync with your Shopify store - no manual work required"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Real-Time Validation",
      description: "Prevent duplicates and errors with intelligent validation before syncing"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Export & Import Support",
      description: "Work with your existing data through flexible CSV and spreadsheet support"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Merchants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to master SKU management
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features
