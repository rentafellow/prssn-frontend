'use client';

import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

const notThis = ['Dating', 'Therapy', 'Escort', 'Errands', 'Networking'];
const isThis = [
  'Companionship',
  'Shared Presence',
  'Walking Together',
  'Study Together',
  'Events',
  'Quiet Company',
];

export default function WhatThisIsNot() {
  return (
    <section className="py-24 md:py-[7.5rem] bg-mist">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Clarity"
          title="What this is not."
          subtitle="No dating. No therapy. Just genuine human presence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-[1.5rem] bg-paper border border-line p-7 md:p-8 h-full">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay mb-5">
                Not this
              </p>
              <ul className="space-y-3.5">
                {notThis.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg md:text-xl font-medium text-ink/70"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay/15 text-clay text-sm font-bold">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="rounded-[1.5rem] bg-ink text-paper p-7 md:p-8 h-full shadow-neoblack">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal mb-5">
                This is
              </p>
              <ul className="space-y-3.5">
                {isThis.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg md:text-xl font-medium text-white/90"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal/20 text-signal text-sm font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
