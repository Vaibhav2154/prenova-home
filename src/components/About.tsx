
import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-prenova-pink mb-6">
            Designed for Every Stage of Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From conception to delivery, Prenova provides comprehensive care and monitoring 
            to ensure both you and your baby stay healthy throughout pregnancy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-prenova-pink rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🤰</span>
            </div>
            <h3 className="text-2xl font-semibold text-prenova-pink mb-4">Expert Guidance</h3>
            <p className="text-gray-600">
              Get personalized advice and recommendations from our AI-powered assistant, 
              backed by medical expertise and latest research.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-prenova-pink rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">📊</span>
            </div>
            <h3 className="text-2xl font-semibold text-prenova-pink mb-4">Health Monitoring</h3>
            <p className="text-gray-600">
              Track vital signs, fetal movements, and important health metrics 
              with easy-to-use tools and comprehensive reporting.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-prenova-pink rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">👩‍⚕️</span>
            </div>
            <h3 className="text-2xl font-semibold text-prenova-pink mb-4">Medical Support</h3>
            <p className="text-gray-600">
              Connect with healthcare providers, schedule appointments, 
              and manage all your medical documents in one secure place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
