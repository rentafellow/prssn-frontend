import React from 'react';

/**
 * Loading Component
 * A reusable loading spinner component with modern design
 * Can be used across all pages while data is being fetched
 */
const Loading = ({ 
  fullScreen = true, 
  message = "Loading...", 
  size = "large" 
}) => {
  // Size configurations, simplified
  const sizeClasses = {
    small: "h-6 w-6 border-2",
    medium: "h-10 w-10 border-3",
    large: "h-16 w-16 border-4",
    xlarge: "h-20 w-20 border-4"
  };

  const containerClasses = fullScreen 
    ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50/95 backdrop-blur-md"
    : "flex flex-col items-center justify-center py-12";

  return (
    <div className={containerClasses}>
      {/* Animated Background Blobs */}
      {fullScreen && (
        <>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse'></div>
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse' style={{ animationDelay: '1s' }}></div>
        </>
      )}

      {/* Loading Spinner Container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Main Spinner */}
        <div className="relative flex items-center justify-center">
            {/* Soft Spinner */}
          <div className={`${sizeClasses[size]} rounded-full border-gray-200 border-t-green-500 animate-spin`}></div>
          
          {/* Inner Pulse */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className={`${size === 'small' ? 'h-2 w-2' : 'h-3 w-3'} bg-green-500 rounded-full animate-ping opacity-20`}></div>
           </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <p className="text-lg font-bold text-gray-900 tracking-tight">
            {message}
          </p>
          <div className="flex gap-2 justify-center">
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
