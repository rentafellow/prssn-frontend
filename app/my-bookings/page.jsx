"use client";
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import Loading from '../components/common/Loading'
import axios from 'axios'
import Link from 'next/link'
import PaymentModal from '../components/PaymentModal';

const MyBookings = () => {
    const { userData, token } = useAuth();
    const router = useRouter();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        if (!token) {
            router.push('/login');
            return;
        }

        const fetchBookings = async () => {
            try {
                let url = '';
                if (userData?.role === 'companion') {
                    url = `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/incoming-requests`;
                } else {
                    url = `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/my-requests`;
                }

                if (url) {
                    const res = await axios.get(url, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setBookings(res.data);
                }
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };

        if (userData) {
            fetchBookings();
        }
    }, [userData, token]);

    const handleAction = async (bookingId, newStatus) => {
        try {
            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${bookingId}/status`, 
            { status: newStatus },
            { headers: { Authorization: `Bearer ${token}` } });
            
            // Update local state
            setBookings(prev => prev.map(b => b._id === bookingId ? { ...b, status: newStatus } : b));
        } catch (error) {
            console.error("Action failed", error);
            alert("Failed to update status");
        }
    };
    
    const handlePaymentSuccess = (paymentIntent) => {
        // Update local state to paid
        const bookingId = selectedBooking?._id;
        if (bookingId) {
             setBookings(prev => prev.map(b => b._id === bookingId ? { ...b, paymentStatus: 'paid' } : b));
             setPaymentModalOpen(false);
             router.push(`/session/${bookingId}`);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'accepted': return 'bg-green-100 text-green-800 border-green-200';
            case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-600 border-gray-200';
        }
    };

    const filteredBookings = bookings.filter(b => filter === 'all' || b.status === filter);

    if (loading || !userData) {
        return <Loading />;
    }

    return (
       <div className="min-h-screen py-20 px-4 max-w-5xl mx-auto font-sans bg-gray-50">
           {/* Header Section */}
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div>
                     <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-gray-900">
                        {userData.role === 'companion' ? 'Request Box' : 'My Requests'}
                    </h1>
                     <p className="font-bold text-gray-500 uppercase tracking-widest text-xs bg-white inline-block px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                        {userData.role === 'companion' ? 'Manage Incoming Sessions' : 'Track Companion Requests'}
                    </p>
                </div>
                {userData.role !== 'companion' && (
                    <Link href="/companions">
                        <button className="px-6 py-3 bg-gray-900 text-white font-bold hover:bg-black transition-all rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm">
                            + New Request
                        </button>
                    </Link>
                )}
           </div>

           {/* Filter Tabs */}
           <div className="flex flex-wrap gap-3 mb-10">
               {['all', 'pending', 'accepted', 'rejected'].map((f) => (
                   <button
                       key={f}
                       onClick={() => setFilter(f)}
                       className={`px-5 py-2 rounded-full font-bold text-sm transition-all border ${
                           filter === f 
                           ? 'bg-gray-900 text-white border-gray-900 shadow-md' 
                           : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                       }`}
                   >
                       {f.charAt(0).toUpperCase() + f.slice(1)}
                       <span className={`ml-2 text-xs py-0.5 px-1.5 rounded-full ${filter === f ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                           {f === 'all' ? bookings.length : bookings.filter(b => b.status === f).length}
                       </span>
                   </button>
               ))}
           </div>

           {/* Bookings List */}
           {filteredBookings.length === 0 ? (
               <div className="bg-white rounded-[2rem] p-12 md:p-20 text-center shadow-sm border border-gray-100">
                    <div className="text-6xl mb-6 opacity-30">📂</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No {filter !== 'all' ? filter : ''} requests found</h3>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">
                        {filter === 'all' 
                            ? "It looks pretty empty here. Why not start a new adventure?" 
                            : `You don't have any requests with "${filter}" status.`}
                    </p>
                    {userData.role !== 'companion' && filter === 'all' && (
                        <button 
                            onClick={() => router.push('/companions')}
                            className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 transition-all"
                        >
                            Find a Presence
                        </button>
                    )}
               </div>
           ) : (
               <div className="grid gap-6">
                   {filteredBookings.map((booking) => (
                       <div key={booking._id} className="group relative bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-xl transition-all duration-300">
                           
                           {/* Status Badge (Absolute) */}
                           <div className={`absolute top-6 right-6 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest border ${getStatusColor(booking.status)}`}>
                               {booking.status}
                           </div>

                           {/* Avatar Section */}
                           <div className="flex-shrink-0">
                               <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl overflow-hidden bg-gray-50 shadow-inner">
                                   <img 
                                        src={userData.role === 'companion' ? booking.requesterId?.profilePhotoUrl : booking.companionId?.profilePhotoUrl} 
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {e.target.src = "https://via.placeholder.com/150?text=User"}}
                                   />
                               </div>
                           </div>

                           {/* Content Section */}
                           <div className="flex-grow">
                               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                   <div>
                                       <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                           {userData.role === 'companion' ? booking.requesterId?.fullName : booking.companionId?.fullName}
                                       </h3>
                                       <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                                           <span className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                               📅 {new Date(booking.createdAt).toLocaleDateString()}
                                           </span>
                                           <span className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                               ⏳ {booking.duration} mins
                                           </span>
                                           <span className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                               💰 ₹{booking.pricePerHour}
                                           </span>
                                       </div>
                                   </div>
                               </div>

                               {booking.message && (
                                   <div className="mb-6 relative">
                                       <p className="text-sm font-medium text-gray-600 italic bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                           "{booking.message}"
                                       </p>
                                   </div>
                               )}

                               {/* Action Buttons */}
                               <div className="mt-auto pt-4 border-t border-gray-50">
                                   {userData.role === 'companion' && booking.status === 'pending' ? (
                                       <div className="flex gap-4">
                                           <button 
                                                onClick={() => handleAction(booking._id, 'accepted')}
                                                className="flex-1 px-6 py-2.5 bg-green-600 text-white font-bold rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all text-sm"
                                            >
                                               Accept
                                           </button>
                                           <button 
                                                onClick={() => handleAction(booking._id, 'rejected')}
                                                className="flex-1 px-6 py-2.5 bg-white text-gray-700 font-bold border border-gray-200 rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all text-sm"
                                            >
                                               Reject
                                           </button>
                                       </div>
                                   ) : (
                                       <div className="flex justify-end">
                                           {booking.status === 'accepted' ? (
                                               booking.paymentStatus === 'paid' ? (
                                                    <Link href={`/session/${booking._id}`} className="w-full md:w-auto">
                                                        <button className="w-full px-6 py-3 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:bg-black hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2">
                                                            <span>🟢</span> Enter Session Room
                                                        </button>
                                                    </Link>
                                               ) : (
                                                    userData.role === 'companion' ? (
                                                        <div className="flex items-center gap-2 px-6 py-3 bg-yellow-50 text-yellow-700 font-bold rounded-full border border-yellow-100 text-sm">
                                                            <span>⏳</span> Waiting for payment from requester
                                                        </div>
                                                    ) : (
                                                        <button 
                                                            onClick={() => { setSelectedBooking(booking); setPaymentModalOpen(true); }}
                                                            className="w-full md:w-auto px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2"
                                                        >
                                                            <span>💰</span> Pay & Invite
                                                        </button>
                                                    )
                                               )
                                           ) : booking.status === 'pending' ? (
                                               <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">Waiting for response...</span>
                                           ) : (
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Request Closed</span>
                                           )}
                                       </div>
                                   )}
                               </div>
                           </div>
                       </div>
                   ))}
               </div>
           )}
           
           {/* Payment Modal */}
           {paymentModalOpen && selectedBooking && (
                <PaymentModal 
                    booking={selectedBooking} 
                    onClose={() => setPaymentModalOpen(false)} 
                    onSuccess={handlePaymentSuccess} 
                />
            )}
       </div>
    )
}

export default MyBookings
