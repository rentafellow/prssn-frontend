'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose your vibe",
      description: "Do you need silence for work? A walking partner? Or just someone to sit in a cafe with? Pick your mode.",
      color: "bg-green-100",
      textColor: "text-green-800"
    },
    {
      number: "02",
      title: "Find a presence",
      description: "Browse verified companions. Check their 'Comfort Zones' (tags like Reading, Gaming, Silence). Book a slot.",
      color: "bg-yellow-100",
      textColor: "text-yellow-800"
    },
    {
      number: "03",
      title: "Just Be There",
      description: "Meet at the public spot. No forced conversation. Just shared space. Leave whenever you want.",
      color: "bg-blue-100",
      textColor: "text-blue-800"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
            <div className="max-w-2xl">
                <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-4 block">Simple Process</span>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-none">
                    How it <br/>Works.
                </h2>
            </div>
            <div className="flex gap-2">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm animate-bounce">👇</div>
            </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10 transform translate-y-1/2 rounded-full"></div>

            {steps.map((step, i) => (
                <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    
                    {/* Number Badge */}
                    <div className={`w-20 h-20 ${step.color} ${step.textColor} rounded-[1.5rem] flex items-center justify-center font-bold text-2xl mb-8 group-hover:scale-110 transition-transform`}>
                        {step.number}
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-black transition-colors relative z-10">
                        {step.title}
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors relative z-10">
                        {step.description}
                    </p>
                    
                    {/* Decorative Blob on Hover */}
                    <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${step.color} rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
