import React from 'react'

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-indigo-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your SKU Management?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
          Join thousands of Shopify merchants who've automated their workflow and saved countless hours. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-xl hover:shadow-2xl">
            Start Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-semibold text-lg">
            Schedule a Demo
          </button>
        </div>
        <p className="text-sm text-indigo-200 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  );
};

export default FinalCTA
