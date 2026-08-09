'use client';
import React from 'react';

/**
 * Code of Conduct Page
 * 
 * Displays the behavior standards and rules for the prsnn. community.
 * Styled with the project's consistent Neo-Brutalism theme (reduced borders/shadows).
 */
export default function CodeOfConduct() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8" style={{backgroundColor: 'var(--color-cream)'}}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className=" mb-12 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 border border-black transform -rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-yellow)'}}>
                <span className="font-black text-sm tracking-widest text-black uppercase">Community Guidelines</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
                prsnn. CODE OF <span style={{color: 'var(--color-olive)'}}>CONDUCT</span>
            </h1>
            <p className="text-xl font-bold" style={{color: 'var(--color-olive-dark)'}}>
                Behavior Standards for All Users & Companions
            </p>
            <p className="text-sm mt-2 font-mono" style={{color: 'var(--color-olive)'}}>
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Introduction Card */}
        <div className="border p-6 md:p-8 rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-10" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                This Code of Conduct applies to <span className="font-bold">all Users, Companions, and anyone accessing prsnn.</span>
            </p>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                By using prsnn., you agree to comply with this Code at all times.
                Failure to do so may result in <span className="font-bold border-b-2" style={{color: 'var(--color-primary-black)', borderColor: 'var(--color-primary-black)'}}>immediate suspension or permanent removal</span>, without notice.
            </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 gap-8">
            
            {/* 1. Core Principle */}
            {/* 1. Core Principle */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3" style={{color: 'var(--color-primary-black)'}}>
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>1</span>
                    CORE PRINCIPLE
                </h2>
                <p className="mb-4" style={{color: 'var(--color-olive-dark)'}}>
                    prsnn. exists to provide safe, public, pressure-free human presence.
                    All behavior on prsnn. must respect:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-medium" style={{color: 'var(--color-primary-black)'}}>
                    <li>Personal boundaries</li>
                    <li>Public safety</li>
                    <li>Role clarity</li>
                    <li>Mutual consent</li>
                </ul>
                <p className="mt-4 font-bold text-sm pl-3" style={{color: 'var(--color-primary-black)', borderLeft: '2px solid var(--color-olive-dark)'}}>
                    Anything that compromises these principles is not allowed.
                </p>
            </section>

            {/* 2. Respect & Boundaries */}
            {/* 2. Respect & Boundaries */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3" style={{color: 'var(--color-primary-black)'}}>
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>2</span>
                    RESPECT & BOUNDARIES
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold mb-2 uppercase text-sm w-fit" style={{color: 'var(--color-primary-black)', borderBottom: '1px solid var(--color-olive-dark)'}}>All participants must:</h3>
                        <ul className="space-y-2" style={{color: 'var(--color-olive-dark)'}}>
                            <li className="flex items-start gap-2">
                                <span className="font-bold" style={{color: 'var(--color-olive)'}}>✓</span> Respect personal space
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold" style={{color: 'var(--color-olive)'}}>✓</span> Respect silence
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold" style={{color: 'var(--color-olive)'}}>✓</span> Respect the right to disengage at any time
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 uppercase text-sm w-fit" style={{color: 'var(--color-primary-black)', borderBottom: '1px solid var(--color-olive-dark)'}}>You must NOT:</h3>
                        <ul className="space-y-2" style={{color: 'var(--color-olive-dark)'}}>
                            <li className="flex items-start gap-2">
                                <span className="font-bold" style={{color: 'var(--color-primary-black)'}}>✕</span> Pressure someone to talk
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold" style={{color: 'var(--color-primary-black)'}}>✕</span> Demand emotional engagement
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold" style={{color: 'var(--color-primary-black)'}}>✕</span> Push boundaries after refusal
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold" style={{color: 'var(--color-primary-black)'}}>✕</span> Guilt, shame, or manipulate
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 p-3 rounded-lg text-center font-bold" style={{backgroundColor: 'var(--color-yellow)', color: 'var(--color-primary-black)', borderLeft: '4px solid var(--color-olive-dark)'}}>
                    “No” requires no explanation.
                </div>
            </section>

             {/* 3. Prohibited Behavior */}
             {/* 3. Prohibited Behavior */}
             <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3" style={{color: 'var(--color-primary-black)'}}>
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>3</span>
                    PROHIBITED BEHAVIOR (ZERO TOLERANCE)
                </h2>
                <p className="font-bold mb-4" style={{color: 'var(--color-primary-black)'}}>The following are strictly prohibited:</p>
                <div className="grid sm:grid-cols-2 gap-3" style={{color: 'var(--color-olive-dark)'}}>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Dating, romantic, or sexual behavior
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Physical contact of any kind
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Therapy, counseling, or emotional intervention
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Harassment, intimidation, or coercion
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Flirting or suggestive language
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Requests for private locations
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Requests for errands, tasks, or money handling
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Off-platform contact or payments
                    </div>
                </div>
                <p className="mt-6 text-sm font-bold italic text-center pt-4" style={{color: 'var(--color-primary-black)', borderTop: '1px solid var(--color-olive)'}}>
                    Any single violation may result in permanent removal.
                </p>
            </section>

            {/* 4. Communication Standards */}
            {/* 4. Communication Standards */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3" style={{color: 'var(--color-primary-black)'}}>
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>4</span>
                    COMMUNICATION STANDARDS
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold mb-2" style={{color: 'var(--color-primary-black)'}}>Communication must be:</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 border rounded-full text-sm font-bold" style={{backgroundColor: 'var(--color-yellow)', color: 'var(--color-primary-black)', borderColor: 'var(--color-olive-dark)'}}>Calm</span>
                            <span className="px-3 py-1 border rounded-full text-sm font-bold" style={{backgroundColor: 'var(--color-yellow)', color: 'var(--color-primary-black)', borderColor: 'var(--color-olive-dark)'}}>Neutral</span>
                            <span className="px-3 py-1 border rounded-full text-sm font-bold" style={{backgroundColor: 'var(--color-yellow)', color: 'var(--color-primary-black)', borderColor: 'var(--color-olive-dark)'}}>Non-invasive</span>
                            <span className="px-3 py-1 border rounded-full text-sm font-bold" style={{backgroundColor: 'var(--color-yellow)', color: 'var(--color-primary-black)', borderColor: 'var(--color-olive-dark)'}}>Non-judgmental</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2" style={{color: 'var(--color-primary-black)'}}>You must NOT:</h3>
                        <ul className="space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                            <li>• Overshare personal details</li>
                            <li>• Interrogate or psychoanalyze</li>
                            <li>• Discuss sensitive personal topics unless clearly invited</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-4 text-center italic" style={{color: 'var(--color-olive)'}}>
                    Silence is always acceptable on prsnn.
                </p>
            </section>

             {/* 5. Safety Expectations */}
             {/* 5. Safety Expectations */}
             <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3" style={{color: 'var(--color-primary-black)'}}>
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>5</span>
                    SAFETY EXPECTATIONS
                </h2>
                <p className="font-bold mb-4" style={{color: 'var(--color-primary-black)'}}>If something feels unsafe or uncomfortable:</p>
                <ol className="list-decimal pl-5 space-y-2 font-medium mb-4" style={{color: 'var(--color-olive-dark)'}}>
                    <li>End the session immediately</li>
                    <li>Leave the area if needed</li>
                    <li>Report the incident in-app</li>
                </ol>
                <div className="p-3 rounded-lg border text-center font-bold text-sm" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-primary-black)', color: 'var(--color-primary-black)'}}>
                    prsnn. prioritizes safety over completion or refunds.
                </div>
            </section>

            {/* 6. Misuse & 7. Enforcement */}
            {/* 6. Misuse & 7. Enforcement */}
            <div className="grid md:grid-cols-2 gap-6">
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black mb-3 flex items-center gap-2" style={{color: 'var(--color-primary-black)'}}>
                        <span className="text-white w-6 h-6 flex items-center justify-center rounded text-sm" style={{backgroundColor: 'var(--color-olive-dark)'}}>6</span>
                        MISUSE OF THE PLATFORM
                    </h2>
                    <p className="text-sm mb-2 font-bold" style={{color: 'var(--color-olive-dark)'}}>Misuse includes:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>Repeated cancellations</li>
                        <li>False reporting</li>
                        <li>Gaming refunds</li>
                        <li>Using prsnn. for unintended purposes</li>
                    </ul>
                    <p className="text-xs font-bold uppercase pt-2 mt-2" style={{color: 'var(--color-primary-black)', borderTop: '1px solid var(--color-olive)'}}>
                        prsnn. may restrict or terminate accounts engaged in misuse.
                    </p>
                </section>

                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black mb-3 flex items-center gap-2" style={{color: 'var(--color-primary-black)'}}>
                        <span className="text-white w-6 h-6 flex items-center justify-center rounded text-sm" style={{backgroundColor: 'var(--color-olive-dark)'}}>7</span>
                        ENFORCEMENT AUTHORITY
                    </h2>
                    <p className="text-sm mb-2 font-bold" style={{color: 'var(--color-olive-dark)'}}>prsnn. reserves the right to:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>Investigate behavior</li>
                        <li>Review session data</li>
                        <li>Suspend or terminate accounts</li>
                        <li>Deny refunds or payouts</li>
                    </ul>
                    <p className="text-xs font-bold uppercase pt-2 mt-2" style={{color: 'var(--color-primary-black)', borderTop: '1px solid var(--color-olive)'}}>
                        All enforcement decisions are final.
                    </p>
                </section>
            </div>

             {/* 8. Acknowledgment */}
             {/* 8. Acknowledgment */}
             <section className="rounded-xl p-8 text-center" style={{backgroundColor: 'var(--color-olive-dark)', color: 'white', boxShadow: '4px 4px 0px 0px var(--color-primary-black)'}}>
                <h2 className="text-2xl font-black mb-4 uppercase tracking-widest">
                    Acknowledgment
                </h2>
                <p className="text-lg font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
                    By continuing to use prsnn., you acknowledge that <span className="border-b" style={{borderColor: 'var(--color-yellow)'}}>participation is voluntary</span>, <span className="border-b" style={{borderColor: 'var(--color-yellow)'}}>boundaries are mandatory</span>, and enforcement decisions protect the platform as a whole.
                </p>
                <div className="inline-block px-6 py-2 border rounded-full text-sm font-bold" style={{borderColor: 'var(--color-yellow)', color: 'var(--color-yellow)'}}>
                    Play Safe. Be Kind. Respect All.
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
