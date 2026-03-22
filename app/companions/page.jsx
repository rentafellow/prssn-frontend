'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useSearchParams, useRouter } from 'next/navigation';
import cachedFetch from '../utils/cache';

const CompanionsContent = () => {
    const { userData } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const mode = searchParams.get('mode');

    const [companions, setCompanions] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Filters
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    // Prominent Indian Cities List
    const indianCities = [
        "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", 
        "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", 
        "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", 
        "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", 
        "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", 
        "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", 
        "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai",
        "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubli-Dharwad",
        "Mysore", "Tiruchirappalli", "Bareilly", "Aligarh", "Tiruppur", "Gurgaon",
        "Moradabad", "Jalandhar", "Bhubaneswar", "Salem", "Warangal", "Dehradun"
    ].sort();

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Tags per Mode Mapping
    const modeTags = {
        'dont-go-alone': ['Plus One', 'Cafe Hopping', 'Event Companion', 'Shopping', 'Waiting Room'],
        'sit-with-me': ['Silence', 'Sitting', 'Body Doubling', 'Study Buddy', 'Work Companion', 'Reading'],
        'be-around': ['Just Presence', 'Quiet', 'Homebody', 'Gaming', 'Movie Watcher'],
        'explore-together': ['Walking', 'Sightseeing', 'Photography', 'Foodie', 'Urban Hiking']
    };

    const currentModeTags = mode ? (modeTags[mode] || []) : [];

    useEffect(() => {
        if (mode) {
           fetchCompanions();
        }
     
    }, [mode]);

    const fetchCompanions = async () => {
        try {
            // Use cachedFetch instead of axios
            const data = await cachedFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/companions`);
            setCompanions(data);
        } catch (error) {
            // Silently handle error - user will see empty state
            console.error('Error fetching companions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleTagToggle = (tag) => {
        setSelectedTags(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    // Filter Logic
    const filteredCompanions = companions.filter(companion => {
        // Exclude Self
        if (userData && (companion._id === userData.id || companion._id === userData._id)) {
            return false;
        }

        // Mode/Category Match (Crucial Fix)
        // Ensure companion actually belongs to this category
        if (mode) {
             const modeMap = {
                'dont-go-alone': "Don't Go Alone",
                'sit-with-me': "Sit With Me",
                'be-around': "Be Around",
                'explore-together': "Explore Together"
            };
            const targetCategory = modeMap[mode]; // e.g., "Don't Go Alone"
            
            // Check if companion has this Main Category Tag
            const hasCategory = companion.tags && companion.tags.some(t => t.toLowerCase() === targetCategory.toLowerCase());
            
            // If strictly enforcing categories:
            if (!hasCategory) return false;
        }

        // City Match
        if (selectedCity) {
             if (!companion.city || companion.city.toLowerCase() !== selectedCity.toLowerCase()) {
                 return false;
             }
        }

        // Day Match
        if (selectedDay) {
            if (!companion.availability || !companion.availability[selectedDay.toLowerCase()]) {
                return false;
            }
        }

        // Tag Match (from "Comfort Zones" filter)
        if (selectedTags.length > 0) {
            if (!companion.tags || companion.tags.length === 0) return false;
            const hasTag = companion.tags.some(t => selectedTags.includes(t));
            if (!hasTag) return false;
        }

        return true;
    });

    // Pagination
    const [page, setPage] = useState(1);
    const itemsPerPage = 6; 

    useEffect(() => {
        setPage(1);
    }, [selectedTags, selectedCity, selectedDay, mode]);

    const totalPages = Math.ceil(filteredCompanions.length / itemsPerPage);
    const paginatedCompanions = filteredCompanions.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    // MODE SELECTION SCREEN
    if (!mode) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center animate-fadeIn relative overflow-hidden">
                <div className='absolute top-20 left-10 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float' style={{animationDelay: '2s'}}></div>

                 <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12 tracking-tight leading-tight relative z-10">
                    Choose how you want<br/>someone to be there
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
                    <button onClick={() => router.push('/companions?mode=dont-go-alone')} className="p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all text-left group shadow-sm">
                        <span className="block text-2xl font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors">Don&apos;t Go Alone</span>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">For events, cafés, waiting rooms. Just presence.</p>
                    </button>
                    <button onClick={() => router.push('/companions?mode=sit-with-me')} className="p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all text-left group shadow-sm">
                        <span className="block text-2xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-colors">Sit With Me</span>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">Quiet presence while you work or read.</p>
                    </button>
                     <button onClick={() => router.push('/companions?mode=be-around')} className="p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all text-left group shadow-sm">
                        <span className="block text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">Be Around</span>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">Shared space, absolutely no interaction needed.</p>
                    </button>
                     <button onClick={() => router.push('/companions?mode=explore-together')} className="p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all text-left group shadow-sm">
                        <span className="block text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">Explore Together</span>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">Walk through an area together. No tour guide vibes.</p>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pb-20 px-4 md:px-8 pt-6 bg-gray-50 font-sans text-gray-900 relative">
            
            {/* Header Area */}
            <div className="max-w-7xl mx-auto mb-8 mt-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                           <span className={`w-2 h-2 rounded-full ${
                               mode === 'sit-with-me' ? 'bg-yellow-500' :
                               mode === 'dont-go-alone' ? 'bg-green-500' :
                               mode === 'be-around' ? 'bg-blue-500' : 'bg-purple-500'
                           }`}></span>
                           {mode.replace(/-/g, ' ')}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight capitalize leading-none">
                            Find your companion.
                        </h1>
                    </div>
                     {/* Mode Switcher Buttons */}
                     <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-gray-100 shadow-sm overflow-x-auto max-w-full">
                        {['dont-go-alone', 'sit-with-me', 'be-around', 'explore-together'].map(m => (
                            <button 
                                key={m}
                                onClick={() => router.push(`/companions?mode=${m}`)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                                    mode === m 
                                    ? 'bg-gray-900 text-white shadow-md' 
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                {m.replace(/-/g, ' ')}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filters: Comfort Zones & City */}
            <div className="max-w-7xl mx-auto mb-10 space-y-6">
                
                {/* Filters Row */}
                <div className="flex flex-wrap gap-4 items-end">
                
                {/* Day Filter */}
                <div>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">Availability</p>
                     <div className="relative inline-block">
                        <select 
                            value={selectedDay}
                            onChange={(e) => setSelectedDay(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 text-gray-900 text-sm font-bold rounded-xl px-5 py-3 pr-10 cursor-pointer focus:outline-none focus:border-gray-400 shadow-sm hover:border-gray-300 transition-all min-w-[180px]"
                        >
                            <option value="">Any Day</option>
                            {daysOfWeek.map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                     </div>
                </div>

                {/* City Filter */}
                <div>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">Location</p>
                     <div className="relative inline-block">
                        <select 
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 text-gray-900 text-sm font-bold rounded-xl px-5 py-3 pr-10 cursor-pointer focus:outline-none focus:border-gray-400 shadow-sm hover:border-gray-300 transition-all min-w-[200px]"
                        >
                            <option value="">All Cities</option>
                            {indianCities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                     </div>
                </div>
                </div>

                {/* Tags Filter */}
                <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">Comfort Zones</p>
                    <div className="flex flex-wrap gap-3">
                        {currentModeTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => handleTagToggle(tag)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                                    selectedTags.includes(tag)
                                    ? 'bg-gray-900 text-white border-gray-900 shadow-lg transform -translate-y-0.5'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                        {(selectedTags.length > 0 || selectedCity || selectedDay) && (
                            <button 
                                onClick={() => { setSelectedTags([]); setSelectedCity(''); setSelectedDay(''); }}
                                className="px-4 py-2.5 text-xs font-bold text-red-500 hover:text-red-700 transition-colors ml-2"
                            >
                                Clear All
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Companions Grid */}
            <div className="max-w-7xl mx-auto">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-[320px] bg-white rounded-[2rem] border border-gray-100 animate-pulse"></div>
                        ))}
                    </div>
                ) : filteredCompanions.length === 0 ? (
                    <div className="text-center py-24 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
                        <div className="text-5xl mb-4">🍃</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No companions found</h3>
                        <p className="text-gray-500 font-medium mb-6">Try selecting different comfort zones or check back later.</p>
                        <button onClick={() => setSelectedTags([])} className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all">
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedCompanions.map((companion, index) => (
                            <CompanionCard key={companion.id || companion._id || index} companion={companion} />
                        ))}
                    </div>
                    
                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center gap-2">
                             <button 
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-40 font-bold hover:bg-black hover:text-white transition-all bg-white text-gray-700 disabled:hover:bg-white disabled:hover:text-gray-700"
                             >
                                ← Prev
                             </button>
                             {Array.from({length: totalPages}, (_, i) => i + 1).map(p => (
                                 <button
                                    key={p}
                                    onClick={() => setPage(p)}
                                    className={`w-10 h-10 rounded-lg font-bold border border-gray-200 flex items-center justify-center transition-all ${page === p ? 'bg-black text-white border-black' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                 >
                                     {p}
                                 </button>
                             ))}
                             <button 
                                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-40 font-bold hover:bg-black hover:text-white transition-all bg-white text-gray-700 disabled:hover:bg-white disabled:hover:text-gray-700"
                             >
                                Next →
                             </button>
                        </div>
                    )}
                    </>
                )}
            </div>

            {/* Sticky Safety Line */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 py-3 text-center z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
                <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    You can leave anytime. No explanation needed.
                </p>
            </div>
        </div>
    );
};

