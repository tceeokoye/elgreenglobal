"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] pt-20 flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/50 to-green-600/60" />
          </div>
        ))}

        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-32 md:w-64 h-32 md:h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-4000" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Text Block */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              #1 Rated Cleaning Service
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to 
              <span className="text-green-300 block">
                ElGreen Global Consult
              </span>
              You Can Trust
            </h1>

            <p className="text-lg text-green-50 mb-8 max-w-2xl">
              Nigeria's premier provider of integrated environmental and
              facility management solutions. With years of excellence, we
              deliver comprehensive services that keep your spaces clean, green,
              and productive. From industrial cleaning to agricultural
              production, we are your trusted partner in creating sustainable
              environments for business and community growth.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "100% Eco-Friendly Products",
                "Insured & Bonded",
                "Same Day Service",
                "Satisfaction Guaranteed",
              ].map((text, i) => (
                <div className="flex items-center" key={i}>
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span className="text-green-100 text-base">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/2348062626622?text=Hello!%20I%20want%20to%20book%20now."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 font-semibold shadow-lg flex items-center justify-center"
              >
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://wa.me/2348062626622?text=Hello!%20I%20would%20like%20a%20free%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-300 text-green-100 px-8 py-4 rounded-lg hover:bg-green-600 hover:border-green-600 transition-all font-semibold"
              >
                Get Free Quote
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-green-200/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">5000+</div>
                <div className="text-green-100 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">10+</div>
                <div className="text-green-100 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">24/7</div>
                <div className="text-green-100 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side Visual (Optional) */}
          <div className="hidden lg:block relative">
            <div className="relative transform perspective-1000 rotate-y-12">
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-green-200/90 to-green-300/90 rounded-3xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm transition-transform duration-300 hover:rotate-y-6">
                {/* Bubbles */}
                {[
                  { top: "top-8", left: "left-8" },
                  { top: "top-16", right: "right-12", delay: "delay-1000" },
                  { bottom: "bottom-12", left: "left-16", delay: "delay-2000" },
                  { bottom: "bottom-8", right: "right-8", delay: "delay-500" },
                  { top: "top-1/2", left: "left-1/4", delay: "delay-1500" },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute ${pos.top || ""} ${pos.bottom || ""} ${
                      pos.left || ""
                    } ${
                      pos.right || ""
                    } w-3 h-3 md:w-4 md:h-4 bg-white rounded-full opacity-50 animate-bounce ${
                      pos.delay || ""
                    }`}
                  />
                ))}

                <div className="text-6xl md:text-8xl text-green-600 opacity-20">
                  🧽
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-2xl rotate-12 shadow-lg hover:rotate-6 transition-transform duration-300">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs">Satisfaction</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border-2 border-green-200 rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-current text-yellow-400 mr-1" />
                  <div className="text-sm font-medium">5.0 Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-green-300 scale-125"
                : "bg-green-100/50 hover:bg-green-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
