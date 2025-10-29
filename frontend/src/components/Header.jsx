import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#285075] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+91-8700849865</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+91-7668167061</span>
            </div>
          </div>
          <div className="text-sm">
            Excellence in Fabrication
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-stretch justify-between py-0 h-20">
            {/* Logo - Clickable and links to home page */}
            <div className="flex items-center">
              <a 
                href="/" 
                className="flex items-center transition-transform duration-300 hover:scale-105"
                aria-label="Go to home page"
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_live-edit-4/artifacts/1io1mdp1_5.png" 
                  alt="SSP Fabrication & Erection Logo" 
                  className="h-16 w-auto object-contain cursor-pointer"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#285075] transition-colors font-medium hover:scale-105 transform duration-200">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-[#285075] transition-colors font-medium hover:scale-105 transform duration-200">
                About Us
              </a>
              <a href="/services" className="text-gray-700 hover:text-[#285075] transition-colors font-medium hover:scale-105 transform duration-200">
                Services
              </a>
              <a href="/contact" className="text-gray-700 hover:text-[#285075] transition-colors font-medium hover:scale-105 transform duration-200">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 pulse-glow hover:scale-105 transform transition-all duration-200"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="/" className="text-gray-700 hover:text-[#285075] transition-colors font-medium">
                  Home
                </a>
                <a href="/about" className="text-gray-700 hover:text-[#285075] transition-colors font-medium">
                  About Us
                </a>
                <a href="/services" className="text-gray-700 hover:text-[#285075] transition-colors font-medium">
                  Services
                </a>
                <a href="/contact" className="text-gray-700 hover:text-[#285075] transition-colors font-medium">
                  Contact
                </a>
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-fit"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Free Quote
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;