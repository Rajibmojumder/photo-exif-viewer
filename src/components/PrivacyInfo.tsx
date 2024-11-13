import React from 'react';
import { Shield, Lock, Eye, Server } from 'lucide-react';

export function PrivacyInfo() {
  const privacyPoints = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Local Processing',
      description: 'All EXIF data extraction happens directly in your browser.'
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'No Data Storage',
      description: 'Your photos and metadata are never stored or transmitted to any servers.'
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: 'Private Analysis',
      description: 'View sensitive location data without exposing it to third parties.'
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'No Tracking',
      description: "We don't collect any personal information or usage statistics."
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Privacy & Security
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your privacy is our top priority. Learn how we protect your data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {privacyPoints.map((point, index) => (
          <div
            key={index}
            className="glass-effect rounded-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center justify-center">
              {point.icon}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our tool is designed with a privacy-first approach, ensuring your photos and their metadata remain completely private and secure.
        </p>
      </div>
    </section>
  );
}