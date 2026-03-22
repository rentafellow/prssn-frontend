"use client";

import React from 'react';

const StrategyCard = ({ title, description, icon }) => (
  <div className="bg-yellow-50 border-2 border-black p-8 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 h-full flex flex-col items-start relative overflow-hidden group">
    {/* Decorative background circle */}
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-300 rounded-full border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
    
    <div className="relative z-10 bg-blue-500 w-16 h-16 rounded-lg border-2 border-black flex items-center justify-center mb-6 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
      {icon}
    </div>
    
    <h3 className="relative z-10 text-xl font-black text-black mb-3 uppercase tracking-tighter">{title}</h3>
    <p className="relative z-10 text-gray-800 font-medium leading-relaxed">
      {description}
    </p>
  </div>
);

export default function WhyChooseUs() {
  const features = [
    {
      title: "Verified Community",
      description: "No bots, no fakes. Every Human Presence member is vetted to ensure real vibes and real connections.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 2 16.9706 2 12C2 7.02944 7.02944 2 12 2C16.9706 2 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Secure & Safe",
      description: "Payments are locked down. Personal data is vault-tight. We worry about security so you don't have to.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 11L11 14L16 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "24/7 Human Help",
      description: "Stuck? Confused? Our actual human support team is awake when you are. No automated loops.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3 18V16C3 13.7909 4.79086 12 7 12H17C19.2091 12 21 13.7909 21 16V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
           <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Quick Booking",
      description: "Find a presence, check their calendar, and book. Seconds, not minutes. Simple as that.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
             <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
             <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M3 10H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M16 14L18 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-yellow-50 relative overflow-hidden border-t-2 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6 text-center md:text-left">
            <div className="max-w-2xl flex flex-col items-center md:items-start">
                <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold mb-4 uppercase tracking-wider transform -rotate-1">
                    No Sketchy Business
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-none">
                    WHY CHOOSE US?
                </h2>
                <div className="h-2 w-full bg-blue-500 mt-2"></div>
            </div>
            <p className="text-xl font-bold text-gray-700 max-w-md text-center md:text-left">
                We&apos;re building the <span className="text-blue-600 underline decoration-wavy decoration-2">safest</span> place to find your next activity partner.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <StrategyCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
