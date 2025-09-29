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
      <main className="min-h-screen bg-secondary py-20">
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
            <p>
                RelibotAI is an AI-driven reliability platform that helps industries turn maintenance and operations data into actionable insights. We empower engineers and decision-makers with predictive analytics, failure pattern detection, and smarter planning tools to maximize uptime, extend asset life, and reduce operational risk.<br/><br/>

                Beyond reliability and maintenance, we also help organizations digitize their processes and empower decisions with data, enabling more efficient operations and stronger resilience across energy, mining, oil & gas, logistics, manufacturing, and transportation sectors.<br/><br/>

                Our focus spans across:<br/><br/>
            </p>

            <ul className="list-disc list-inside">
                <li>Reliability Engineering: MTBF/MTTR/Pareto/Reliability analysis, FMEA, failure log intelligence</li><br/>

                <li>Leverage SAP data or your maintenance data from reliability engineering lens</li><br/>

                <li>Industrial AI & Analytics: AI-powered insights from SAP/maintenance systems</li><br/>

                <li>Predictive & Preventive Maintenance: Optimize intervals, cut downtime</li><br/>

                <li>Process Digitization & Decision Intelligence: Helping organizations digitize processes and empower decisions with transparent, data-driven insights</li><br/>
            </ul>

            <p>
                Mining & Metals, Oil & Gas, Energy, Utilities, Manufacturing, built for heavy industries and high-tech where reliability matters most<br/><br/>
                
                At RelibotAI, we bring together engineering principles and AI to build reliable, resilient, and future-ready operations.<br/><br/>

                Follow us to see how we're shaping the future of industrial reliability with AI. Reach out to us to align with your needs and provide customized and best approach for you.
            </p>
          </div>

          {/* <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">Other Ways to Reach Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: hello@bankmod.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Finance Street, New York, NY 10001</p>
            </div>
          </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
}