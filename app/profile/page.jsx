"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Loading from '../components/common/Loading';
import { useNotification } from '../context/NotificationContext';
import cachedFetch, { clearCache } from '../utils/cache';

/**
 * Profile Page with Edit Functionality
 */
const Profile = () => {
    const { userData, logout } = useAuth();
    const router = useRouter();
    const { showNotification } = useNotification();
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        fullName: '',
        phoneNumber: '',
        city: '',
        area: '',
        description: '',
        pricePerHour: '',
    });

    useEffect(() => {
        if (userData) {
            fetchProfile();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData]);

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const data = await cachedFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            setProfileData(data);
            
            // Initialize form data
            setFormData({
                username: data.username || userData.username || '',
                email: data.email || userData.email || '',
                fullName: data.fullName || '',
                phoneNumber: data.phoneNumber || '',
                city: data.city || '',
                area: data.area || '',
                description: data.description || '',
                pricePerHour: data.pricePerHour || '',
                startTime: data.startTime || '',
                endTime: data.endTime || '',
                tags: data.tags ? (Array.isArray(data.tags) ? data.tags.join(', ') : data.tags) : '',
                // Availability - fix mapping from object
                monday_availability: data.availability?.monday || false,
                tuesday_availability: data.availability?.tuesday || false,
                wednesday_availability: data.availability?.wednesday || false,
                thursday_availability: data.availability?.thursday || false,
                friday_availability: data.availability?.friday || false,
                saturday_availability: data.availability?.saturday || false,
                sunday_availability: data.availability?.sunday || false,
            });
        } catch (error) {
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };
    
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (name === 'phoneNumber') {
            // Allow only digits and max 10 chars
            if (!/^\d{0,10}$/.test(value)) {
                return;
            }
            
            if (value.length !== 10) {
                setPhoneError('Invalid mobile number');
            } else {
                setPhoneError('');
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSaveProfile = async () => {
        if (phoneError || formData.phoneNumber.length !== 10) {
            showNotification('error', "Please enter a valid 10-digit mobile number");
            return;
        }

        // Validate Price
        if (formData.pricePerHour) {
            const price = Number(formData.pricePerHour);
            if (isNaN(price) || price < 1 || price > 1000) {
                showNotification('error', "Hourly rate must be between ₹1 and ₹1000.");
                return;
            }
        }

        // Validate Time (09:00 to 21:00)
        const validateTime = (t) => {
            if (!t) return false;
            const hour = parseInt(t.split(':')[0], 10);
            const minute = parseInt(t.split(':')[1], 10);
            const timeInMins = hour * 60 + minute;
            const startLimit = 9 * 60; // 09:00
            const endLimit = 21 * 60;  // 21:00
            
            return timeInMins >= startLimit && timeInMins <= endLimit;
        };

        if (formData.startTime && !validateTime(formData.startTime)) {
            showNotification('error', "Start time must be between 9:00 AM and 9:00 PM.");
            return;
        }
        if (formData.endTime && !validateTime(formData.endTime)) {
            showNotification('error', "End time must be between 9:00 AM and 9:00 PM.");
            return;
        }

        setSaving(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/update`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Clear cache for profile and companions (if user is a companion)
                clearCache();
                
                await fetchProfile();
                setIsEditing(false);
                showNotification('success', 'Profile updated successfully!', 'Profile Saved');
            } else {
                const error = await response.json();
                showNotification('error', `Error: ${error.message}`);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            showNotification('error', 'Failed to update profile');
        } finally {
            setSaving(false);
        }
    };

    if (!userData || loading) {
        return <Loading message="Loading profile..." />;
    }

    const isCompanion = userData?.role === 'companion' || profileData?.role === 'companion' || profileData?.companionProfile;

    return (
        <div className="w-full min-h-screen py-10 px-4 md:px-0 bg-gray-50/50">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">My Dashboard</h1>
                    <p className="text-gray-500 font-medium text-lg">Welcome back, {userData.username}</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* Left Column: Profile Card */}
                    <div className="w-full md:w-1/3">
                        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                             {/* Decorative Background */}
                             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl opacity-50 transform translate-x-10 -translate-y-10 group-hover:bg-yellow-100 transition-colors"></div>

                             <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 overflow-hidden relative">
                                    <Image 
                                        src={profileData?.profilePhotoUrl || "/profile_pic.png"} 
                                        alt="Profile" 
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                
                                {!isEditing ? (
                                    <>
                                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
                                            {formData.username}
                                        </h2>
                                        <p className="text-sm font-medium text-gray-400 bg-gray-50 px-4 py-1.5 rounded-full mb-4">
                                            {userData.email}
                                        </p>
                                        {isCompanion && (
                                            <span className="text-[10px] bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold uppercase tracking-widest mb-6 border border-yellow-200">
                                                COMPANION
                                            </span>
                                        )}
                                    </>
                                ) : (
                                    <div className="w-full mb-6">
                                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
                                            {formData.username}
                                        </h2>
                                        <p className="text-sm font-medium text-gray-400 bg-gray-50 px-4 py-1.5 rounded-full">
                                            {userData.email}
                                        </p>
                                    </div>
                                )}

                                <div className="w-full space-y-3 mt-2">
                                    {!isEditing ? (
                                        <>
                                            <button 
                                                onClick={() => setIsEditing(true)}
                                                className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                            >
                                                Edit Profile
                                            </button>
                                            <button 
                                                onClick={logout}
                                                className="w-full py-3 bg-white text-red-500 font-bold rounded-xl border border-red-100 hover:border-red-200 hover:bg-red-50 transition-all text-sm"
                                            >
                                                Log Out
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button 
                                                onClick={handleSaveProfile}
                                                disabled={saving}
                                                className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all text-sm disabled:opacity-50 shadow-green-200 shadow-lg"
                                            >
                                                {saving ? 'Saving...' : 'Save Changes'}
                                            </button>
                                            <button 
                                                onClick={() => {
                                                    setIsEditing(false);
                                                    fetchProfile();
                                                }}
                                                className="w-full py-3 bg-white text-gray-500 font-bold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-sm"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    )}
                                </div>
                             </div>
                        </div>

                        {/* Quick Stats */}
                        {isCompanion && (
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 text-center shadow-lg hover:shadow-xl transition-all">
                                    <span className="block text-3xl font-bold text-gray-900 mb-1">0</span>
                                    <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Bookings</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 text-center shadow-lg hover:shadow-xl transition-all">
                                    <span className="block text-3xl font-bold text-gray-900 mb-1">5.0</span>
                                    <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Rating</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Content/Activity */}
                    <div className="w-full md:w-2/3 space-y-8">

                        {/* Profile Details - Visible for ALL users */}
                        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                                <span className={`w-2 h-2 ${isCompanion ? 'bg-blue-500' : 'bg-gray-400'} rounded-full`}></span>
                                {isCompanion ? 'Companion Details' : 'Profile Details'}
                            </h3>
                            
                            {!isEditing ? (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Full Name</label>
                                            <p className="font-bold text-lg text-gray-900 border-b border-gray-100 pb-2">{formData.fullName || 'Not set'}</p>
                                        </div>
                                         <div>
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Email</label>
                                            <p className="font-bold text-lg text-gray-900 border-b border-gray-100 pb-2">{formData.email}</p>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Phone</label>
                                            <p className="font-bold text-lg text-gray-900 border-b border-gray-100 pb-2">{formData.phoneNumber || 'Not set'}</p>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">City</label>
                                            <p className="font-bold text-lg text-gray-900 border-b border-gray-100 pb-2">{formData.city || 'Not set'}</p>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Area</label>
                                            <p className="font-bold text-lg text-gray-900 border-b border-gray-100 pb-2">{formData.area || 'Not set'}</p>
                                        </div>
                                    </div>
                                    
                                    {isCompanion && (
                                        <>
                                             <div>
                                                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Description</label>
                                                 <p className="text-base text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-2xl italic">{formData.description || 'No description'}</p>
                                             </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                         <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Email <span className="text-[10px] text-gray-300 ml-1">(Read only)</span></label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                disabled
                                                className="w-full px-4 py-3 border border-gray-100 bg-white text-gray-400 rounded-xl text-sm cursor-not-allowed"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Phone <span className="text-[10px] text-gray-300 ml-1">(Read only)</span></label>
                                            <input
                                                type="tel"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                disabled
                                                className="w-full px-4 py-3 border border-gray-100 bg-white text-gray-400 rounded-xl text-sm cursor-not-allowed"
                                                maxLength={10}
                                            />
                                        </div>
                                         <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase block mb-2">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                placeholder="City"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Area</label>
                                            <input
                                                type="text"
                                                name="area"
                                                value={formData.area}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                placeholder="Area/Locality"
                                            />
                                        </div>
                                    </div>
                                    
                                    {isCompanion && (
                                        <>
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Description</label>
                                                <textarea
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={handleInputChange}
                                                    rows={3}
                                                    className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                    placeholder="About yourself..."
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Notification Banner - Restrict to regular users who aren't companions yet */}
                        {(!isCompanion && userData.role === 'user' && !userData.is_verified) && (
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-8 rounded-[2rem] flex items-start gap-6 shadow-sm">
                                <span className="text-4xl">📢</span>
                                <div>
                                    <h3 className="font-bold text-xl text-blue-900 mb-2">
                                        Want to become a companion?
                                    </h3>
                                    <p className="text-sm text-blue-700/80 leading-relaxed font-medium mb-4">
                                        Join our community of companions and start earning by spending time with people!
                                    </p>
                                    <button 
                                        onClick={() => router.push('/onboarding')}
                                        className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 shadow-blue-200 shadow-lg hover:-translate-y-0.5 transition-all text-sm"
                                    >
                                        Become a Companion
                                    </button>
                                </div>
                            </div>
                        )}
                        
                        {/* If they ARE a companion, maybe show a different tip or nothing */}
                        {isCompanion && (
                             <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 p-8 rounded-[2rem] flex items-start gap-6 shadow-sm">
                                <span className="text-4xl">💡</span>
                                <div>
                                    <h3 className="font-bold text-xl text-green-900 mb-2">Keep your profile updated!</h3>
                                    <p className="text-sm text-green-700/80 leading-relaxed font-medium">
                                        Make sure your availability and pricing are up to date to get more bookings.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Availability & Settings (Companion Only) */}
                        {isCompanion && (
                            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
                                <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Rate & Availability
                                </h3>

                                {!isEditing ? (
                                    <div className="space-y-8">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Hourly Rate</label>
                                                <p className="font-bold text-4xl text-gray-900 tracking-tight">₹{formData.pricePerHour || '0'}</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Active Hours</label>
                                                <p className="font-bold text-xl text-gray-900">{formData.startTime || '--:--'} - {formData.endTime || '--:--'}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">Weekly Schedule</label>
                                            <div className="flex flex-wrap gap-2">
                                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                                    <span 
                                                        key={day}
                                                        className={`text-xs font-bold px-4 py-2 rounded-full border ${
                                                            formData[`${day.toLowerCase()}_availability`] 
                                                            ? 'bg-black text-white border-black' 
                                                            : 'bg-white text-gray-300 border-gray-100'
                                                        }`}
                                                    >
                                                        {day.slice(0,3)}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">Tags</label>
                                            <div className="flex flex-wrap gap-2">
                                                {formData.tags ? formData.tags.split(',').map((tag, i) => (
                                                    <span key={i} className="text-xs font-bold bg-gray-100 text-gray-600 px-4 py-2 rounded-full border border-gray-200">
                                                        {tag.trim()}
                                                    </span>
                                                )) : <span className="text-gray-400 text-sm">No tags set</span>}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Price per Hour (₹)</label>
                                                <input
                                                    type="number"
                                                    name="pricePerHour"
                                                    value={formData.pricePerHour}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-4 border border-gray-200 bg-gray-50 rounded-xl text-xl font-bold focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                />
                                            </div>
                                            <div>
                                                 <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Tags (comma separated)</label>
                                                 <input
                                                    type="text"
                                                    name="tags"
                                                    value={formData.tags}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-4 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                    placeholder="e.g. Movies, Silent Sitting"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Start Time</label>
                                                <input type="time" name="startTime" value={formData.startTime} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase block mb-2">End Time</label>
                                                <input type="time" name="endTime" value={formData.endTime} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase block mb-3">Available Days</label>
                                            <div className="flex flex-wrap gap-2">
                                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                                    <label key={day} className={`flex items-center gap-2 px-4 py-2.5 rounded-full border cursor-pointer transition-all ${
                                                        formData[`${day.toLowerCase()}_availability`]
                                                        ? 'bg-black border-black text-white shadow-lg shadow-gray-200'
                                                        : 'bg-white border-gray-200 text-gray-400 hover:bg-gray-50'
                                                    }`}>
                                                        <input
                                                            type="checkbox"
                                                            name={`${day.toLowerCase()}_availability`}
                                                            checked={formData[`${day.toLowerCase()}_availability`]}
                                                            onChange={handleInputChange}
                                                            className="hidden"
                                                        />
                                                        <span className="text-xs font-bold">{day.slice(0,3)}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
