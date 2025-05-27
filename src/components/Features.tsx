
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI Chatbot',
      description: 'Intelligent assistant for pregnancy-related queries and personalized guidance.'
    },
    {
      icon: '📊',
      title: 'Vital Signs Monitoring',
      description: 'Track and record important health metrics with detailed analytics.'
    },
    {
      icon: '👶',
      title: 'Fetal Health Monitoring',
      description: 'Monitor your baby\'s development and health throughout pregnancy.'
    },
    {
      icon: '🦵',
      title: 'Kick Tracker',
      description: 'Track and log baby movements to ensure healthy development.'
    },
    {
      icon: '⏱️',
      title: 'Contraction Timer',
      description: 'Time and monitor contractions with precise timing and patterns.'
    },
    {
      icon: '🥗',
      title: 'Diet Recommendations',
      description: 'Personalized nutrition guidance for optimal maternal and fetal health.'
    },
    {
      icon: '📋',
      title: 'Medical Documents',
      description: 'Generate and store medical reports securely in the cloud.'
    },
    {
      icon: '👩‍⚕️',
      title: 'Doctor Consultation',
      description: 'Connect with healthcare providers through secure messaging.'
    },
    {
      icon: '📅',
      title: 'Appointment Scheduling',
      description: 'Manage medical appointments with smart reminders and notifications.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-prenova-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-prenova-pink mb-6">
            Comprehensive Features for Your Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to monitor your health, track your pregnancy, 
            and stay connected with your healthcare team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-prenova-pink rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-prenova-pink mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
