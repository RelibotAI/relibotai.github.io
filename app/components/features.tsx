"use client";

import React, { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
  detailedContent: string;
}

const features: Feature[] = [
  {
    title: "Process Digitalization & Automation",
    description: "Advanced algorithms predict equipment failures before they happen, reducing downtime and maintenance costs.",
    icon: "🔮",
    detailedContent: `Our service span across:
• Mining and metals
• Oil and gas
• Energy
• Utilities
• Manufacturing`
  },
  {
    title: "Asset Manager & Log Analyzer",
    description: "Comprehensive visualization of your equipment reliability metrics and key performance indicators in real-time.",
    icon: "📊",
    detailedContent: `Our flagship product with the following features:
• WhatsApp log gateway / Smart log collection :

Can be used natively by operators in the field, without changing daily processes. Operators send a message (e.g., "Pump A is leaking") → automatically entered into the database/dashboard with time stamping and error correction.

• Auto timestamp and geo tagging :

Retrieve time and location from your device without manual input. Avoid forgetfulness.

• AI reliability assistant :

Chatbot helps with root cause analysis and action suggestions from log data.

• Live MTBF / MTTR / Pareto dashboard :

Real-time visualization of MTBF/MTTR/Pareto calculated continuously. No need for manual calculations. Visualization of "bad actors".

• Export to PDF / Excel :

For automated weekly/monthly reports, making presentations easier for managers and above.

• Reminder and alert :

Send alerts to operators/supervisors/even higher management for critical equipment. Send weekly/monthly summaries.

• Offline-first jogging (pilot) :

WhatsApp keeps logs when there is no signal, syncs when the connection is active.

• System integration, SAP Notification Bridge (optional) :

The output can be customized to the host system (SAP/CMMS). For example, for SAP, it will be logged as an IW28 notification (or email alert).

• Asset Registry Matching to SAP / existing DB, by AI :

Free input ("crusher lower oreflow", "conveyor 72") will be matched to the official asset ID.`
  },
  {
    title: "Modules & Tooling Development",
    description: "Optimize maintenance schedules with AI-driven insights, ensuring maximum equipment uptime and cost efficiency.",
    icon: "⚙️",
    detailedContent: `Our tailored solution for your business requirements:
• Maintenance planning
• Weibull analysis
• Crow-AMSAA
• FMEA and RCM builder`
  }
];

const Features: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [previousExpandedCard, setPreviousExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (expandedCard === index) {
      // Collapsing - keep the previous card for animation
      setPreviousExpandedCard(expandedCard);
      setExpandedCard(null);
      // Clear previous card after animation completes
      setTimeout(() => setPreviousExpandedCard(null), 500);
    } else {
      // Expanding - set new card
      setPreviousExpandedCard(null);
      setExpandedCard(index);
    }
  };

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Predictive Reliability Analytics for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Engineers, Managers, and C-level</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reliability Dashboard, Maintenance Planning, FMEA, RCM, Weibull, Crow-AMSAA — all in one intuitive dashboard. Turn your data into decisions.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {/* Feature Card */}
              <div 
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group hover:border-primary/50 cursor-pointer flex flex-col flex-1"
                onClick={() => handleCardClick(index)}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 transition-colors group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium mt-auto">
                  <span>Click to learn more</span>
                  <span className={`ml-2 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </div>
              </div>

              {/* Collapsible Content - Individual for each card on mobile */}
              <div className={`md:hidden w-full transition-all duration-500 ease-in-out ${
                expandedCard === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                {(expandedCard === index || previousExpandedCard === index) && (
                  <div className={`transform transition-all duration-500 ease-out ${
                    expandedCard === index ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'
                  }`}>
                    <div className="bg-card/50 border border-border/50 rounded-xl p-6 backdrop-blur-sm">
                      <h4 className={`text-xl font-semibold text-card-foreground mb-3 transform transition-all duration-500 ease-out ${
                        expandedCard === index ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-2 opacity-0'
                      }`}>
                        More about {feature.title}
                      </h4>
                      <p className={`text-muted-foreground leading-loose text-base transform transition-all duration-500 ease-out whitespace-pre-line pl-4 ${
                        expandedCard === index ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-2 opacity-0 delay-0'
                      }`}>
                        {feature.detailedContent}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible Content - Single Container for desktop */}
        <div className={`hidden md:block w-full transition-all duration-500 ease-in-out ${
          expandedCard !== null ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
        } overflow-hidden`}>
          {(expandedCard !== null || previousExpandedCard !== null) && (
            <div className={`transform transition-all duration-500 ease-out ${
              expandedCard !== null ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'
            }`}>
              <div className="bg-card/50 border border-border/50 rounded-xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
                <h4 className={`text-2xl font-semibold text-card-foreground mb-4 transform transition-all duration-500 ease-out ${
                  expandedCard !== null ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-2 opacity-0'
                }`}>
                  More about {features[expandedCard !== null ? expandedCard : previousExpandedCard!].title}
                </h4>
                <p className={`text-muted-foreground leading-loose text-lg transform transition-all duration-500 ease-out whitespace-pre-line pl-4 ${
                  expandedCard !== null ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-2 opacity-0 delay-0'
                }`}>
                  {features[expandedCard !== null ? expandedCard : previousExpandedCard!].detailedContent}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;