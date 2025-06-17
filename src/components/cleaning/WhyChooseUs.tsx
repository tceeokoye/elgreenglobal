
import React from 'react';
import { Puzzle , Clock, Award, Users, Leaf, MapPin, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Puzzle ,
      title: "Comprehensive Solutions ",
      description: "with a One-stop shop for all your environmental and facility ."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your schedule with convenient time slots."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "100% satisfaction Assured"
    },
    {
      icon: Users,
      title: "Expert Team of 30+ Dedicated Professionals",
      description: "Background-checked staff with extensive cleaning expertise."
    },
    {
      icon: Leaf,
      title: "•	Sustainable Practices",
      description: "Safe, non-toxic cleaning products that protect your family."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Trusted insights backed by local understanding and regional experience."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-600">ELGREEN?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Years of proven track record of Experience in diverse environmental services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white border-4 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-green-400 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-green-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 max-w-4xl mx-auto">
              "ELGREEN has been cleaning our office for years. They're reliable, 
              professional, and always go above and beyond. Highly recommended!"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <img
                src="/testimony/testmonia.jpg"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Mr. Richard Asuquo</div>
                <div className="text-gray-600 text-sm">Office Manager, sondren's palace royal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
