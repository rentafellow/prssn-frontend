"use client";
import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../../components/common/Loading";

const AdminsList = () => {
    const { token, userData } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const filterStatus = searchParams.get('status');
    
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);
    const [editForm, setEditForm] = useState({ username: '', email: '', password: '' });
    const [newAdmin, setNewAdmin] = useState({ username: '', email: '', password: '' });

    useEffect(() => {
        if (!token) return;
        if (userData && userData.role !== 'superadmin') {
           router.push('/admin');
           return;
        }
        fetchAdmins();
    }, [token, userData]);
    
    const fetchAdmins = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/admins`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAdmins(res.data);
        } catch (err) {
            console.error("Error fetching admins", err);
        } finally {
            setLoading(false);
        }
    };

    const handleEditClick = (admin) => {
        setEditingAdmin(admin);
        setEditForm({ username: admin.username, email: admin.email, password: '' });
        setShowEditModal(true);
    };

    const handleUpdateAdmin = async (e) => {
        e.preventDefault();
        try {
            const updateData = {
                username: editForm.username,
                email: editForm.email
            };
            if (editForm.password) {
                updateData.password = editForm.password;
            }

            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/admin/${editingAdmin.id}`, updateData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Admin updated successfully!");
            setShowEditModal(false);
            setEditingAdmin(null);
            setEditForm({ username: '', email: '', password: '' });
            fetchAdmins();
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Failed to update admin");
        }
    };

    const handleDeleteAdmin = async (adminId, adminUsername) => {
        if (!confirm(`Are you sure you want to delete admin "${adminUsername}"? This action cannot be undone.`)) return;
        
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/admin/${adminId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Admin deleted successfully");
            fetchAdmins();
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Failed to delete admin");
        }
    };

    const handleVerifyAdmin = async (adminId, status) => {
        try {
            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/verify-admin/${adminId}`, 
                { status },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert(`Admin ${status} successfully`);
            fetchAdmins();
        } catch (err) {
            console.error(err);
            alert("Failed to update status");
        }
    };

    const handleCreateAdmin = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/create-admin`, newAdmin, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Admin created successfully!');
            setShowCreateModal(false);
            setNewAdmin({ username: '', email: '', password: '' });
            fetchAdmins();
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Failed to create admin');
        }
    };

    if(!token) return <Loading message="Authenticating..." />;

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <button onClick={() => router.push('/super-admin')} className="mb-8 text-gray-500 hover:text-black flex items-center gap-2 font-medium transition-colors">
                     &larr; Back
                </button>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className='inline-block px-3 py-1 rounded-full bg-indigo-900 text-white text-xs font-bold tracking-wide mb-4 shadow-sm'>
                            Super Admin Panel
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            System Admins
                        </h1>
                        <p className="text-lg text-gray-500 font-medium mt-2">Manage admin accounts and permissions.</p>
                    </div>
                    <button 
                        onClick={() => setShowCreateModal(true)}
                        className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        + Create Admin
                    </button>
                </div>

                {loading ? (
                    <Loading fullScreen={false} message="Fetching admins..." size="medium" />
                ) : (
                    <>
                    {/* Filter Indicators */}
                {filterStatus === 'unverified' && (
                    <div className="mb-8 bg-red-50 border border-red-100 p-6 flex justify-between items-center rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl">⚠️</span>
                            <div>
                                <h3 className="font-bold text-red-900 text-lg">Unverified Admins</h3>
                                <p className="text-red-700 text-xs font-medium opacity-80">Action required for these accounts.</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => router.push('/super-admin/admins?status=all')}
                            className="px-5 py-2 bg-white text-gray-700 font-bold rounded-full hover:bg-gray-50 shadow-sm border border-gray-100 transition-colors text-sm"
                        >
                            Show All
                        </button>
                    </div>
                )}
                
                {(!filterStatus || filterStatus === 'verified') && (
                     <div className="mb-8 flex justify-between items-center bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xl">✓</span>
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Verified Admins</h2>
                                 <p className="text-gray-500 text-xs font-medium">Admins with active system access.</p>
                            </div>
                        </div>
                        <button onClick={() => router.push('/super-admin/admins?status=all')} className="text-gray-500 hover:text-black font-medium text-sm transition-colors">View All</button>
                     </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {admins.filter(a => {
                        const isVerified = a.role === 'superadmin' || a.verification_status === 'verified';
                        if (filterStatus === 'unverified') return !isVerified;
                        if (filterStatus === 'all') return true;
                        return isVerified; // Default: Verified only
                    }).map(admin => {
                        const isVerified = admin.role === 'superadmin' || admin.verification_status === 'verified';
                        return (
                          <div key={admin.id} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                             <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="h-16 w-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                    {admin.username[0].toUpperCase()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-xl text-gray-900 truncate">{admin.username}</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${admin.role === 'superadmin' ? 'bg-indigo-50 text-indigo-700' : 'bg-gray-100 text-gray-600'}`}>
                                            {admin.role}
                                        </span>
                                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${isVerified ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                            {isVerified ? 'Verified' : 'Pending'}
                                        </span>
                                    </div>
                                </div>
                             </div>
                             
                             <div className="space-y-3 relative z-10 mb-6">
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                          <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 font-medium truncate">{admin.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                          <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 font-medium">{new Date(admin.created_at).toLocaleDateString()}</span>
                                </div>
                             </div>
                             
                             {/* Action Buttons */}
                             <div className="relative z-10 space-y-2">
                                 {!isVerified && (
                                    <button 
                                        onClick={() => handleVerifyAdmin(admin.id, 'verified')}
                                        className="w-full py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 mb-2"
                                    >
                                        ✓ Verify Access
                                    </button>
                                 )}
                                 <button 
                                    onClick={() => router.push(`/super-admin/admin/${admin.id}`)}
                                    className="w-full py-2.5 bg-gray-50 text-gray-700 border border-gray-100 rounded-xl hover:bg-gray-100 transition-all text-sm font-bold"
                                 >
                                    View Activity
                                 </button>
                                 <div className="flex gap-2">
                                     <button 
                                        onClick={() => handleEditClick(admin)}
                                        className="flex-1 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-sm font-bold"
                                     >
                                         Edit
                                     </button>
                                     <button 
                                        onClick={() => handleDeleteAdmin(admin.id, admin.username)}
                                        className="flex-1 py-2.5 bg-white text-red-600 border border-red-100 rounded-xl hover:bg-red-50 transition-all text-sm font-bold"
                                     >
                                         Delete
                                     </button>
                                 </div>
                             </div>
                          </div>
                        );
                    })}
                </div>
                    </>
                )}
            </div>

            {/* Edit Admin Modal */}
            {showEditModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-all">
                    <div className="bg-white rounded-[2rem] shadow-2xl max-w-md w-full p-8 md:p-10 transform scale-100 transition-transform">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Edit Admin</h2>
                            <button onClick={() => setShowEditModal(false)} className="bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                                ✕
                            </button>
                        </div>
                        <form onSubmit={handleUpdateAdmin} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Username</label>
                                <input 
                                    type="text" 
                                    required
                                    value={editForm.username}
                                    onChange={e => setEditForm({...editForm, username: e.target.value})}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-gray-300 outline-none font-medium transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                                <input 
                                    type="email" 
                                    required
                                    value={editForm.email}
                                    onChange={e => setEditForm({...editForm, email: e.target.value})}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-gray-300 outline-none font-medium transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">New Password (optional)</label>
                                <input 
                                    type="password" 
                                    value={editForm.password}
                                    onChange={e => setEditForm({...editForm, password: e.target.value})}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-gray-300 outline-none font-medium transition-all"
                                    placeholder="Leave blank to keep current"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl hover:-translate-y-0.5 mt-2"
                            >
                                Update Admin
                            </button>
                        </form>
                    </div>
                </div>
            )}
                           
   {/* Create Admin Modal */}
   {showCreateModal && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-all">
       <div className="bg-white rounded-[2rem] shadow-2xl max-w-md w-full p-8 md:p-10 transform scale-100 transition-transform">
         <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Create Admin</h2>
            <button onClick={() => setShowCreateModal(false)} className="bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors">
              ✕
            </button>
         </div>
         <form onSubmit={handleCreateAdmin} className="space-y-6">
           <div>
             <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Username</label>
             <input 
               type="text" 
               required
               value={newAdmin.username}
               onChange={e => setNewAdmin({...newAdmin, username: e.target.value})}
               className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-gray-300 outline-none font-medium transition-all"
               placeholder="e.g. admin_jane"
             />
           </div>
           <div>
             <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
             <input 
               type="email" 
               required
               value={newAdmin.email}
               onChange={e => setNewAdmin({...newAdmin, email: e.target.value})}
               className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-gray-300 outline-none font-medium transition-all"
               placeholder="admin@prsnn.com"
             />
           </div>
           <div>
             <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
             <input 
               type="password" 
               required
               value={newAdmin.password}
               onChange={e => setNewAdmin({...newAdmin, password: e.target.value})}
               className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-gray-300 outline-none font-medium transition-all"
               placeholder="••••••••"
             />
           </div>
           <button 
             type="submit" 
             className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl hover:-translate-y-0.5 mt-2"
           >
             Create Admin Account
           </button>
         </form>
       </div>
    </div>
   )}
  </div>
 );
};

const AdminsPage = () => {
    return (
        <Suspense fallback={<Loading message="Loading admins..." />}>
            <AdminsList />
        </Suspense>
    );
};

export default AdminsPage;
