import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the Shopify integration work?",
      answer: "Our app integrates seamlessly with Shopify through OAuth. Simply connect your store once, and SKU Generator will automatically sync with your product catalog. All generated SKUs are pushed directly to Shopify in real-time."
    },
    {
      question: "Can I use my existing SKU format?",
      answer: "Absolutely! SKU Generator supports completely custom formatting rules. You can define prefixes, suffixes, category codes, and any structure you're already using. Our flexible template system adapts to your needs."
    },
    {
      question: "What happens to my existing SKUs?",
      answer: "Your existing SKUs remain untouched unless you choose to regenerate them. You have full control over which products get new SKUs and which keep their current codes. We never overwrite without your explicit approval."
    },
    {
      question: "Is there a limit to how many SKUs I can generate?",
      answer: "Limits depend on your plan. The Starter plan supports up to 500 SKUs per month, Pro supports 5,000, and Enterprise offers unlimited generation. You can upgrade anytime as your needs grow."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial on all plans with no credit card required. You get full access to all features during the trial period so you can see exactly how SKU Generator will transform your workflow."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SKU Generator
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ
