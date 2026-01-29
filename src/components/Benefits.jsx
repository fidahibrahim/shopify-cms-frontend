import React from 'react'

const Benefits = () => {
  const benefits = [
    {
      stat: "10+ Hours",
      label: "Saved Per Week",
      description: "Automate what used to take hours of manual work"
    },
    {
      stat: "99.9%",
      label: "Accuracy Rate",
      description: "Eliminate human errors with smart validation"
    },
    {
      stat: "50%",
      label: "Faster Processing",
      description: "Speed up inventory management workflows"
    },
    {
      stat: "∞",
      label: "Scale Infinitely",
      description: "Handle unlimited products with ease"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Measurable Results You Can Count On
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Join thousands of merchants who've transformed their workflow
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{benefit.stat}</div>
              <div className="text-xl font-semibold text-indigo-100 mb-2">{benefit.label}</div>
              <p className="text-indigo-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Benefits
