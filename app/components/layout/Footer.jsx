'use client';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';

const Footer = () => {
  const { userData } = useAuth();

  return (
    <footer className="w-full bg-black text-white py-10 mt-10 rounded-t-[2.5rem]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Brand Col */}
            <div className="col-span-1 md:col-span-2">
                <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
                     <span className="text-2xl font-bold tracking-tight lowercase text-white">Presence without pressure.</span>
                </Link>
                <p className="text-gray-400 font-medium leading-relaxed max-w-sm mb-4 text-sm">
                    We&apos;re building a world where no one has to be alone if they don&apos;t want to be. 
                    Pressure-free, safe, and purely platonic.
                </p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-green-500 pl-3">
                    &ldquo;You can leave anytime. No pressure.&rdquo;
                </p>
                
                <div className="flex gap-4">
                     <a href="https://x.com/prsnn_india" target="_blank" rel="noopener noreferrer" suppressHydrationWarning={true} className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs">𝕏</a>
                     <a href="https://www.linkedin.com/company/112081521" target="_blank" rel="noopener noreferrer" suppressHydrationWarning={true} className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs">in</a>
                     <a href="https://www.instagram.com/prsnn_india" target="_blank" rel="noopener noreferrer" suppressHydrationWarning={true} className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs">IG</a>
                </div>
            </div>

            {/* Links Col 1 */}
            <div>
                <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-6">Explore</h4>
                <ul className="space-y-4">
                    <li><Link href="/companions" className="text-gray-300 hover:text-white transition-colors">Find a Companion</Link></li>
                    {!userData && (
                        <li><Link href="/onboarding" className="text-gray-300 hover:text-white transition-colors">Become a Companion</Link></li>
                    )}
                    <li><Link href="/handshake" className="text-gray-300 hover:text-white transition-colors">The Handshake</Link></li>
                    <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
            </div>

             {/* Links Col 2 */}
            <div>
                <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-6">Legal</h4>
                <ul className="space-y-4">
                    <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                    <li><Link href="/code-of-conduct" className="text-gray-300 hover:text-white transition-colors">Code of Conduct</Link></li>
                    <li><Link href="/safety" className="text-gray-300 hover:text-white transition-colors">Safety Center</Link></li>
                    <li><Link href="/refund-policy" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link></li>
                    <li><Link href="/payment-terms" className="text-gray-300 hover:text-white transition-colors">Payment Terms</Link></li>
                    <li><Link href="/dispute-policy" className="text-gray-300 hover:text-white transition-colors">Dispute Policy</Link></li>
                </ul>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-600 uppercase tracking-widest">
            <p suppressHydrationWarning={true}>&copy; {new Date().getFullYear()} prsnn.</p>
            <p className="opacity-50">Mumbai • Bangalore • Delhi • Hyderabad</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
