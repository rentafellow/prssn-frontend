import React from 'react';

const CommunityIllustration = ({ className = "" }) => (
  <div className={`relative w-full aspect-square ${className}`}>
    <svg 
      viewBox="0 0 400 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
        {/* Background Blob */}
        <path d="M50 350 Q200 400 350 350 Q400 200 350 50 Q200 0 50 50 Q0 200 50 350 Z" fill="#E6EAD6" fillOpacity="0.5" />

        {/* Figure 1 (Left Back) */}
        <circle cx="100" cy="150" r="40" fill="#FBC02D" stroke="black" strokeWidth="4" />
        <path d="M100 190 V300 H160" stroke="black" strokeWidth="5" strokeLinecap="round" />

        {/* Figure 2 (Center Front) */}
        <circle cx="200" cy="180" r="50" fill="#FFFEF0" stroke="black" strokeWidth="5" />
        <path d="M200 230 V350 M150 280 H250" stroke="black" strokeWidth="6" strokeLinecap="round" />

        {/* Figure 3 (Right Back) */}
        <circle cx="300" cy="160" r="35" fill="#4B6351" stroke="black" strokeWidth="4" />
        <path d="M300 195 V290 H240" stroke="black" strokeWidth="5" strokeLinecap="round" />

        {/* Decorative Elements */}
        <circle cx="50" cy="80" r="15" fill="#1A2118" />
        <path d="M350 350 L370 370 M350 370 L370 350" stroke="black" strokeWidth="4" />
    </svg>
  </div>
);

export default CommunityIllustration;
