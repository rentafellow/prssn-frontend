'use client';
import React from 'react';

/**
 * Refund Policy Page
 * 
 * Displays the refund policy for prsnn.
 * Styled with the project's consistent Neo-Brutalism theme in BLACK and WHITE.
 */
export default function RefundPolicy() {
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
                <span className="font-black text-sm tracking-widest text-black uppercase">Cancellations</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
                prsnn. REFUND <span style={{color: 'var(--color-olive)'}}>POLICY</span>
            </h1>
            <p className="text-xl font-bold" style={{color: 'var(--color-olive-dark)'}}>
                How Cancellations & Refunds Work
            </p>
            <p className="text-sm mt-2 font-mono" style={{color: 'var(--color-olive)'}}>
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Introduction Card */}
        <div className="border p-6 md:p-8 rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-10" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                This Refund Policy applies to <span className="font-bold">all sessions booked on prsnn.</span>
            </p>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                 By booking a session, you agree to the terms below.
            </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 gap-8">
            
            {/* 1. Core Principle */}
            {/* 1. Core Principle */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>1</span>
                    CORE PRINCIPLE
                </h2>
                <p className="mb-4 font-medium" style={{color: 'var(--color-olive-dark)'}}>
                    prsnn. sessions are time-bound, human-presence bookings. Once a session window begins, time and availability are consumed.
                </p>
                <div className="p-4 rounded-lg border-l-4" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
                    <p className="font-bold mb-2 uppercase text-xs" style={{color: 'var(--color-primary-black)'}}>Refunds are handled to balance:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                        <li>fairness to Users</li>
                        <li>protection of Fellows’ time</li>
                        <li>platform safety and integrity</li>
                    </ul>
                </div>
            </section>

             {/* 2 & 3. Cancellations */}
            <div className="grid md:grid-cols-2 gap-6">
                 {/* Before Start */}
                 <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3">2. BEFORE START</h2>
                    <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold rounded-full mb-3">✅ Eligible for Full Refund</div>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>User cancels before start time</li>
                        <li>Companion cancels before start time</li>
                        <li>Platform/Verification issues</li>
                    </ul>
                    <p className="text-xs font-bold" style={{color: 'var(--color-olive)'}}>Processed to original payment method.</p>
                </section>

                {/* After Start */}
                <section className="rounded-xl p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-yellow-light)', border: '2px solid var(--color-olive-dark)'}}>
                    <h2 className="text-xl font-black text-black mb-3">3. AFTER START</h2>
                    <div className="inline-block px-3 py-1 text-black border border-black text-xs font-bold rounded-full mb-3" style={{backgroundColor: 'var(--color-cream)'}}>❌ No Automatic Refund</div>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>Time has been reserved</li>
                        <li>Companion has committed availability</li>
                    </ul>
                    <p className="text-xs font-bold" style={{color: 'var(--color-primary-black)'}}>Completed sessions are not eligible.</p>
                </section>
            </div>

            {/* 4. Early Termination */}
            {/* 4. Early Termination */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>4</span>
                    EARLY SESSION TERMINATION
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-black border-b mb-2" style={{borderColor: 'var(--color-olive)'}}>A. Starting by User/Companion (No Violation)</h3>
                         <ul className="list-disc pl-5 text-sm mb-2" style={{color: 'var(--color-olive-dark)'}}>
                             <li>No refund is guaranteed</li>
                             <li>Partial refunds are not automatic</li>
                         </ul>
                         <p className="text-xs font-bold" style={{color: 'var(--color-olive)'}}>Session considered fulfilled once it begins.</p>
                    </div>
                    <div>
                         <h3 className="font-bold text-black border-b mb-2" style={{borderColor: 'var(--color-olive)'}}>B. Ending Due to Violation</h3>
                         <p className="text-xs mb-1" style={{color: 'var(--color-olive-dark)'}}>If ending due to boundary/safety/behavior:</p>
                         <ol className="list-decimal pl-5 text-sm text-black font-bold mb-2">
                             <li>End session immediately</li>
                             <li>Report issue through app</li>
                         </ol>
                         <p className="text-xs font-bold" style={{color: 'var(--color-olive)'}}>prsnn. may issue refund or take enforcement after review.</p>
                    </div>
                </div>
            </section>

            {/* 5. No-Show Policy */}
            {/* 5. No-Show Policy */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>5</span>
                    NO-SHOW POLICY
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg" style={{backgroundColor: 'var(--color-yellow-light)'}}>
                        <h3 className="font-black text-lg mb-1">USER No-Show</h3>
                        <p className="text-sm font-bold" style={{color: 'var(--color-olive-dark)'}}>Session considered fulfilled.</p>
                        <p className="text-sm" style={{color: 'var(--color-olive)'}}>No refund will be issued.</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{backgroundColor: 'var(--color-olive-dark)', color: 'white'}}>
                        <h3 className="font-black text-lg mb-1">COMPANION No-Show</h3>
                        <p className="text-sm font-bold" style={{color: 'var(--color-yellow)'}}>User receives full refund.</p>
                        <p className="text-sm text-white">Companion may face penalties.</p>
                    </div>
                </div>
            </section>

             {/* 6, 7, 8 Grid */}
             {/* 6, 7, 8 Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">6. DISCRETION</h2>
                    <ul className="space-y-1 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>• prsnn. may deny for abuse</li>
                        <li>• Goodwill refunds possible</li>
                        <li>• Decisions are final</li>
                    </ul>
                 </section>

                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">7. PROCESSING</h2>
                    <ul className="space-y-1 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>• To original payment method</li>
                        <li>• Times depend on provider</li>
                        <li>• prsnn. not liable for delays</li>
                    </ul>
                 </section>

                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">8. CHARGEBACKS</h2>
                    <ul className="space-y-1 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>• Must contact prsnn. first</li>
                        <li>• Unauthorized = Suspension</li>
                        <li>• prsnn. disputes with evidence</li>
                    </ul>
                 </section>
            </div>

             {/* 9 & 10 */}
            {/* 9 & 10 */}
            <section className="border rounded-xl p-6" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 className="font-black text-lg mb-2">9. POLICY CHANGES</h3>
                        <p className="text-sm" style={{color: 'var(--color-olive)'}}>Material changes will be communicated through the app. Continued use constitutes acceptance.</p>
                     </div>
                     <div>
                        <h3 className="font-black text-lg mb-2">10. CONTACT</h3>
                        <p className="text-sm" style={{color: 'var(--color-olive)'}}>For refund-related questions:</p>
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
