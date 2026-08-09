'use client';
import React from 'react';

/**
 * Privacy Policy Page
 * 
 * Displays the privacy policy and data handling practices for prsnn.
 * Styled with the project's consistent Neo-Brutalism theme in BLACK and WHITE.
 */
export default function PrivacyPolicy() {
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
                <span className="font-black text-sm tracking-widest text-black uppercase">Data Protection</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
                prsnn. PRIVACY <span style={{color: 'var(--color-olive)'}}>POLICY</span>
            </h1>
            <p className="text-xl font-bold" style={{color: 'var(--color-olive-dark)'}}>
                How We Handle Your Data
            </p>
            <p className="text-sm mt-2 font-mono" style={{color: 'var(--color-olive)'}}>
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Introduction Card */}
        <div className="border p-6 md:p-8 rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-10" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                prsnn. (“we”, “us”, “our”) is built to minimize data, not monetize it.
                This Privacy Policy explains what we collect, why we collect it, how it’s used, and how you stay in control.
            </p>
            <p className="font-medium leading-relaxed" style={{color: 'var(--color-primary-black)'}}>
                By using prsnn., you agree to this Privacy Policy.
            </p>
        </div>

        {/* Policy Content */}
        <div className="grid grid-cols-1 gap-8">
            
            {/* 1. Core Principle */}
            {/* 1. Core Principle */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>1</span>
                    OUR CORE PRIVACY PRINCIPLE
                </h2>
                <p className="mb-4 font-medium" style={{color: 'var(--color-olive-dark)'}}>
                    prsnn. collects the minimum data required to keep sessions safe, fair, and functional.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                     <div className="border p-3 rounded text-center" style={{borderColor: 'var(--color-olive)', backgroundColor: 'var(--color-yellow-light)'}}>
                        <span className="block font-bold text-black mb-1">We do not</span>
                        <span className="text-sm" style={{color: 'var(--color-olive-dark)'}}>sell personal data</span>
                     </div>
                     <div className="border p-3 rounded text-center" style={{borderColor: 'var(--color-olive)', backgroundColor: 'var(--color-yellow-light)'}}>
                        <span className="block font-bold text-black mb-1">We do not</span>
                        <span className="text-sm" style={{color: 'var(--color-olive-dark)'}}>trade attention</span>
                     </div>
                     <div className="border p-3 rounded text-center" style={{borderColor: 'var(--color-olive)', backgroundColor: 'var(--color-yellow-light)'}}>
                        <span className="block font-bold text-black mb-1">We do not</span>
                        <span className="text-sm" style={{color: 'var(--color-olive-dark)'}}>profile emotions</span>
                     </div>
                </div>
                <p className="font-bold text-black text-sm pl-3" style={{borderLeft: '2px solid var(--color-olive-dark)'}}>
                    Privacy is a safety feature, not a growth tactic.
                </p>
            </section>

            {/* 2. Information We Collect */}
            {/* 2. Information We Collect */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-6 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>2</span>
                    INFORMATION WE COLLECT
                </h2>
                
                <div className="space-y-6">
                    {/* A. Account Info */}
                    <div className="pb-4" style={{borderBottom: '1px solid var(--color-olive)'}}>
                        <h3 className="font-bold text-lg text-black mb-2">A. Account Information</h3>
                        <p className="text-xs mb-2 uppercase" style={{color: 'var(--color-olive-dark)'}}>Collected when you create an account:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm mb-2" style={{color: 'var(--color-olive-dark)'}}>
                            <li>Name or display name</li>
                            <li>Email address or phone number</li>
                            <li>Account preferences</li>
                        </ul>
                        <p className="text-xs font-bold" style={{color: 'var(--color-olive)'}}>Purpose: <span className="font-normal">account access and communication.</span></p>
                    </div>

                    {/* B. Companion Verification */}
                    <div className="pb-4" style={{borderBottom: '1px solid var(--color-olive)'}}>
                        <h3 className="font-bold text-lg text-black mb-2">B. Companion Verification Information (Companions Only)</h3>
                        <p className="text-xs mb-2 uppercase" style={{color: 'var(--color-olive-dark)'}}>Collected for safety and compliance:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm mb-2" style={{color: 'var(--color-olive-dark)'}}>
                            <li>Government-issued ID</li>
                            <li>Live photo/selfie</li>
                            <li>Basic verification details</li>
                        </ul>
                        <p className="text-xs font-bold mb-2" style={{color: 'var(--color-olive)'}}>Purpose: <span className="font-normal">Identity verification, Fraud prevention, Platform safety</span></p>
                        <p className="text-xs p-2 rounded inline-block" style={{backgroundColor: 'var(--color-yellow-light)', color: 'var(--color-primary-black)'}}>🔒 This data is encrypted, access-restricted, and never shared publicly.</p>
                    </div>

                    {/* C. Session & Usage */}
                    <div className="pb-4" style={{borderBottom: '1px solid var(--color-olive)'}}>
                        <h3 className="font-bold text-lg text-black mb-2">C. Session & Usage Information</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm mb-2" style={{color: 'var(--color-olive-dark)'}}>
                            <li>Session mode selected</li>
                            <li>Session duration</li>
                            <li>Session status (completed / ended early)</li>
                            <li>Acceptance of required agreements (timestamped)</li>
                        </ul>
                        <p className="text-xs font-bold" style={{color: 'var(--color-olive)'}}>Purpose: <span className="font-normal">Session management, Dispute resolution, Safety enforcement</span></p>
                    </div>

                    {/* D & E Combined */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-bold text-lg text-black mb-2">D. Location Information (Limited)</h3>
                            <ul className="list-disc pl-5 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                                <li>Collected only during an active session</li>
                                <li>Used to confirm public-place compliance</li>
                                <li>Automatically stops when session ends</li>
                            </ul>
                            <p className="text-xs mt-2 font-bold text-black pt-1" style={{borderTop: '1px solid var(--color-olive)'}}>prsnn. does not track your location outside sessions.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-black mb-2">E. In-App Communication</h3>
                            <p className="text-sm mb-1" style={{color: 'var(--color-olive-dark)'}}>Messages are used only for:</p>
                            <ul className="list-disc pl-5 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                                <li>safety review</li>
                                <li>dispute handling</li>
                                <li>rule enforcement</li>
                            </ul>
                            <p className="text-xs mt-2 font-bold text-black pt-1" style={{borderTop: '1px solid var(--color-olive)'}}>prsnn. does not analyze chats for ads.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Information We Do Not Collect */}
            {/* 3. Information We Do Not Collect */}
            <section className="rounded-xl p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-yellow-light)', border: '2px solid var(--color-olive-dark)'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>3</span>
                    INFORMATION WE DO NOT COLLECT
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 text-sm font-bold" style={{color: 'var(--color-olive-dark)'}}>
                    <div className="flex items-center gap-2">
                        <span className="text-black font-black">✕</span> Medical or mental health data
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-black font-black">✕</span> Emotional states or diagnoses
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-black font-black">✕</span> Private conversations outside the app
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-black font-black">✕</span> Contacts from your phone
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-black font-black">✕</span> Audio or video recordings
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-black font-black">✕</span> Background tracking data
                    </div>
                </div>
                <p className="mt-4 text-center text-xs uppercase tracking-widest font-bold pt-3" style={{color: 'var(--color-primary-black)', borderTop: '1px solid var(--color-olive)'}}>
                    prsnn. is not a therapy or emotional profiling platform.
                </p>
            </section>

            {/* 4 & 5. Usage and Sharing */}
            {/* 4 & 5. Usage and Sharing */}
            <div className="grid md:grid-cols-2 gap-6">
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3">4. HOW WE USE INFO</h2>
                    <p className="text-sm font-bold mb-2" style={{color: 'var(--color-primary-black)'}}>Used only to:</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>Operate the prsnn. platform</li>
                        <li>Verify Companions & Facilitate sessions</li>
                        <li>Enforce boundaries and rules</li>
                        <li>Respond to safety issues</li>
                    </ul>
                    <p className="text-sm font-bold mb-2 pt-2" style={{color: 'var(--color-primary-black)', borderTop: '1px solid var(--color-olive)'}}>We do NOT:</p>
                     <ul className="list-disc pl-4 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                        <li>run ads or sell insights</li>
                        <li>build marketing profiles</li>
                        <li>target you emotionally</li>
                    </ul>
                </section>

                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3">5. DATA SHARING</h2>
                    <p className="font-bold text-black text-sm mb-2">prsnn. does not sell personal data.</p>
                    <p className="text-sm mb-2" style={{color: 'var(--color-olive-dark)'}}>We may share limited info:</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>With service providers (strictly necessary)</li>
                        <li>When required by law</li>
                        <li>To protect user safety</li>
                    </ul>
                    <p className="text-xs p-2 rounded" style={{backgroundColor: 'var(--color-yellow-light)', color: 'var(--color-primary-black)'}}>
                        All third parties are contractually bound to confidentiality.
                    </p>
                </section>
            </div>

            {/* 6, 7, 8: Retention, Rights, Security */}
             <div className="grid md:grid-cols-3 gap-6">
                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">6. RETENTION</h2>
                    <ul className="space-y-2 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>• Account data: retained while active</li>
                        <li>• Session data: retained for dispute/safety</li>
                        <li>• Verification data: retained for compliance</li>
                    </ul>
                    <p className="mt-2 text-xs font-bold" style={{color: 'var(--color-primary-black)'}}>prsnn. does not retain data longer than necessary.</p>
                 </section>

                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">7. YOUR RIGHTS</h2>
                    <ul className="space-y-2 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>• Access your personal data</li>
                        <li>• Correct inaccurate info</li>
                        <li>• Request deletion</li>
                        <li>• Withdraw consent</li>
                    </ul>
                 </section>

                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">8. SECURITY</h2>
                    <ul className="space-y-2 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>• Encryption at rest & in transit</li>
                        <li>• Access-controlled systems</li>
                        <li>• Regular security reviews</li>
                    </ul>
                 </section>
            </div>

            {/* 9, 10, 11, 12, 13 Remaining Points */}
            {/* 9, 10, 11, 12, 13 Remaining Points */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-black text-lg mb-1">9. CHILDREN</h3>
                            <p className="text-sm" style={{color: 'var(--color-olive-dark)'}}>Strictly for 18+. We do not knowingly collect data from minors.</p>
                        </div>
                        <div>
                            <h3 className="font-black text-lg mb-1">10. INTERNATIONAL</h3>
                            <p className="text-sm" style={{color: 'var(--color-olive-dark)'}}>Data may be processed in jurisdictions with different laws. prsnn. applies consistent standards.</p>
                        </div>
                         <div>
                            <h3 className="font-black text-lg mb-1">11. LIABILITY</h3>
                            <p className="text-sm" style={{color: 'var(--color-olive-dark)'}}>No digital platform guarantees absolute security. Users must safeguard credentials.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                         <div>
                            <h3 className="font-black text-lg mb-1">12. CHANGES</h3>
                            <p className="text-sm" style={{color: 'var(--color-olive-dark)'}}>Material changes will be communicated via app. Continued use means acceptance.</p>
                        </div>
                        <div className="border p-4 rounded-lg" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
                            <h3 className="font-black text-lg mb-2">13. CONTACT</h3>
                            <p className="text-sm mb-1" style={{color: 'var(--color-olive-dark)'}}>For privacy questions or requests:</p>
                            <a href="mailto:admin@prsnn.com" className="text-sm font-bold text-black border-b border-black hover:bg-black hover:text-white transition-colors">
                                admin@prsnn.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
