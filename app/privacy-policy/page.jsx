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

export default function PrivacyPolicy() {
  const updated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <LegalShell>
      <LegalHero
        eyebrow="Data protection"
        title="Privacy Policy"
        subtitle="How we handle your data — built to minimize collection, not monetize it."
        updated={updated}
      />
      <LegalNav current="/privacy-policy" />
      <LegalBody>
        <LegalIntro>
          <p>
            prsnn. (“we”, “us”, “our”) is built to minimize data, not monetize it.
            This Privacy Policy explains what we collect, why we collect it, how
            it’s used, and how you stay in control.
          </p>
          <p>By using prsnn., you agree to this Privacy Policy.</p>
        </LegalIntro>

        <LegalSection number="01" title="Our core privacy principle">
          <p>
            prsnn. collects the minimum data required to keep sessions safe, fair,
            and functional.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            {['sell personal data', 'trade attention', 'profile emotions'].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-mist border border-line p-4 text-center"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-1">
                    We do not
                  </p>
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </div>
              )
            )}
          </div>
          <p className="pt-2 border-l-2 border-moss pl-4 text-ink font-semibold">
            Privacy is a safety feature, not a growth tactic.
          </p>
        </LegalSection>

        <LegalSection number="02" title="Information we collect">
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-ink text-lg mb-2">
                A. Account information
              </h3>
              <p className="text-sm text-ink/45 mb-2">
                Collected when you create an account:
              </p>
              <LegalList
                items={[
                  'Name or display name',
                  'Email address or phone number',
                  'Account preferences',
                ]}
              />
              <p className="mt-2 text-sm">
                <span className="font-bold text-ink">Purpose:</span> account
                access and communication.
              </p>
            </div>

            <div className="pt-5 border-t border-line">
              <h3 className="font-display font-bold text-ink text-lg mb-2">
                B. Companion verification (companions only)
              </h3>
              <p className="text-sm text-ink/45 mb-2">
                Collected for safety and compliance:
              </p>
              <LegalList
                items={[
                  'Government-issued ID',
                  'Live photo / selfie',
                  'Basic verification details',
                ]}
              />
              <p className="mt-2 text-sm">
                <span className="font-bold text-ink">Purpose:</span> identity
                verification, fraud prevention, platform safety.
              </p>
              <p className="mt-3 inline-flex rounded-full bg-moss-soft px-3.5 py-1.5 text-sm font-semibold text-moss">
                Encrypted, access-restricted, never shared publicly.
              </p>
            </div>

            <div className="pt-5 border-t border-line">
              <h3 className="font-display font-bold text-ink text-lg mb-2">
                C. Session & usage information
              </h3>
              <LegalList
                items={[
                  'Session mode selected',
                  'Session duration',
                  'Session status (completed / ended early)',
                  'Acceptance of required agreements (timestamped)',
                ]}
              />
              <p className="mt-2 text-sm">
                <span className="font-bold text-ink">Purpose:</span> session
                management, dispute resolution, safety enforcement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-5 border-t border-line">
              <div>
                <h3 className="font-display font-bold text-ink text-lg mb-2">
                  D. Location (limited)
                </h3>
                <LegalList
                  items={[
                    'Collected only during an active session',
                    'Used to confirm public-place compliance',
                    'Automatically stops when the session ends',
                  ]}
                />
                <p className="mt-3 text-sm font-semibold text-ink">
                  We do not track location outside sessions.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-ink text-lg mb-2">
                  E. In-app communication
                </h3>
                <p className="text-sm mb-2">Messages are used only for:</p>
                <LegalList
                  items={[
                    'Safety review',
                    'Dispute handling',
                    'Rule enforcement',
                  ]}
                />
                <p className="mt-3 text-sm font-semibold text-ink">
                  We do not analyze chats for ads.
                </p>
              </div>
            </div>
          </div>
        </LegalSection>

        <LegalSection number="03" title="Information we do not collect">
          <LegalList
            variant="x"
            items={[
              'Medical or mental health data',
              'Emotional states or diagnoses',
              'Private conversations outside the app',
              'Contacts from your phone',
              'Audio or video recordings',
              'Background tracking data',
            ]}
          />
          <p className="pt-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-ink/50">
            prsnn. is not a therapy or emotional profiling platform.
          </p>
        </LegalSection>

        <div className="grid md:grid-cols-2 gap-5">
          <LegalSection number="04" title="How we use info">
            <p className="font-semibold text-ink">Used only to:</p>
            <LegalList
              items={[
                'Operate the prsnn. platform',
                'Verify companions and facilitate sessions',
                'Enforce boundaries and rules',
                'Respond to safety issues',
              ]}
            />
            <p className="font-semibold text-ink pt-2">We do not:</p>
            <LegalList
              variant="x"
              items={[
                'Run ads or sell insights',
                'Build marketing profiles',
                'Target you emotionally',
              ]}
            />
          </LegalSection>

          <LegalSection number="05" title="Data sharing">
            <p className="font-semibold text-ink">
              prsnn. does not sell personal data.
            </p>
            <p>We may share limited information:</p>
            <LegalList
              items={[
                'With service providers (strictly necessary)',
                'When required by law',
                'To protect user safety',
              ]}
            />
            <p className="rounded-2xl bg-mist border border-line px-4 py-3 text-sm">
              All third parties are contractually bound to confidentiality.
            </p>
          </LegalSection>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <LegalSection number="06" title="Retention">
            <LegalList
              items={[
                'Account data: while active',
                'Session data: for dispute / safety',
                'Verification data: for compliance',
              ]}
            />
            <p className="text-sm font-semibold text-ink">
              We do not retain data longer than necessary.
            </p>
          </LegalSection>
          <LegalSection number="07" title="Your rights">
            <LegalList
              items={[
                'Access your personal data',
                'Correct inaccurate info',
                'Request deletion',
                'Withdraw consent',
              ]}
            />
          </LegalSection>
          <LegalSection number="08" title="Security">
            <LegalList
              items={[
                'Encryption at rest & in transit',
                'Access-controlled systems',
                'Regular security reviews',
              ]}
            />
          </LegalSection>
        </div>

        <LegalSection number="09" title="Additional terms">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-ink mb-1">Children</h3>
                <p className="text-sm">
                  Strictly for 18+. We do not knowingly collect data from minors.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-ink mb-1">
                  International
                </h3>
                <p className="text-sm">
                  Data may be processed in jurisdictions with different laws.
                  prsnn. applies consistent standards.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-ink mb-1">Liability</h3>
                <p className="text-sm">
                  No digital platform guarantees absolute security. Users must
                  safeguard credentials.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-ink mb-1">Changes</h3>
                <p className="text-sm">
                  Material changes will be communicated via the app. Continued
                  use means acceptance.
                </p>
              </div>
              <div className="rounded-2xl bg-mist border border-line p-5">
                <h3 className="font-display font-bold text-ink mb-2">Contact</h3>
                <p className="text-sm mb-2">
                  For privacy questions or requests:
                </p>
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
