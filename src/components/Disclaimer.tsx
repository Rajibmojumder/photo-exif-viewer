import React from 'react';

export function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Disclaimer
      </h1>

      <div className="space-y-6 text-gray-700">
        <p>Last updated: November 13, 2024</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">1. Information Accuracy</h2>
          <p>
            While we strive to provide accurate EXIF data extraction and location information,
            we cannot guarantee the accuracy, completeness, or reliability of the information
            displayed. The service is provided "as is" without any warranties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">2. Location Data</h2>
          <p>
            GPS coordinates and location information are derived from your photo's EXIF data
            and third-party mapping services. We do not verify the accuracy of this information
            and cannot be held responsible for any inaccuracies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">3. Third-Party Content</h2>
          <p>
            Our service includes content from third parties, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics tracking code</li>
            <li>Google AdSense advertisements</li>
            <li>OpenStreetMap data and services</li>
          </ul>
          <p>
            We are not responsible for the content, accuracy, or practices of these third-party
            services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">4. Technical Issues</h2>
          <p>
            We do not guarantee uninterrupted access to our service. Technical issues,
            browser incompatibilities, or internet connectivity problems may affect the
            service's functionality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">5. Privacy and Security</h2>
          <p>
            While we process photos locally in your browser, we cannot guarantee the security
            of data transmission over the internet. Use of this service is at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">6. Advertisements</h2>
          <p>
            Google AdSense advertisements are displayed on our website. We do not endorse
            or guarantee any advertised products or services. Users interact with advertisements
            at their own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">7. Changes</h2>
          <p>
            We reserve the right to modify this disclaimer at any time without notice.
            Continued use of the service constitutes acceptance of the updated disclaimer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">8. Contact</h2>
          <p>
            For any questions regarding this disclaimer, please contact us at:
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