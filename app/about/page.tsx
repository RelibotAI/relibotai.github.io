import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

export const metadata = {
  title: 'About RelibotAI',
  description: 'Our vision in RelibotAI.',
};

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted py-20 pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About RelibotAI
            </h1>
            <p className="text-xl text-muted-foreground">
              Our vision to help organizations digitize their processes and empower their decisions with data.
            </p>
          </div>

          <div className="bg-background rounded-xl shadow-lg p-12 border border-border">
            <p className="mb-6">
                <span className="font-semibold">RelibotAI</span> is an AI-driven reliability platform that helps industries turn maintenance and operations data into actionable insights. We empower engineers and decision-makers with predictive analytics, failure pattern detection, and smarter planning tools to maximize uptime, extend asset life, and reduce operational risk.
            </p>

            <p className="mb-6">
                Beyond reliability and maintenance, we also help organizations digitize their processes and empower decisions with data, enabling more efficient operations and stronger resilience across energy, mining, oil & gas, logistics, manufacturing, and transportation sectors.
            </p>

            <p className="mb-6 font-semibold text-lg">Our focus spans across:</p>

            <div className="grid gap-4 mb-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-semibold mb-1">Reliability Engineering</p>
                  <p className="text-sm text-muted-foreground">MTBF/MTTR/Pareto/Reliability analysis, FMEA, failure log intelligence</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-semibold mb-1">Data Integration</p>
                  <p className="text-sm text-muted-foreground">Leverage SAP data or your maintenance data from reliability engineering lens</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-semibold mb-1">Industrial AI & Analytics</p>
                  <p className="text-sm text-muted-foreground">AI-powered insights from SAP or maintenance systems</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  4
                </div>
                <div>
                  <p className="font-semibold mb-1">Predictive & Preventive Maintenance</p>
                  <p className="text-sm text-muted-foreground">Optimize intervals, cut downtime</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  5
                </div>
                <div>
                  <p className="font-semibold mb-1">Process Digitalization & Decision Intelligence</p>
                  <p className="text-sm text-muted-foreground">Helping organizations digitize processes and empower decisions with transparent, data-driven insights</p>
                </div>
              </div>
            </div>

            <p className="mb-6">
                <span className="font-semibold">Mining & Metals, Oil & Gas, Energy, Utilities, Manufacturing</span> — built for heavy industries and high-tech where reliability matters most.
            </p>
                
            <p className="mb-6">
                At RelibotAI, we bring together engineering principles and AI to build reliable, resilient, and future-ready operations.
            </p>

            <p>
                <a href="https://www.linkedin.com/company/relibotai/" className="text-primary hover:text-primary/80 font-medium underline"><u>Follow us</u></a> to see how we're shaping the future of industrial reliability with AI! Reach out to us to align with your needs and provide customized and best approach for you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}