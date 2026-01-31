import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { getFaqs } from "../api/faqApi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    getFaqs()
      .then(setFaqData)
      .catch(err => console.error("FAQ fetch error:", err));
  }, []);

  if (!faqData) return null;

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {faqData.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600">
            {faqData.sectionSubtitle}
          </p>
        </div>
        <div className="space-y-4">
          {faqData.faqs
            .sort((a, b) => a.order - b.order)
            .map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 text-left">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
