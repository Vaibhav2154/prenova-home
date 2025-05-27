
import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-prenova-gradient-soft">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-prenova-pink/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-prenova-pink/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-prenova-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-prenova-pink text-white rounded-full text-sm font-medium mb-4">
              🤱 Your Pregnancy Companion
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-prenova-pink mb-6 leading-tight">
            Prenova
            <span className="block bg-prenova-gradient bg-clip-text text-transparent">
              Prenatal Pulse
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive prenatal care companion. Monitor your health, track your baby's development, and connect with healthcare providers - all in one beautiful app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToDownload}
              size="lg" 
              className="bg-prenova-pink hover:bg-prenova-pink/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Download Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-prenova-pink text-prenova-pink hover:bg-prenova-pink hover:text-white px-8 py-6 text-lg rounded-xl"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* App Preview */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative max-w-md mx-auto">
            <div className="bg-white rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-prenova-pink rounded-2xl p-6 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👶</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Week 24</h3>
                <p className="text-sm opacity-90">Your baby is the size of a corn</p>
                <div className="mt-4 bg-white/20 rounded-lg p-3">
                  <p className="text-xs">Next appointment: Tomorrow 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
