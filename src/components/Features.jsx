import { useEffect, useState } from "react";
import { getFeatures } from "../api/featureApi";
import { iconMap } from "../utils/iconMap";

const Features = () => {
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    getFeatures()
      .then(setFeatureData)
      .catch(err => console.error("Features fetch error:", err));
  }, []);

  if (!featureData) return null;

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {featureData.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {featureData.sectionSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.features
            .sort((a, b) => a.order - b.order)
            .map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon] || iconMap.Zap;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Features;
