'use client';

import Link from 'next/link';
import {
  LegalShell,
  LegalHero,
  LegalNav,
  LegalBody,
  LegalIntro,
  LegalSection,
  LegalList,
} from '../components/common/LegalLayout';

export default function TermsOfService() {
  const updated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <LegalShell>
      <LegalHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Conditions for using the prsnn. platform — clear expectations for everyone."
        updated={updated}
      />
      <LegalNav current="/terms-of-service" />
      <LegalBody>
        <LegalIntro>
          <p>
            These Terms of Service (“Terms”) govern your access to and use of
            prsnn. (“Platform”, “Service”, “we”, “us”, “our”).
          </p>
          <p>
            By creating an account or using prsnn., you agree to be bound by
            these Terms. If you do not agree, do not use the Platform.
          </p>
        </LegalIntro>

        <LegalSection number="01" title="What prsnn. is (and is not)">
          <p>
            prsnn. is a platform that facilitates public, time-bound human
            companionship (“Sessions”) between users (“Users”) and verified
            individuals (“Companions”).
          </p>
          <div className="rounded-2xl bg-mist border border-line p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40 mb-3">
              prsnn. is not
            </p>
            <LegalList
              variant="x"
              items={[
                'A dating or romantic platform',
                'A therapy, counseling, or mental-health service',
                'A coaching, mentoring, or advisory service',
                'A task, errand, or labor marketplace',
                'A medical or emergency service',
              ]}
            />
          </div>
          <p className="font-semibold text-ink">
            prsnn. provides presence only — not outcomes, advice, or support.
          </p>
        </LegalSection>

        <div className="grid md:grid-cols-2 gap-5">
          <LegalSection number="02" title="Eligibility">
            <LegalList
              items={[
                'Be 18 years or older',
                'Provide accurate registration information',
                'Agree to all platform policies',
              ]}
            />
            <p className="text-sm font-semibold text-ink">
              prsnn. reserves the right to refuse access.
            </p>
          </LegalSection>

          <LegalSection number="03" title="Account responsibilities">
            <LegalList
              items={[
                'Keep login credentials secure',
                'Use the Platform only for its intended purpose',
                'Comply with all policies',
                'Not impersonate others',
              ]}
            />
            <p className="text-sm font-semibold text-ink">
              You are responsible for all activity under your account.
            </p>
          </LegalSection>
        </div>

        <LegalSection number="04" title="Session rules (mandatory)" dark>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-signal mb-3">
                All sessions must comply with
              </p>
              <ul className="space-y-2.5 text-white/80">
                <li className="flex gap-2">
                  <span className="text-signal font-bold">✓</span> Public-only
                  locations
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 font-bold">✕</span> No physical
                  contact
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 font-bold">✕</span> No dating,
                  romance, or sexual behavior
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 font-bold">✕</span> No therapy
                  or emotional support
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-signal mb-3">
                Further restrictions
              </p>
              <ul className="space-y-2.5 text-white/80">
                <li className="flex gap-2">
                  <span className="text-white/40 font-bold">✕</span> No errands
                  or money handling
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 font-bold">✕</span> No
                  off-platform contact or payment
                </li>
              </ul>
              <p className="mt-5 pt-4 border-t border-white/15 text-sm text-white/55">
                Either party may end a Session at any time, without explanation.
                Violation results in immediate removal.
              </p>
            </div>
          </div>
        </LegalSection>

        <div className="grid md:grid-cols-3 gap-5">
          <LegalSection number="05" title="Role clarity">
            <LegalList
              items={[
                'Companions are independent individuals, not employees',
                'prsnn. facilitates introductions only',
                'No guarantee of compatibility',
              ]}
            />
          </LegalSection>
          <LegalSection number="06" title="Payments">
            <LegalList
              items={[
                'Collected upfront through the Platform',
                'Off-platform payments strictly prohibited',
                'Attempting bypass = termination',
              ]}
            />
          </LegalSection>
          <LegalSection number="07" title="Refunds">
            <LegalList
              items={[
                'Governed by the Refund Policy',
                'May be denied for completed sessions',
                'Withheld for rule violations',
              ]}
            />
          </LegalSection>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <LegalSection number="08" title="Safety & reporting">
            <p className="font-semibold text-ink">If you feel unsafe:</p>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>End the Session immediately</li>
              <li>Leave the area if necessary</li>
              <li>Report the incident in the app</li>
            </ol>
            <p className="text-sm">
              prsnn. may review Session data and take action.
            </p>
          </LegalSection>

          <LegalSection number="09" title="Prohibited conduct">
            <LegalList
              variant="x"
              items={[
                'Harass, threaten, or pressure others',
                'Flirt or pursue romantic interaction',
                'Seek therapy or advice',
                'Solicit services or contact details',
              ]}
            />
            <p className="text-sm font-bold uppercase tracking-wider text-ink">
              Zero-tolerance policy.
            </p>
          </LegalSection>
        </div>

        <LegalSection number="10" title="Legal terms">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-ink mb-1">
                  Termination
                </h3>
                <p className="text-sm">
                  prsnn. may suspend or terminate accounts without notice.
                  Enforcement decisions are final.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-ink mb-1">
                  Disclaimer
                </h3>
                <p className="text-sm">
                  Provided “as is”. No guarantees regarding interaction quality,
                  behavior, or availability.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-ink mb-1">
                  Limitation of liability
                </h3>
                <p className="text-sm">
                  prsnn. is not liable for personal injury, emotional distress,
                  or indirect damages. Participation is voluntary.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-ink mb-1">
                  Indemnification
                </h3>
                <p className="text-sm">
                  You agree to indemnify prsnn. from claims arising from your use
                  or violations.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-ink mb-1">
                  Intellectual property
                </h3>
                <p className="text-sm">
                  All branding and content belong to prsnn. Do not misuse
                  platform assets.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-ink mb-1">
                  Changes to terms
                </h3>
                <p className="text-sm">
                  Material changes will be communicated through the Platform.
                  Continued use constitutes acceptance.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-ink mb-1">
                  Governing law
                </h3>
                <p className="text-sm">
                  Governed by the laws of India. Disputes resolved in competent
                  courts.
                </p>
              </div>
              <div className="rounded-2xl bg-mist border border-line p-5">
                <h3 className="font-display font-bold text-ink mb-2">Contact</h3>
                <p className="text-sm mb-2">For questions or concerns:</p>
                <Link
                  href="mailto:admin@prsnn.com"
                  className="font-bold text-moss hover:text-ink transition-colors"
                >
                  admin@prsnn.com
                </Link>
              </div>
            </div>
          </div>
        </LegalSection>
      </LegalBody>
    </LegalShell>
  );
}
