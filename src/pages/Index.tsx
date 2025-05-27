
import React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { DownloadSection } from '@/components/DownloadSection';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <DownloadSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
