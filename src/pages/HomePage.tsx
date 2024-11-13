import React, { useState } from 'react';
import { ImageUploader } from '../components/ImageUploader';
import { ExifDisplay } from '../components/ExifDisplay';
import { LocationMap } from '../components/LocationMap';
import { Features } from '../components/Features';
import { FAQs } from '../components/FAQs';
import { HowItWorks } from '../components/HowItWorks';
import { PrivacyInfo } from '../components/PrivacyInfo';
import { UseCases } from '../components/UseCases';
import { ExifData } from '../types';
import { parseExifData } from '../utils/exifParser';

export function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [exifData, setExifData] = useState<ExifData | null>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      const data = await parseExifData(file);
      setExifData(data);
    } catch (error) {
      console.error('Error parsing EXIF data:', error);
    }
  };

  return (
    <>
      <ImageUploader onImageUpload={handleImageUpload} />

      {selectedImage && exifData && (
        <div className="space-y-8">
          <div className="glass-effect rounded-xl overflow-hidden shadow-lg">
            <div className="h-[600px] flex items-center justify-center p-4">
              <img
                src={selectedImage}
                alt="Uploaded preview"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div className="glass-effect rounded-xl overflow-hidden shadow-lg h-[400px]">
            <LocationMap
              latitude={exifData.latitude || 0}
              longitude={exifData.longitude || 0}
              hasCoordinates={!!(exifData.latitude && exifData.longitude)}
              imageUrl={selectedImage}
              address={exifData.address}
              city={exifData.city}
              country={exifData.country}
            />
          </div>

          <ExifDisplay exifData={exifData} />
        </div>
      )}

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="use-cases">
        <UseCases />
      </div>

      <div id="privacy">
        <PrivacyInfo />
      </div>

      <div id="faq">
        <FAQs />
      </div>
    </>
  );
}