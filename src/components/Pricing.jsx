import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { getPricing } from "../api/pricingApi";

const Pricing = () => {
  const [pricing, setPricing] = useState(null);

  useEffect(() => {
    getPricing()
      .then(setPricing)
      .catch(err => console.error("Pricing fetch error:", err));
  }, []);

  if (!pricing) return null;

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {pricing.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {pricing.sectionSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.plans
            .sort((a, b) => a.order - b.order)
            .map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition ${plan.isPopular ? "ring-2 ring-indigo-600 relative" : ""
                  }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{plan.billingPeriod || "month"}
                    </span>
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

                <a
                  href={plan.ctaLink}
                  className={`block text-center w-full py-3 rounded-lg font-semibold transition ${plan.isPopular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border-2 border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing
