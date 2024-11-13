import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, Github, Mail } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'FAQ', href: '#faq' }
  ];

  const resources = [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Disclaimer', to: '/disclaimer' }
  ];

  return (
    <footer className="glass-effect mt-12 border-t border-white/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Photo EXIF Viewer
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              Discover the story behind your photos with our powerful EXIF data viewer and location mapper.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:contact@photoexifviewer.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-indigo-600 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-indigo-600 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Have questions or feedback?</p>
              <a
                href="mailto:contact@photoexifviewer.com"
                className="text-indigo-600 hover:text-indigo-700 transition-colors text-sm flex items-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>contact@photoexifviewer.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Photo EXIF Viewer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}