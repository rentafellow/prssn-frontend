"use client";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import Loading from "../components/common/Loading";

export default function AdminLayout({ children }) {
    const { token, userData, loading: authLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (authLoading) return;

        // 1. If not logged in, go to login
        if (!token) {
            router.push("/login");
            return;
        }

        // 2. Role Check
        if (userData && !['admin', 'superadmin'].includes(userData.role)) {
            router.push("/");
            return;
        }

        // 3. Admin Verification Guard
        // Admins must be verified to access anything NOT /admin/onboarding
        if (userData && userData.role === 'admin' && !userData.is_verified && pathname !== "/admin/onboarding") {
            router.push("/admin/onboarding");
            return;
        }
        
        // 4. If they ARE verified but trying to go to onboarding, send them to dashboard
        if (userData && userData.role === 'admin' && userData.is_verified && pathname === "/admin/onboarding") {
            router.push("/admin");
            return;
        }

    }, [token, userData, authLoading, pathname, router]);

    if (authLoading) {
        return <Loading message="Verifying access..." />;
    }

    // Safety check - while we are redirecting in useEffect, prevent content flash
    const isUnverifiedAdmin = userData?.role === 'admin' && !userData?.is_verified;
    const isTryingToAccessDashboard = pathname !== "/admin/onboarding";
    
    if (isUnverifiedAdmin && isTryingToAccessDashboard) {
        return <Loading message="Redirecting to onboarding..." />;
    }

    return <>{children}</>;
}
