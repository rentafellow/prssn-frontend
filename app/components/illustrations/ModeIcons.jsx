'use client';

/** Minimal SVG icons for modes — same palette, no emoji */
export function IconAlone({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="2.2" />
      <path d="M8 36c1.5-6 5-9 10-9s8.5 3 10 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="34" cy="20" r="4.5" stroke="currentColor" strokeWidth="2.2" opacity="0.45" />
      <path d="M28 36c1-4 3.2-6 6-6 1.4 0 2.6.4 3.6 1.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

export function IconSit({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="8" y="22" width="32" height="4" rx="1.5" fill="currentColor" opacity="0.2" />
      <path d="M14 22v-4a6 6 0 0 1 12 0v4" stroke="currentColor" strokeWidth="2.2" />
      <path d="M28 22v-3a5 5 0 0 1 9.5-2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
      <path d="M12 26v10M36 26v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconAround({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="10" y="12" width="28" height="24" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="20" cy="24" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="24" r="3.5" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M16 34h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export function IconExplore({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.2" />
      <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M20 28l4-12 4 12-4-2-4 2z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export function IconShield({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 8l14 6v10c0 9-6.5 15.5-14 18-7.5-2.5-14-9-14-18V14l14-6z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M18 24l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
