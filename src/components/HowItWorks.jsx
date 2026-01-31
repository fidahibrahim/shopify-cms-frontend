import { getHowItWorks } from "../api/howItWorksApi";
import { useEffect, useState } from "react";

const HowItWorks = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getHowItWorks()
      .then(setData)
      .catch(err => console.error("How It Works fetch error:", err));
  }, []);

  if (!data) return null;

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.sectionSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.steps
            .sort((a, b) => a.order - b.order)
            .map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-2xl font-bold mb-4">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < data.steps.length - 1 && (
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
