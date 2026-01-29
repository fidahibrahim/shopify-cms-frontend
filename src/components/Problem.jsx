import React from 'react'

const Problem = () => {
  const problems = [
    {
      icon: "⏰",
      title: "Time-Consuming Manual Work",
      description: "Creating SKUs manually for hundreds of products wastes valuable hours every week"
    },
    {
      icon: "🔀",
      title: "Inconsistent Formatting",
      description: "Different team members create SKUs differently, leading to chaos in your inventory"
    },
    {
      icon: "❌",
      title: "Costly Inventory Errors",
      description: "Manual mistakes in SKU codes cause shipping errors and inventory tracking issues"
    },
    {
      icon: "📈",
      title: "Scaling Nightmare",
      description: "As your catalog grows, managing SKUs becomes exponentially more difficult"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The SKU Management Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shopify merchants struggle with product organization. Sound familiar?
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem
