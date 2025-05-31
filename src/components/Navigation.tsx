import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="logo" className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-prenova-pink hover:text-prenova-pink/70 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-prenova-pink hover:text-prenova-pink/70 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-prenova-pink hover:text-prenova-pink/70 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="text-prenova-pink hover:text-prenova-pink/70 transition-colors"
            >
              Download
            </button>
          </div>

          {/* Mobile and Desktop Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-prenova-pink hover:text-prenova-pink/70 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Get Started Button */}
            <Button
              onClick={() => scrollToSection('download')}
              className="bg-prenova-pink hover:bg-prenova-pink/90 text-white text-sm px-3 py-2 sm:px-4 sm:py-2"
            >
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-prenova-pink hover:text-prenova-pink/70 hover:bg-gray-50 rounded-md"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-prenova-pink hover:text-prenova-pink/70 hover:bg-gray-50 rounded-md"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-prenova-pink hover:text-prenova-pink/70 hover:bg-gray-50 rounded-md"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('download')}
                className="block w-full text-left px-3 py-2 text-prenova-pink hover:text-prenova-pink/70 hover:bg-gray-50 rounded-md"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
