'use client';
import React from 'react';
import Reveal from '../components/common/Reveal';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 bg-mist">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss mb-4">
              Get in touch
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.05]">
              Let&apos;s talk.
            </h1>
            <p className="mt-5 text-ink/70 font-medium text-lg leading-relaxed max-w-sm">
              Questions, partnerships, or a quick hello — we read every message.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            <Reveal delay={1}>
              <a
                href="mailto:admin@prsnn.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-paper border border-line hover:border-ink/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-moss text-signal flex items-center justify-center shrink-0 font-display font-bold">
                  @
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink">Email</h3>
                  <p className="text-ink/50 text-sm font-medium group-hover:text-moss transition-colors">
                    admin@prsnn.com
                  </p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={2}>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-paper border border-line">
                <div className="w-12 h-12 rounded-xl bg-ink text-signal flex items-center justify-center shrink-0 font-display font-bold text-sm">
                  HQ
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink">Location</h3>
                  <p className="text-ink/50 text-sm font-medium">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="lg:col-span-7" delay={1}>
          <form
            className="p-8 md:p-10 rounded-[1.75rem] bg-paper border border-line space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Aarav"
                  className="px-4 py-3.5 bg-mist border border-line rounded-xl focus:outline-none focus:border-moss transition-colors text-sm font-medium placeholder:text-ink/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Sharma"
                  className="px-4 py-3.5 bg-mist border border-line rounded-xl focus:outline-none focus:border-moss transition-colors text-sm font-medium placeholder:text-ink/30"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="px-4 py-3.5 bg-mist border border-line rounded-xl focus:outline-none focus:border-moss transition-colors text-sm font-medium placeholder:text-ink/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="px-4 py-3.5 bg-mist border border-line rounded-xl focus:outline-none focus:border-moss transition-colors text-sm font-medium placeholder:text-ink/30 resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full md:w-auto">
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
