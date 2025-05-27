
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "First-time Mom",
      content: "Prenova made my pregnancy journey so much easier. The kick tracker and contraction timer were lifesavers during my third trimester!",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Dr. Emily Chen",
      role: "Obstetrician",
      content: "I recommend Prenova to all my patients. The comprehensive monitoring features help me provide better care and keep track of their progress.",
      avatar: "👩‍⚕️",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Mother of Two",
      content: "The AI chatbot answered all my questions instantly, even at 3 AM! Having this support system was invaluable during my pregnancy.",
      avatar: "👩‍👧‍👦",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-prenova-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-prenova-pink mb-6">
            Trusted by Thousands of Moms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what expecting mothers and healthcare professionals are saying about Prenova.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-prenova-pink rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl text-white">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-prenova-pink">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-prenova-pink mb-2">50K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-prenova-pink mb-2">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-prenova-pink mb-2">24/7</div>
            <div className="text-gray-600">AI Support</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-prenova-pink mb-2">100+</div>
            <div className="text-gray-600">Healthcare Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};
