import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-gray-700">
        <p>Last updated: November 13, 2024</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
          <p>
            When you use Photo EXIF Viewer, we collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usage data through Google Analytics (page views, session duration, etc.)</li>
            <li>Device information (browser type, operating system, screen resolution)</li>
            <li>IP address and approximate location (city/country level)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analyzing website traffic and user behavior</li>
            <li>Improving our services and user experience</li>
            <li>Displaying relevant advertisements through Google AdSense</li>
            <li>Maintaining website security and preventing fraud</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">3. Photo Privacy & EXIF Data</h2>
          <p>
            Your photos and their EXIF data are processed entirely in your browser. We never:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upload your photos to any server</li>
            <li>Store your photos or EXIF data</li>
            <li>Share your photo information with third parties</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">4. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics tracking</li>
            <li>Google AdSense personalization</li>
            <li>Essential website functionality</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">5. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics for website analytics</li>
            <li>Google AdSense for displaying advertisements</li>
            <li>OpenStreetMap for displaying photo locations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Opt-out of Google Analytics tracking</li>
            <li>Opt-out of personalized advertising</li>
            <li>Request information about your data</li>
            <li>Request deletion of your data</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">7. Contact Us</h2>
          <p>
            For any privacy-related questions or concerns, please contact us at:
            <br />
            <a href="mailto:contact@photoexifviewer.com" className="text-indigo-600 hover:text-indigo-700">
              contact@photoexifviewer.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}