'use client';
import React from 'react';

/**
 * Dispute Resolution Policy Page
 * 
 * Displays the dispute resolution policy for the prsnn. community.
 * Styled with the project's consistent Neo-Brutalism theme but in black and white (monochrome).
 */
export default function DisputePolicy() {
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
                <span className="font-black text-sm tracking-widest text-black uppercase">Official Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
                prsnn. DISPUTE <span style={{color: 'var(--color-olive)'}}>RESOLUTION</span>
            </h1>
            <p className="text-xl font-bold" style={{color: 'var(--color-olive-dark)'}}>
                How Issues, Complaints & Conflicts Are Handled
            </p>
            <p className="text-sm mt-2 font-mono" style={{color: 'var(--color-olive)'}}>
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Introduction Card */}
        <div className="border p-6 md:p-8 rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-10" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                This Dispute Policy applies to <span className="font-bold">all sessions and interactions on prsnn.</span>
            </p>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                By using prsnn., you agree to follow the process outlined below.
            </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 gap-8">
            
            {/* 1. Purpose of This Policy */}
            {/* 1. Purpose of This Policy */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>1</span>
                    PURPOSE OF THIS POLICY
                </h2>
                <p className="mb-4" style={{color: 'var(--color-olive-dark)'}}>
                    prsnn. exists to provide public, pressure-free human presence.
                    This policy ensures that when something goes wrong, issues are handled:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-medium text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                    <li>fairly</li>
                    <li>consistently</li>
                    <li>without drama</li>
                    <li>without escalation</li>
                </ul>
                <p className="font-bold text-sm pl-3 py-2 pr-2 inline-block" style={{color: 'var(--color-primary-black)', borderLeft: '2px solid var(--color-olive-dark)', backgroundColor: 'var(--color-yellow-light)'}}>
                    prsnn. is not a mediation, therapy, or legal service.
                </p>
            </section>

            {/* 2. What Counts as a Dispute */}
            {/* 2. What Counts as a Dispute */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>2</span>
                    WHAT COUNTS AS A DISPUTE
                </h2>
                <p className="mb-2 font-bold" style={{color: 'var(--color-primary-black)'}}>A dispute may include:</p>
                <div className="grid sm:grid-cols-2 gap-2 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Boundary confusion or violation
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Uncomfortable behavior
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> No-shows
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Safety concerns
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Payment or refund disagreement
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-primary-black)'}}></span> Session ending early under unclear circumstances
                    </div>
                </div>
                <p className="text-sm italic pt-3" style={{color: 'var(--color-olive)', borderTop: '1px solid var(--color-olive)'}}>
                    Discomfort alone is not automatically a violation, but it is valid to report.
                </p>
            </section>

            {/* 3. Immediate Action */}
            {/* 3. Immediate Action */}
            <section className="rounded-xl p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-yellow-light)', border: '2px solid var(--color-olive-dark)'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>3</span>
                    IMMEDIATE ACTION (REQUIRED)
                </h2>
                <p className="font-bold mb-4 uppercase text-sm tracking-wider" style={{color: 'var(--color-primary-black)'}}>
                    If at any point a session feels unsafe or uncomfortable:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-black font-bold mb-6">
                    <li>End the session immediately</li>
                    <li>Leave the area if needed</li>
                    <li>Do not argue, explain, or negotiate</li>
                    <li>Report the issue in-app</li>
                </ol>
                <div className="bg-black text-white p-3 text-center font-bold text-sm tracking-wide">
                    ENDING A SESSION EARLY IS ALWAYS ALLOWED.
                </div>
            </section>

            {/* 4. How to File a Dispute & 5. Review Process */}
            <div className="grid md:grid-cols-2 gap-6">
            {/* 4. How to File a Dispute & 5. Review Process */}
            <div className="grid md:grid-cols-2 gap-6">
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3 flex items-center gap-2">
                        <span className="text-white w-6 h-6 flex items-center justify-center rounded text-sm" style={{backgroundColor: 'var(--color-olive-dark)'}}>4</span>
                        HOW TO FILE
                    </h2>
                    <p className="text-sm mb-2 font-bold" style={{color: 'var(--color-primary-black)'}}>Disputes must be submitted:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>through the prsnn. app</li>
                        <li>within a reasonable time</li>
                        <li>using the in-app reporting flow</li>
                    </ul>
                    <p className="text-xs font-medium" style={{color: 'var(--color-olive)'}}>
                        Reports submitted outside the platform may not be reviewed.
                    </p>
                </section>

                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3 flex items-center gap-2">
                        <span className="text-white w-6 h-6 flex items-center justify-center rounded text-sm" style={{backgroundColor: 'var(--color-olive-dark)'}}>5</span>
                        REVIEW PROCESS
                    </h2>
                    <p className="text-sm mb-2 font-bold" style={{color: 'var(--color-primary-black)'}}>Once submitted, prsnn. may review:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>session details (time, duration)</li>
                        <li>in-app messages</li>
                        <li>acceptance of agreements</li>
                        <li>prior reports or patterns</li>
                    </ul>
                    <p className="text-xs font-medium" style={{color: 'var(--color-olive)'}}>
                        prsnn. does not require proof beyond reasonable platform data.
                    </p>
                </section>
            </div>
            </div>

            {/* 6. Possible Outcomes */}
            {/* 6. Possible Outcomes */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>6</span>
                    POSSIBLE OUTCOMES
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <ul className="space-y-2 text-sm font-medium" style={{color: 'var(--color-olive-dark)'}}>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 border border-black rounded-full" style={{backgroundColor: 'var(--color-cream)'}}></span> No action (no violation found)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 border border-black rounded-full" style={{backgroundColor: 'var(--color-olive)'}}></span> Warning issued
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 border border-black rounded-full" style={{backgroundColor: 'var(--color-olive-dark)'}}></span> Partial or full refund
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2 text-black text-sm font-bold">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full"></span> Withholding Companion payout
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full"></span> Temporary suspension
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full"></span> Permanent removal
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="mt-4 text-sm text-center italic pt-3" style={{color: 'var(--color-olive)', borderTop: '1px solid var(--color-olive)'}}>
                    prsnn. may take preventative action even without confirmed misconduct.
                </p>
            </section>

             {/* 7. Final Authority & 8. Misuse */}
             {/* 7. Final Authority & 8. Misuse */}
             <div className="grid md:grid-cols-2 gap-6">
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3 flex items-center gap-2">
                        <span className="text-white w-6 h-6 flex items-center justify-center rounded text-sm" style={{backgroundColor: 'var(--color-olive-dark)'}}>7</span>
                        FINAL AUTHORITY
                    </h2>
                    <ul className="space-y-2 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold">›</span> Decisions are final
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold">›</span> No guaranteed appeal process
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold">›</span> No obligation to disclose reasoning
                        </li>
                    </ul>
                    <p className="text-xs text-black font-bold pt-2" style={{borderTop: '1px solid var(--color-olive)'}}>
                        This discretion exists to protect overall platform safety.
                    </p>
                </section>

                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3 flex items-center gap-2">
                        <span className="text-white w-6 h-6 flex items-center justify-center rounded text-sm" style={{backgroundColor: 'var(--color-olive-dark)'}}>8</span>
                        MISUSE OF SYSTEM
                    </h2>
                     <p className="text-black text-sm mb-2 font-bold">Abusive submissions result in:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>loss of refund eligibility</li>
                        <li>account suspension</li>
                        <li>permanent removal</li>
                    </ul>
                    <p className="text-xs text-black font-bold pt-2" style={{borderTop: '1px solid var(--color-olive)'}}>
                        prsnn. treats abuse of the dispute system as a serious violation.
                    </p>
                </section>
             </div>

             {/* 9, 10, 11, 12 Combined */}
             {/* 9, 10, 11, 12 Combined */}
             <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                 <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 className="font-black text-lg mb-2">9. LIMITATION OF LIABILITY</h3>
                        <p className="text-sm mb-4" style={{color: 'var(--color-olive)'}}>
                            prsnn. is not responsible for personal disagreements, subjective dissatisfaction, or outcomes outside defined rules. Participation is voluntary.
                        </p>
                        
                        <h3 className="font-black text-lg mb-2">10. NO EXTERNAL ESCALATION</h3>
                        <p className="text-sm" style={{color: 'var(--color-olive)'}}>
                            Users agree to use prsnn.’s dispute process first and avoid public accusations. Violations may result in termination.
                        </p>
                     </div>
                     <div>
                        <h3 className="font-black text-lg mb-2">11. POLICY CHANGES</h3>
                        <p className="text-sm mb-4" style={{color: 'var(--color-olive)'}}>
                            prsnn. may update this policy as needed. Material changes will be communicated app-wide.
                        </p>

                        <h3 className="font-black text-lg mb-2">12. CONTACT</h3>
                        <p className="text-sm" style={{color: 'var(--color-olive)'}}>
                            For dispute-related questions:<br/>
                            <span className="font-bold text-black border-b border-black">rentafellow00@gmail.com</span>
                        </p>
                     </div>
                 </div>
             </section>

        </div>
      </div>
    </div>
  );
}
