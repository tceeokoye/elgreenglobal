// Services.jsx
import React, { useEffect } from "react";
import {
  Trash2,
  Hammer,
  Bug,
  ShoppingCart,
  Leaf,
  Flower2,
  Home,
  Sparkles,
} from "lucide-react";
import { Element, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

const servicesData = [
  {
    id: "industrial-cleaning",
    icon: Sparkles,
    title: "Industrial & Commercial Cleaning",
    description:
      "Comprehensive cleaning solutions for factories, offices, retail spaces, and industrial facilities.",
    features: [
      "Deep cleaning",
      "Regular maintenance cleaning",
      "Post-construction cleanup",
      "Emergency cleaning services",
    ],
    color: "bg-green-100 text-green-600",
  },
  {
    id: "property-maintenance",
    icon: Home,
    title: "Property Maintenance & Facility Management",
    description:
      "Complete facility management solutions that keep your properties in optimal condition.",
    features: [
      "Preventive maintenance programs",
      "HVAC system management",
      "Electrical and plumbing maintenance",
      "Security system management",
      "Energy efficiency optimization",
    ],
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "horticulture",
    icon: Flower2,
    title: "Horticulture & Landscaping",
    description:
      "Transform your outdoor spaces into beautiful, functional landscapes.",
    features: [
      "Landscape design and installation",
      "Garden maintenance",
      "Tree planting",
      "Irrigation systems",
      "Seasonal services",
    ],
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "agriculture",
    icon: Leaf,
    title: "Agricultural Production",
    description:
      "Sustainable agricultural solutions that maximize yield while protecting the environment.",
    features: ["Piggery", "Fish Farming", "Monthly maintenance"],
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "equipment-sales",
    icon: ShoppingCart,
    title: "Cleaning Equipment Sales",
    description:
      "High-quality cleaning equipment and supplies for businesses and institutions.",
    features: [
      "Industrial machines",
      "Professional chemicals",
      "Safety equipment",
      "Tools and accessories",
      "Custom equipment solutions",
    ],
    color: "bg-teal-100 text-teal-600",
  },
  {
    id: "pest-control",
    icon: Bug,
    title: "Fumigation & Pest Control",
    description:
      "Comprehensive pest management solutions that protect your property.",
    features: [
      "Residential fumigation",
      "Integrated pest management",
      "Preventive control",
      "Termite treatment",
      "Rodent control",
    ],
    color: "bg-red-100 text-red-600",
  },
  {
    id: "contracting",
    icon: Hammer,
    title: "General Contracting",
    description:
      "Construction and renovation services for residential and commercial projects.",
    features: [
      "Building construction",
      "Interior improvements",
      "Electrical installations",
      "Painting work",
      "Project management",
    ],
    color: "bg-red-100 text-red-600",
  },
  {
    id: "waste-management",
    icon: Trash2,
    title: "Waste Disposal & Management",
    description:
      "Waste management solutions that minimize environmental impact.",
    features: [
      "Waste collection",
      "Hazardous waste",
      "Recycling programs",
      "Waste consulting",
      "Special disposal services",
    ],
    color: "bg-red-100 text-red-600",
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }
  }, [location]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Cleaning Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive cleaning solutions for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Element name={service.id} key={index}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </Element>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
