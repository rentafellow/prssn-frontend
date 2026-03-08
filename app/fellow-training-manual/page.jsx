'use client';
import React from 'react';

/**
 * Companion Training Manual Page
 * 
 * Displays the mandatory operating rules for Companions on prsnn.
 * Styled with the project's consistent Neo-Brutalism theme in BLACK and WHITE.
 */
export default function CompanionTrainingManual() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="w-full min-h-screen bg-yellow-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className=" mb-12 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 bg-yellow-100 border border-black transform -rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-black text-sm tracking-widest text-black uppercase">Companion Only</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
                TRAINING <span className="text-gray-500">MANUAL</span>
            </h1>
            <p className="text-xl text-gray-600 font-bold">
                Code of Conduct & Mandatory Operating Rules
            </p>
            <p className="text-sm text-gray-500 mt-2 font-mono">
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-yellow-100 border border-black p-6 md:p-8 rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-10">
            <p className="font-medium text-gray-800 leading-relaxed mb-4">
                This document applies to <span className="font-bold">all Companions on prsnn.</span><br/>
                Access to the platform is conditional upon full compliance.
            </p>
            <p className="font-medium text-gray-800 leading-relaxed mb-4">
                Failure to follow these rules may result in <span className="font-bold border-b-2 border-black">immediate suspension or permanent removal</span>, without notice or appeal.
            </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 gap-8">
            
            {/* 1. Role Definition */}
            <section className="bg-yellow-50 border border-gray-200 rounded-xl p-6 hover:border-black transition-colors duration-300">
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg">1</span>
                    ROLE DEFINITION (READ CAREFULLY)
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-900 font-bold mb-3 text-lg">As a Companion, your role is presence only.</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-black font-bold">›</span> You are a verified person accompanying another person in public, under strict boundaries.
                            </li>
                            <li className="flex items-center gap-2 mt-2 font-bold">
                                <span className="text-black">›</span> Nothing more.
                            </li>
                        </ul>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-xl border border-gray-200">
                         <p className="text-black font-bold mb-2 uppercase text-xs">You are NOT:</p>
                         <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                             <li>• a friend</li>
                             <li>• a guide</li>
                             <li>• a helper</li>
                             <li>• a listener</li>
                             <li>• a coach</li>
                             <li>• a date</li>
                             <li>• a service provider</li>
                         </ul>
                    </div>
                </div>
            </section>

            {/* 2. The Five Non-Negotiable Rules */}
            <section className="bg-black text-white rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(50,50,50,0.5)]">
                <h2 className="text-2xl font-black mb-2 uppercase tracking-widest text-center">
                    The Five Non-Negotiable Rules
                </h2>
                <p className="text-gray-400 text-center text-sm font-bold mb-8">These rules exist to protect everyone. There are no exceptions.</p>
                
                <div className="space-y-6">
                    {/* Rule 1 */}
                    <div className="bg-yellow-50 text-black p-5 rounded-lg border border-gray-400">
                        <h3 className="font-black text-lg mb-2 uppercase">Rule 1 — Presence Over Personality</h3>
                        <p className="text-sm font-bold mb-2">Your job is to be there, not to perform.</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-bold text-gray-500 text-xs uppercase mb-1">You must NOT:</p>
                                <ul className="list-disc pl-4 space-y-0.5">
                                    <li>initiate conversation</li>
                                    <li>ask personal or probing questions</li>
                                    <li>attempt to entertain or impress</li>
                                    <li>“carry the interaction”</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-gray-500 text-xs uppercase mb-1">You MAY:</p>
                                <ul className="list-disc pl-4 space-y-0.5">
                                    <li>respond briefly if spoken to</li>
                                    <li>acknowledge presence calmly</li>
                                    <li>remain quiet without apology</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 text-xs font-bold border-t border-gray-200 pt-2">Silence is not awkward on prsnn. Silence is correct behavior.</p>
                    </div>

                    {/* Rule 2 */}
                    <div className="bg-yellow-50 text-black p-5 rounded-lg border border-gray-400">
                        <h3 className="font-black text-lg mb-2 uppercase">Rule 2 — No Fixing, No Advice, No Guidance</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-bold text-gray-500 text-xs uppercase mb-1">You must NOT give:</p>
                                <ul className="list-disc pl-4 space-y-0.5">
                                    <li>opinions</li>
                                    <li>solutions</li>
                                    <li>advice</li>
                                    <li>validation (“that makes sense”)</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-gray-500 text-xs uppercase mb-1">You must NOT discuss:</p>
                                <ul className="list-disc pl-4 space-y-0.5">
                                    <li>mental health</li>
                                    <li>anxiety, depression, trauma</li>
                                    <li>supportive or understanding stances</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 text-xs font-bold border-t border-gray-200 pt-2">prsnn. does not allow emotional intervention of any kind.</p>
                    </div>

                    {/* Rule 3 */}
                    <div className="bg-yellow-50 text-black p-5 rounded-lg border border-gray-400">
                        <h3 className="font-black text-lg mb-2 uppercase">Rule 3 — Strictly Public & Strictly Non-Physical</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                             <div>
                                <p className="font-bold text-gray-500 text-xs uppercase mb-1">You MUST:</p>
                                <ul className="list-disc pl-4 space-y-0.5">
                                    <li>remain in public places at all times</li>
                                    <li>maintain respectful physical distance</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-gray-500 text-xs uppercase mb-1">You must NOT:</p>
                                <ul className="list-disc pl-4 space-y-0.5">
                                    <li>touch, hug, or gesture physically</li>
                                    <li>sit too close</li>
                                    <li>accept or request private locations</li>
                                </ul>
                            </div>
                        </div>
                         <p className="mt-3 text-xs font-bold border-t border-gray-200 pt-2">Any physical contact is grounds for immediate removal.</p>
                    </div>

                     {/* Rule 4 */}
                     <div className="bg-yellow-50 text-black p-5 rounded-lg border border-gray-400">
                        <h3 className="font-black text-lg mb-2 uppercase">Rule 4 — No Role Expansion</h3>
                        <div className="text-sm">
                             <p className="font-bold text-gray-500 text-xs uppercase mb-1">You must NOT:</p>
                             <div className="grid grid-cols-2 gap-2">
                                <ul className="list-disc pl-4 space-y-0.5">
                                    <li>run errands or carry items</li>
                                    <li>handle money</li>
                                    <li>speak on behalf of the user</li>
                                    <li>assist with tasks</li>
                                </ul>
                                <ul className="list-disc pl-4 space-y-0.5">
                                    <li>suggest future meetings</li>
                                    <li>exchange personal contact details</li>
                                    <li>accept gifts or favors</li>
                                </ul>
                             </div>
                        </div>
                         <p className="mt-3 text-xs font-bold border-t border-gray-200 pt-2">Your role never expands beyond presence.</p>
                    </div>

                    {/* Rule 5 */}
                    <div className="bg-yellow-50 text-black p-5 rounded-lg border border-gray-400">
                        <h3 className="font-black text-lg mb-2 uppercase">Rule 5 — End Cleanly, Without Explanation</h3>
                        <p className="text-sm mb-2 text-gray-700">You may end a session at any time if boundaries feel unclear or unsafe.</p>
                        <div className="text-sm">
                             <p className="font-bold text-gray-500 text-xs uppercase mb-1">When ending:</p>
                             <ul className="list-disc pl-4 space-y-0.5">
                                <li>do not explain</li>
                                <li>do not apologize excessively</li>
                                <li>do not negotiate</li>
                                <li>report the reason in-app</li>
                             </ul>
                        </div>
                         <p className="mt-3 text-xs font-bold border-t border-gray-200 pt-2">Ending a session early is allowed and protected behavior.</p>
                    </div>

                </div>
            </section>

             {/* 3. Professional Conduct */}
             <section className="bg-yellow-50 border border-gray-200 rounded-xl p-6 hover:border-black transition-colors duration-300">
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg">3</span>
                    PROFESSIONAL CONDUCT STANDARD
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <p className="font-bold text-gray-900 mb-2 text-sm uppercase">Expectations:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-black font-bold">✓</span> Calm demeanor
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-black font-bold">✓</span> Neutral tone
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-black font-bold">✓</span> Non-judgmental presence
                            </li>
                             <li className="flex items-center gap-2">
                                <span className="text-black font-bold">✓</span> Predictable behavior
                            </li>
                        </ul>
                    </div>
                    <div>
                         <p className="font-bold text-gray-900 mb-2 text-sm uppercase">Prohibited:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-black font-bold">✕</span> Flirting or suggestive jokes
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-black font-bold">✕</span> Oversharing personal life
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-black font-bold">✕</span> Creating emotional dependency
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="mt-4 text-center text-gray-600 font-bold border-t border-gray-100 pt-3">
                    Familiarity is not the goal. Stability is.
                </p>
            </section>

            {/* 4, 5, 6 Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                 {/* 4. Tag Use */}
                 <section className="bg-yellow-50 border border-gray-200 rounded-xl p-5 hover:border-black transition-colors duration-300">
                    <h2 className="text-lg font-black text-black mb-3">4. TAG USE</h2>
                    <p className="text-xs font-gray-600 mb-2 font-medium">Tags are comfort zones, not promises.</p>
                     <ul className="list-disc pl-4 space-y-1 text-gray-600 text-xs">
                        <li>Do NOT present tags as expertise</li>
                        <li>Do NOT claim authority</li>
                        <li>Do NOT offer discussion unless invited</li>
                    </ul>
                 </section>

                 {/* 5. Safety */}
                 <section className="bg-yellow-50 border border-gray-200 rounded-xl p-5 hover:border-black transition-colors duration-300">
                    <h2 className="text-lg font-black text-black mb-3">5. SAFETY</h2>
                    <p className="text-xs font-gray-600 mb-2 font-medium">If a boundary is crossed or behavior escalates:</p>
                     <ol className="list-decimal pl-4 space-y-1 text-gray-800 text-xs font-bold">
                        <li>End session immediately</li>
                        <li>Leave area if needed</li>
                        <li>Report incident in-app</li>
                    </ol>
                 </section>

                 {/* 6. Enforcement */}
                 <section className="bg-yellow-50 border border-gray-200 rounded-xl p-5 hover:border-black transition-colors duration-300">
                    <h2 className="text-lg font-black text-black mb-3">6. ENFORCEMENT</h2>
                    <p className="text-xs font-gray-600 mb-2 font-medium">prsnn. reserves the right to suspend or remove Companions.</p>
                     <ul className="list-disc pl-4 space-y-1 text-gray-600 text-xs">
                        <li>Decisions are final</li>
                        <li>Decisions are discretionary</li>
                        <li>No appeal guaranteed</li>
                    </ul>
                 </section>
            </div>

             {/* 7. Legal & 8. Acceptance */}
             <section className="bg-yellow-100 border border-black rounded-xl p-8 hover:bg-yellow-100 transition-colors duration-300">
                 <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 className="font-black text-xl mb-4 text-black">7. LEGAL ACKNOWLEDGMENT</h3>
                        <p className="text-sm text-gray-800 leading-relaxed mb-4">
                            By continuing, you acknowledge that you are not an employee, therapist, or service provider. You are responsible for following all platform rules and operating boundaries.
                        </p>
                        <p className="text-xs font-bold text-gray-500">Violations may carry legal consequences.</p>
                     </div>
                     <div className="border-l border-gray-300 pl-6 md:pl-8">
                        <h3 className="font-black text-xl mb-4 text-black">8. ACCEPTANCE</h3>
                        <p className="text-sm text-gray-800 leading-relaxed mb-4">
                            By proceeding, you confirm that:
                        </p>
                        <ul className="space-y-2 text-sm text-black font-bold">
                             <li className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px]">✓</span> You have read this manual in full
                            </li>
                             <li className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px]">✓</span> You understand all rules
                            </li>
                             <li className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px]">✓</span> You agree to comply without exception
                            </li>
                        </ul>
                     </div>
                 </div>
                 <div className="mt-8 text-center">
                    <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest rounded-lg hover:bg-gray-800 transition-all">
                        I Acknowledge & Agree
                    </button>
                 </div>
             </section>

        </div>
      </div>
    </div>
  );
}
