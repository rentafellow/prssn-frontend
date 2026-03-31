"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Alert from "../components/common/Alert";
import { useAuth } from "../context/AuthContext";

const VerifyEmailContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login } = useAuth();
    
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null); // { type, title, message }

    useEffect(() => {
        const emailParam = searchParams.get("email");
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [searchParams]);

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-email`, {
                email,
                otp
            });
            const data = response.data;
            if (data.token) {
                setMessage({ type: "success", title: "Success!", message: "Email verified successfully. Logging you in..." });
                setTimeout(() => {
                    login(data.token, data.user);
                }, 1500);
            } else {
                setMessage({ type: "success", title: "Success!", message: "Email verified successfully. Redirecting to login..." });
                setTimeout(() => {
                    router.push("/login");
                }, 1500);
            }
        } catch (error) {
            setMessage({ 
                type: "error", 
                title: "Verification Failed", 
                message: error.response?.data?.message || "Invalid OTP or Email." 
            });
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        if (!email) {
            setMessage({ type: "error", title: "Error", message: "Please enter your email first." });
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/resend-otp`, { email });
            setMessage({ type: "success", title: "OTP Sent", message: "A new OTP has been sent to your email." });
        } catch (error) {
            setMessage({ 
                type: "error", 
                title: "Error", 
                message: error.response?.data?.message || "Failed to resend OTP." 
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
                <h2 className="text-3xl font-black text-[#2A332C] mb-4 text-center uppercase tracking-tight">Verify Email</h2>
                <p className="text-center text-gray-600 mb-8">Enter the OTP sent to your email address.</p>

                <form onSubmit={handleVerify} className="space-y-4">
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

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 bg-[#572bf1] text-white py-3 rounded-lg font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                    >
                        {loading ? "Verifying..." : "VERIFY EMAIL"}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button 
                        onClick={handleResendOtp}
                        disabled={loading}
                        className="text-sm font-medium text-gray-500 hover:text-[#4B6351] underline transition-colors"
                    >
                        Resend OTP
                    </button>
                </div>
            </div>
        </div>
    );
};

const VerifyEmail = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyEmailContent />
        </Suspense>
    );
};

export default VerifyEmail;
