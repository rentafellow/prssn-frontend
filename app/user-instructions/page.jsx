'use client';
import React from 'react';

/**
 * User Instructions Page
 */
export default function UserInstructions() {
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
                <span className="font-black text-sm tracking-widest text-black uppercase">Instructions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
                RAF &mdash; USER <span style={{color: 'var(--color-olive)'}}>INSTRUCTIONS</span>
            </h1>
            <p className="text-xl font-bold" style={{color: 'var(--color-olive-dark)'}}>
                How to Use RAF the Right Way
            </p>
            <p className="text-sm mt-2 font-mono" style={{color: 'var(--color-olive)'}}>
                Last Updated: {currentDate}
            </p>
        </div>

        {/* Introduction Card */}
        <div className="border p-6 md:p-8 rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-10" style={{backgroundColor: 'var(--color-yellow-light)', borderColor: 'var(--color-olive-dark)'}}>
            <p className="font-medium leading-relaxed mb-4 text-xl" style={{color: 'var(--color-primary-black)'}}>
                RAF is designed to make being in public spaces feel lighter, not more complicated.
            </p>
            <p className="font-bold leading-relaxed underline" style={{color: 'var(--color-primary-black)'}}>
                Please read this before your first session.
            </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8">
            
            {/* 1 & 2 */}
            <div className="grid md:grid-cols-2 gap-6">
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                        <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>1</span>
                        WHAT RAF IS FOR
                    </h2>
                    <p className="mb-4 font-bold" style={{color: 'var(--color-olive-dark)'}}>
                        RAF lets you book a verified person to accompany you in public.
                    </p>
                    <p className="font-bold text-black mb-2 uppercase text-xs">This means:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>someone to be there with you</li>
                        <li>no pressure to talk</li>
                        <li>no expectations to perform</li>
                        <li>silence is completely okay</li>
                    </ul>
                    <p className="mt-4 text-sm font-bold text-black">RAF is about presence, not interaction.</p>
                </section>

                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                        <span className="text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{backgroundColor: 'var(--color-olive-dark)'}}>2</span>
                        WHAT RAF IS NOT
                    </h2>
                    <p className="font-bold text-black mb-2 uppercase text-xs">RAF is not:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>dating or romance</li>
                        <li>therapy, counseling, or emotional support</li>
                        <li>coaching, mentoring, or advice</li>
                        <li>errand running or task execution</li>
                        <li>a place to overshare or seek validation</li>
                    </ul>
                    <p className="mt-auto text-sm font-bold pt-4" style={{color: 'var(--color-olive)'}}>If you&apos;re looking for any of the above, RAF is not the right platform.</p>
                </section>
            </div>

            {/* 3 */}
            <section className="rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-olive-dark)', color: 'white'}}>
                 <h2 className="text-2xl font-black mb-6 uppercase tracking-widest text-center">
                    3. HOW A SESSION WORKS (STEP-BY-STEP)
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-lg font-bold mb-2" style={{color: 'var(--color-yellow)'}}>Step 1: Pick a Mode</h3>
                        <p className="text-sm mb-2">Choose how you want someone to be there:</p>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>&bull; <span className="text-white font-bold">Don&apos;t Go Alone</span> &ndash; for events or entrances</li>
                            <li>&bull; <span className="text-white font-bold">Sit With Me</span> &ndash; quiet presence</li>
                            <li>&bull; <span className="text-white font-bold">Be Around</span> &ndash; low-pressure co-presence</li>
                            <li>&bull; <span className="text-white font-bold">Explore Together</span> &ndash; casual walking</li>
                        </ul>
                        <p className="mt-3 text-xs italic">If unsure, tap Help Me Decide.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2" style={{color: 'var(--color-yellow)'}}>Step 2: Choose Your Preferences</h3>
                        <p className="text-sm mb-2">You can select tags like:</p>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>&bull; &ldquo;Okay with silence&rdquo;</li>
                            <li>&bull; &ldquo;Don&apos;t want to talk&rdquo;</li>
                            <li>&bull; &ldquo;Low energy&rdquo;</li>
                        </ul>
                        <p className="mt-3 text-sm">These help match you with the right Fellow.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2" style={{color: 'var(--color-yellow)'}}>Step 3: Meet in Public</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>&bull; Sessions happen in public places only</li>
                            <li>&bull; Either person can end the session at any time</li>
                            <li>&bull; You don&apos;t need to explain or apologize</li>
                        </ul>
                    </div>
                </div>
            </section>

             <div className="grid md:grid-cols-2 gap-6">
                 {/* 4 */}
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3">4. TALKING &amp; SILENCE</h2>
                    <p className="text-lg font-black mb-3 text-black">You do not have to talk.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>Silence is normal on RAF</li>
                        <li>Conversation is optional</li>
                        <li>You never owe personal details</li>
                    </ul>
                    <p className="text-xs font-bold" style={{color: 'var(--color-olive)'}}>If conversation happens, it should stay light and respectful.</p>
                </section>

                 {/* 5 */}
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-xl font-black text-black mb-3">5. BOUNDARIES YOU MUST RESPECT</h2>
                    <p className="text-sm font-bold mb-2" style={{color: 'var(--color-olive-dark)'}}>During every session:</p>
                    <ul className="space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li><span className="font-bold text-black">✕</span> No physical contact</li>
                        <li><span className="font-bold text-black">✕</span> No flirting or romantic behavior</li>
                        <li><span className="font-bold text-black">✕</span> No personal or private locations</li>
                        <li><span className="font-bold text-black">✕</span> No errands, tasks, or money handling</li>
                        <li><span className="font-bold text-black">✕</span> No off-platform contact</li>
                    </ul>
                    <p className="text-xs font-bold mt-auto" style={{color: 'var(--color-olive)'}}>These boundaries protect everyone.</p>
                </section>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                 {/* 6 */}
                <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">6. ENDING A SESSION</h2>
                    <p className="text-sm mb-1 font-bold">You may end a session:</p>
                    <ul className="space-y-1 text-xs mb-3" style={{color: 'var(--color-olive-dark)'}}>
                        <li>&bull; at any time</li>
                        <li>&bull; for any reason</li>
                        <li>&bull; without explanation</li>
                    </ul>
                    <p className="text-xs italic mb-3">Ending early is allowed and respected.</p>
                    <p className="text-sm mb-1 font-bold">If something feels uncomfortable:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>End the session</li>
                        <li>Leave the area if needed</li>
                        <li>Report the issue in the app</li>
                    </ol>
                </section>

                {/* 7 */}
                <section className="rounded-xl p-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{backgroundColor: 'var(--color-yellow-light)', border: '2px solid var(--color-olive-dark)'}}>
                    <h2 className="text-lg font-black text-black mb-2">7. SAFETY FIRST</h2>
                    <p className="text-sm mb-2 font-bold">RAF prioritizes safety over completion.</p>
                    <p className="text-sm mb-1 font-bold">Use in-app tools to:</p>
                    <ul className="space-y-1 text-xs mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>&bull; report issues</li>
                        <li>&bull; request support</li>
                        <li>&bull; flag boundary violations</li>
                    </ul>
                    <p className="text-xs font-bold text-red-600 uppercase border-t border-red-200 pt-2">Do not argue or negotiate during a session.</p>
                </section>

                 {/* 8 */}
                 <section className="border rounded-xl p-5 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">8. PAYMENTS &amp; REFUNDS</h2>
                    <p className="text-xs mb-2 font-bold uppercase text-gray-500">(BASIC INFO)</p>
                    <ul className="space-y-2 text-xs" style={{color: 'var(--color-olive-dark)'}}>
                        <li>&bull; Sessions are paid upfront</li>
                        <li>&bull; Not all ended sessions qualify for refunds</li>
                        <li>&bull; Refunds are handled per RAF&rsquo;s Refund Policy</li>
                    </ul>
                    <p className="text-xs mt-4 pt-2 border-t border-gray-300 font-bold" style={{color: 'var(--color-olive)'}}>Trying to bypass payment rules may result in removal.</p>
                 </section>
             </div>

             <section className="border rounded-xl p-8" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 className="font-black text-xl mb-3">9. HOW TO GET THE MOST FROM RAF</h3>
                        <p className="text-sm mb-2">RAF works best when you:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                            <li>choose silence if you&apos;re unsure</li>
                            <li>keep expectations minimal</li>
                            <li>treat the session as &ldquo;shared space&rdquo;</li>
                            <li>don&apos;t force conversation</li>
                        </ul>
                        <div className="mt-4 p-4 font-bold border border-black inline-block rounded text-lg" style={{backgroundColor: 'var(--color-yellow-light)'}}>
                            Think of RAF as:<br/>
                            &ldquo;I don&apos;t have to do this alone.&rdquo;
                        </div>
                     </div>
                     <div>
                        <h3 className="font-black text-xl mb-3">10. WHEN RAF IS NOT THE RIGHT CHOICE</h3>
                        <p className="text-sm mb-2">RAF is not suitable if you:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                            <li>want therapy or emotional guidance</li>
                            <li>want dating or romance</li>
                            <li>want someone to solve problems</li>
                            <li>want someone to do tasks for you</li>
                        </ul>
                         <p className="mt-2 text-sm font-bold text-black">Choosing the right tool matters.</p>
                     </div>
                </div>
            </section>

             <div className="grid md:grid-cols-2 gap-6">
                <section className="border rounded-xl p-6 transition-colors duration-300" style={{backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-olive-dark)', border: '2px solid'}}>
                    <h2 className="text-lg font-black text-black mb-2">11. YOUR RESPONSIBILITY</h2>
                    <p className="text-sm mb-2" style={{color: 'var(--color-olive-dark)'}}>By using RAF, you agree to:</p>
                     <ul className="list-disc pl-5 space-y-1 text-sm mb-4" style={{color: 'var(--color-olive-dark)'}}>
                        <li>follow all platform rules</li>
                        <li>respect Fellows as people, not services</li>
                        <li>use the platform for its intended purpose</li>
                    </ul>
                    <p className="text-xs font-bold pt-2 border-t border-gray-300" style={{color: 'var(--color-olive)'}}>Repeated misuse may result in account removal.</p>
                </section>
                
                <section className="rounded-xl p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center" style={{backgroundColor: 'var(--color-olive-dark)', color: 'white', border: '2px solid black'}}>
                    <h2 className="text-xl font-black mb-3 uppercase tracking-widest text-center" style={{color: 'var(--color-yellow)'}}>12. FINAL NOTE</h2>
                    <p className="text-center text-lg mb-2">RAF exists to make public spaces feel less heavy.</p>
                    <p className="text-center text-md mb-4 text-gray-300">You don&apos;t have to be interesting, open, or okay.</p>
                    <p className="text-center text-2xl font-black">You just don&apos;t have to be alone.</p>
                </section>
             </div>

        </div>
      </div>
    </div>
  );
}
