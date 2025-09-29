import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

export const metadata = {
  title: 'Under Construction - RelibotAI',
  description: 'Sorry, we are still working on this page...',
};

export default function UnderConstruction() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Under Construction Image */}
          <div className="mb-8">
            <img 
              src="/under-construction.png" 
              alt="Under Construction" 
              className="mx-auto max-w-full h-auto"
              style={{ maxHeight: '700px' }}
            />
          </div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="pt-6">
              <a 
                href="/"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25 transform hover:scale-105 inline-block"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}