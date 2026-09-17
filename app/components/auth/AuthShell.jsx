"use client";
import React from "react";
import { useRouter } from "next/navigation";

/**
 * Shared frame for the small auth pages (verify-email, forgot-password,
 * reset-password). Mirrors the visual language of /login — mist ground,
 * ambient moss/signal blobs, paper card, Syne headings — so the whole
 * sign-up journey reads as one product.
 */

export const IconMail = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 17.5v-11z" stroke="currentColor" strokeWidth="1.75" />
    <path d="M5 7l7 5 7-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconLock = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
    <path d="M8 10V8a4 4 0 118 0v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const IconKey = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="8.5" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" />
    <path d="M12 12h8M17 12v3M20 12v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const IconEye = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

export const IconEyeOff = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 3l18 18M10.5 10.6a2.75 2.75 0 003.9 3.9M7 7.4C4.6 8.8 2.5 12 2.5 12s3.5 6.5 9.5 6.5c1.6 0 3-.4 4.2-1M14.2 6.4A9.4 9.4 0 0012 5.5C6 5.5 2.5 12 2.5 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const AuthField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
  required,
  autoComplete,
  inputMode,
  maxLength,
  autoFocus,
  rightSlot,
  className = "",
  hint,
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-semibold text-ink/70">
      {label}
    </label>
    <div className="relative group/input">
      {Icon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/35 group-focus-within/input:text-moss transition-colors duration-300">
          <Icon />
        </span>
      )}
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        autoFocus={autoFocus}
        className={`w-full h-14 md:h-[3.6rem] ${Icon ? "pl-12" : "pl-5"} pr-12 rounded-2xl bg-paper border border-line shadow-[0_1px_2px_rgba(14,17,13,0.04)] text-base font-medium text-ink placeholder:text-ink/30 focus:outline-none focus:border-moss focus:ring-4 focus:ring-moss/10 focus:bg-white transition-all duration-300 ${className}`}
      />
      {rightSlot}
    </div>
    {hint && <p className="text-xs font-medium text-ink/45">{hint}</p>}
  </div>
);

export const EyeToggle = ({ shown, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-ink/35 hover:text-ink transition-colors"
    aria-label={shown ? "Hide password" : "Show password"}
  >
    {shown ? <IconEyeOff /> : <IconEye />}
  </button>
);

export const AuthSubmit = ({ loading, loadingText, children }) => (
  <button
    type="submit"
    disabled={loading}
    className="relative overflow-hidden w-full h-14 rounded-full bg-ink text-paper font-bold text-base tracking-wide hover:bg-ink-soft hover:scale-[1.02] hover:shadow-[0_16px_40px_-12px_rgba(14,17,13,0.45)] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:hover:scale-100 disabled:shadow-none mt-1"
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      {loading ? (
        <>
          <span className="w-4 h-4 rounded-full border-2 border-paper/30 border-t-paper animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </span>
  </button>
);

export default function AuthShell({ eyebrow, title, subtitle, closeTo = "/login", children, footer }) {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-mist">
      {/* Soft ambient background — same as /login */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-20 w-[32rem] h-[32rem] rounded-full bg-moss-soft/60 blur-[100px] animate-blob" />
        <div className="absolute bottom-0 -left-16 w-[28rem] h-[28rem] rounded-full bg-signal/15 blur-[90px] animate-blob-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-moss/10 blur-[80px] animate-blob-slow" />
        <div className="noise absolute inset-0 opacity-40" />
      </div>

      <button
        onClick={() => router.push(closeTo)}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2.5 rounded-full bg-paper/80 backdrop-blur-md text-ink/50 hover:text-ink border border-line shadow-sm transition-all hover:scale-105"
        aria-label="Close"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative min-h-screen flex items-center justify-center px-5 py-16 sm:px-8">
        <div className="w-full max-w-md animate-hero-rise-d1">
          <p className="font-display text-xl font-extrabold lowercase tracking-tight text-ink mb-6">
            prsnn<span className="text-moss">.</span>
          </p>

          <div className="bg-paper/90 backdrop-blur-sm border border-line rounded-[2rem] shadow-[0_24px_60px_-28px_rgba(14,17,13,0.35)] p-7 sm:p-9 md:p-10">
            {eyebrow && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-moss mb-3">
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-tight text-ink leading-[1.15]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2.5 text-[15px] text-ink/55 font-medium leading-relaxed">
                {subtitle}
              </p>
            )}

            <div className="mt-7">{children}</div>
          </div>

          {footer && (
            <div className="mt-6 text-center text-sm font-medium text-ink/55">{footer}</div>
          )}
        </div>
      </div>
    </div>
  );
}
