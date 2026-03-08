'use client'
import React from 'react'

export default function ContactPage() {
  return (
    <div className='w-full min-h-screen py-16 flex justify-center bg-yellow-50'>
      
      <div className='w-full max-w-6xl px-4 flex flex-col md:flex-row gap-12'>
        
        {/* === LEFT SIDE: Illustrations & Contact Info === */}
        <div className='w-full md:w-5/12 flex flex-col gap-8'>
            <div className='space-y-4'>
                <div className='inline-block px-4 py-1 bg-green-300 border-2 border-black transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                    <span className='font-black text-sm tracking-widest text-black uppercase'>Get in Touch</span>
                </div>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none tracking-tighter'>
                  LET'S <br/>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400' style={{ WebkitTextStroke: '2px black' }}>CHAT.</span>
                </h1>
                <p className='text-xl text-gray-800 font-medium border-l-4 border-black pl-5'>
                    Got a question? Want to partner up? Or just want to say hi? 
                </p>
            </div>

            {/* Illustration Card 1: Mail */}
            <div className='bg-yellow-50 border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 group hover:-translate-y-1 transition-transform'>
                 <div className='w-16 h-16 bg-yellow-50 border-2 border-black flex items-center justify-center rounded-full shrink-0 group-hover:bg-yellow-300 transition-colors'>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                 </div>
                 <div>
                     <h3 className='font-black text-lg uppercase'>Email Us</h3>
                     <p className='font-medium text-gray-600'>hello@prsnn.com</p>
                 </div>
            </div>

            {/* Illustration Card 2: Location */}
            <div className='bg-yellow-50 border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 group hover:-translate-y-1 transition-transform'>
                 <div className='w-16 h-16 bg-yellow-50 border-2 border-black flex items-center justify-center rounded-full shrink-0 group-hover:bg-blue-300 transition-colors'>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </div>
                 <div>
                     <h3 className='font-black text-lg uppercase'>HQ Location</h3>
                     <p className='font-medium text-gray-600'>Silicon Valley, CA</p>
                 </div>
            </div>
            
            {/* Fun decorative arrow */}
            <div className='hidden md:block absolute left-1/2 bottom-20 -translate-x-12 transform rotate-12 opacity-20 pointer-events-none'>
                 <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 40C40 40 40 10 70 10C100 10 100 70 130 70" stroke="black" strokeWidth="4" strokeDasharray="10 10"/>
                    <path d="M130 70L120 60M130 70L120 80" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                 </svg>
            </div>
        </div>

        {/* === RIGHT SIDE: Form === */}
        <div className='w-full md:w-7/12'>
            <div className='bg-yellow-50 border-2 border-black p-8 md:p-12 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden'>
                {/* Decorative blob corner */}
                <div className='absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full border-2 border-black z-0'></div>
                
                <form className='flex flex-col gap-6 relative z-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='font-black text-black uppercase text-sm'>First Name</label>
                            <input type="text" placeholder="John" className='px-4 py-3 bg-yellow-50 border-2 border-black rounded-xl focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 transition-all placeholder:text-gray-400 font-medium' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-black text-black uppercase text-sm'>Last Name</label>
                            <input type="text" placeholder="Doe" className='px-4 py-3 bg-yellow-50 border-2 border-black rounded-xl focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 transition-all placeholder:text-gray-400 font-medium' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-black text-black uppercase text-sm'>Email Address</label>
                        <input type="email" placeholder="john@example.com" className='px-4 py-3 bg-yellow-50 border-2 border-black rounded-xl focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 transition-all placeholder:text-gray-400 font-medium' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-black text-black uppercase text-sm'>Message</label>
                        <textarea rows="4" placeholder="Tell us what's on your mind..." className='px-4 py-3 bg-yellow-50 border-2 border-black rounded-xl focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 transition-all placeholder:text-gray-400 font-medium resize-none'></textarea>
                    </div>

                    <button className='mt-4 px-8 py-5 bg-black text-white font-black uppercase tracking-wider text-lg border-2 border-black rounded-xl hover:bg-gray-900 shadow-[6px_6px_0px_0px_rgba(100,100,100,0.5)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all'>
                        Send Message
                    </button>
                    
                    <p className='text-xs text-center text-gray-500 font-medium mt-4'>
                        We usually respond within 24 hours. No spam, we promise.
                    </p>
                </form>
            </div>
        </div>

      </div>

    </div>
  )
}
