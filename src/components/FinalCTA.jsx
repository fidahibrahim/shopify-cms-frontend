import { useEffect, useState } from "react";
import { getFinalCTA } from "../api/finalCtaApi";
import { gradientMap } from "../utils/gradientMap";

const FinalCTA = () => {
  const [cta, setCta] = useState(null);

  useEffect(() => {
    getFinalCTA()
      .then(setCta)
      .catch(err => console.error("Final CTA fetch error:", err));
  }, []);

  if (!cta) return null;

  const bgClass =
    gradientMap[cta.backgroundColor] ||
    "bg-linear-to-br from-indigo-600 to-purple-700";

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {cta.headline}
        </h2>
        <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
          {cta.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={cta.primaryCTA.link}
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-xl hover:shadow-2xl"
          >
            {cta.primaryCTA.text}
          </a>

          <a
            href={cta.secondaryCTA.link}
            className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-semibold text-lg"
          >
            {cta.secondaryCTA.text}
          </a>
        </div>
        <p className="text-sm text-indigo-200 mt-6">{cta.disclaimer}</p>
      </div>
    </section>
  );
};

export default FinalCTA;
