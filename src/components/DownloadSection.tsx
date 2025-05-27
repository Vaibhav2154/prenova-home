
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

            <div className="grid sm:grid-cols-2 gap-6">
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

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-prenova-pink/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-prenova-pink">Web Access</h4>
                      <p className="text-sm text-gray-600">Any Browser</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative max-w-sm mx-auto">
              {/* Phone mockup */}
              <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-prenova-pink p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                        <span className="font-semibold">Good Morning, Sarah</span>
                      </div>
                      <div className="w-6 h-6 bg-white/20 rounded"></div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">👶</div>
                      <div className="text-sm opacity-90">Week 28 • 3rd Trimester</div>
                      <div className="text-lg font-semibold mt-2">Baby is the size of an eggplant</div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Heart Rate</span>
                      <span className="text-prenova-pink font-semibold">142 BPM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Weight Gain</span>
                      <span className="text-prenova-pink font-semibold">+18 lbs</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Next Appointment</span>
                      <span className="text-prenova-pink font-semibold">Dec 15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="bg-prenova-gradient-soft rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-prenova-pink mb-8">
              Ready to Get Started?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* App Store Button */}
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-xl flex items-center space-x-3 min-w-[200px]"
              >
                <div className="text-2xl">📱</div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>

              {/* Google Play Button */}
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl flex items-center space-x-3 min-w-[200px]"
              >
                <div className="text-2xl">📲</div>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>

              {/* Web App Button */}
              <Button 
                size="lg" 
                className="bg-prenova-pink hover:bg-prenova-pink/90 text-white px-8 py-6 rounded-xl flex items-center space-x-3 min-w-[200px]"
              >
                <div className="text-2xl">🌐</div>
                <div className="text-left">
                  <div className="text-xs">Try the</div>
                  <div className="text-lg font-semibold">Web App</div>
                </div>
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
