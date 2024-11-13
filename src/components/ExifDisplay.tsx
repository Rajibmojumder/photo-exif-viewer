import React from 'react';
import { ExifData } from '../types';
import { Camera, Calendar, Aperture, Timer, Gauge, MapPin, Smartphone, Mountain, Image, FileText, Clock, Globe } from 'lucide-react';

interface ExifDisplayProps {
  exifData: ExifData;
}

export function ExifDisplay({ exifData }: ExifDisplayProps) {
  const sections = [
    {
      title: 'CAMERA INFORMATION',
      items: [
        { icon: <Camera className="w-5 h-5 text-indigo-600" />, label: 'Brand', value: exifData.make },
        { icon: <Smartphone className="w-5 h-5 text-indigo-600" />, label: 'Model', value: exifData.model },
        { icon: <Timer className="w-5 h-5 text-indigo-600" />, label: 'Shutter', value: exifData.exposureTime },
        { icon: <Aperture className="w-5 h-5 text-indigo-600" />, label: 'F Number', value: exifData.fNumber ? `f/${exifData.fNumber}` : 'N/A' },
        { icon: <Timer className="w-5 h-5 text-indigo-600" />, label: 'Flash', value: exifData.flash || 'Not Used' },
        { icon: <Gauge className="w-5 h-5 text-indigo-600" />, label: 'Focal Length', value: exifData.focalLength },
        { icon: <Gauge className="w-5 h-5 text-indigo-600" />, label: 'ISO Speed', value: exifData.iso },
        { icon: <Image className="w-5 h-5 text-indigo-600" />, label: 'Color Space', value: exifData.colorSpace || 'sRGB' }
      ]
    },
    {
      title: 'FILE INFORMATION',
      items: [
        { icon: <FileText className="w-5 h-5 text-indigo-600" />, label: 'File Name', value: exifData.fileName },
        { icon: <Image className="w-5 h-5 text-indigo-600" />, label: 'Image Size', value: exifData.imageSize },
        { icon: <FileText className="w-5 h-5 text-indigo-600" />, label: 'Unique ID', value: exifData.uniqueId },
        { icon: <FileText className="w-5 h-5 text-indigo-600" />, label: 'MIME Type', value: exifData.mimeType || 'image/jpeg' },
        { icon: <Image className="w-5 h-5 text-indigo-600" />, label: 'Resolution', value: exifData.resolution },
        { icon: <Image className="w-5 h-5 text-indigo-600" />, label: 'Dots/Inch', value: exifData.dotsPerInch }
      ]
    },
    {
      title: 'DATE & TIME',
      items: [
        { icon: <Calendar className="w-5 h-5 text-indigo-600" />, label: 'Date', value: exifData.date },
        { icon: <Clock className="w-5 h-5 text-indigo-600" />, label: 'Time', value: exifData.time },
        { icon: <Globe className="w-5 h-5 text-indigo-600" />, label: 'Time Zone', value: exifData.timeZone }
      ]
    },
    {
      title: 'GPS INFORMATION',
      items: [
        { icon: <MapPin className="w-5 h-5 text-indigo-600" />, label: 'Latitude', value: exifData.latitude?.toFixed(6) },
        { icon: <MapPin className="w-5 h-5 text-indigo-600" />, label: 'Longitude', value: exifData.longitude?.toFixed(6) },
        { icon: <MapPin className="w-5 h-5 text-indigo-600" />, label: 'Lat Ref', value: exifData.latRef || 'North' },
        { icon: <MapPin className="w-5 h-5 text-indigo-600" />, label: 'Long Ref', value: exifData.longRef || 'East' },
        { icon: <MapPin className="w-5 h-5 text-indigo-600" />, label: 'Coordinates', value: exifData.coordinates },
        { icon: <Mountain className="w-5 h-5 text-indigo-600" />, label: 'Altitude', value: exifData.altitude ? `${exifData.altitude}m` : '0m' }
      ]
    },
    {
      title: 'LOCATION INFORMATION',
      items: [
        { icon: <MapPin className="w-5 h-5 text-indigo-600" />, label: 'City', value: exifData.city },
        { icon: <MapPin className="w-5 h-5 text-indigo-600" />, label: 'State', value: exifData.state },
        { icon: <Globe className="w-5 h-5 text-indigo-600" />, label: 'Country', value: exifData.country },
        { icon: <MapPin className="w-5 h-5 text-indigo-600" />, label: 'Address', value: exifData.address }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <div key={index} className="glass-effect rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-indigo-600 mb-6 border-b border-indigo-100 pb-2">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-white/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-2">
                  {item.icon}
                  <h3 className="font-medium text-gray-700">{item.label}</h3>
                </div>
                <p className="text-gray-900 font-semibold truncate">
                  {item.value || 'N/A'}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}