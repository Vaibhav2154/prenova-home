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
    <div className="min-h-screen">
      {/* Enhanced navigation with backdrop blur */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
        <Navigation />
      </div>
      
      {/* Main content with improved spacing and background */}
      <main className="relative">
        {/* Hero section with gradient background */}
        <section className="relative overflow-hidden bg-gradient-to-br from-pink-50/80 via-white to-purple-50/60">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
          <Hero />
        </section>

        {/* About section with subtle background */}
        <section className="relative bg-gradient-to-r from-pink-25/30 to-purple-25/30">
          <About />
        </section>

        {/* Features section */}
        <section className="relative bg-white">
          <Features />
        </section>

        {/* Download section with gradient */}
        <section className="relative bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-pink-500/10">
          <DownloadSection />
        </section>

        {/* Testimonials section */}
        <section className="relative bg-gradient-to-r from-purple-50/50 to-pink-50/50">
          <Testimonials />
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Floating scroll indicator */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Index;
