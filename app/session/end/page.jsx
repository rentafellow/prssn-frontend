'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SessionEndPage = () => {
    const router = useRouter();
    const [feedbackStep, setFeedbackStep] = useState('none'); // none -> safety -> done

    if (feedbackStep === 'none') {
        return (
            <div className="min-h-screen bg-yellow-50 text-black flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                 <div className="w-24 h-24 border-4 border-black rounded-full flex items-center justify-center mb-8 animate-pulse">
                    <span className="text-4xl">🛑</span>
                 </div>
                 <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Session Ended</h1>
                 <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed mb-12">
                    The time is up. <br/>
                    <span className="text-gray-400">You can leave now.</span>
                 </p>
                 
                 <div className="bg-yellow-100 p-6 rounded-xl border-2 border-black max-w-md w-full mb-12">
                    <ul className="space-y-4 text-left text-sm font-bold tracking-wide">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            No need to say goodbye.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            Payment is processed automatically.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            Just walk away.
                        </li>
                    </ul>
                 </div>

                 <button 
                    onClick={() => setFeedbackStep('safety')}
                    className="px-10 py-4 bg-black text-white font-black text-lg rounded-full hover:scale-105 transition-transform uppercase tracking-widest"
                 >
                    Close & Leave
                 </button>
            </div>
        )
    }

    if (feedbackStep === 'safety') {
        return (
            <div className="min-h-screen bg-yellow-50 text-black flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                 <h2 className="text-3xl font-black mb-12 lowercase text-gray-400">Feedback (Delayed)</h2>
                 
                 <div className="max-w-md w-full">
                     <h1 className="text-4xl font-black mb-8">Did you feel safe?</h1>
                     <p className="text-gray-500 font-medium mb-12">This is the only question we ask.</p>
                     
                     <div className="grid grid-cols-2 gap-6">
                        <button 
                            onClick={() => setFeedbackStep('done')}
                            className="py-6 bg-black text-white font-black text-xl rounded-xl hover:bg-gray-800 transition-all border-2 border-black uppercase tracking-widest"
                        >
                            Yes
                        </button>
                        <button 
                            onClick={() => alert("Redirecting to Safety Support...")}
                            className="py-6 bg-yellow-50 text-red-600 font-black text-xl rounded-xl border-2 border-red-600 hover:bg-red-50 transition-all uppercase tracking-widest"
                        >
                            No
                        </button>
                     </div>
                 </div>
            </div>
        )
    }

    if (feedbackStep === 'done') {
         // Auto redirect after a moment
         setTimeout(() => router.push('/'), 2000);
         return (
             <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-6 text-center">
                 <h1 className="text-2xl font-black mb-2">Thank you.</h1>
                 <p className="text-gray-400">Redirecting...</p>
             </div>
         )
    }
};

export default SessionEndPage;
