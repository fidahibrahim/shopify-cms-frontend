import { useEffect, useState } from "react";
import { getBenefits } from "../api/benefitApi";
import { bgColorMap } from "../utils/bgColorMap";

const Benefits = () => {
  const [benefitData, setBenefitData] = useState(null);

  useEffect(() => {
    getBenefits()
      .then(setBenefitData)
      .catch(err => console.error("Benefits fetch error:", err));
  }, []);

  if (!benefitData) return null;

  const bgClass = bgColorMap[benefitData.backgroundColor] || "bg-indigo-600";

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {benefitData.sectionTitle}
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            {benefitData.sectionSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitData.benefits
            .sort((a, b) => a.order - b.order)
            .map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  {benefit.stat}
                </div>
                <div className="text-xl font-semibold text-indigo-100 mb-2">
                  {benefit.label}
                </div>
                <p className="text-indigo-200">
                  {benefit.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};


export default Benefits