const CompanionCard = ({ companion }) => {
    // Determine image URL
    const imageUrl = companion.profilePhotoUrl || companion.profilePhoto || null;
    
    // Check available days
    const isAvailableToday = (() => {
        if (!companion.availability) return false;
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const today = days[new Date().getDay()];
        return companion.availability[today];
    })();

    // Tags
    const tags = Array.isArray(companion.tags) ? companion.tags : [];

    return (
        <Link href={`/companions/${companion._id || companion.id}`} className="block group h-full">
            <div className="relative bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                
                {/* Image Section */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-50">
                    {imageUrl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img 
                            src={imageUrl} 
                            alt={companion.fullName} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl opacity-20 bg-gradient-to-br from-gray-50 to-gray-100">
                            👤
                        </div>
                    )}
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        {companion.is_verified || companion.verificationStatus === 'verified' ? (
                            <span className="bg-white/95 backdrop-blur-md text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                <span className="text-blue-500 text-xs">✓</span> Verified
                            </span>
                        ) : null}
                    </div>

                    {/* Price Badge */}
                    {companion.pricePerHour && (
                        <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl font-bold text-xs shadow-lg">
                            ₹{companion.pricePerHour}/hr
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-snug group-hover:text-black transition-colors">
                                {companion.fullName || companion.username}
                            </h3>
                            {isAvailableToday && (
                                <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2" title="Available Today"></span>
                            )}
                        </div>
                        
                        {/* Tags */}
                        {tags.length > 0 ? (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {tags.slice(0, 3).map((tag, i) => (
                                    <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wide rounded-md">
                                        {tag}
                                    </span>
                                ))}
                                {tags.length > 3 && (
                                    <span className="px-2 py-0.5 bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-wide rounded-md">
                                        +{tags.length - 3}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div className="flex gap-1.5 mb-3">
                                <span className="px-2 py-0.5 bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-wide rounded-md opacity-50">New Companion</span>
                            </div>
                        )}

                        <p className="text-sm text-gray-500 font-medium line-clamp-2 leading-relaxed">
                            {companion.description || "No description provided yet."}
                        </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                            {companion.city || "Remote"}
                        </span>
                        <span className="text-xs font-bold text-gray-900 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                            Check Availability →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const CompanionsPage = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        }>
            <CompanionsContent />
        </Suspense>
    );
};

export default CompanionsPage;
