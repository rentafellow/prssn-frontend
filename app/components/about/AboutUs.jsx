'use client'
import React from 'react'
import CommunityIllustration from '../illustrations/CommunityIllustration'

/**
 * AboutUs Component
 * 
 * "Why we exist".
 * Modern & Professional: Soft shadows, clean lines, white backgrounds.
 */
const AboutUs = () => {
  return (
    <div className="w-full bg-gray-50">
        {/* === HERO SECTION OF ABOUT PAGE === */}
        <section className='w-full py-24 px-6 md:px-16 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
            {/* Background elements */}
            <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse'></div>
            <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse' style={{animationDelay: '2s'}}></div>

            <div className='flex flex-col md:flex-row gap-16 items-center relative z-10'>
                
                {/* === LEFT SIDE: The Visual Story === */}
                <div className='w-full md:w-1/2 flex justify-center'>
                    <div className='relative w-full max-w-md aspect-square'>
                        
                        {/* The Backdrop Card */}
                        <div className='absolute inset-0 bg-gray-100 rounded-[3rem] transform rotate-6 scale-95 opacity-50'></div>
                        <div className='absolute inset-0 bg-green-50 rounded-[3rem] transform -rotate-3 scale-95 opacity-50'></div>
                        
                        {/* The Main Image Card */}
                        <div className='absolute inset-0 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center justify-center overflow-hidden p-8'>
                            <CommunityIllustration className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>

                {/* === RIGHT SIDE: The Manifesto === */}
                <div className='w-full md:w-1/2 flex flex-col gap-8'>
                    <div className='inline-block w-fit px-4 py-1 bg-green-100 text-green-800 text-xs font-bold tracking-widest rounded-full uppercase'>
                        Who we are
                    </div>

                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight'>
                        More than just <br/>
                        <span className='text-green-600'>a platform.</span>
                    </h2>

                    <p className='text-xl text-gray-500 font-medium leading-relaxed border-l-4 border-green-200 pl-6'>
                        prsnn. isn't just about finding someone—it's about finding 
                        <span className='font-bold text-gray-900 mx-1'>your people.</span> 
                        We bridge the gap between doing it alone and sharing the moment.
                    </p>

                    <div className='flex flex-col gap-8 mt-6'>
                        {/* Value Prop 1 */}
                        <div className='flex items-start gap-6 group'>
                            <div className='w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300'>
                                <span className='text-2xl'>🛡️</span>
                            </div>
                            <div>
                                <h3 className='font-bold text-gray-900 text-lg mb-1'>Safety First</h3>
                                <p className='text-gray-500 font-medium leading-relaxed'>Every companion is verified. IDs checked. Vibes vetted.</p>
                            </div>
                        </div>

                        {/* Value Prop 2 */}
                        <div className='flex items-start gap-6 group'>
                            <div className='w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300'>
                                <span className='text-2xl'>⚡</span>
                            </div>
                            <div>
                                <h3 className='font-bold text-gray-900 text-lg mb-1'>Instant Connection</h3>
                                <p className='text-gray-500 font-medium leading-relaxed'>Find a buddy for the gym, gaming, or coffee in minutes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        {/* === EXTRA CONTENT: OUR VALUES === */}
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 tracking-tight">
                    The code we live by
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "No Judgment", desc: "Come as you are. Weird is good. Normal is boring.", color: "bg-red-50 text-red-600" },
                        { title: "Always Safe", desc: "We take safety seriously so you can take fun seriously.", color: "bg-blue-50 text-blue-600" },
                        { title: "Real Humans", desc: "No bots. No scripts. Just actual people hanging out.", color: "bg-green-50 text-green-600" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-8 font-bold text-xl group-hover:scale-110 transition-transform`}>
                                {idx + 1}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs
