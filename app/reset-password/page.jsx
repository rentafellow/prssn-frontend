"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Alert from "../components/common/Alert";

const ResetPasswordContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null); 

    useEffect(() => {
        const emailParam = searchParams.get("email");
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage({ type: "error", title: "Error", message: "Passwords do not match" });
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`, {
                email,
                otp,
                newPassword
            });
            setMessage({ type: "success", title: "Success!", message: "Password reset successfully. Redirecting to login..." });
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        } catch (error) {
            setMessage({ 
                type: "error", 
                title: "Error", 
                message: error.response?.data?.message || "Failed to reset password." 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen md:h-screen w-full flex items-center justify-center relative bg-[#F9F5D7] p-4 sm:p-6">
             <button 
                onClick={() => router.push('/login')}
                className="absolute top-6 right-6 z-50 p-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all shadow-sm"
                aria-label="Back to Login"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            {message && (
                <Alert 
                    type={message.type} 
                    title={message.title} 
                    message={message.message} 
                    onClose={() => setMessage(null)} 
                />
            )}

            <div className="w-full max-w-md bg-[#FCFCE4] rounded-[2rem] shadow-2xl overflow-hidden border-2 border-black p-8 md:p-12">
                <h2 className="text-3xl font-black text-[#2A332C] mb-4 text-center uppercase tracking-tight">Reset Password</h2>
                <p className="text-center text-gray-600 mb-8">Enter the OTP and your new password.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="group relative">
                        <input
                            type="email"
                            required
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-[#F4F6E5] border-2 border-transparent focus:border-[#4B6351] rounded-xl focus:outline-none transition-all text-sm font-medium placeholder-gray-500 text-black"
                        />
                    </div>
                    <div className="group relative">
                        <input
                            type="text"
                            required
                            placeholder="Enter 6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                            className="w-full px-4 py-3 bg-[#F4F6E5] border-2 border-transparent focus:border-[#4B6351] rounded-xl focus:outline-none transition-all text-sm font-medium placeholder-gray-500 text-black tracking-widest text-center"
                        />
                    </div>
                    
                    <div className="group relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-[#F4F6E5] border-2 border-transparent focus:border-[#4B6351] rounded-xl focus:outline-none transition-all text-sm font-medium placeholder-gray-500 text-black"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-[#4B6351] transition-colors"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                     <div className="group relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-[#F4F6E5] border-2 border-transparent focus:border-[#4B6351] rounded-xl focus:outline-none transition-all text-sm font-medium placeholder-gray-500 text-black"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 bg-[#572bf1] text-white py-3 rounded-lg font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                    >
                        {loading ? "Resetting..." : "RESET PASSWORD"}
                    </button>
                </form>
            </div>
        </div>
    );
};

const ResetPassword = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResetPasswordContent />
        </Suspense>
    );
};

export default ResetPassword;
