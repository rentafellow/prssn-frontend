'use client';

import { useEffect, useRef } from 'react';

/**
 * Lightweight scroll reveal — IntersectionObserver + CSS transforms only.
 * Stays off the main thread; no animation libraries.
 */
export default function Reveal({
  children,
  className = '',
  variant = 'up', // up | left | scale
  delay = 0, // 0–4
  as: Tag = 'div',
  once = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          if (once) io.unobserve(el);
        } else if (!once) {
          el.classList.remove('is-in');
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const base =
    variant === 'left'
      ? 'reveal-left'
      : variant === 'scale'
        ? 'reveal-scale'
        : 'reveal';

  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 4)}` : '';

  return (
    <Tag ref={ref} className={`${base} ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
