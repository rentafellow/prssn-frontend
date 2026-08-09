"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Loading from "../../components/common/Loading";

const AdminOnboardingPage = () => {
    const { token, userData } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('loading');
    
    // Form Data
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        photo: null,
        adminVerificationDocument: null
    });

    useEffect(() => {
        if (!token) return;
        
        // Super Admin has no onboarding -> Redirect to Dashboard
        if (userData?.role === 'superadmin') {
             router.push('/super-admin');
             return;
        }

        // Only Admin role allowed here
        if (userData?.role !== 'admin') {
            router.push('/');
            return;
        }
        checkStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, userData]);

    const checkStatus = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/check`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.data.hasProfile) {
                setStatus(res.data.status); // 'pending', 'verified', 'rejected'
            } else {
                setStatus('not_submitted');
            }
        } catch (err) {
            console.error(err);
            setStatus('not_submitted');
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prev => ({ ...prev, [name]: files[0] }));
    };

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append('fullName', formData.fullName);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('photo', formData.photo);
        data.append('adminVerificationDocument', formData.adminVerificationDocument);

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/admin-onboard`, data, {
                headers: { 
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert("Verification documents submitted successfully!");
            checkStatus(); // Refresh status -> should go to pending
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Submission failed");
        } finally {
            setLoading(false);
        }
    };

    if (!token || status === 'loading') return <Loading message="Checking status..." />;

    if (status === 'verified') {
        router.push('/admin');
        return <Loading message="Redirecting..." />;
    }

    if (status === 'pending') {
         return (
             <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
                <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-xl max-w-lg w-full">
                  <div className="mx-auto h-20 w-20 bg-yellow-50 text-yellow-500 rounded-full flex items-center justify-center mb-6 text-4xl animate-pulse">
                    ⏳
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Verification Pending</h1>
                  <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                    Your admin credentials are currently under review by a Super Admin. We&apos;ll notify you once approved.
                  </p>
                  <button onClick={() => router.push('/')} className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                      Return Home
                  </button>
                </div>
              </div>
        );
    }
    
    // If rejected, show message but allow resubmit (code below renders form)
    
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans flex items-center justify-center">
            <div className="max-w-xl w-full">
                {status === 'rejected' && (
                    <div className="mb-8 bg-red-50 border border-red-100 text-red-700 p-6 rounded-2xl shadow-sm flex items-start gap-4">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <p className="font-bold text-lg mb-1">Submission Rejected</p>
                            <p className="text-sm opacity-90">Your previous submission was rejected. Please review your details and resubmit.</p>
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-10 text-white text-center relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-10 translate-x-10 pointer-events-none"></div>
                         <h1 className="text-3xl font-bold tracking-tight mb-2 relative z-10">Admin Verification</h1>
                         <p className="text-gray-400 font-medium relative z-10">Submit your details for administrative access</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-10 space-y-8">
                        <div>
                             <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Full Name</label>
                             <input 
                                type="text" 
                                name="fullName" 
                                required 
                                value={formData.fullName} 
                                onChange={handleTextChange} 
                                className="w-full px-5 py-4 border border-gray-200 bg-gray-50 rounded-2xl font-medium focus:ring-2 focus:ring-black/5 focus:border-gray-300 outline-none transition-all placeholder:text-gray-300" 
                                placeholder="Enter your official name" 
                            />
                        </div>
                        <div>
                             <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Phone Number</label>
                             <input 
                                type="tel" 
                                name="phoneNumber" 
                                required 
                                value={formData.phoneNumber} 
                                onChange={handleTextChange}
                                className="w-full px-5 py-4 border border-gray-200 bg-gray-50 rounded-2xl font-medium focus:ring-2 focus:ring-black/5 focus:border-gray-300 outline-none transition-all placeholder:text-gray-300" 
                                placeholder="+91 9876543210" 
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Profile Photo</label>
                                <div className="relative">
                                    <input 
                                        type="file" 
                                        name="photo" 
                                        required 
                                        onChange={handleFileChange} 
                                        accept="image/*"
                                        className="w-full text-xs text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 transition-all cursor-pointer" 
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Verification Doc</label>
                                <div className="relative">
                                    <input 
                                        type="file" 
                                        name="adminVerificationDocument" 
                                        required 
                                        onChange={handleFileChange} 
                                        accept="image/*,application/pdf"
                                        className="w-full text-xs text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 transition-all cursor-pointer" 
                                    />
                                </div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 mt-2 tracking-wide pl-2">ID Proof / Appointment Letter</p>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full py-4 bg-gray-900 text-white font-bold text-md rounded-2xl hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                        >
                            {loading ? "Submitting..." : "Submit for Review"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminOnboardingPage;
