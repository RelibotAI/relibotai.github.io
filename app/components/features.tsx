"use client";

import React, { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
  detailedContent: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Process Digitalization & Automation",
    description: "Digitize your manual business processes, streamline operations, and unlock data-driven efficiency. Smart algorithms transform raw data into actionable insights, cutting operational and maintenance costs.",
    icon: "🔮",
    detailedContent: (
      <div className="space-y-4">
        <p className="text-base">Our service span across:</p>
        <div className="grid gap-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>Mining and metals</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>Oil and gas</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>Energy</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>Utilities</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>Manufacturing</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Asset Manager & Log Analyzer",
    description: "Gain a comprehensive, real-time view of your asset maintenance, reliability metrics, and key performance indicators.",
    icon: "📊",
    detailedContent: (
      <div className="space-y-4">
        <p className="text-base font-semibold">Our flagship product with the following features:</p>
        <div className="grid gap-3">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-semibold mb-1">WhatsApp log gateway / Smart log collection</h5>
              <p className="text-sm opacity-90">Can be used natively by operators in the field, without changing daily processes. Operators send a message (e.g., "Pump A is leaking") → automatically entered into the database/dashboard with time stamping and error correction.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-semibold mb-1">Auto timestamp and geo tagging</h5>
              <p className="text-sm opacity-90">Retrieve time and location from your device without manual input. Avoid forgetfulness.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-semibold mb-1">AI reliability assistant</h5>
              <p className="text-sm opacity-90">Chatbot helps with root cause analysis and action suggestions from log data.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-semibold mb-1">Live MTBF / MTTR / Pareto dashboard</h5>
              <p className="text-sm opacity-90">Real-time visualization of MTBF/MTTR/Pareto calculated continuously. No need for manual calculations. Visualization of "bad actors".</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-semibold mb-1">Export to PDF / Excel</h5>
              <p className="text-sm opacity-90">For automated weekly/monthly reports, making presentations easier for managers and above.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-semibold mb-1">Reminder and alert</h5>
              <p className="text-sm opacity-90">Send alerts to operators/supervisors/even higher management for critical equipment. Send weekly/monthly summaries.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-semibold mb-1">Offline-first jogging (pilot)</h5>
              <p className="text-sm opacity-90">WhatsApp keeps logs when there is no signal, syncs when the connection is active.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-semibold mb-1">System integration, SAP Notification Bridge (optional)</h5>
              <p className="text-sm opacity-90">The output can be customized to the host system (SAP/CMMS). For example, for SAP, it will be logged as an IW28 notification (or email alert).</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-semibold mb-1">Asset Registry Matching to SAP / existing DB, by AI</h5>
              <p className="text-sm opacity-90">Free input ("crusher lower oreflow", "conveyor 72") will be matched to the official asset ID.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Modules & Tooling Development",
    description: "Manage assets with ReliboAI Smart Maintenance & Reliability Modules/Tools.",
    icon: "⚙️",
    detailedContent: (
      <div className="space-y-4">
        <p className="text-base font-semibold">Our Modules & Tooling:</p>
        <div className="grid gap-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>Maintenance planning</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>FMEA builder</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>RCM builder</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>Weibull</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            <span>Crow-AMSAA</span>
          </div>
        </div>
      </div>
    )
  }
];

const Features: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [previousExpandedCard, setPreviousExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (expandedCard === index) {
      setPreviousExpandedCard(expandedCard);
      setExpandedCard(null);
      setTimeout(() => setPreviousExpandedCard(null), 500);
    } else {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-4">
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

              <div className={`md:hidden w-full transition-all duration-500 ease-in-out ${
                expandedCard === index ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                {(expandedCard === index || previousExpandedCard === index) && (
                  <div className={`transform transition-all duration-500 ease-out ${
                    expandedCard === index ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'
                  }`}>
                    <div className="bg-card/50 border border-border/50 rounded-xl p-6 backdrop-blur-sm">
                      <h4 className={`text-xl font-semibold text-card-foreground mb-4 transform transition-all duration-500 ease-out ${
                        expandedCard === index ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-2 opacity-0'
                      }`}>
                        More about {feature.title}
                      </h4>
                      <div className={`text-muted-foreground leading-loose transform transition-all duration-500 ease-out ${
                        expandedCard === index ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-2 opacity-0 delay-0'
                      }`}>
                        {feature.detailedContent}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`hidden md:block w-full transition-all duration-500 ease-in-out ${
          expandedCard !== null ? 'max-h-[4000px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
        } overflow-hidden`}>
          {(expandedCard !== null || previousExpandedCard !== null) && (
            <div className={`transform transition-all duration-500 ease-out ${
              expandedCard !== null ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'
            }`}>
              <div className="bg-card/50 border border-border/50 rounded-xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
                <h4 className={`text-2xl font-semibold text-card-foreground mb-6 transform transition-all duration-500 ease-out ${
                  expandedCard !== null ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-2 opacity-0'
                }`}>
                  More about {features[expandedCard !== null ? expandedCard : previousExpandedCard!].title}
                </h4>
                <div className={`text-muted-foreground leading-loose transform transition-all duration-500 ease-out ${
                  expandedCard !== null ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-2 opacity-0 delay-0'
                }`}>
                  {features[expandedCard !== null ? expandedCard : previousExpandedCard!].detailedContent}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;