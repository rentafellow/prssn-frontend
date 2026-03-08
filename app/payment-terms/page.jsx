'use client';
import React from 'react';

/**
 * Payment Terms Page
 * 
 * Displays the payment terms and conditions for prsnn.
 * Styled with the project's consistent Neo-Brutalism theme in BLACK and WHITE.
 */
export default function PaymentTerms() {
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
                <span className="font-black text-sm tracking-widest text-black uppercase">Financial</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
                prsnn. PAYMENT <span style={{color: 'var(--color-olive)'}}>TERMS</span>
            </h1>
            <p className="text-xl font-bold" style={{color: 'var(--color-olive-dark)'}}>
                How Payments, Fees & Payouts Work
            </p>
            <p className="text-sm mt-2 font-mono" style={{color: 'var(--color-olive)'}}>
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Introduction Card */}
        <div className="border p-6 md:p-8 rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-10" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                These Payment Terms govern <span className="font-bold">all financial transactions on prsnn.</span>
            </p>
            <p className="font-medium leading-relaxed mb-4" style={{color: 'var(--color-primary-black)'}}>
                By booking or participating in a session, you agree to these terms.
            </p>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 gap-8">
            
            {/* 1. Payment Structure */}
            {/* 1. Payment Structure */}
            <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>1</span>
                    PAYMENT STRUCTURE (CORE PRINCIPLE)
                </h2>
                <p className="mb-4 font-medium" style={{color: 'var(--color-olive-dark)'}}>
                    prsnn. is a platform that facilitates public companionship sessions between Users and Companions.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                     <ul className="list-disc pl-5 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                        <li>Users pay prsnn. through the Platform</li>
                        <li>prsnn. charges a platform fee</li>
                     </ul>
                      <ul className="list-disc pl-5 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                        <li>Companions are paid for completed sessions</li>
                        <li>All payments must remain on-platform</li>
                     </ul>
                </div>
                <p className="font-bold text-sm pl-3 py-2 pr-2 inline-block" style={{color: 'var(--color-primary-black)', borderLeft: '2px solid var(--color-olive-dark)', backgroundColor: 'var(--color-yellow-light)'}}>
                    prsnn. does not facilitate cash payments, tips, or off-platform transactions.
                </p>
            </section>

             {/* 2. User Payments */}
             {/* 2. User Payments */}
             <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>2</span>
                    USER PAYMENTS
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-lg text-black mb-2">A. Payment Timing</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                            <li>All sessions must be paid in full upfront</li>
                            <li>Bookings are confirmed only after successful payment</li>
                            <li>Unpaid or partially paid sessions are not allowed</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-black mb-2">B. Payment Methods</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                            <li>Payments may be made via supported digital payment methods</li>
                            <li>prsnn. does not store raw card or payment credentials</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* 3. Platform Fees */}
             {/* 3. Platform Fees */}
             <section className="rounded-xl p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-yellow-light)', border: '2px solid var(--color-olive-dark)'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>3</span>
                    PLATFORM FEES
                </h2>
                <p className="font-bold mb-4" style={{color: 'var(--color-primary-black)'}}>prsnn. deducts a platform commission from each completed session.</p>
                <p className="text-sm mb-2" style={{color: 'var(--color-olive-dark)'}}>The commission covers:</p>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-black uppercase mb-4">
                    <span className="border border-black px-2 py-1 rounded-full" style={{backgroundColor: 'var(--color-cream)'}}>Companion verification</span>
                    <span className="border border-black px-2 py-1 rounded-full" style={{backgroundColor: 'var(--color-cream)'}}>Platform operations</span>
                    <span className="border border-black px-2 py-1 rounded-full" style={{backgroundColor: 'var(--color-cream)'}}>Safety systems</span>
                    <span className="border border-black px-2 py-1 rounded-full" style={{backgroundColor: 'var(--color-cream)'}}>Dispute handling</span>
                    <span className="border border-black px-2 py-1 rounded-full" style={{backgroundColor: 'var(--color-cream)'}}>Payment processing</span>
                </div>
                 <p className="text-xs italic" style={{color: 'var(--color-olive)'}}>prsnn. reserves the right to change commission rates with notice.</p>
            </section>

             {/* 4. Companion Payouts */}
             {/* 4. Companion Payouts */}
             <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                    <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>4</span>
                    COMPANION PAYOUTS
                </h2>
                <div className="space-y-4">
                    <div>
                         <h3 className="font-bold text-black border-b mb-2" style={{borderColor: 'var(--color-olive)'}}>A. Payout Eligibility</h3>
                         <ul className="list-disc pl-5 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                             <li>The session starts</li>
                             <li>No violation is reported during the session</li>
                             <li>The session is completed or ended without issue</li>
                         </ul>
                    </div>
                    <div>
                         <h3 className="font-bold text-black border-b mb-2" style={{borderColor: 'var(--color-olive)'}}>B. Payout Timing</h3>
                         <ul className="list-disc pl-5 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                             <li>Payouts are processed after session completion</li>
                             <li>Processing times may vary based on payment providers</li>
                         </ul>
                    </div>
                     <div>
                         <h3 className="font-bold text-black border-b mb-2" style={{borderColor: 'var(--color-olive)'}}>C. Withheld or Adjusted Payouts</h3>
                         <p className="text-xs mb-1" style={{color: 'var(--color-olive)'}}>prsnn. may withhold, delay, or adjust payouts if:</p>
                         <ul className="list-disc pl-5 text-sm" style={{color: 'var(--color-olive-dark)'}}>
                             <li>A dispute is under review</li>
                             <li>A policy violation is suspected</li>
                             <li>Fraud or abuse is detected</li>
                         </ul>
                    </div>
                </div>
                <p className="mt-4 text-xs font-bold text-black pt-2" style={{borderTop: '1px solid var(--color-olive)'}}>prsnn.’s decision on payouts is final.</p>
            </section>

            {/* 5. Off-Platform Payments */}
            {/* 5. Off-Platform Payments */}
            <section className="rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(50,50,50,0.5)]" style={{backgroundColor: 'var(--color-olive-dark)', color: 'white'}}>
                <h2 className="text-2xl font-black mb-4 uppercase tracking-widest text-center">
                    5. OFF-PLATFORM PAYMENTS (PROHIBITED)
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                    <div>
                        <p className="font-bold mb-2 uppercase text-xs" style={{color: 'var(--color-yellow)'}}>Users and Companions must NOT:</p>
                         <ul className="space-y-1">
                            <li className="flex items-center gap-2"><span className="text-white font-bold">✕</span> exchange cash</li>
                            <li className="flex items-center gap-2"><span className="text-white font-bold">✕</span> accept tips</li>
                            <li className="flex items-center gap-2"><span className="text-white font-bold">✕</span> share payment details</li>
                            <li className="flex items-center gap-2"><span className="text-white font-bold">✕</span> redirect payments outside prsnn.</li>
                        </ul>
                    </div>
                    <div>
                         <p className="font-bold mb-2 uppercase text-xs" style={{color: 'var(--color-yellow)'}}>Any attempt to bypass prsnn.:</p>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2"><span className="text-white font-bold">!</span> violates these Terms</li>
                            <li className="flex items-center gap-2"><span className="text-white font-bold">!</span> results in immediate removal</li>
                            <li className="flex items-center gap-2"><span className="text-white font-bold">!</span> forfeits pending payouts or refunds</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* 6. Session Completion */}
             {/* 6. Session Completion */}
             <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <h2 className="text-lg font-black text-black mb-3">6. SESSION COMPLETION & PAYMENT FINALITY</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                    <li>A session is considered billable once it begins</li>
                    <li>Completed sessions are not refundable</li>
                    <li>Early termination does not guarantee refund or payout reversal</li>
                </ul>
                <p className="text-xs font-bold text-black">Refunds, if any, are governed solely by prsnn.’s Refund Policy.</p>
            </section>

            {/* 7, 8, 9, 10 Combined Grid */}
            {/* 7, 8, 9, 10 Combined Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                 {/* 7. Taxes */}
                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                     <h2 className="text-lg font-black text-black mb-2">7. TAXES & COMPLIANCE</h2>
                     <p className="text-xs mb-2" style={{color: 'var(--color-olive-dark)'}}>Companions are responsible for their own taxes. prsnn. does not provide tax advice or employee classification.</p>
                 </section>

                 {/* 8. Disputes */}
                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                     <h2 className="text-lg font-black text-black mb-2">8. DISPUTES & CHARGEBACKS</h2>
                     <p className="text-xs mb-2" style={{color: 'var(--color-olive-dark)'}}>Must be submitted through prsnn.’s Dispute Policy. Initiating chargebacks without platforms process may result in suspension.</p>
                 </section>

                 {/* 9. Fraud */}
                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                     <h2 className="text-lg font-black text-black mb-2">9. FRAUD PREVENTION</h2>
                     <p className="text-xs mb-2" style={{color: 'var(--color-olive-dark)'}}>prsnn. reserves the right to block suspicious transactions, suspend accounts, and reverse payments where legally permitted.</p>
                 </section>

                 {/* 10. Liability */}
                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                     <h2 className="text-lg font-black text-black mb-2">10. LIMITATION OF LIABILITY</h2>
                     <p className="text-xs mb-2" style={{color: 'var(--color-olive-dark)'}}>prsnn. is not responsible for bank delays, processor errors, or currency fees. Users accept these risks.</p>
                 </section>
            </div>

            {/* 11 & 12 */}
            {/* 11 & 12 */}
            <section className="border rounded-xl p-6" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 className="font-black text-lg mb-2">11. POLICY CHANGES</h3>
                        <p className="text-sm" style={{color: 'var(--color-olive)'}}>Material changes will be communicated through the Platform. Continued use constitutes acceptance.</p>
                     </div>
                     <div>
                        <h3 className="font-black text-lg mb-2">12. CONTACT</h3>
                        <p className="text-sm" style={{color: 'var(--color-olive)'}}>For payment-related questions:</p>
                        <a href="mailto:rentafellow00@gmail.com" className="text-sm font-bold text-black border-b border-black hover:bg-black hover:text-white transition-colors">
                            rentafellow00@gmail.com
                        </a>
                     </div>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
