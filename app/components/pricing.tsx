'use client';

import React from 'react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  setupCost: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "Rp 500.000 (€ 30)",
    period: "month",
    setupCost: "Rp 25.000.000 (€ 1500)",
    description: "Solution for small businesses",
    features: [
      { text: "Damage input via WhatsApp", included: true },
      { text: "Backend system (Database)", included: true },
      { text: "Compact dashboard (Log, MTTR, MTBF)", included: true },
      { text: "Automatic notifications (Email & SMS)", included: false },
      { text: "Routine reports (Excel & PDF)", included: false },
      { text: "Offline input (Without signal)", included: false },
      { text: "Multi-users capability", included: false },
      { text: "Customizable and ready-to-use dashboard display", included: false },
      { text: "Support for multi-users / roles and multi-sites", included: false },
      { text: "Fast response support from Customer Service", included: false },
      { text: "Operator training", included: false },
      { text: "Optional integration with SAP / ERP", included: false }
    ]
  },
  {
    name: "Standart",
    price: "Rp 750.000 (€ 40)",
    period: "month",
    setupCost: "Rp 35.000.000 (€ 2000)",
    description: "Solution for growing businesses",
    features: [
      { text: "Damage input via WhatsApp", included: true },
      { text: "Backend system (Database)", included: true },
      { text: "Compact dashboard (Log, MTTR, MTBF)", included: true },
      { text: "Automatic notifications (Email & SMS)", included: true },
      { text: "Routine reports (Excel & PDF)", included: true },
      { text: "Offline input (Without signal)", included: false },
      { text: "Multi-users capability", included: false },
      { text: "Customizable and ready-to-use dashboard display", included: false },
      { text: "Support for multi-users / roles and multi-sites", included: false },
      { text: "Fast response support from Customer Service", included: false },
      { text: "Operator training", included: false },
      { text: "Optional integration with SAP / ERP", included: false }
    ]
  },
  {
    name: "Full Package",
    price: "Rp 2.000.000 (€ 105)",
    period: "month",
    setupCost: "Rp 54.000.000 (€ 3000)",
    description: "Solution for large organizations",
    features: [
      { text: "Damage input via WhatsApp", included: true },
      { text: "Backend system (Database)", included: true },
      { text: "Compact dashboard (Log, MTTR, MTBF)", included: true },
      { text: "Automatic notifications (Email & SMS)", included: true },
      { text: "Routine reports (Excel & PDF)", included: true },
      { text: "Offline input (Without signal)", included: true },
      { text: "Multi-users capability", included: true },
      { text: "Customizable and ready-to-use dashboard display", included: true },
      { text: "Support for multi-users / roles and multi-sites", included: false },
      { text: "Fast response support from Customer Service", included: false },
      { text: "Operator training", included: false },
      { text: "Optional integration with SAP / ERP", included: false }
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Rp 9.000.000 (€ 470)",
    period: "month",
    setupCost: "> Rp 75.000.000 (€ 4000)",
    description: "Solution for multi-national corporations",
    features: [
      { text: "Damage input via WhatsApp", included: true },
      { text: "Backend system (Database)", included: true },
      { text: "Compact dashboard (Log, MTTR, MTBF)", included: true },
      { text: "Automatic notifications (Email & SMS)", included: true },
      { text: "Routine reports (Excel & PDF)", included: true },
      { text: "Offline input (Without signal)", included: true },
      { text: "Multi-users capability", included: true },
      { text: "Customizable and ready-to-use dashboard display", included: true },
      { text: "Support for multi-users / roles and multi-sites", included: true },
      { text: "Fast response support from Customer Service", included: true },
      { text: "Operator training", included: true },
      { text: "Optional integration with SAP / ERP", included: true }
    ]
  }
];

const Pricing: React.FC = () => {
  const handleGetStarted = (planName: string) => {
    // Redirect to register page with plan as query parameter
    window.location.href = `/register?plan=${encodeURIComponent(planName)}`;
  };

  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="max-w-[1600px] mx-auto px-1 sm:px-2 lg:px-3">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple and Transparent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card border rounded-xl p-7 transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-primary shadow-xl shadow-primary/20 scale-105 bg-gradient-to-b from-card to-card/80' 
                  : 'border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-card-foreground mb-3">{plan.name}</h3>
              <p className="text-muted-foreground mb-5">{plan.description}</p>
              
              <div className="mb-5">
                <span className="text-2xl font-bold text-card-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-1">/{plan.period}</span>
                <p className="text-sm mt-1">+ one-time setup cost: {plan.setupCost}</p>
              </div>

              <ul className="space-y-3 mb-7">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className={`mr-3 ${feature.included ? 'text-accent' : 'text-muted-foreground/50'}`}>
                      {feature.included ? '✓' : '✗'}
                    </span>
                    <span className={feature.included ? 'text-card-foreground' : 'text-muted-foreground'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleGetStarted(plan.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transform hover:scale-105'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;