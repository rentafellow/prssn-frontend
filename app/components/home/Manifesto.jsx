'use client';

import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

const pillars = [
  {
    title: 'Verified humans only',
    body: 'Every companion goes through identity checks before they appear in search. You book people — not profiles that appeared overnight.',
  },
  {
    title: 'Public by default',
    body: 'Sessions belong in cafés, parks, libraries, and open venues. Private homes are off-limits. Safety isn’t a footnote — it’s the format.',
  },
  {
    title: 'Boundaries written down',
    body: 'Before a session starts, both sides acknowledge The Handshake: no romance, no therapy roleplay, no physical contact, leave anytime.',
  },
];

export default function Manifesto() {
  return (
    <section className="relative py-20 md:py-28 bg-moss text-paper overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-signal blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-ink blur-[100px]" />
      </div>
      <div className="noise absolute inset-0" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          light
          eyebrow="Why prsnn. exists"
          title={
            <>
              Loneliness isn&apos;t always a crisis.
              <span className="block mt-2 text-signal">
                Sometimes it&apos;s just an empty chair.
              </span>
            </>
          }
          subtitle="We built prsnn. for the in-between days — when you don’t need a date, a therapist, or a productivity coach. You just need another person nearby so the world feels a little less sharp."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i + 1}>
              <div className="h-full p-6 md:p-7 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300">
                <span className="font-display text-signal/70 font-bold text-sm">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-bold mt-4 mb-2">{p.title}</h3>
                <p className="text-paper/55 font-medium leading-relaxed text-[15px]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
