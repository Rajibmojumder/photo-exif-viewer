import React from 'react';

export function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Terms of Service
      </h1>

      <div className="space-y-6 text-gray-700">
        <p>Last updated: November 13, 2024</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Photo EXIF Viewer, you agree to be bound by these Terms of Service
            and all applicable laws and regulations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">2. Use License</h2>
          <p>
            Permission is granted to temporarily use Photo EXIF Viewer for personal, non-commercial
            purposes only. This is the grant of a license, not a transfer of title.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">3. Service Description</h2>
          <p>
            Photo EXIF Viewer provides EXIF data extraction and location mapping services for digital
            photos. While we strive for accuracy, we cannot guarantee the completeness or accuracy
            of extracted data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">4. Prohibited Uses</h2>
          <p>You may not use Photo EXIF Viewer for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any unlawful purpose</li>
            <li>Harassment or privacy violation</li>
            <li>Distribution of malware</li>
            <li>Unauthorized data collection</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">5. Advertising</h2>
          <p>
            Our service includes Google AdSense advertisements. By using the service, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>View advertisements as part of the service</li>
            <li>Not use ad-blocking software while using our service</li>
            <li>Not interfere with ad delivery or display</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">6. Limitation of Liability</h2>
          <p>
            Photo EXIF Viewer shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use or inability to use the service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the service
            after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">8. Contact</h2>
          <p>
            For any questions regarding these terms, please contact us at:
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