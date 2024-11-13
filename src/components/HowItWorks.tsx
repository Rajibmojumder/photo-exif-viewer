import React from 'react';
import { Upload, Search, Map, Shield } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-white" />,
      title: 'Upload Your Photo',
      description: 'Select any JPEG photo from your device. The file stays in your browser.'
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: 'Extract EXIF Data',
      description: 'Our tool instantly reads all available metadata from your photo.'
    },
    {
      icon: <Map className="w-8 h-8 text-white" />,
      title: 'View Location',
      description: 'See where your photo was taken on an interactive map.'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Private & Secure',
      description: 'All processing happens locally. Your data never leaves your device.'
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover your photo's hidden information in just a few simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="glass-effect rounded-xl p-6 text-center relative z-10">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}