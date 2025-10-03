'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Handle scroll effect and active section detection
  useEffect(() => {
    const checkInitialScroll = () => {
      const scrollTop = window.scrollY;
      const isHomePage = window.location.pathname === '/';
      setIsScrolled(isHomePage ? scrollTop > 50 : true);
    };

    checkInitialScroll();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isHomePage = window.location.pathname === '/';
      setIsScrolled(isHomePage ? scrollTop > 50 : true);

      // Detect active section
      if (isHomePage) {
        const sections = ['features', 'pricing', 'testimonials', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(current || '');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // On home page - scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages - navigate to home page with section hash
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-0">
              <Image
                src="/relibotai_symbol.png"
                alt="RelibtoAI Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span 
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                RelibotAI
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className={`transition-colors duration-300 ${
                  activeSection === 'features'
                    ? 'text-primary font-semibold'
                    : isScrolled 
                      ? 'text-black hover:text-primary' 
                      : 'text-white hover:text-primary'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`transition-colors duration-300 ${
                  activeSection === 'pricing'
                    ? 'text-primary font-semibold'
                    : isScrolled 
                      ? 'text-black hover:text-primary' 
                      : 'text-white hover:text-primary'
                }`}
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`transition-colors duration-300 ${
                  activeSection === 'testimonials'
                    ? 'text-primary font-semibold'
                    : isScrolled 
                      ? 'text-black hover:text-primary' 
                      : 'text-white hover:text-primary'
                }`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`transition-colors duration-300 ${
                  activeSection === 'contact'
                    ? 'text-primary font-semibold'
                    : isScrolled 
                      ? 'text-black hover:text-primary' 
                      : 'text-white hover:text-primary'
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="/register">
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25">
                  Register
                </button>
              </a>
              <a href="/log-in">
                <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 backdrop-blur-sm">
                  Log In
                </button>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-black hover:text-primary' 
                  : 'text-white hover:text-primary'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-all duration-300 ${
              isScrolled 
                ? 'bg-white border-gray-200' 
                : 'bg-black/20 backdrop-blur-sm border-white/20'
            }`}>
              <button 
                onClick={() => scrollToSection('features')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                  activeSection === 'features'
                    ? 'text-primary font-semibold bg-primary/10'
                    : isScrolled 
                      ? 'text-black hover:text-primary hover:bg-gray-100' 
                      : 'text-white hover:text-primary hover:bg-white/10'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                  activeSection === 'pricing'
                    ? 'text-primary font-semibold bg-primary/10'
                    : isScrolled 
                      ? 'text-black hover:text-primary hover:bg-gray-100' 
                      : 'text-white hover:text-primary hover:bg-white/10'
                }`}
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                  activeSection === 'testimonials'
                    ? 'text-primary font-semibold bg-primary/10'
                    : isScrolled 
                      ? 'text-black hover:text-primary hover:bg-gray-100' 
                      : 'text-white hover:text-primary hover:bg-white/10'
                }`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                  activeSection === 'contact'
                    ? 'text-primary font-semibold bg-primary/10'
                    : isScrolled 
                      ? 'text-black hover:text-primary hover:bg-gray-100' 
                      : 'text-white hover:text-primary hover:bg-white/10'
                }`}
              >
                Contact
              </button>
              <a href="/register" className="block">
                <button className="w-full text-left px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all mt-2 shadow-lg">
                  Register
                </button>
              </a>
              <a href="/log-in" className="block">
                <button className="w-full text-left px-3 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all backdrop-blur-sm">
                  Log In
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;