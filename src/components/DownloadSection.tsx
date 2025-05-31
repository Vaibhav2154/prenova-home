import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-prenova-pink mb-6">
            Download Your App
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get Prenova on your favorite platform and start your journey to a healthier pregnancy today.
          </p>
        </div>

        {/* App Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-prenova-pink mb-4">
                Available on All Platforms
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're using Android, iOS, or prefer the web version, 
                Prenova is designed to work seamlessly across all your devices.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 justify-center items-center">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-prenova-pink/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-prenova-pink">Mobile First</h4>
                      <p className="text-sm text-gray-600">iOS & Android</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative max-w-sm mx-auto">
              {/* App Preview Image */}
              <img 
                src="/preview.jpeg" 
                alt="Prenova App Preview" 
                className="w-full h-auto rounded-3xl shadow-2xl"
                height={30}
                width={120}
              />
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="bg-prenova-gradient-soft rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-prenova-pink mb-8">
              Ready to Get Started?
            </h3>
            
            <div className="flex justify-center">
                <Button 
                size="lg" 
                className="bg-prenova-pink hover:bg-prenova-pink/90 text-white px-12 py-6 rounded-xl text-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("https://drive.google.com/drive/folders/1C9RJI-CpV7RqjqT4jM1zbzKadoXB4CvP?usp=drive_link", "_blank")}
                >
                Download Now
                </Button>
            </div>

            <p className="text-gray-600 mt-6">
              Free to download • Available worldwide • Secure & Private
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
