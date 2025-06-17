'use client';

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Header from '@/components/cleaning/Header';
import Hero from '@/components/cleaning/Hero';
import Services from '@/components/cleaning/Services';
import WhyChooseUs from '@/components/cleaning/WhyChooseUs';
import Footer from '@/components/cleaning/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80, // adjust based on header height
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services /> {/* Each section here must use <Element name="section-name"> */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
