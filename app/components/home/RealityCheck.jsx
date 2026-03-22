'use client';
import React from 'react';

const RealityCheck = () => {
    // Interactive-looking cards
    const notList = [
        { icon: "🚫", title: "Not dating.", desc: "Strictly platonic. No romance." },
        { icon: "🧠", title: "Not therapy.", desc: "We are companions, not shrink." },
        { icon: "🏃", title: "Not errands.", desc: "We sit with you, we don't work for you." },
        { icon: "🤐", title: "Not gossip.", desc: "Discretion is our core value." }
    ];

  return (
    <section className="py-20 bg-white relative rounded-t-[3rem] -mt-6 z-20 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] border-t-2 border-red-500 border-dotted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* Left Col */}
            <div className="w-full md:w-1/3">
                <span className="px-4 py-2 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 inline-block">Boundaries</span>
                <h2 className="text-5xl font-bold text-gray-900 tracking-tighter mb-6 leading-[1.1]">
                    What this <br/><span className="text-red-500">is not.</span>
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">
                    We set expectations upfront so you can relax. Our companions are here to be present, nothing more.
                </p>

                <div className="mt-12 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why this matters</h3>
                    <p className="text-gray-500 font-medium">Clear boundaries create safe spaces. When you know what not to expect, you can enjoy what is there.</p>
                </div>
            </div>

            {/* Right Col (Cards) */}
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {notList.map((item, i) => (
                    <div key={i} className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:bg-red-50 group-hover:scale-110 transition-all duration-300">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-500 font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-24 p-12 bg-gray-900 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">&ldquo;Sometimes, the bravest thing you can do is ask for company.&rdquo;</h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">— A Grateful Member</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default RealityCheck;
