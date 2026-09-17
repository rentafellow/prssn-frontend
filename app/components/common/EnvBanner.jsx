/**
 * Small fixed marker shown only when NEXT_PUBLIC_APP_ENV is not "production".
 * Makes it impossible to mistake testing.prsnn.com for the live site while
 * verifying companions, taking test payments or wiping data.
 *
 * Server component: the value is inlined at build time, so production builds
 * render nothing at all.
 */
export default function EnvBanner() {
  const env = process.env.NEXT_PUBLIC_APP_ENV;
  if (!env || env === "production") return null;

  return (
    <div
      role="status"
      aria-label={`${env} environment`}
      className="fixed bottom-4 left-4 z-[9998] pointer-events-none select-none rounded-full bg-clay text-paper px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] shadow-[0_8px_24px_-8px_rgba(196,92,42,0.6)]"
    >
      {env} · not production
    </div>
  );
}
