import React from 'react';

// Common colors for consistency
const COLORS = {
  black: "#1A2118",
  olive: "#4B6351",
  yellow: "#FBC02D",
  cream: "#FFFEF0",
  bg: "#E6EAD6" // Light olive background
};

export const Step1Illustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Circle */}
    <circle cx="100" cy="100" r="80" fill={COLORS.bg} fillOpacity="0.5" />
    
    {/* ID Card Shape */}
    <rect x="60" y="50" width="80" height="110" rx="8" fill={COLORS.cream} stroke={COLORS.black} strokeWidth="3" />
    <circle cx="100" cy="85" r="20" stroke={COLORS.black} strokeWidth="3" />
    <path d="M85 115 H115" stroke={COLORS.black} strokeWidth="3" strokeLinecap="round" />
    <path d="M75 130 H125" stroke={COLORS.olive} strokeWidth="3" strokeLinecap="round" />
    <path d="M75 140 H105" stroke={COLORS.olive} strokeWidth="3" strokeLinecap="round" />
    
    {/* Decorative Elements */}
    <circle cx="160" cy="40" r="8" fill={COLORS.yellow} stroke={COLORS.black} strokeWidth="2" />
    <path d="M40 160 L50 170 L60 160" stroke={COLORS.black} strokeWidth="2" fill="none" />
  </svg>
);

export const Step2Illustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Circle */}
    <circle cx="100" cy="100" r="80" fill={COLORS.bg} fillOpacity="0.5" />
    
    {/* Magnifying Glass */}
    <circle cx="90" cy="90" r="35" stroke={COLORS.black} strokeWidth="4" fill="transparent" />
    <circle cx="90" cy="90" r="25" stroke={COLORS.olive} strokeWidth="2" strokeDasharray="4 4" />
    <line x1="115" y1="115" x2="155" y2="155" stroke={COLORS.black} strokeWidth="8" strokeLinecap="round" />
    
    {/* Search Results (Abstract) */}
    <circle cx="140" cy="60" r="5" fill={COLORS.yellow} />
    <circle cx="50" cy="140" r="5" fill={COLORS.yellow} />
    <rect x="150" y="90" width="10" height="10" stroke={COLORS.black} strokeWidth="2" fill="none" transform="rotate(15 155 95)" />
  </svg>
);

export const Step3Illustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Circle */}
    <circle cx="100" cy="100" r="80" fill={COLORS.bg} fillOpacity="0.5" />
    
    {/* Figures Connecting */}
    {/* Left Figure */}
    <circle cx="70" cy="80" r="15" stroke={COLORS.black} strokeWidth="3" fill={COLORS.cream} />
    <path d="M70 100 V160 M50 130 H90" stroke={COLORS.black} strokeWidth="3" strokeLinecap="round" />
    
    {/* Right Figure */}
    <circle cx="130" cy="80" r="15" stroke={COLORS.black} strokeWidth="3" fill={COLORS.cream} />
    <path d="M130 100 V160 M110 130 H150" stroke={COLORS.black} strokeWidth="3" strokeLinecap="round" />
    
    {/* Connection/Vibe (Speech Bubble) */}
    <path d="M100 65 Q115 50 100 35 Q85 50 100 65 Z" fill={COLORS.yellow} stroke={COLORS.black} strokeWidth="2" />
    <path d="M85 160 H115" stroke={COLORS.olive} strokeWidth="2" />
  </svg>
);
