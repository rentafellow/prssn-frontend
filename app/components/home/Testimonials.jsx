"use client";

import React from 'react';

// Refined Avatar component with softer colors
const Avatar = ({ seed }) => {
  const bgColors = ['#F0FDF4', '#FEFCE8', '#EFF6FF', '#FAF5FF', '#FFF1F2']; // pastel backgrounds
  const textColors = ['#166534', '#854D0E', '#1E40AF', '#6B21A8', '#9F1239']; // darker accents
  
  const bgColor = bgColors[seed % bgColors.length];
  const textColor = textColors[seed % bgColors.length];
  
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-sm" style={{ backgroundColor: bgColor, color: textColor }}>
       {String.fromCharCode(65 + (seed % 26))}
    </div>
  );
};

export default function Testimonials() {
    const cardsData = [
        {
            seed: 1,
            name: 'Briar Martin',
            handle: '@neilstellar',
            date: 'April 2025',
            text: "prsnn. made finding a companion for the gala absolutely effortless. Highly recommended!"
        },
        {
            seed: 2,
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 2025',
            text: "The verification process gave me total peace of mind. Found a great tennis partner in minutes."
        },
        {
            seed: 3,
            name: 'Jordan Lee',
            handle: '@jordantalks',
            date: 'June 2025',
            text: "Honestly surprised by how professional everyone is. It's a game changer for my weekend plans."
        },
        {
            seed: 4,
            name: 'Sarah Wilson',
            handle: '@sarahmaps',
            date: 'July 2025',
            text: "I was new to the city and prsnn. helped me explore knowing I had a trusted local with me."
        },
        {
            seed: 5,
            name: 'David Chen',
            handle: '@davidtravels',
            date: 'August 2025',
            text: "The platform is incredibly easy to use. Great design and even better people."
        },
        {
            seed: 6,
            name: 'Emily Davis',
            handle: '@emilyd_art',
            date: 'Sept 2025',
            text: "I needed a body double for my studio work. The silence was perfect. exactly what I needed."
        }
    ];

    const CreateCard = ({ card }) => (
        <div className="bg-white p-8 rounded-[2.5rem] mx-4 shadow-md border border-gray-100 w-[360px] shrink-0 h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="flex gap-4 mb-6 items-center">
                <Avatar seed={card.seed} />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                        <p className="font-bold text-gray-900 text-lg">{card.name}</p>
                        {/* Verified Check */}
                         <span className="bg-blue-50 text-blue-600 rounded-full p-0.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium tracking-wide">{card.handle}</span>
                </div>
            </div>
            
            <p className="text-base font-medium leading-relaxed text-gray-600 mb-6 grow">
                &ldquo;{card.text}&rdquo;
            </p>
            
            <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                 <div className="flex text-yellow-400 gap-0.5 text-sm">
                    {'★'.repeat(5)}
                </div>
                <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">{card.date}</p>
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-gray-50 overflow-hidden relative border-t border-gray-100">
             {/* Decorative Background */}
             <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-60 pointer-events-none'></div>

            <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8">
                <div>
                    <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-4 block">Social Proof</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                        What people say.
                    </h2>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-gray-100 shadow-sm">
                    <span className="flex text-yellow-400 text-lg">★★★★★</span>
                    <span className="text-sm font-bold text-gray-600">4.9/5 from 200+ users</span>
                </div>
            </div>
            
            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 60s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
            
            .marquee-row:hover .marquee-inner {
                animation-play-state: paused;
            }
        `}</style>
            
            {/* Row 1 */}
            <div className="marquee-row w-full overflow-hidden relative mb-8">
                <div className="absolute left-0 top-0 h-full w-20 md:w-60 z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>
                <div className="marquee-inner flex w-fit px-0">
                    {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={`row1-${index}`} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-60 z-10 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>
            </div>

            {/* Row 2 */}
            <div className="marquee-row w-full overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 md:w-60 z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex w-fit px-0">
                    {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={`row2-${index}`} card={{...card, seed: card.seed + 10}} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-60 z-10 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>
            </div>
        </section>
    )
}
