'use client';
import React from 'react';
import Link from 'next/link';

/**
 * The Handshake Page
 * 
 * Displays the session boundaries and mutual agreement ("The Handshake").
 * Styled with the project's Neo-Brutalism theme matching the home page design.
 * This is a critical flow page before a session starts.
 */
export default function Handshake() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="relative w-full min-h-screen py-16 px-4 md:px-8 flex items-center justify-center overflow-hidden" style={{backgroundColor: 'var(--color-cream)', color: 'var(--color-primary-black)'}}>
      
      {/* === Background Decor (matching Hero component) === */}
      <div className='absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30' style={{backgroundColor: 'var(--color-olive)'}}></div>
      <div className='absolute top-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30' style={{backgroundColor: 'var(--color-yellow)'}}></div>
      <div className='absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30' style={{backgroundColor: 'var(--color-olive-lighter)'}}></div>
      
      <div className="max-w-3xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-white rounded-full text-xs font-bold tracking-wider transform -rotate-2 border border-transparent shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-olive-dark)'}}>
                SESSION PROTOCOL
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4" style={{color: 'var(--color-primary-black)'}}>
                THE <span style={{color: 'var(--color-olive)'}}>HANDSHAKE</span>
            </h1>
            <p className="text-xl font-bold border-b-4 pb-4 inline-block" style={{color: 'var(--color-olive-dark)', borderColor: 'var(--color-olive-dark)'}}>
                Session Boundaries & Mutual Agreement
            </p>
            <p className="text-xs mt-4 font-mono uppercase tracking-widest" style={{color: 'var(--color-olive)'}}>
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Agreement Card */}
        <div className="p-8 rounded-2xl mb-12 relative overflow-hidden" style={{backgroundColor: 'var(--color-yellow-light)', border: '2px solid var(--color-olive-dark)', boxShadow: '4px 4px 0px 0px var(--color-olive-dark)'}}>
            
            <p className="font-medium leading-relaxed mb-6 text-center text-lg" style={{color: 'var(--color-primary-black)'}}>
                This document governs every session on prsnn.<br/>
                By starting a session, both the User and the Companion <span className="font-black" style={{borderBottom: '2px solid var(--color-olive)', color: 'var(--color-primary-black)'}}>explicitly agree</span> to all terms below.
            </p>
            
            <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-wider inline-block px-6 py-3 rounded-xl border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-yellow)', color: 'var(--color-primary-black)', borderColor: 'var(--color-primary-black)'}}>
                    ⚠️ If you do not agree, do not proceed.
                </p>
            </div>
        </div>

        {/* 1. What This Session Is */}
        <section className="mb-12 pl-6 py-4" style={{borderLeft: '4px solid var(--color-olive)'}}>
            <h2 className="text-3xl font-black mb-4" style={{color: 'var(--color-primary-black)'}}>1. WHAT THIS SESSION <span style={{color: 'var(--color-olive)'}}>IS</span></h2>
            <p className="mb-4 font-medium" style={{color: 'var(--color-olive-dark)'}}>This session is a public, time-bound companionship experience. It exists solely to provide:</p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="text-white font-bold p-4 text-center rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-olive)'}}>Human Presence</div>
                <div className="text-white font-bold p-4 text-center rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-olive)'}}>Public Accompaniment</div>
                <div className="text-white font-bold p-4 text-center rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-olive)'}}>Pressure-free Co-existence</div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-bold" style={{color: 'var(--color-primary-black)'}}>
                <span className="px-3 py-1 rounded-full" style={{backgroundColor: 'var(--color-yellow-light)'}}>✓ Silence is acceptable</span>
                <span className="px-3 py-1 rounded-full" style={{backgroundColor: 'var(--color-yellow-light)'}}>✓ Conversation is optional</span>
                <span className="px-3 py-1 rounded-full" style={{backgroundColor: 'var(--color-yellow-light)'}}>✓ No outcome guaranteed</span>
            </div>
        </section>

        {/* 2. What This Session Is NOT */}
        <section className="mb-12 rounded-2xl p-6" style={{backgroundColor: 'var(--color-yellow-light)', border: '2px solid var(--color-olive-dark)', boxShadow: '4px 4px 0px 0px var(--color-olive-dark)'}}>
             <h2 className="text-3xl font-black mb-4" style={{color: 'var(--color-primary-black)'}}>2. WHAT THIS SESSION IS <span style={{color: 'var(--color-olive-dark)'}}>NOT</span></h2>
             <div className="p-6 rounded-xl" style={{backgroundColor: 'var(--color-cream)', border: '2px solid var(--color-olive-dark)'}}>
                 <ul className="space-y-3 font-medium" style={{color: 'var(--color-olive-dark)'}}>
                     <li className="flex items-start gap-3">
                         <span className="font-bold text-xl" style={{color: 'var(--color-primary-black)'}}>✕</span>
                         <span>Dating, romance, or intimate interaction</span>
                     </li>
                     <li className="flex items-start gap-3">
                         <span className="font-bold text-xl" style={{color: 'var(--color-primary-black)'}}>✕</span>
                         <span>Therapy, counseling, or crisis intervention</span>
                     </li>
                     <li className="flex items-start gap-3">
                         <span className="font-bold text-xl" style={{color: 'var(--color-primary-black)'}}>✕</span>
                         <span>Coaching, mentoring, or advice</span>
                     </li>
                     <li className="flex items-start gap-3">
                         <span className="font-bold text-xl" style={{color: 'var(--color-primary-black)'}}>✕</span>
                         <span>Emotional support or validation</span>
                     </li>
                     <li className="flex items-start gap-3">
                         <span className="font-bold text-xl" style={{color: 'var(--color-primary-black)'}}>✕</span>
                         <span>Errand running or money handling</span>
                     </li>
                 </ul>
                 <p className="mt-6 text-sm font-bold pt-4 uppercase tracking-widest text-center" style={{color: 'var(--color-primary-black)', borderTop: '2px solid var(--color-olive-dark)'}}>
                     Any assumption beyond simple public presence is invalid.
                 </p>
             </div>
        </section>

        {/* 3. Boundaries */}
        {/* 3. Boundaries */}
        <section className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-center pb-4 border-b-4 border-black uppercase" style={{color: 'var(--color-primary-black)'}}>3. BOUNDARIES (NON-NEGOTIABLE)</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-black p-4 rounded-xl transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5" style={{backgroundColor: 'var(--color-cream)'}}>
                    <h3 className="font-bold mb-1 text-lg" style={{color: 'var(--color-primary-black)'}}>🏛️ Public Places Only</h3>
                    <p className="text-sm" style={{color: 'var(--color-olive-dark)'}}>Sessions must occur only in public.</p>
                </div>
                <div className="border-2 border-black p-4 rounded-xl transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5" style={{backgroundColor: 'var(--color-cream)'}}>
                    <h3 className="font-bold mb-1 text-lg" style={{color: 'var(--color-primary-black)'}}>🚫 No Physical Contact</h3>
                    <p className="text-sm" style={{color: 'var(--color-olive-dark)'}}>Strictly no touching of any kind.</p>
                </div>
                <div className="border-2 border-black p-4 rounded-xl transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5" style={{backgroundColor: 'var(--color-cream)'}}>
                    <h3 className="font-bold mb-1 text-lg" style={{color: 'var(--color-primary-black)'}}>🫸 Respect Personal Space</h3>
                    <p className="text-sm" style={{color: 'var(--color-olive-dark)'}}>Give distance. Do not invade.</p>
                </div>
                <div className="border-2 border-black p-4 rounded-xl transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5" style={{backgroundColor: 'var(--color-cream)'}}>
                    <h3 className="font-bold mb-1 text-lg" style={{color: 'var(--color-primary-black)'}}>✨ No Pressure</h3>
                    <p className="text-sm" style={{color: 'var(--color-olive-dark)'}}>To talk, share, or engage.</p>
                </div>
            </div>
            <div className="mt-6 p-6 text-center border-2 border-black rounded-xl font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-olive-dark)', color: 'white'}}>
                ⚡ Either party may end the session at any time, for any reason, without explanation.
            </div>
        </section>

        {/* 4, 5, 6, 7 Compact */}
        {/* 4, 5, 6, 7 Compact */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="border-2 border-black p-6 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-cream)'}}>
                <h3 className="font-black text-xl mb-2" style={{color: 'var(--color-primary-black)'}}>4. ROLE CLARITY</h3>
                <p className="text-sm mb-4 font-medium" style={{color: 'var(--color-olive-dark)'}}>Companion is presence, not participation. User retains responsibility. Not a service.</p>
                
                <h3 className="font-black text-xl mb-2 mt-6" style={{color: 'var(--color-primary-black)'}}>5. SAFETY & REPORTING</h3>
                <p className="text-sm font-medium" style={{color: 'var(--color-olive-dark)'}}>Boundary crossed? End immediately. Leave. Report in-app.</p>
            </div>
            <div className="border-2 border-black p-6 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-cream)'}}>
                <h3 className="font-black text-xl mb-2" style={{color: 'var(--color-primary-black)'}}>6. RESPONSIBILITY</h3>
                <p className="text-sm mb-4 font-medium" style={{color: 'var(--color-olive-dark)'}}>Participation is voluntary. Each participant acts at own risk.</p>

                <h3 className="font-black text-xl mb-2 mt-6" style={{color: 'var(--color-primary-black)'}}>7. CONSEQUENCES</h3>
                <p className="text-sm font-medium" style={{color: 'var(--color-olive-dark)'}}>Violation = Termination. Account Removal. No Refund.</p>
            </div>
        </div>

        {/* 8. Acceptance */}
        {/* 8. Acceptance */}
        <div className="border-4 border-black rounded-2xl p-8 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-cream)'}}>
            <h2 className="text-3xl font-black mb-6 uppercase" style={{color: 'var(--color-primary-black)'}}>8. ACCEPTANCE</h2>
            <p className="font-bold mb-6 text-lg" style={{color: 'var(--color-olive-dark)'}}>By starting this session, you confirm that:</p>
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8 font-medium">
                <li className="flex items-center gap-3 p-3 rounded-lg border" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive)'}}>
                    <input type="checkbox" checked readOnly className="w-5 h-5" style={{accentColor: 'var(--color-olive-dark)'}} />
                    <span style={{color: 'var(--color-olive-dark)'}}>You have read this document in full</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg border" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive)'}}>
                    <input type="checkbox" checked readOnly className="w-5 h-5" style={{accentColor: 'var(--color-olive-dark)'}} />
                    <span style={{color: 'var(--color-olive-dark)'}}>You understand all boundaries</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg border" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive)'}}>
                    <input type="checkbox" checked readOnly className="w-5 h-5" style={{accentColor: 'var(--color-olive-dark)'}} />
                    <span style={{color: 'var(--color-olive-dark)'}}>You agree to follow them</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg border" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive)'}}>
                    <input type="checkbox" checked readOnly className="w-5 h-5" style={{accentColor: 'var(--color-olive-dark)'}} />
                    <span style={{color: 'var(--color-olive-dark)'}}>You accept that no additional expectations apply</span>
                </li>
            </ul>
            
            <Link href="/" className="inline-block w-full md:w-auto px-12 py-4 text-white font-black text-xl rounded-xl hover:scale-[1.02] transition-all uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5" style={{backgroundColor: 'var(--color-primary-black)'}}>
                ✓ Agree & Continue
            </Link>
        </div>

      </div>
    </div>
  );
}
