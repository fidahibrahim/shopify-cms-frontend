import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Shopify Store",
      description: "Securely link your store with one-click OAuth integration"
    },
    {
      number: "02",
      title: "Set Your SKU Rules",
      description: "Define custom formats, prefixes, and category-based logic"
    },
    {
      number: "03",
      title: "Generate SKUs",
      description: "Create SKUs automatically for new or existing products"
    },
    {
      number: "04",
      title: "Sync Automatically",
      description: "All changes update in real-time across your Shopify catalog"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes, not hours
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-indigo-200 -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default HowItWorks
