'use client';
import React from 'react';
import Link from 'next/link';
import Reveal from '../components/common/Reveal';

export default function Handshake() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative w-full min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-8 bg-mist text-ink overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-moss-soft/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss mb-4">
              Session protocol
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-4 text-ink">
              The Handshake
            </h1>
            <p className="text-ink/55 font-medium text-lg">
              Session boundaries & mutual agreement
            </p>
            <p className="text-[11px] mt-4 font-semibold uppercase tracking-[0.14em] text-ink/35">
              Last updated: {currentDate}
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="p-7 md:p-8 rounded-2xl mb-10 bg-paper border border-line">
            <p className="font-medium leading-relaxed text-center text-[15px] md:text-base text-ink/70">
              This document governs every session on{' '}
              <span className="font-display font-bold text-ink">prsnn.</span>
              <br />
              By starting a session, both the User and the Companion{' '}
              <span className="font-semibold text-ink">explicitly agree</span> to
              all terms below.
            </p>
            <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.12em] text-clay">
              If you do not agree, do not proceed.
            </p>
          </div>
        </Reveal>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4">
            1. What this session <span className="text-moss">is</span>
          </h2>
          <p className="mb-5 font-medium text-ink/55 text-[15px]">
            A public, time-bound companionship experience for:
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-5">
            {['Human presence', 'Public accompaniment', 'Pressure-free co-existence'].map(
              (t) => (
                <div
                  key={t}
                  className="bg-moss text-signal font-semibold p-4 text-center rounded-xl text-sm"
                >
                  {t}
                </div>
              )
            )}
          </div>
          <div className="flex flex-wrap gap-2 text-sm font-semibold text-ink/70">
            {['Silence is acceptable', 'Conversation is optional', 'No outcome guaranteed'].map(
              (t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-moss-soft/60 text-xs">
                  {t}
                </span>
              )
            )}
          </div>
        </section>

        <section className="mb-10 p-6 md:p-7 rounded-2xl bg-paper border border-line">
          <h2 className="font-display text-2xl font-bold mb-4">
            2. What this session is <span className="text-clay">not</span>
          </h2>
          <ul className="space-y-3 font-medium text-ink/60 text-[15px]">
            {[
              'Dating, romance, or intimate interaction',
              'Therapy, counseling, or crisis intervention',
              'Coaching, mentoring, or advice',
              'Emotional support or validation',
              'Errand running or money handling',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="font-bold text-clay">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-bold pt-4 uppercase tracking-[0.12em] text-center text-ink/50 border-t border-line">
            Any assumption beyond simple public presence is invalid.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">
            3. Boundaries (non-negotiable)
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              ['Public places only', 'Sessions must occur only in public.'],
              ['No physical contact', 'Strictly no touching of any kind.'],
              ['Respect personal space', 'Give distance. Do not invade.'],
              ['No pressure', 'To talk, share, or engage.'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="border border-line p-5 rounded-xl bg-paper hover:-translate-y-0.5 transition-transform duration-300"
              >
                <h3 className="font-display font-bold mb-1 text-ink">{title}</h3>
                <p className="text-sm text-ink/50 font-medium">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-5 text-center rounded-xl font-semibold text-[15px] bg-ink text-paper">
            Either party may end the session at any time, for any reason, without
            explanation.
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="border border-line p-6 rounded-xl bg-paper">
            <h3 className="font-display font-bold text-lg mb-2">4. Role clarity</h3>
            <p className="text-sm mb-5 font-medium text-ink/55">
              Companion is presence, not participation. User retains responsibility.
            </p>
            <h3 className="font-display font-bold text-lg mb-2">5. Safety & reporting</h3>
            <p className="text-sm font-medium text-ink/55">
              Boundary crossed? End immediately. Leave. Report in-app.
            </p>
          </div>
          <div className="border border-line p-6 rounded-xl bg-paper">
            <h3 className="font-display font-bold text-lg mb-2">6. Responsibility</h3>
            <p className="text-sm mb-5 font-medium text-ink/55">
              Participation is voluntary. Each participant acts at own risk.
            </p>
            <h3 className="font-display font-bold text-lg mb-2">7. Consequences</h3>
            <p className="text-sm font-medium text-ink/55">
              Violation = Termination. Account removal. No refund.
            </p>
          </div>
        </div>

        <div className="rounded-2xl p-8 text-center border border-line bg-paper">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">8. Acceptance</h2>
          <p className="font-medium mb-6 text-ink/55">
            By starting this session, you confirm that:
          </p>
          <ul className="text-left max-w-md mx-auto space-y-2.5 mb-8 font-medium text-sm">
            {[
              'You have read this document in full',
              'You understand all boundaries',
              'You agree to follow them',
              'You accept that no additional expectations apply',
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 p-3 rounded-xl bg-mist border border-line"
              >
                <span className="w-4 h-4 rounded bg-moss flex items-center justify-center text-signal text-[10px] font-bold shrink-0">
                  ✓
                </span>
                <span className="text-ink/70">{t}</span>
              </li>
            ))}
          </ul>

          <Link href="/" className="btn-primary inline-flex">
            Agree & continue
          </Link>
        </div>
      </div>
    </div>
  );
}
