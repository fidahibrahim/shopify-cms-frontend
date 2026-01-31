import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { getTestimonials } from "../api/testimonialApi";

const Testimonials = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTestimonials()
      .then(setData)
      .catch(err => console.error("Testimonials fetch error:", err));
  }, []);

  if (!data) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.sectionSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.testimonials
            .sort((a, b) => a.order - b.order)
            .map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  “{testimonial.quote}”
                </p>

                <div className="flex items-center gap-4">
                  {testimonial.author.avatar && (
                    <img
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}

                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.author.role}, {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials
