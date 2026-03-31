"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

import Alert from "../components/common/Alert";

const Login = () => {
  const [state, setState] = useState("Sign In"); // 'Sign In' or 'Sign Up'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alert, setAlert] = useState(null); // { type, title, message }
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const { login } = useAuth();
  
  const [verificationImage, setVerificationImage] = useState(null);

  // Clear alert when switching states
  useEffect(() => {
    setAlert(null);
    setEmail("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
    setVerificationImage(null);
    setShowPassword(false);
    setShowConfirmPassword(false);
  }, [state]);

  // Password validation function
  const validatePassword = (pwd) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

    if (pwd.length < minLength) {
      return { valid: false, message: "Password must be at least 8 characters long" };
    }
    if (!hasUpperCase) {
      return { valid: false, message: "Password must contain at least one uppercase letter" };
    }
    if (!hasLowerCase) {
      return { valid: false, message: "Password must contain at least one lowercase letter" };
    }
    if (!hasNumber) {
      return { valid: false, message: "Password must contain at least one number" };
    }
    if (!hasSpecialChar) {
      return { valid: false, message: "Password must contain at least one special character (!@#$%^&*...)" };
    }
    return { valid: true };
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setAlert(null);
    setLoading(true);

    // Validate password for Sign Up
    if (state === "Sign Up") {
      // Validate username length
      if (username.length < 5) {
        setAlert({ type: "error", title: "Invalid Username", message: "Username must be at least 5 characters long" });
        setLoading(false);
        return;
      }

      const passwordValidation = validatePassword(password);
      if (!passwordValidation.valid) {
        setAlert({ type: "error", title: "Invalid Password", message: passwordValidation.message });
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setAlert({ type: "error", title: "Error", message: "Passwords do not match" });
        setLoading(false);
        return;
      }
    }
    
    try {
      if (state === "Sign Up") {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        if (verificationImage) {
          formData.append("verificationImage", verificationImage);
        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, formData);
        
        // Pass email to verification page
        router.push(`/verify-email?email=${encodeURIComponent(email)}`);
      } else {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, { email, password });
        const data = response.data;
        if (data.token) {
          login(data.token, data.user);
          // Redirect based on role
          if (data.user.role === 'superadmin') {
            router.push("/super-admin");
          } else if (data.user.role === 'admin') {
            router.push("/admin");
          } else {
            router.push("/");
          }
        }
      }
      
    } catch (error) {
      console.error(error);
      const msg = error.response?.data?.message || "Something went wrong. Please try again.";
      
      // Check if error is due to email verification requirement
      if (error.response?.status === 403 && error.response?.data?.emailVerificationRequired) {
        const userEmail = error.response.data.email || email;
        setAlert({ 
          type: "warning", 
          title: "Email Verification Required", 
          message: "Redirecting you to verify your email..." 
        });
        
        // Redirect to verify-email page after 2 seconds
        setTimeout(() => {
          router.push(`/verify-email?email=${encodeURIComponent(userEmail)}`);
        }, 2000);
      } else {
        setAlert({ type: "error", title: "Error", message: msg });
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleState = () => {
    setState(prev => prev === "Sign In" ? "Sign Up" : "Sign In");
  };

  return (

    <div className="min-h-screen md:h-screen w-full flex items-center justify-center relative bg-gray-50 p-4 sm:p-6 overflow-y-auto md:overflow-y-hidden overflow-x-hidden">
      {/* Background Decor - Removed clashing blobs for cleaner look matching the theme */}
      
      {/* Close/Home Button */}
      <button 
        onClick={() => router.push('/')}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white text-gray-500 hover:text-black hover:bg-gray-100 transition-all shadow-sm"
        aria-label="Go to Home"
        suppressHydrationWarning={true}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      
      {alert && (
        <Alert 
          type={alert.type} 
          title={alert.title} 
          message={alert.message} 
          onClose={() => setAlert(null)} 
        />
      )}

      <div className="w-full max-w-4xl h-auto md:h-[650px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 my-auto relative">
        
        {/* Left Side - Visual/Marketing */}
        <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between relative transition-all duration-500 bg-gray-900 text-white overflow-hidden`}>
           <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2 tracking-tight">prsnn.</h1>
            <p className="text-gray-400 text-sm font-medium">connect, collaborate, and grow with the community.</p>
          </div>
          
          <div className="relative z-10 my-auto space-y-8">
             <div className="space-y-4">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                 {state === "Sign In" ? "Welcome Back!" : "Join Us Today!"}
               </h2>
               <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-xs">
                 {state === "Sign In" 
                   ? "Enter your personal details to begin using all of the site features." 
                   : "Register to find companionship or offer your presence."}
               </p>
             </div>
             
             <button 
               onClick={toggleState}
               className="mt-8 px-8 py-4 rounded-2xl bg-white/10 text-white hover:bg-white hover:text-black transition-all font-bold text-sm uppercase tracking-widest backdrop-blur-sm border border-white/20"
               suppressHydrationWarning={true}
             >
               {state === "Sign In" ? "Sign Up" : "Sign In"}
             </button>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
          <div className="max-w-xs w-full mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">
              {state === "Sign In" ? "Sign In" : "Create Account"}
            </h2>

            <form onSubmit={onSubmitHandler} className="space-y-4">
              {state === "Sign Up" && (
                <div className="group relative">
                  <input
                    type="text"
                    required
                    placeholder="Username (min 5 characters)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-gray-400 focus:bg-white rounded-2xl focus:outline-none transition-all text-sm font-medium placeholder-gray-400 text-gray-900"
                    suppressHydrationWarning={true}
                  />
                </div>
              )}

              <div className="group relative">
                <input
                  type={state === "Sign In" ? "text" : "email"}
                  required
                  placeholder={state === "Sign In" ? "Email or Username" : "Email Address"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                   className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-gray-400 focus:bg-white rounded-2xl focus:outline-none transition-all text-sm font-medium placeholder-gray-400 text-gray-900"
                   suppressHydrationWarning={true}
                />
              </div>

              <div className="group relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-gray-400 focus:bg-white rounded-2xl focus:outline-none transition-all text-sm font-medium placeholder-gray-400 text-gray-900"
                   suppressHydrationWarning={true}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  suppressHydrationWarning={true}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  )}
                </button>
              </div>

               {state === "Sign Up" && (
                <>
                  <div className="group relative">
                     <input
                       type={showConfirmPassword ? "text" : "password"}
                       required
                       placeholder="Confirm Password"
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-gray-400 focus:bg-white rounded-2xl focus:outline-none transition-all text-sm font-medium placeholder-gray-400 text-gray-900"
                        suppressHydrationWarning={true}
                     />
                  </div>
                </>
               )}

              {state === "Sign In" && (
                <div className="flex items-center justify-between text-xs font-medium">
                  <button 
                    type="button" 
                    onClick={() => router.push('/forgot-password')} 
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                    suppressHydrationWarning={true}
                  >
                    Forgot your password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-gray-900 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                suppressHydrationWarning={true}
              >
                {loading ? "Processing..." : (state === "Sign In" ? "Sign In" : "Sign Up")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
