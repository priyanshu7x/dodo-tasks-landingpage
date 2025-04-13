
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="space-y-6">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
