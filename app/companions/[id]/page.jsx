'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';
import Loading from '../../components/common/Loading';

const FellowProfile = () => {
    const { id } = useParams();
    const router = useRouter();
    const { token, userData } = useAuth();
    const { showNotification } = useNotification();
    
    const [fellow, setFellow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [step, setStep] = useState('review'); // review -> hesitation -> success

    // Hesitation Checkboxes
    const [checks, setChecks] = useState({
        publicOnly: false,
        noTouch: false,
        silenceOk: false,
        canLeave: false
    });

    // Booking Details
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [duration, setDuration] = useState('60');
    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        setMinDate(new Date().toISOString().split('T')[0]);
    }, []);

    useEffect(() => {
        // Fetch fellow details
        const fetchFellow = async () => {
             try {
                // Determine API endpoint - handle generic fetch if specific by ID fails/not impl
                // Here assuming /api/companions returns array, we filter. Ideal is /api/companions/:id
                try {
                     const resSpecific = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/companions/${id}`);
                     setFellow(resSpecific.data);
                } catch (e) {
                     // Fallback to list fetch
                     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/companions`);
                     const found = res.data.find(f => f.id === id || f._id === id);
                     setFellow(found);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        if(id) fetchFellow();
    }, [id]);

    const handleConfirm = async () => {
        // 1. Check if user is logged in
        if (!token || !userData) {
            // User can browse freely, but must log in to book
            const proceed = confirm("You need to login to book a fellow. Would you like to login now?");
            if (proceed) {
                router.push('/login');
            }
            return;
        }

        // 2. Check if user is verified
        const { role, verificationStatus, is_verified } = userData;
        // Superadmins bypass verification
        const isSuperAdmin = role === 'superadmin';
        // Check verification (handling both modern is_verified boolean and legacy verificationStatus string)
        const isVerifiedUser = is_verified || verificationStatus === 'verified' || isSuperAdmin;

        if (!isVerifiedUser) {
             if (verificationStatus === 'pending') {
                 showNotification('error', "Your verification is still pending. You cannot make bookings until an admin approves your profile.");
             } else if (verificationStatus === 'rejected') {
                 showNotification('error', "Your verification was rejected. Please update your profile documents.");
                 router.push('/profile');
             } else {
                 // Not submitted or unknown
                 const proceed = confirm("You must be a verified member to book a fellow. Would you like to complete verification now?");
                 if (proceed) router.push('/onboarding');
             }
             return;
        }
        
        try {
            const fellowId = fellow.id || fellow._id || fellow.userId;
            
            // Validate inputs
            if (!bookingDate || !bookingTime) {
                showNotification('error', "Please select a date and time for your booking.");
                return;
            }

            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/request`, {
                companionId: fellowId,
                scheduledDate: bookingDate,
                startTime: bookingTime,
                duration: duration
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setStep('success');
        } catch (error) {
            console.error("Booking failed:", error);
            showNotification('error', error.response?.data?.message || "Failed to request. Try again.");
        }
    };

    if (loading) return <Loading message="Loading profile..." />;
    if (!fellow) return <div className="min-h-screen flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">Fellow not found</div>;

    // Derived Data
    const isActive = fellow.availability && Object.values(fellow.availability).some(Boolean);
    const comfortZones = fellow.tags || ['Sitting', 'Walking'];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
            
            {/* Header / Back */}
            <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
                <button onClick={() => router.back()} suppressHydrationWarning={true} className="group flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all">←</div>
                    <span>Back to Search</span>
                </button>
            </div>

            <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                
                {/* LEFT COL: IMAGE & KEY STATS */}
                <div className="md:col-span-5 h-fit sticky top-24">
                     {/* Image Card */}
                     <div className="bg-white rounded-[2.5rem] p-3 shadow-xl shadow-gray-200/50 mb-6">
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative bg-gray-100">
                             {fellow.profilePhoto ? (
                                <img src={fellow.profilePhoto} className="w-full h-full object-cover" />
                             ) : (
                                <div className="w-full h-full flex items-center justify-center text-6xl text-gray-200">👤</div>
                             )}
                             
                             {/* Floating Price Tag */}
                             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm px-4 py-2 rounded-full">
                                <span className="text-xs font-bold text-gray-900">₹{fellow.pricePerHour}/hr</span>
                             </div>
                        </div>
                     </div>

                     {/* Key Stats Row */}
                     <div className="grid grid-cols-2 gap-3">
                         <div className="bg-white p-4 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center">
                             <span className="text-2xl mb-1">📍</span>
                             <span className="text-xs font-bold text-gray-900 truncate w-full">{fellow.city || 'Remote'}</span>
                         </div>
                         <div className="bg-white p-4 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center">
                             <span className="text-2xl mb-1">{isActive ? '🟢' : '⚪'}</span>
                             <span className="text-xs font-bold text-gray-900">{isActive ? 'Active' : 'Offline'}</span>
                         </div>
                     </div>
                </div>

                {/* RIGHT COL: INFO & ACTIONS */}
                <div className="md:col-span-7 pt-4">
                    
                    {step === 'review' && (
                        <div className="animate-slideUp">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{fellow.fullName}</h1>
                            <p className="text-gray-400 font-medium mb-8 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Verified Fellow
                            </p>

                            <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
                                "{fellow.description || "I am here simply to be present. No expectations."}"
                            </div>

                            {/* Tags */}
                            <div className="mb-10">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Comfort Zones</h3>
                                <div className="flex flex-wrap gap-2">
                                    {comfortZones.map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm mb-12">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex justify-between items-center">
                                    <span>Typical Availability</span>
                                    <span className="text-gray-900 font-mono">{fellow.startTime || fellow.start_time || '--:--'} - {fellow.endTime || fellow.end_time || '--:--'} IST</span>
                                </h3>
                                
                                <div className="flex justify-between items-center gap-2">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => {
                                        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
                                        const isAvail = fellow[days[i] + '_availability'] || (fellow.availability && fellow.availability[days[i]]);
                                        return (
                                            <div key={i} className="flex flex-col items-center gap-2">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${isAvail ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                                                    {d}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Booking Inputs */}
                            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 mb-8">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Select Date & Time</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Date</label>
                                        <input 
                                            type="date" 
                                            value={bookingDate}
                                            min={minDate}
                                            onChange={(e) => setBookingDate(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors font-medium bg-white"
                                            suppressHydrationWarning={true}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Time</label>
                                        <input 
                                            type="time" 
                                            value={bookingTime}
                                            onChange={(e) => setBookingTime(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors font-medium bg-white"
                                            suppressHydrationWarning={true}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Duration</label>
                                    <div className="flex gap-2">
                                        {['30', '60', '90'].map((d) => (
                                            <button 
                                                key={d}
                                                onClick={() => setDuration(d)}
                                                className={`flex-1 py-2 rounded-lg text-sm font-bold border transition-all ${duration === d ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
                                                suppressHydrationWarning={true}
                                            >
                                                {d} min
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 text-xs text-gray-400 font-medium">
                                    * Fellow is typically available: {fellow.startTime || fellow.start_time || '09:00'} - {fellow.endTime || fellow.end_time || '22:00'}
                                </div>
                            </div>

                            {/* Action */}
                            <button 
                                onClick={() => setStep('hesitation')}
                                disabled={!bookingDate || !bookingTime}
                                className="w-full py-5 bg-black text-white font-bold text-lg rounded-[1.5rem] hover:bg-gray-800 hover:-translate-y-1 transition-all shadow-xl shadow-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                                suppressHydrationWarning={true}
                            >
                                Request Booking
                            </button>
                        </div>
                    )}

                    {step === 'hesitation' && (
                        <div className="animate-fadeIn bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Wait. Read this.</h2>
                            
                            <div className="space-y-4 mb-8">
                                {[
                                    { key: 'publicOnly', label: 'Public spaces only. No private homes.' },
                                    { key: 'noTouch', label: 'Absolutely no physical contact.' },
                                    { key: 'silenceOk', label: 'I accept silence as valid presence.' },
                                    { key: 'canLeave', label: 'I understand they can leave anytime.' }
                                ].map((item) => (
                                    <label key={item.key} className={`flex items-start gap-4 p-4 border rounded-2xl cursor-pointer transition-all ${checks[item.key] ? 'border-black bg-gray-50' : 'border-gray-100'}`}>
                                        <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center ${checks[item.key] ? 'bg-black border-black' : 'border-gray-300'}`}>
                                            {checks[item.key] && <span className="text-white text-[10px]">✓</span>}
                                        </div>
                                        <input type="checkbox" checked={checks[item.key]} onChange={(e) => setChecks({...checks, [item.key]: e.target.checked})} className="hidden" />
                                        <span className={`text-sm font-medium ${checks[item.key] ? 'text-gray-900' : 'text-gray-500'}`}>{item.label}</span>
                                    </label>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button onClick={() => setStep('review')} suppressHydrationWarning={true} className="flex-1 py-4 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200">Cancel</button>
                                <button 
                                    onClick={handleConfirm}
                                    disabled={!Object.values(checks).every(Boolean)}
                                    className="flex-[2] py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed"
                                    suppressHydrationWarning={true}
                                >
                                    I Agree
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="animate-fadeIn bg-green-50 rounded-[2.5rem] p-10 text-center">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">✓</div>
                            <h2 className="text-3xl font-bold text-green-900 mb-4">Request Sent</h2>
                            <p className="text-green-700 mb-8 font-medium">Sit tight. {fellow.fullName} will review your request.</p>
                            <button onClick={() => router.push('/')} suppressHydrationWarning={true} className="px-8 py-3 bg-white text-green-900 font-bold rounded-full shadow-sm hover:bg-green-100">Back to Home</button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default FellowProfile;
