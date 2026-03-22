'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const FinalCTA = () => {
    const router = useRouter();
    const { userData } = useAuth();

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
            {/* Animated Background Orbs */}
            <div className='absolute top-10 left-10 w-96 h-96 bg-green-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-float'></div>
            <div className='absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-float' style={{animationDelay: '2s'}}></div>
            
            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold text-white tracking-wide uppercase">Ready When You Are</span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Stop going through<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-green-400">
                            life alone.
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                        Find someone who gets it. Book a companion in minutes and experience what it&apos;s like to have company without the pressure.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button 
                            onClick={() => router.push('/companions')}
                            className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                            Find a Presence
                            <span className="text-xl">→</span>
                        </button>
                        {!userData && (
                            <button 
                                onClick={() => router.push('/onboarding')}
                                className="px-10 py-5 bg-transparent text-white border-2 border-white/30 backdrop-blur-md rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto"
                            >
                                Become a Companion
                            </button>
                        )}
                    </div>

                    {/* Trust Signal */}
                    <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex text-yellow-400 text-2xl">★★★★★</div>
                            <span className="text-sm font-bold text-gray-400">500+ Happy Users</span>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/20"></div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-3xl font-bold text-white">24/7</span>
                            <span className="text-sm font-bold text-gray-400">Human Support</span>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/20"></div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-3xl font-bold text-white">100%</span>
                            <span className="text-sm font-bold text-gray-400">Verified Companions</span>
                        </div>
                    </div>

                    {/* Safety Reminder */}
                    <div className="mt-16 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                        <p className="text-sm md:text-base font-bold text-gray-300 flex items-center justify-center gap-2">
                            <span className="text-green-400 text-xl">✓</span>
                            You can leave anytime. No explanation needed. Your comfort always comes first.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
