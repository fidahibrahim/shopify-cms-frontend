import { useEffect, useState } from "react";
import { getSolution } from "../api/solutionApi";
import { iconMap } from "../utils/iconMap";

const Solution = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    getSolution()
      .then(setSolution)
      .catch(err => console.error("Solution fetch error:", err));
  }, []);

  if (!solution) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {solution.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.sectionSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solution.benefits
            .sort((a, b) => a.order - b.order)
            .map((benefit, index) => {
              const IconComponent =
                iconMap[benefit.icon] || iconMap.Zap;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-4 group-hover:scale-110 transition">
                    <IconComponent className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Solution;