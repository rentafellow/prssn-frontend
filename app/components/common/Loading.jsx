import React from 'react';

const Loading = ({
  fullScreen = true,
  message = 'Loading...',
  size = 'large',
}) => {
  const sizeClasses = {
    small: 'h-6 w-6 border-2',
    medium: 'h-10 w-10 border-2',
    large: 'h-12 w-12 border-2',
    xlarge: 'h-16 w-16 border-2',
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 z-50 flex flex-col items-center justify-center bg-mist/95 backdrop-blur-md'
    : 'flex flex-col items-center justify-center py-12';

  return (
    <div className={containerClasses}>
      <div className="relative z-10 flex flex-col items-center gap-5">
        <div
          className={`${sizeClasses[size]} rounded-full border-ink/15 border-t-moss animate-spin`}
        />
        <p className="text-sm font-semibold text-ink/60 tracking-tight">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
