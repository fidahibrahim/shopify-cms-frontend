import { Check } from 'lucide-react';
import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small stores",
      features: [
        "Up to 500 SKUs/month",
        "Basic SKU templates",
        "Shopify integration",
        "Email support",
        "CSV export"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "79",
      description: "For growing businesses",
      features: [
        "Up to 5,000 SKUs/month",
        "Advanced custom rules",
        "Bulk operations",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "199",
      description: "For large operations",
      features: [
        "Unlimited SKUs",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "Advanced analytics",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition ${
                plan.popular ? 'ring-2 ring-indigo-600 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing
