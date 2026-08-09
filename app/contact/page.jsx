'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/common/Reveal';
import {
  LegalShell,
  LegalHero,
  LegalNav,
} from '../components/common/LegalLayout';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <LegalShell>
      <LegalHero
        eyebrow="Get in touch"
        title="Let’s talk."
        subtitle="Questions, partnerships, or a quick hello — we read every message."
      />
      <LegalNav current="/contact" />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              <a
                href="mailto:admin@prsnn.com"
                className="flex items-center gap-4 p-5 md:p-6 rounded-3xl bg-paper border border-line hover:border-ink/15 hover:-translate-y-0.5 hover:shadow-neoblack transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-moss text-signal flex items-center justify-center shrink-0 font-display font-bold">
                  @
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-lg">
                    Email
                  </h3>
                  <p className="text-ink/50 text-sm font-medium group-hover:text-moss transition-colors">
                    admin@prsnn.com
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={1}>
              <div className="flex items-center gap-4 p-5 md:p-6 rounded-3xl bg-paper border border-line">
                <div className="w-12 h-12 rounded-2xl bg-ink text-signal flex items-center justify-center shrink-0 font-display font-bold text-sm">
                  HQ
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-lg">
                    Location
                  </h3>
                  <p className="text-ink/50 text-sm font-medium">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="rounded-3xl bg-moss-soft/80 border border-moss/15 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-moss mb-3">
                  Also see
                </p>
                <ul className="space-y-2.5 text-sm font-semibold">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-ink/70 hover:text-ink transition-colors"
                    >
                      Privacy Policy →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="text-ink/70 hover:text-ink transition-colors"
                    >
                      Terms of Service →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/code-of-conduct"
                      className="text-ink/70 hover:text-ink transition-colors"
                    >
                      Code of Conduct →
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={1}>
            <form
              className="p-8 md:p-10 rounded-[1.75rem] bg-paper border border-line shadow-[0_20px_50px_-28px_rgba(14,17,13,0.2)] space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-moss text-signal font-display font-bold text-2xl flex items-center justify-center mx-auto mb-5">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink tracking-tight">
                    Message noted
                  </h3>
                  <p className="mt-3 text-ink/55 font-medium max-w-sm mx-auto">
                    Thanks for reaching out. For the fastest reply, email us
                    directly at{' '}
                    <a
                      href="mailto:admin@prsnn.com"
                      className="font-bold text-moss hover:text-ink"
                    >
                      admin@prsnn.com
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-semibold text-ink/50 hover:text-ink transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ink tracking-tight">
                      Send a message
                    </h2>
                    <p className="mt-1 text-sm text-ink/50 font-medium">
                      We typically respond within a few business days.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-semibold text-ink/60"
                      >
                        First name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        placeholder="Aarav"
                        className="h-14 px-4 bg-mist border border-line rounded-2xl focus:outline-none focus:border-moss focus:ring-4 focus:ring-moss/10 transition-all text-base font-medium placeholder:text-ink/30"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-semibold text-ink/60"
                      >
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        placeholder="Sharma"
                        className="h-14 px-4 bg-mist border border-line rounded-2xl focus:outline-none focus:border-moss focus:ring-4 focus:ring-moss/10 transition-all text-base font-medium placeholder:text-ink/30"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-ink/60"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="h-14 px-4 bg-mist border border-line rounded-2xl focus:outline-none focus:border-moss focus:ring-4 focus:ring-moss/10 transition-all text-base font-medium placeholder:text-ink/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-ink/60"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="How can we help?"
                      className="px-4 py-3.5 bg-mist border border-line rounded-2xl focus:outline-none focus:border-moss focus:ring-4 focus:ring-moss/10 transition-all text-base font-medium placeholder:text-ink/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto h-14 px-8 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send message
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </LegalShell>
  );
}
