import React from 'react';
import { Camera, Map, FileText, Shield, Zap, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Camera className="w-12 h-12 text-indigo-600" />,
      title: 'Camera Details',
      description: 'Extract detailed camera information including make, model, and settings used to capture the photo.'
    },
    {
      icon: <Map className="w-12 h-12 text-indigo-600" />,
      title: 'Location Mapping',
      description: 'View exact photo location on an interactive map with precise GPS coordinates and address information.'
    },
    {
      icon: <FileText className="w-12 h-12 text-indigo-600" />,
      title: 'Complete Metadata',
      description: 'Access comprehensive file information, dimensions, and technical details of your photos.'
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: 'Privacy First',
      description: 'All processing happens in your browser. Your photos are never uploaded to any server.'
    },
    {
      icon: <Zap className="w-12 h-12 text-indigo-600" />,
      title: 'Fast Processing',
      description: 'Lightning-fast EXIF data extraction and display with instant results.'
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: 'Location Details',
      description: 'Get detailed location information including city, state, and country for your photos.'
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Powerful Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover everything your photos can tell you with our comprehensive EXIF data viewer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}