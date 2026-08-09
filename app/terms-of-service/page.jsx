'use client';
import React from 'react';

/**
 * Terms of Service Page
 * 
 * Displays the Terms of Service for prsnn.
 * Styled with the project's consistent Neo-Brutalism theme in BLACK and WHITE.
 */
export default function TermsOfService() {
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
                <span className="font-black text-sm tracking-widest text-black uppercase">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
                TERMS OF <span style={{color: 'var(--color-olive)'}}>SERVICE</span>
            </h1>
            <p className="text-xl font-bold" style={{color: 'var(--color-olive-dark)'}}>
                Conditions for Using the prsnn. Platform
            </p>
            <p className="text-sm mt-2 font-mono" style={{color: 'var(--color-olive)'}}>
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Introduction Card */}
        <div className="border p-6 md:p-8 rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-10" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                These Terms of Service (“Terms”) govern your access to and use of prsnn. (“Platform”, “Service”, “we”, “us”, “our”).
            </p>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                By creating an account or using prsnn., you agree to be bound by these Terms.<br/>
                If you do not agree, do not use the Platform.
            </p>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 gap-8">
            
            {/* 1. What prsnn. Is (And Is Not) */}
            {/* 1. What prsnn. Is (And Is Not) */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>1</span>
                    WHAT prsnn. IS (AND IS NOT)
                </h2>
                <p className="mb-4 font-medium" style={{color: 'var(--color-olive-dark)'}}>
                    prsnn. is a platform that facilitates public, time-bound human companionship (“Sessions”) between users (“Users”) and verified individuals (“Fellows”).
                </p>
                <div className="p-4 rounded-lg border-l-4" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
                    <p className="font-bold text-black mb-2 uppercase text-xs">prsnn. is NOT:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                        <li>a dating or romantic platform</li>
                        <li>a therapy, counseling, or mental-health service</li>
                        <li>a coaching, mentoring, or advisory service</li>
                        <li>a task, errand, or labor marketplace</li>
                        <li>a medical or emergency service</li>
                    </ul>
                </div>
                <p className="mt-4 text-sm font-bold text-black">prsnn. provides presence only, not outcomes, advice, or support.</p>
            </section>

             {/* 2 & 3. Eligibility & Responsibilities */}
             {/* 2 & 3. Eligibility & Responsibilities */}
             <div className="grid md:grid-cols-2 gap-6">
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3 flex items-center gap-2">
                        <span className="text-white w-6 h-6 flex items-center justify-center rounded text-sm" style={{backgroundColor: 'var(--color-olive-dark)'}}>2</span>
                        ELIGIBILITY
                    </h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>be 18 years or older</li>
                        <li>provide accurate registration information</li>
                        <li>agree to all platform policies</li>
                    </ul>
                    <p className="text-xs font-bold" style={{color: 'var(--color-olive)'}}>prsnn. reserves the right to refuse access.</p>
                </section>

                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3 flex items-center gap-2">
                         <span className="text-white w-6 h-6 flex items-center justify-center rounded text-sm" style={{backgroundColor: 'var(--color-olive-dark)'}}>3</span>
                        ACCOUNT RESPONSIBILITIES
                    </h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>keep login credentials secure</li>
                        <li>use Platform only for intended purpose</li>
                        <li>comply with all policies</li>
                        <li>not impersonate others</li>
                    </ul>
                     <p className="text-xs font-bold" style={{color: 'var(--color-olive)'}}>You are responsible for all activity under your account.</p>
                </section>
             </div>

            {/* 4. Session Rules */}
            {/* 4. Session Rules */}
            <section className="rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-olive-dark)', color: 'white'}}>
                <h2 className="text-2xl font-black mb-4 uppercase tracking-widest text-center">
                    4. SESSION RULES (MANDATORY)
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                    <div>
                         <p className="font-bold mb-2 uppercase text-xs" style={{color: 'var(--color-yellow)'}}>All Sessions must comply with:</p>
                         <ul className="space-y-2">
                            <li className="flex items-center gap-2"><span className="text-white font-bold">✓</span> Public-only locations</li>
                            <li className="flex items-center gap-2"><span className="text-white font-bold">✕</span> No physical contact</li>
                            <li className="flex items-center gap-2"><span className="text-white font-bold">✕</span> No dating, romance, or sexual behavior</li>
                             <li className="flex items-center gap-2"><span className="text-white font-bold">✕</span> No therapy or emotional support</li>
                        </ul>
                    </div>
                    <div>
                          <p className="font-bold mb-2 uppercase text-xs" style={{color: 'var(--color-yellow)'}}>Further Restrictions:</p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2"><span className="text-white font-bold">✕</span> No errands or money handling</li>
                            <li className="flex items-center gap-2"><span className="text-white font-bold">✕</span> No off-platform contact or payment</li>
                        </ul>
                         <p className="mt-4 text-xs font-bold pt-2" style={{borderTop: '1px solid var(--color-olive)', color: 'var(--color-yellow-light)'}}>
                            Either party may end a Session at any time, without explanation. Violation results in immediate removal.
                        </p>
                    </div>
                </div>
            </section>

             {/* 5, 6, 7. Role, Payments, Refunds */}
             {/* 5, 6, 7. Role, Payments, Refunds */}
             <div className="grid md:grid-cols-3 gap-6">
                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">5. ROLE CLARITY</h2>
                    <ul className="space-y-2 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>• Companions are independent individuals, not employees</li>
                        <li>• prsnn. facilitates introductions only</li>
                        <li>• No guarantee of compatibility</li>
                    </ul>
                 </section>

                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">6. PAYMENTS</h2>
                    <ul className="space-y-2 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>• Collected upfront through Platform</li>
                        <li>• Off-platform strictly prohibited</li>
                        <li>• Attempting bypass = termination</li>
                    </ul>
                 </section>

                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">7. REFUNDS</h2>
                    <ul className="space-y-2 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>• Governed by Refund Policy</li>
                        <li>• prsnn. may deny for completed sessions</li>
                        <li>• Withheld for rule violations</li>
                    </ul>
                 </section>
            </div>

            {/* 8 & 9. Safety & Conduct */}
             <div className="grid md:grid-cols-2 gap-6">
                <section className="rounded-xl p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-yellow-light)', border: '2px solid var(--color-olive-dark)'}}>
                    <h2 className="text-xl font-black text-black mb-3">8. SAFETY & REPORTING</h2>
                    <p className="text-sm font-bold mb-2">If you feel unsafe:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-black font-bold text-sm mb-4">
                        <li>End the Session immediately</li>
                        <li>Leave the area if necessary</li>
                        <li>Report the incident in the app</li>
                    </ol>
                    <p className="text-xs" style={{color: 'var(--color-olive-dark)'}}>prsnn. may review Session data and take action.</p>
                </section>

                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                     <h2 className="text-xl font-black text-black mb-3">9. PROHIBITED CONDUCT</h2>
                     <ul className="space-y-1 text-sm text-gray-700">
                        <li><span className="font-bold text-black">✕</span> Harass, threaten, or pressure others</li>
                        <li><span className="font-bold text-black">✕</span> Flirt or pursue romantic interaction</li>
                        <li><span className="font-bold text-black">✕</span> Seek therapy or advice</li>
                        <li><span className="font-bold text-black">✕</span> Solicit services or contact details</li>
                     </ul>
                      <p className="mt-3 text-xs text-black font-bold uppercase">Zero-tolerance policy.</p>
                </section>
             </div>

             {/* 10, 11, 12, 13, 14. Legal Boilerplate */}
             {/* 10, 11, 12, 13, 14. Legal Boilerplate */}
             <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-black text-sm uppercase mb-1">10. TERMINATION</h3>
                            <p className="text-xs" style={{color: 'var(--color-olive-dark)'}}>prsnn. may suspend or terminate accounts without notice. Enforcement decisions are final.</p>
                        </div>
                        <div>
                            <h3 className="font-black text-sm uppercase mb-1">11. DISCLAIMER</h3>
                            <p className="text-xs" style={{color: 'var(--color-olive-dark)'}}>Provided “as is”. No guarantees regarding interaction quality, behavior, or availability.</p>
                        </div>
                         <div>
                            <h3 className="font-black text-sm uppercase mb-1">12. LIMITATION OF LIABILITY</h3>
                            <p className="text-xs" style={{color: 'var(--color-olive-dark)'}}>prsnn. is not liable for personal injury, emotional distress, or indirect damages. Participation is voluntary.</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                         <div>
                            <h3 className="font-black text-sm uppercase mb-1">13. INDEMNIFICATION</h3>
                            <p className="text-xs" style={{color: 'var(--color-olive-dark)'}}>You agree to indemnify prsnn. from claims arising from your use or violations. Protects founders personally.</p>
                        </div>
                        <div>
                            <h3 className="font-black text-sm uppercase mb-1">14. INTELLECTUAL PROPERTY</h3>
                            <p className="text-xs" style={{color: 'var(--color-olive-dark)'}}>All branding and content belong to prsnn. Do not misuse platform assets.</p>
                        </div>
                         <div>
                            <h3 className="font-black text-sm uppercase mb-1">16. GOVERNING LAW</h3>
                            <p className="text-xs" style={{color: 'var(--color-olive-dark)'}}>Governed by laws of India. Disputes resolved in competent courts.</p>
                        </div>
                    </div>
                </div>
             </section>

             {/* 15 & 17 */}
             {/* 15 & 17 */}
            <section className="border rounded-xl p-6" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 className="font-black text-lg mb-2">15. CHANGES TO TERMS</h3>
                        <p className="text-sm" style={{color: 'var(--color-olive)'}}>Material changes will be communicated through the Platform. Continued use constitutes acceptance.</p>
                     </div>
                     <div>
                        <h3 className="font-black text-lg mb-2">17. CONTACT</h3>
                        <p className="text-sm" style={{color: 'var(--color-olive)'}}>For questions or concerns:</p>
                         <a href="mailto:admin@prsnn.com" className="text-sm font-bold text-black border-b border-black hover:bg-black hover:text-white transition-colors">
                            admin@prsnn.com
                        </a>
                     </div>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
