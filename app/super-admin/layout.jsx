"use client";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Loading from "../components/common/Loading";

export default function SuperAdminLayout({ children }) {
    const { token, userData, loading: authLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (authLoading) return;

        // 1. If not logged in, go to login
        if (!token) {
            router.push("/login");
            return;
        }

        // 2. Role Check - SuperAdmin Only
        if (userData && userData.role !== 'superadmin') {
            router.push("/"); // Or /admin if they are an admin
            return;
        }

    }, [token, userData, authLoading, router]);

    if (authLoading) {
        return <Loading message="Verifying super access..." />;
    }

    // Safety check
    if (userData?.role !== 'superadmin') {
        return <Loading message="Unauthorized. Redirecting..." />;
    }

    return <>{children}</>;
}
