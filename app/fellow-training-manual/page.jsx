'use client';
import React from 'react';

/**
 * Fellow Training Manual Page
 */
export default function FellowTrainingManual() {
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
                <span className="font-black text-sm tracking-widest text-black uppercase">Manual</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
                RAF &ndash; FELLOW TRAINING <span style={{color: 'var(--color-olive)'}}>MANUAL</span>
            </h1>
            <p className="text-xl font-bold" style={{color: 'var(--color-olive-dark)'}}>
                Code of Conduct &amp; Mandatory Operating Rules
            </p>
            <p className="text-sm mt-2 font-mono" style={{color: 'var(--color-olive)'}}>
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Introduction Card */}
        <div className="border p-6 md:p-8 rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-10" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                This document applies to all Fellows on RAF.<br/>
                Access to the platform is conditional upon full compliance.
            </p>
            <p className="font-medium leading-relaxed" style={{color: 'var(--color-primary-black)'}}>
                Failure to follow these rules may result in immediate suspension or permanent removal, without notice or appeal.
            </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8">
            
            {/* 1. ROLE DEFINITION */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>1</span>
                    ROLE DEFINITION (READ CAREFULLY)
                </h2>
                <p className="mb-4 font-bold" style={{color: 'var(--color-olive-dark)'}}>
                    As a Fellow, your role is presence only.
                </p>
                <div className="p-4 rounded-lg border-l-4" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
                    <p className="font-bold text-black mb-2 uppercase text-xs">You are not:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                        <li>a friend</li>
                        <li>a guide</li>
                        <li>a helper</li>
                        <li>a listener for emotional problems</li>
                        <li>a coach or advisor</li>
                        <li>a date</li>
                        <li>a service provider</li>
                    </ul>
                </div>
                <p className="mt-4 text-sm font-bold text-black">You are a verified person accompanying another person in public, under strict boundaries.</p>
                <p className="mt-2 text-sm font-bold text-black">Nothing more.</p>
            </section>

             <section className="rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-olive-dark)', color: 'white'}}>
                 <h2 className="text-2xl font-black mb-4 uppercase tracking-widest text-center">
                    2. THE FIVE NON-NEGOTIABLE RULES
                </h2>
                <p className="text-center text-sm mb-6 pb-6 border-b border-gray-600">
                    These rules exist to protect everyone. There are no exceptions.
                </p>

                <div className="space-y-8">
                    {/* Rule 1 */}
                    <div>
                        <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-yellow)'}}>RULE 1 &mdash; PRESENCE OVER PERSONALITY</h3>
                        <p className="mb-3 text-sm">Your job is to be there, not to perform.</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-bold mb-1">You must NOT:</p>
                                <ul className="space-y-1">
                                    <li><span className="font-bold">✕</span> initiate conversation</li>
                                    <li><span className="font-bold">✕</span> ask personal or probing questions</li>
                                    <li><span className="font-bold">✕</span> attempt to entertain</li>
                                    <li><span className="font-bold">✕</span> attempt to impress</li>
                                    <li><span className="font-bold">✕</span> &ldquo;carry the interaction&rdquo;</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-1">You MAY:</p>
                                <ul className="space-y-1">
                                    <li><span className="font-bold" style={{color: 'var(--color-yellow)'}}>✓</span> respond briefly if spoken to</li>
                                    <li><span className="font-bold" style={{color: 'var(--color-yellow)'}}>✓</span> acknowledge presence calmly</li>
                                    <li><span className="font-bold" style={{color: 'var(--color-yellow)'}}>✓</span> remain quiet without apology</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 text-xs font-bold pt-2 border-t border-gray-700">Silence is not awkward on RAF. Silence is correct behavior.</p>
                    </div>

                    {/* Rule 2 */}
                    <div>
                        <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-yellow)'}}>RULE 2 &mdash; NO FIXING, NO ADVICE, NO GUIDANCE</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                            <div>
                                <p className="font-bold mb-1">You must NOT:</p>
                                <ul className="space-y-1">
                                    <li><span className="font-bold">✕</span> give opinions</li>
                                    <li><span className="font-bold">✕</span> offer solutions</li>
                                    <li><span className="font-bold">✕</span> give advice</li>
                                    <li><span className="font-bold">✕</span> reframe emotions</li>
                                    <li><span className="font-bold">✕</span> validate feelings (&ldquo;that makes sense&rdquo;, &ldquo;you&apos;ll be okay&rdquo;)</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-1">You must NOT:</p>
                                <ul className="space-y-1">
                                    <li><span className="font-bold">✕</span> discuss mental health</li>
                                    <li><span className="font-bold">✕</span> discuss anxiety, depression, trauma</li>
                                    <li><span className="font-bold">✕</span> position yourself as supportive or understanding</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 text-xs font-bold pt-2 border-t border-gray-700">RAF does not allow emotional intervention of any kind.</p>
                    </div>

                    {/* Rule 3 */}
                    <div>
                        <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-yellow)'}}>RULE 3 &mdash; STRICTLY PUBLIC & STRICTLY NON-PHYSICAL</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                            <div>
                                <p className="font-bold mb-1">You must:</p>
                                <ul className="space-y-1">
                                    <li><span className="font-bold" style={{color: 'var(--color-yellow)'}}>✓</span> remain in public places at all times</li>
                                    <li><span className="font-bold" style={{color: 'var(--color-yellow)'}}>✓</span> maintain respectful physical distance</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-1">You must NOT:</p>
                                <ul className="space-y-1">
                                    <li><span className="font-bold">✕</span> touch, hug, or gesture physically</li>
                                    <li><span className="font-bold">✕</span> sit too close</li>
                                    <li><span className="font-bold">✕</span> initiate any physical contact</li>
                                    <li><span className="font-bold">✕</span> accept or request private locations</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 text-xs font-bold pt-2 border-t border-gray-700">Any physical contact is grounds for immediate removal.</p>
                    </div>

                    {/* Rule 4 */}
                    <div>
                        <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-yellow)'}}>RULE 4 &mdash; NO ROLE EXPANSION</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                            <div>
                                <p className="font-bold mb-1">You must NOT:</p>
                                <ul className="space-y-1">
                                    <li><span className="font-bold">✕</span> run errands</li>
                                    <li><span className="font-bold">✕</span> carry items</li>
                                    <li><span className="font-bold">✕</span> handle money</li>
                                    <li><span className="font-bold">✕</span> speak on behalf of the user</li>
                                    <li><span className="font-bold">✕</span> assist with tasks</li>
                                    <li><span className="font-bold">✕</span> provide services of any kind</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-1">You must NOT:</p>
                                <ul className="space-y-1">
                                    <li><span className="font-bold">✕</span> shift the interaction outside the booked purpose</li>
                                    <li><span className="font-bold">✕</span> suggest future meetings</li>
                                    <li><span className="font-bold">✕</span> exchange personal contact details</li>
                                    <li><span className="font-bold">✕</span> accept gifts or favors</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 text-xs font-bold pt-2 border-t border-gray-700">Your role never expands beyond presence.</p>
                    </div>

                    {/* Rule 5 */}
                    <div>
                        <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-yellow)'}}>RULE 5 &mdash; END CLEANLY, WITHOUT EXPLANATION</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                            <div>
                                <p className="font-bold mb-1">You may end a session at any time if:</p>
                                <ul className="space-y-1">
                                    <li>&bull; boundaries feel unclear</li>
                                    <li>&bull; behavior feels uncomfortable</li>
                                    <li>&bull; expectations shift</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-1">When ending:</p>
                                <ul className="space-y-1">
                                    <li>&bull; do not explain</li>
                                    <li>&bull; do not apologize excessively</li>
                                    <li>&bull; do not negotiate</li>
                                    <li>&bull; report the reason in-app</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 text-xs font-bold pt-2 border-t border-gray-700">Ending a session early is allowed and protected behavior.</p>
                    </div>
                </div>
            </section>

             <div className="grid md:grid-cols-2 gap-6">
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3">3. PROFESSIONAL CONDUCT STANDARD</h2>
                    <p className="text-sm font-bold mb-2" style={{color: 'var(--color-olive-dark)'}}>As a Fellow, you are expected to maintain:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>calm demeanor</li>
                        <li>neutral tone</li>
                        <li>non-judgmental presence</li>
                        <li>predictable behavior</li>
                    </ul>
                    <p className="text-sm font-bold mb-2" style={{color: 'var(--color-olive-dark)'}}>You must NOT:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>flirt</li>
                        <li>joke suggestively</li>
                        <li>overshare personal life</li>
                        <li>create emotional dependency</li>
                    </ul>
                    <p className="text-xs font-bold" style={{color: 'var(--color-olive)'}}>Familiarity is not the goal. Stability is.</p>
                </section>

                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3">4. TAG USE &amp; REPRESENTATION</h2>
                    <p className="text-sm font-bold mb-2" style={{color: 'var(--color-olive-dark)'}}>Tags on your profile represent comfort zones, not promises.</p>
                    <p className="text-sm font-bold mb-2 mt-4" style={{color: 'var(--color-olive-dark)'}}>You must NOT:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>present tags as expertise</li>
                        <li>claim authority in any topic</li>
                        <li>offer discussion unless invited</li>
                    </ul>
                    <p className="text-xs font-bold mt-auto" style={{color: 'var(--color-olive)'}}>Misrepresenting yourself through tags is a violation.</p>
                </section>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                <section className="rounded-xl p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-yellow-light)', border: '2px solid var(--color-olive-dark)'}}>
                    <h2 className="text-xl font-black text-black mb-3">5. SAFETY &amp; REPORTING OBLIGATIONS</h2>
                    <p className="text-sm font-bold mb-2">If at any point:</p>
                    <ul className="list-disc pl-5 space-y-1 text-black text-sm mb-4">
                        <li>a boundary is crossed</li>
                        <li>behavior becomes unsafe</li>
                        <li>expectations escalate</li>
                    </ul>
                    <p className="text-sm font-bold mb-2">You must:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-black font-bold text-sm mb-4">
                        <li>End the session immediately</li>
                        <li>Leave the area if needed</li>
                        <li>Report the issue through the RAF app</li>
                    </ol>
                    <p className="text-xs" style={{color: 'var(--color-olive-dark)'}}>Failure to report serious incidents may itself be a violation.</p>
                </section>

                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                     <h2 className="text-xl font-black text-black mb-3">6. ENFORCEMENT &amp; DISCIPLINE</h2>
                     <p className="text-sm font-bold mb-2" style={{color: 'var(--color-olive-dark)'}}>RAF reserves the right to:</p>
                     <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>suspend accounts</li>
                        <li>permanently remove Fellows</li>
                        <li>withhold payouts for violations</li>
                        <li>deny re-entry to the platform</li>
                     </ul>

                     <p className="text-sm font-bold mb-2" style={{color: 'var(--color-olive-dark)'}}>Enforcement decisions are:</p>
                     <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>final</li>
                        <li>discretionary</li>
                        <li>made to protect platform safety</li>
                     </ul>
                      <p className="mt-3 text-xs text-black font-bold">No explanation or appeal is guaranteed.</p>
                </section>
             </div>

             <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-black text-lg mb-2">7. LEGAL ACKNOWLEDGMENT</h3>
                        <p className="text-sm mb-2" style={{color: 'var(--color-olive)'}}>By continuing as a Fellow, you acknowledge that:</p>
                        <ul className="space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                            <li>&bull; You are not an employee, therapist, guide, or service provider</li>
                            <li>&bull; You are responsible for following all platform rules</li>
                            <li>&bull; You agree to operate strictly within defined boundaries</li>
                            <li>&bull; Violations may carry legal and financial consequences</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-black text-lg mb-2">8. ACCEPTANCE</h3>
                        <p className="text-sm mb-2" style={{color: 'var(--color-olive)'}}>By proceeding, you confirm that:</p>
                        <ul className="space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                            <li>&bull; You have read this manual in full</li>
                            <li>&bull; You understand all rules</li>
                            <li>&bull; You agree to comply without exception</li>
                            <li>&bull; You accept RAF&apos;s authority to enforce these rules</li>
                        </ul>
                        <div className="mt-4 p-3 font-bold border border-black inline-block" style={{backgroundColor: 'var(--color-yellow-light)'}}>
                            ✔️ Required for Fellow activation
                        </div>
                    </div>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
