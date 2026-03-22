"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '../../context/AuthContext'

/**
 * NavBar Component - Updated for Simplified Structure
 * 
 * Removed old category links (Category 1-4)
 * Now focuses on Companions browsing and user actions
 */
const NavBar = () => {

    const router = useRouter(); 
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { token, logout, userData } = useAuth();

    // Navigation links visibility logic
    // 1. Hide for admins/superadmins (they use the user menu for dashboard)
    // 2. Hide for unverified users (they should focus on onboarding)
    const isSpecialRole = userData?.role === 'admin' || userData?.role === 'superadmin';
    // Show links for all normal users (verified or not) and guests
    const showLinks = !isSpecialRole;
    
    const links = showLinks ? [
        { name: "Don't Go Alone", path: "/companions?mode=dont-go-alone" },
        { name: "Sit With Me", path: "/companions?mode=sit-with-me" },
        { name: "Be Around", path: "/companions?mode=be-around" },
        { name: "Explore Together", path: "/companions?mode=explore-together" },
    ] : [];

    if (pathname === '/login') return null;

    return (
    <>
    <header className='sticky top-4 z-50 flex items-center justify-between text-sm py-3 px-6 border border-white/10 rounded-full mx-auto w-[95%] max-w-7xl bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-300'>

        {/* Logo & Mobile Toggle */}
        <div className="flex items-center gap-6">
            
            {/* Mobile Menu Button - Inverted Colors */}
            <button suppressHydrationWarning={true} className="lg:hidden p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {/* Brand Logo */}
            <div className="flex items-center gap-2 cursor-pointer group" onClick={()=>router.push('/')}>
                <div className="relative w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full group-hover:bg-green-400 transition-all shadow-md group-hover:shadow-green-500/20">
                    <span className="font-bold text-lg">p.</span>
                </div>
                <span className="font-bold tracking-tight text-white lowercase transition-all duration-300 hidden md:block text-4xl">
                    prsnn.
                </span>
            </div>
        </div>
        
        {/* Desktop Navigation Links - Inverted Colors */}
        <ul className="hidden lg:flex gap-8 font-semibold text-white/70 text-sm">
            {links.map(link => (
                <li key={link.path}>
                    <Link href={link.path} className={`hover:text-white hover:opacity-100 transition-all relative py-1 ${pathname === link.path ? "text-white opacity-100 font-bold" : ""}`}>
                        {link.name}
                        {pathname === link.path && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span>
                        )}
                    </Link>
                </li>
            ))}
        </ul>

        {/* Right Side: User Menu or Login Button */}
        <div className='flex items-center justify-center gap-4'>
            {
                token 
                ? (
                <div className='flex items-center justify-center gap-3 cursor-pointer group relative z-50'>
                    <div className="flex flex-col items-end md:block hidden">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">{userData?.username || 'User'}</span>
                    </div>
                    <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            className='w-10 h-10 rounded-full object-cover border-2 border-white/20 shadow-md group-hover:border-green-500 transition-colors' 
                            src={userData?.profilePhotoUrl || "/profile_pic.png"} 
                            width={40} 
                            height={40} 
                            alt="Profile" 
                        />
                    </div>
                    
                    {/* Dropdown Menu - Kept Light for contrast or Dark? Keeping Light as standard UI pattern for now, but improving shadow */}
                    <div className='absolute top-full right-0 pt-4 hidden group-hover:block min-w-64'>
                        <div className='flex flex-col bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden py-2 animate-fadeIn ring-1 ring-black/5'>
                            <div className="px-5 py-4 border-b border-gray-50 bg-gray-50/50">
                                <p className="text-sm font-bold text-gray-900">Signed in as</p>
                                <p className="text-xs text-gray-500 truncate font-mono mt-0.5">{userData?.email}</p>
                            </div>
                            {userData?.is_verified || userData?.role === 'superadmin' ? (
                                <>
                                    {userData?.role !== 'admin' && userData?.role !== 'superadmin' && (
                                        <>
                                            <p onClick={()=>{router.push('/profile')}} className='px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 transition-all cursor-pointer flex items-center gap-3'>
                                                <span>My Profile</span>
                                            </p>
                                            <p onClick={()=>{router.push('/my-bookings')}} className='px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 transition-all cursor-pointer'>
                                                My Bookings
                                            </p>
                                        </>
                                    )}
                                    
                                    {/* Verification Badges */}
                                    {userData?.role === 'companion' && (
                                        <div className='px-5 py-2 text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50/50 flex items-center gap-2 mx-2 rounded-lg my-1'>
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                             Verified Companion
                                         </div>
                                    )}
                                    {userData?.role === 'admin' && (
                                        <p onClick={()=>{router.push('/admin')}} className='px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-all cursor-pointer border-t border-gray-50'>
                                            Admin Dashboard
                                        </p>
                                    )}
                                    {userData?.role === 'superadmin' && (
                                        <p onClick={()=>{router.push('/super-admin')}} className='px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-all cursor-pointer border-t border-gray-50'>
                                            Super Admin Dashboard
                                        </p>
                                    )}
                                </>
                            ) : (
                                <>
                                    {userData?.role === 'admin' ? (
                                        <p onClick={()=>{router.push('/admin/onboarding')}} className='px-5 py-3 text-sm font-bold text-gray-900 hover:bg-yellow-50 transition-all cursor-pointer flex items-center gap-2'>
                                            Complete Admin Onboarding →
                                        </p>
                                    ) : (
                                        <p onClick={()=>{router.push('/onboarding')}} className='px-5 py-3 text-sm font-bold text-gray-900 hover:bg-yellow-50 transition-all cursor-pointer flex items-center gap-2'>
                                            Complete Onboarding →
                                        </p>
                                    )}
                                </>
                            )}
                            
                            <div className="h-px bg-gray-100 my-1 mx-4"></div>
                            <p onClick={()=>logout()} className='px-5 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 transition-all cursor-pointer hover:text-red-600'>
                                Logout
                            </p>
                        </div>
                    </div>
                </div>
                ) : (
                <button 
                    onClick={()=>router.push('/login')} 
                    suppressHydrationWarning
                    className='bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-xs uppercase tracking-wider'
                  >
                    Be a Presence 
                  </button>
                )
            }
        </div>
    </header>

    {/* Mobile Sidebar */}
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-white border-l border-gray-100 transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-xl text-gray-900 tracking-tight lowercase">prsnn.</span>
                </div>
                <button suppressHydrationWarning={true} onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <ul className="flex flex-col p-4 gap-2 font-medium">
                {links.map(link => (
                    <li key={link.path}>
                        <Link 
                            href={link.path} 
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-5 py-3 rounded-xl transition-all ${pathname === link.path ? "bg-black text-white shadow-lg" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}

                {token && (
                    <>
                        <div className="h-px bg-gray-100 my-2 mx-2"></div>
                        <li className="px-5 py-1 text-xs font-bold text-gray-400 uppercase tracking-widest">Account</li>
                        
                        {userData?.is_verified || userData?.role === 'superadmin' ? (
                            <>
                                {userData?.role !== 'admin' && userData?.role !== 'superadmin' && (
                                    <>
                                        <li>
                                            <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="block px-5 py-3 rounded-xl transition-all text-gray-600 hover:bg-green-50 hover:text-green-700">My Profile</Link>
                                        </li>
                                        <li>
                                            <Link href="/my-bookings" onClick={() => setIsMenuOpen(false)} className="block px-5 py-3 rounded-xl transition-all text-gray-600 hover:bg-green-50 hover:text-green-700">My Bookings</Link>
                                        </li>
                                    </>
                                )}
                                {userData?.role === 'admin' && (
                                    <li>
                                        <Link href="/admin" onClick={() => setIsMenuOpen(false)} className="block px-5 py-3 rounded-xl transition-all text-gray-900 hover:bg-gray-50">Admin Dashboard</Link>
                                    </li>
                                )}
                                {userData?.role === 'superadmin' && (
                                    <li>
                                        <Link href="/super-admin" onClick={() => setIsMenuOpen(false)} className="block px-5 py-3 rounded-xl transition-all text-gray-900 hover:bg-gray-50">Super Admin Dashboard</Link>
                                    </li>
                                )}
                            </>
                        ) : (
                            <>
                                {userData?.role === 'admin' ? (
                                    <li>
                                        <Link href="/admin/onboarding" onClick={() => setIsMenuOpen(false)} className="block px-5 py-3 rounded-xl font-bold transition-all text-gray-900 hover:bg-yellow-50 flex items-center gap-2">Admin Onboarding →</Link>
                                    </li>
                                ) : (
                                    <li>
                                        <Link href="/onboarding" onClick={() => setIsMenuOpen(false)} className="block px-5 py-3 rounded-xl font-bold transition-all text-gray-900 hover:bg-yellow-50 flex items-center gap-2">Complete Onboarding →</Link>
                                    </li>
                                )}
                            </>
                        )}
                        
                        <li>
                            <button onClick={() => { logout(); setIsMenuOpen(false); }} className="w-full text-left px-5 py-3 rounded-xl font-bold transition-all text-red-500 hover:bg-red-50 hover:text-red-600 whitespace-nowrap">Logout</button>
                        </li>
                    </>
                )}
                {!token && (
                    <>
                        <div className="h-px bg-gray-100 my-2 mx-2"></div>
                        <li>
                            <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block px-5 py-3 rounded-xl font-bold text-center transition-all bg-black text-white hover:bg-gray-800 shadow-md">Be a Presence</Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar
