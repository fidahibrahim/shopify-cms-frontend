import { Star } from 'lucide-react';
import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SKU Generator saved us over 15 hours per week. The automation is flawless and the integration with Shopify is seamless. Best investment we've made for our inventory management.",
      author: "Sarah Chen",
      role: "Founder",
      company: "StyleHub Boutique"
    },
    {
      quote: "We went from manually creating SKUs for each product to generating hundreds automatically. The consistency across our 5,000+ product catalog is incredible. Game changer!",
      author: "Marcus Johnson",
      role: "Operations Manager",
      company: "TechGear Supply"
    },
    {
      quote: "The custom formatting rules let us maintain our unique SKU structure while automating everything. Support is fantastic and the ROI was immediate. Highly recommend!",
      author: "Emily Rodriguez",
      role: "E-commerce Director",
      company: "HomeStyle Collective"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Shopify Merchants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials
