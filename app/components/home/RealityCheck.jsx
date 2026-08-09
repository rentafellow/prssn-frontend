'use client';
import React from 'react';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

const notList = [
  {
    title: 'Not dating.',
    desc: 'Strictly platonic. Flirting, romance, and intimate intent are out of bounds — always.',
  },
  {
    title: 'Not therapy.',
    desc: 'Companions offer presence, not clinical care, counselling, or crisis intervention.',
  },
  {
    title: 'Not errands.',
    desc: 'They sit with you, walk with you, wait with you. They don’t run your chores or hold your money.',
  },
  {
    title: 'Not gossip.',
    desc: 'Discretion is non-negotiable. What you share in a session stays there.',
  },
];

const RealityCheck = () => {
  return (
    <section className="py-20 md:py-28 bg-ink text-paper relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent" />
      <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-clay/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <SectionHeader
          light
          eyebrow="Clear boundaries"
          title={
            <>
              What this <span className="text-clay">is not.</span>
            </>
          }
          subtitle="Ambiguity creates risk. We name the edges so you can relax into what's actually offered — shared presence, nothing else."
          className="mb-12 md:mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <Reveal delay={1} className="lg:col-span-4">
            <div className="h-full p-7 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
              <p className="font-display text-lg font-bold mb-2">The Handshake</p>
              <p className="text-paper/50 font-medium text-[14px] leading-relaxed mb-5">
                Every session begins with a mutual agreement: public spaces, no
                contact, silence is valid, leave anytime.
              </p>
              <a
                href="/handshake"
                className="inline-flex items-center gap-2 text-signal font-semibold text-sm hover:gap-3 transition-all"
              >
                Read the full protocol →
              </a>
            </div>
          </Reveal>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notList.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) + 1}>
                <div className="h-full p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-colors duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-clay/10 rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-clay font-display font-bold text-sm mb-3">✕</p>
                  <h3 className="font-display text-xl font-bold mb-2 relative">{item.title}</h3>
                  <p className="text-paper/50 font-medium text-[14px] leading-relaxed relative">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;
