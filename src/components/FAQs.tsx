import React from 'react';
import { HelpCircle } from 'lucide-react';

export function FAQs() {
  const faqs = [
    {
      question: 'What is EXIF data?',
      answer: 'EXIF (Exchangeable Image File Format) data contains detailed information about your photos, including camera settings, date/time, and location coordinates when available.'
    },
    {
      question: 'Which image formats are supported?',
      answer: 'Currently, we support JPEG/JPG image formats that contain EXIF metadata. Most digital cameras and smartphones save images in this format.'
    },
    {
      question: 'Is my photo data secure?',
      answer: 'Yes! All processing happens directly in your browser. Your photos are never uploaded to any server, ensuring complete privacy.'
    },
    {
      question: "Why can't I see location data for my photo?",
      answer: 'Location data will only be available if GPS was enabled when taking the photo. Some cameras and phones allow you to disable location tracking.'
    },
    {
      question: 'What if some EXIF data is missing?',
      answer: "The amount of EXIF data varies depending on your camera and settings. If certain information is missing, it means it wasn't recorded when the photo was taken."
    },
    {
      question: 'Can I remove EXIF data from my photos?',
      answer: "This tool is for viewing EXIF data only. To remove EXIF data, you'll need to use a separate photo editing tool or metadata removal software."
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="w-12 h-12 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get answers to common questions about EXIF data and our viewer
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass-effect rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {faq.question}
                </span>
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}