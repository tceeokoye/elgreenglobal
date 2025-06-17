"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/cleaning/Header";
import Footer from "@/components/cleaning/Footer";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Lottie from "lottie-react";

const ButtonLoader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/assets/loader3d.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <div className="w-6 h-6">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 text-center">
      <h3 className="text-lg font-bold text-green-700 mb-2">Success!</h3>
      <p className="text-gray-700 mb-4">Message sent successfully.</p>
      <button
        onClick={onClose}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Close
      </button>
    </div>
  </div>
);

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service, message } = formData;

    const subject = encodeURIComponent(`Cleaning Service Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:elgreenglobalconsult@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsApp = () => {
    const phone = "+2348062626622";
    const message =
      "Hi! I'm interested in your cleaning services. Can you provide more information?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+2348062626622",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      info: "elgreenglobalconsult@gmail.com",
      description: "Send us your questions anytime",
    },
    {
      icon: MapPin,
      title: "Address",
      info: "Road 1 Close, Area 5 Agbama housing Estate, Umuahia, Abia state",
      description: "Visit our office location",
    },
    {
      icon: Clock,
      title: "Hours",
      info: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      description: "We're here to help during business hours",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-r from-green-600 pt-40 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Get In Touch Ready to experience the ElGreen difference? Contact us
            today for a consultation and discover how our comprehensive
            environmental solutions can benefit your business or property.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get Your Free <span className="text-green-600">Quote</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+2348062626622"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Industrial & Commercial Cleaning</option>
                      <option value="commercial">Property Maintenance & Facility Management</option>
                      <option value="deep">Horticulture & Landscaping</option>
                      <option value="carpet">Agricultural Production</option>
                      <option value="recurring">Cleaning Equipment Sales</option>
                      <option value="recurring">Fumigation & Pest Control</option>
                      <option value="recurring">General Contracting</option>
                      <option value="recurring">Waste Disposal & Management</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your cleaning needs..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
                  >
                    {loading ? (
                      <ButtonLoader />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Get in <span className="text-green-600">Touch</span>
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-green-600 font-medium mb-1">
                        {item.info}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  Chat with us directly on WhatsApp for instant responses and
                  quick quotes!
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                </button>
              </div>

              <div className="mt-8 bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="rounded-2xl w-full h-full overflow-hidden">
                  <iframe
                    title="Elgreen Office Location"
                    src="https://maps.google.com/maps?q=Road%201%20Close%20Area%205%20Agbama%20Housing%20Estate%20Umuahia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <Footer />
    </div>
  );
};

export default ContactUs;
