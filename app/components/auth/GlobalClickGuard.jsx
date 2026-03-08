"use client";
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const GlobalClickGuard = () => {
    // The user has requested to disable the global click guard and allow open browsing.
    // Only booking actions are now restricted.
    return null;
};

export default GlobalClickGuard;
