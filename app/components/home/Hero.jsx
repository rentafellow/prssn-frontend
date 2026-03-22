'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../../context/AuthContext';

const Hero = () => {
  const router = useRouter()
  const { userData } = useAuth()
  
  return (
    <div className='relative w-full overflow-hidden bg-[#fafafa]'>
        
        {/* === Background Decor (Premium Gradients) === */}
        <div className='absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent opacity-70'></div>
        <div className='absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-green-200/20 rounded-full mix-blend-multiply filter blur-[100px] animate-float opacity-40 pointer-events-none'></div>
        <div className='absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-yellow-200/20 rounded-full mix-blend-multiply filter blur-[120px] animate-float opacity-40 pointer-events-none' style={{animationDelay: '4s'}}></div>
        
        <div className='max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-12 md:pb-28 flex flex-col md:flex-row items-center gap-0 md:gap-12 relative z-10'>
            
            {/* LEFT: Text Content */}
            <div className='flex flex-col gap-8 w-full md:w-1/2 text-center md:text-left items-center md:items-start mt-4 md:mt-0'>
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200/60 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow cursor-default animate-fadeIn">
                     <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                     </span>
                     <span className="text-[11px] font-extrabold text-gray-600 tracking-widest uppercase font-sans">Verified Companions Online</span>
                </div>

                {/* Headline */}
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-800 tracking-tight'>
                    Going alone is harder than people admit.
                </h1>
                
                {/* Subheadline */}
                <p className='text-lg md:text-xl text-gray-600 font-medium max-w-lg leading-relaxed tracking-tight mt-6'>
                     Find Someone to sit, walk or just be around - no pressure
                    <br className="block mt-2" />
                    <span className="text-gray-900 font-semibold">No dating. No therapy. No pressure.</span>
                </p>

                {/* Main Actions */}
                <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4'>
                     <button 
                        onClick={() => router.push('/companions')}
                        className='group px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all w-full sm:w-auto flex items-center justify-center gap-3 shadow-2xl hover:shadow-xl hover:-translate-y-1'
                    >
                        Find a Presence
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    {!userData && (
                        <button 
                            onClick={() => router.push('/onboarding')}
                            className='px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-black transition-all w-full sm:w-auto'
                        >
                            Become a Companion
                        </button>
                    )}
                </div>
                
                 {/* Trust Signal */}
                 <div className="flex items-center gap-5 mt-8 opacity-90">
                    <div className="flex -space-x-4 pl-2">
                        {[1,2,3,4].map(i => (
                             <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white bg-gray-100 overflow-hidden relative shadow-md">
                                <Image src={`/step${i > 3 ? 1 : i}.png`} alt="User" width={48} height={48} className="object-cover" />
                             </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-[3px] border-white bg-black text-white flex items-center justify-center text-xs font-bold shadow-md relative z-10">
                            500+
                        </div>
                    </div>
                    <div className="flex flex-col items-start leading-tight gap-1">
                        <div className="flex text-yellow-500 text-sm tracking-tighter">★★★★★</div>
                        <span className="text-sm font-bold text-gray-600">Loved by real people</span>
                    </div>
                </div>

            </div>

            {/* RIGHT: Visual Collage (The Vibe Grid) */}
            <div className='w-full md:w-1/2 relative h-[450px] md:h-[600px] flex items-center justify-center perspective-1000'>
                
                {/* Glowing Aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-100/40 via-yellow-50/40 to-transparent rounded-full filter blur-3xl opacity-60 transform translate-x-10 animate-pulse" style={{animationDuration: '4s'}}></div>

                {/* Main Card (Floating) */}
                <div className="relative z-20 transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="w-[85%] max-w-[400px] md:w-full md:max-w-[480px] bg-white p-4 rounded-[2.5rem] shadow-2xl border border-white/50 backdrop-blur-sm">
                        
                        {/* Image Container - Natural Aspect Ratio */}
                        <div className="relative bg-gray-50 rounded-[2rem] overflow-hidden mb-4 group shadow-inner">
                             <Image 
                                src="/hero-premium.png" 
                                alt="Premium Companion" 
                                width={500}
                                height={800}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                                priority
                             />
                             
                             {/* Floating Status Tag - Adjusted Position */}
                             <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-md border border-gray-100/50">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                <span className="text-[10px] uppercase font-bold text-gray-800 tracking-wide">Available Now</span>
                             </div>

                             {/* Bottom Name Tag */}
                             <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl flex items-center justify-between">
                                <div className="text-white">
                                    <p className="text-xs opacity-80 font-medium">Sit With Me</p>
                                    <p className="text-sm font-bold">Aarav, 24</p>
                                </div>
                                <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">
                                    →
                                </div>
                             </div>
                        </div>

                        {/* Bottom Info */}
                        <div className="flex justify-between items-center px-2 pb-1">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                            </div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Booked 12 times</p>
                        </div>
                    </div>
                </div>

                {/* Background Cards (giving depth) */}
                <div className="absolute z-10 right-10 top-20 w-64 h-80 bg-white rounded-[2rem] shadow-xl border border-gray-100 transform rotate-6 opacity-60 scale-90 blur-[1px] -translate-x-12 translate-y-12"></div>
                <div className="absolute z-0 left-10 bottom-20 w-64 h-80 bg-black rounded-[2rem] shadow-xl transform -rotate-12 opacity-5 scale-90 translate-x-12 -translate-y-12"></div>

            </div>

        </div>
    </div>
  )
}

export default Hero
