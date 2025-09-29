'use client';

import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 min-h-screen flex items-center overflow-hidden">
      {/* GIF Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/hero-bg.gif")', // Replace with your actual GIF path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> AI-Powered </span>
            Reliability for Smarter Industries
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Helping organizations digitize processes and empower decisions with data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25 transform hover:scale-105">
                Get Started
                </button>
            </a>
            <button 
              onClick={() => scrollToSection('features')}
              className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;