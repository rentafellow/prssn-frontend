import React, { useEffect, useState } from 'react';

/**
 * Notification Component
 * 
 * Supports: 'success', 'error', 'warning', 'confirm', 'prompt'
 * Theme: Neo-Brutalist (Cream/Black/Sage)
 */
const Notification = ({ 
    type = 'success', // success, error, warning, confirm, prompt
    title, 
    message, 
    onClose, 
    onConfirm, 
    inputPlaceholder = "Enter value...",
    confirmText = "Confirm",
    cancelText = "Cancel"
}) => {
    
    const [inputValue, setInputValue] = useState("");
    const isInteractive = type === 'confirm' || type === 'prompt';

    // Auto-dismiss only for non-interactive types
    useEffect(() => {
        if (isInteractive) return;
        
        const timer = setTimeout(() => {
            if (onClose) onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onClose, isInteractive]);

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm(type === 'prompt' ? inputValue : true);
        }
        if (onClose) onClose();
    };

    const handleCancel = () => {
        if (onClose) onClose();
    };

    // Theme Colors
    const isError = type === 'error';
    const isWarning = type === 'warning';
    const bgClass = isError ? 'bg-red-50 border-red-100' : isWarning ? 'bg-yellow-50 border-yellow-100' : 'bg-white border-gray-100';
    const iconColor = isError ? 'text-red-500' : isWarning ? 'text-yellow-600' : 'text-green-600';
    const blobColor = isError ? 'bg-red-100' : isWarning ? 'bg-yellow-100' : 'bg-green-50';

    return (
        <div className={`fixed top-5 right-5 z-[9999] animate-slideInRight px-4 md:px-0 w-full md:w-auto`}>
            <div className={`${bgClass} min-w-[300px] max-w-sm p-5 rounded-2xl border shadow-xl shadow-gray-200/50 flex items-start gap-4 relative overflow-hidden backdrop-blur-md`}>
                
                {/* Decorative Blob */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${blobColor} rounded-full blur-2xl opacity-50 -mr-8 -mt-8`}></div>

                {/* header Section */}
                <div className="flex-1 flex items-start gap-4 relative z-10">
                    {/* Icon */}
                    <div className={`flex-shrink-0 mt-0.5 ${iconColor}`}>
                         {type === 'success' && (
                             <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                             </div>
                         )}
                         {type === 'error' && (
                             <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                             </div>
                         )}
                         {type === 'warning' && (
                             <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                             </div>
                         )}
                         {(type === 'confirm' || type === 'prompt') && (
                             <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                             </div>
                         )}
                    </div>
                    
                    <div className="flex-1">
                        <h3 className={`font-bold text-gray-900 text-base leading-tight mb-1`}>{title}</h3>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed">{message}</p>
                        
                         {/* Interactive Elements */}
                        {type === 'prompt' && (
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={inputPlaceholder}
                                className="w-full mt-3 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium text-sm text-gray-900"
                                autoFocus
                            />
                        )}

                        {isInteractive && (
                            <div className="flex gap-3 justify-end mt-4">
                                <button 
                                    onClick={handleCancel}
                                    className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    {cancelText}
                                </button>
                                <button 
                                    onClick={handleConfirm}
                                    className="px-5 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                >
                                    {confirmText}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Close Button (X) */}
                 {!isInteractive && (
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors relative z-10 p-1 hover:bg-gray-100 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Notification;
