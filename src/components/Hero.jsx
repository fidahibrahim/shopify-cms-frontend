import { getHero } from '../api/heroApi';
import { iconMap } from "../utils/iconMap";
import { colorMap } from "../utils/colorMap";
import { useEffect, useState } from 'react';


const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    getHero()
      .then(setHero)
      .catch(err => console.error("Hero fetch error:", err));
  }, []);

  if (!hero) return null;

  const BadgeIcon = iconMap[hero.badge.icon] || iconMap.Zap;

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {
              hero.badge.show && (
                <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BadgeIcon className="w-4 h-4" />
                  <span>{hero.badge.text}</span>
                </div>
              )
            }

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {hero.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={hero.primaryCTA.link}
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                {hero.primaryCTA.text}
              </a>

              <a
                href={hero.secondaryCTA.link}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-semibold text-lg"
              >
                {hero.secondaryCTA.text}
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">{hero.disclaimer}</p>
          </div>
          <div className="relative">
            <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <div className="bg-white rounded-lg p-6 space-y-4">
                {hero.dashboardPreview?.stats?.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between pb-4 border-b"
                  >
                    <span className="font-semibold text-gray-900">
                      {stat.label}
                    </span>
                    <span className={`font-bold ${colorMap[stat.valueColor] || "text-gray-900"}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <div className="text-xs text-gray-500 mb-2">Recent SKUs</div>
                  <div className="space-y-2">
                    {hero.dashboardPreview?.recentSKUs?.map((sku, i) => (
                      <div
                        key={i}
                        className="text-sm font-mono bg-gray-50 px-3 py-2 rounded"
                      >
                        {sku}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
