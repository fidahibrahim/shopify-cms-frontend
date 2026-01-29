import { BarChart, Globe, Shield, Zap } from "lucide-react";

const Solution = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Instant Automation",
      description: "Generate hundreds of SKUs in seconds with smart templates and rules"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Perfect Consistency",
      description: "Enforce formatting standards across your entire team and catalog"
    },
    {
      icon: <BarChart className="w-8 h-8 text-indigo-600" />,
      title: "Zero Errors",
      description: "Built-in validation ensures every SKU follows your exact specifications"
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Effortless Scaling",
      description: "Handle 10 products or 10,000 with the same ease and efficiency"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Complete SKU Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform chaos into order with intelligent automation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-4 group-hover:scale-110 transition">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution