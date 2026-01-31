import { getProblem } from "../api/problemApi";
import { useEffect, useState } from "react";


const Problem = () => {
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    getProblem()
      .then(setProblem)
      .catch(err => console.error("Problem fetch error:", err));
  }, []);

  if (!problem) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {problem.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {problem.sectionSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problem.problems
            .sort((a, b) => a.order - b.order)
            .map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Problem
