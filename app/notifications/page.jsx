"use client";
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Loading from '../components/common/Loading';
import { useNotification } from '../context/NotificationContext';

const timeAgo = (dateInput) => {
    const date = new Date(dateInput);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return "just now";
};

const NotificationsPage = () => {
    const { userData, token } = useAuth();
    const router = useRouter();
    const { showNotification } = useNotification();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clearing, setClearing] = useState(false);

    useEffect(() => {
        if (!token) {
            router.push('/login');
            return;
        }
        fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const fetchNotifications = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notifications`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setNotifications(data);
            } else {
                console.error("Failed to fetch notifications");
            }
        } catch (error) {
            console.error("Error fetching notifications:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleClearAll = async () => {
        if (notifications.length === 0) return;
        
        setClearing(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notifications/clear`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.ok) {
                setNotifications([]);
                showNotification('success', 'All notifications cleared');
            } else {
                const data = await res.json();
                showNotification('error', data.message || 'Failed to clear notifications');
            }
        } catch (error) {
            console.error("Error clearing notifications:", error);
            showNotification('error', 'Something went wrong');
        } finally {
            setClearing(false);
        }
    };

    if (loading) {
        return <Loading message="Loading notifications..." />;
    }

    return (
        <div className="w-full min-h-screen py-10 px-4 md:px-0 bg-gray-50/50">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Notifications</h1>
                        <p className="text-gray-500 font-medium mt-1">Stay updated with your latest alerts</p>
                    </div>
                    
                    {notifications.length > 0 && (
                        <button 
                            onClick={handleClearAll}
                            disabled={clearing}
                            className="px-4 py-2 bg-red-50 text-red-600 font-bold text-sm rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                        >
                            {clearing ? 'Clearing...' : 'Clear All'}
                        </button>
                    )}
                </div>

                <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm min-h-[50vh]">
                    {notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full pt-16 pb-12 text-center">
                            <div className="w-24 h-24 mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                                <span className="text-4xl text-gray-300">📭</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No notifications yet</h3>
                            <p className="text-gray-500 font-medium">When you get bookings, acceptances, or payments, they will show up here.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {notifications.map((notification) => (
                                <div 
                                    key={notification._id} 
                                    className={`p-5 rounded-2xl border transition-all ${
                                        !notification.isRead 
                                            ? 'bg-blue-50/30 border-blue-100 shadow-sm' 
                                            : 'bg-white border-gray-100'
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            {!notification.isRead ? (
                                                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                            ) : (
                                                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className={`text-base ${!notification.isRead ? 'font-bold text-gray-900' : 'font-medium text-gray-600'}`}>
                                                {notification.message}
                                            </p>
                                            <p className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-wide">
                                                {timeAgo(notification.createdAt)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationsPage;
