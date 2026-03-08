"use client";
import { useAuth } from './context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';
import Hero from './components/home/Hero';
import RealityCheck from './components/home/RealityCheck';
import HowItWorks from './components/home/HowItWorks';
import Testimonials from './components/home/Testimonials';

export default function Home() {
  const { userData, token, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (token && userData) {
      checkProfileStatus();
    }
  }, [token, userData]);

  const checkProfileStatus = async () => {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/profile/check`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (err) {
      if (err.response && err.response.status === 401) {
        logout();
      }
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <HowItWorks />
      <RealityCheck />
      <Testimonials />
    </main>
  );
}
