"use client";
import React from 'react';
import Link from 'next/link';
import { Step1Illustration, Step2Illustration, Step3Illustration } from '../components/illustrations/ProcessIllustrations';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
         {/* Decor */}
         <div className="absolute top-20 left-10 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
         <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>

         <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                The Process
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 max-w-3xl mx-auto">
                No Awkwardness. <br/><span className="text-green-600">Just Vibes.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-500 max-w-2xl mx-auto leading-relaxed">
                prsnn. is designed to be the easiest way to finding a platonic companion for any activity. Here is how we keep it simple and safe.
            </p>
         </div>
      </section>

      {/* DETAILED STEPS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
            
            {/* STEP 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 group">
                 <div className="w-full md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] transform translate-x-4 translate-y-4 opacity-5"></div>
                    <div className="relative bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-[2.5rem] p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full p-4 hover:scale-105 transition-transform duration-500">
                            <Step1Illustration />
                        </div>
                        <div className="absolute top-6 left-6 w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center font-bold text-xl rounded-2xl shadow-sm">1</div>
                    </div>
                 </div>
                 <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Join The Club</h2>
                    <p className="text-xl font-medium text-gray-500 leading-relaxed mb-8">
                        Create your profile in 2 minutes. Tell us what you like—hiking, coding, gaming, or just grabbing coffee. 
                        We verify every user to ensure safety, so you can focus on being yourself.
                    </p>
                    <ul className="space-y-4 font-medium text-gray-700">
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Fast & Free Sign Up</li>
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> ID Verification Required</li>
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Privacy Protected</li>
                    </ul>
                 </div>
            </div>

            {/* STEP 2 (Reversed) */}
             <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                 <div className="w-full md:w-1/2 relative">
                    <div className="absolute inset-0 bg-green-900 rounded-[2.5rem] transform -translate-x-4 translate-y-4 opacity-5"></div>
                    <div className="relative bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-[2.5rem] p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
                         <div className="w-full h-full p-4 hover:scale-105 transition-transform duration-500">
                            <Step2Illustration />
                        </div>
                         <div className="absolute top-6 right-6 w-12 h-12 bg-yellow-50 text-yellow-600 flex items-center justify-center font-bold text-xl rounded-2xl shadow-sm">2</div>
                    </div>
                 </div>
                 <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Scout Your Companion</h2>
                    <p className="text-xl font-medium text-gray-500 leading-relaxed mb-8">
                        Browse through hundreds of verified Companions. Filter by location, interest, or price. 
                        Read reviews, check their vibe, and find someone who matches your energy.
                    </p>
                    <ul className="space-y-4 font-medium text-gray-700">
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Advanced Filters</li>
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Real Reviews</li>
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Pre-chat available</li>
                    </ul>
                 </div>
            </div>

            {/* STEP 3 */}
             <div className="flex flex-col md:flex-row items-center gap-12 group">
                 <div className="w-full md:w-1/2 relative">
                    <div className="absolute inset-0 bg-yellow-400 rounded-[2.5rem] transform translate-x-4 translate-y-4 opacity-5"></div>
                    <div className="relative bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-[2.5rem] p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full p-4 hover:scale-105 transition-transform duration-500">
                            <Step3Illustration />
                        </div>
                        <div className="absolute top-6 left-6 w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl rounded-2xl shadow-sm">3</div>
                    </div>
                 </div>
                 <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Vibe Check & Meet</h2>
                    <p className="text-xl font-medium text-gray-500 leading-relaxed mb-8">
                        Book a session securely through our platform. Set the time and place. 
                        Meet up and have a great time. After the session, leave a review to help the community.
                    </p>
                    <ul className="space-y-4 font-medium text-gray-700">
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Secure Payment Hold</li>
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Public Meetups Only</li>
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Satisfaction Guaranteed</li>
                    </ul>
                 </div>
            </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-gray-900 text-white relative overflow-hidden">
         {/* Background glow */}
         <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500 rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none'></div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl font-bold mb-8 tracking-tight">Ready to find your crowd?</h2>
            <p className="text-xl font-medium mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Join thousands of people who are making new friends, learning new skills, and exploring the city together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/login" className="px-10 py-5 bg-white text-gray-900 text-lg font-bold rounded-2xl hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
                    Be Present
                </Link>
                <Link href="/companions" className="px-10 py-5 bg-transparent text-white text-lg font-bold rounded-2xl border border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all">
                    Browse Companions
                </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default HowItWorksPage;
