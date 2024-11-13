import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Camera, Home, HelpCircle, Sparkles, Users, Shield, FileQuestion } from 'lucide-react';

export function Header() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { icon: <Home className="w-4 h-4" />, label: 'Home', action: () => navigate('/') },
    { icon: <HelpCircle className="w-4 h-4" />, label: 'How It Works', action: () => scrollToSection('how-it-works') },
    { icon: <Sparkles className="w-4 h-4" />, label: 'Features', action: () => scrollToSection('features') },
    { icon: <Users className="w-4 h-4" />, label: 'Use Cases', action: () => scrollToSection('use-cases') },
    { icon: <Shield className="w-4 h-4" />, label: 'Privacy', action: () => scrollToSection('privacy') },
    { icon: <FileQuestion className="w-4 h-4" />, label: 'FAQ', action: () => scrollToSection('faq') }
  ];

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
      <nav className="container mx-auto px-4 py-4">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
              <Camera className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Photo EXIF Viewer
              </h1>
              <p className="text-sm text-gray-600">View photo metadata & location</p>
            </div>
          </Link>
          
          {/* Mobile Menu */}
          <div className="flex flex-wrap justify-center gap-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="flex items-center space-x-1 px-3 py-1.5 text-sm bg-white/50 rounded-full 
                         text-gray-600 hover:text-indigo-600 transition-colors shadow-sm hover:shadow"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
              <Camera className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Photo EXIF Viewer
              </h1>
              <p className="text-sm text-gray-600">View photo metadata & location</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}