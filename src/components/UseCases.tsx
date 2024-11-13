import React from 'react';
import { Camera, MapPin, History, FileSearch, Image, Users } from 'lucide-react';

export function UseCases() {
  const cases = [
    {
      icon: <Camera className="w-8 h-8 text-indigo-600" />,
      title: 'Photography Enthusiasts',
      description: 'Review camera settings from successful shots to improve your photography skills.'
    },
    {
      icon: <MapPin className="w-8 h-8 text-indigo-600" />,
      title: 'Travel Documentation',
      description: 'Track and remember exact locations of photos taken during your travels.'
    },
    {
      icon: <History className="w-8 h-8 text-indigo-600" />,
      title: 'Digital Archives',
      description: 'Organize and catalog photos with precise timestamps and location data.'
    },
    {
      icon: <FileSearch className="w-8 h-8 text-indigo-600" />,
      title: 'Technical Analysis',
      description: 'Examine detailed metadata for professional photo analysis and verification.'
    },
    {
      icon: <Image className="w-8 h-8 text-indigo-600" />,
      title: 'Content Creation',
      description: 'Access technical details needed for content publishing and documentation.'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'Team Collaboration',
      description: 'Share photo metadata with team members for better project coordination.'
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Who Can Benefit
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover how different users leverage EXIF data for their specific needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((useCase, index) => (
          <div
            key={index}
            className="glass-effect rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              {useCase.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{useCase.title}</h3>
            <p className="text-gray-600">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}