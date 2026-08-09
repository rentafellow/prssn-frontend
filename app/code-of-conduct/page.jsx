'use client';

import {
  LegalShell,
  LegalHero,
  LegalNav,
  LegalBody,
  LegalIntro,
  LegalSection,
  LegalList,
} from '../components/common/LegalLayout';

export default function CodeOfConduct() {
  const updated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <LegalShell>
      <LegalHero
        eyebrow="Community guidelines"
        title="Code of Conduct"
        subtitle="Behavior standards for all users and companions — safety first, always."
        updated={updated}
      />
      <LegalNav current="/code-of-conduct" />
      <LegalBody>
        <LegalIntro>
          <p>
            This Code of Conduct applies to{' '}
            <span className="font-bold text-ink">
              all Users, Companions, and anyone accessing prsnn.
            </span>
          </p>
          <p>
            By using prsnn., you agree to comply with this Code at all times.
            Failure to do so may result in{' '}
            <span className="font-bold text-ink">
              immediate suspension or permanent removal
            </span>
            , without notice.
          </p>
        </LegalIntro>

        <LegalSection number="01" title="Core principle">
          <p>
            prsnn. exists to provide safe, public, pressure-free human presence.
            All behavior on prsnn. must respect:
          </p>
          <LegalList
            variant="check"
            items={[
              'Personal boundaries',
              'Public safety',
              'Role clarity',
              'Mutual consent',
            ]}
          />
          <p className="border-l-2 border-moss pl-4 font-semibold text-ink">
            Anything that compromises these principles is not allowed.
          </p>
        </LegalSection>

        <LegalSection number="02" title="Respect & boundaries">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-moss mb-3">
                All participants must
              </p>
              <LegalList
                variant="check"
                items={[
                  'Respect personal space',
                  'Respect silence',
                  'Respect the right to disengage at any time',
                ]}
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-clay mb-3">
                You must not
              </p>
              <LegalList
                variant="x"
                items={[
                  'Pressure someone to talk',
                  'Demand emotional engagement',
                  'Push boundaries after refusal',
                  'Guilt, shame, or manipulate',
                ]}
              />
            </div>
          </div>
          <div className="rounded-2xl bg-signal/40 border border-signal/50 px-5 py-4 text-center font-display font-bold text-ink text-lg">
            “No” requires no explanation.
          </div>
        </LegalSection>

        <LegalSection number="03" title="Prohibited behavior (zero tolerance)">
          <p className="font-semibold text-ink">
            The following are strictly prohibited:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            <LegalList
              variant="x"
              items={[
                'Dating, romantic, or sexual behavior',
                'Physical contact of any kind',
                'Therapy, counseling, or emotional intervention',
                'Harassment, intimidation, or coercion',
              ]}
            />
            <LegalList
              variant="x"
              items={[
                'Flirting or suggestive language',
                'Requests for private locations',
                'Requests for errands, tasks, or money handling',
                'Off-platform contact or payments',
              ]}
            />
          </div>
          <p className="pt-2 text-center text-sm font-bold italic text-ink/60">
            Any single violation may result in permanent removal.
          </p>
        </LegalSection>

        <LegalSection number="04" title="Communication standards">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-ink mb-3">
                Communication must be:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Calm', 'Neutral', 'Non-invasive', 'Non-judgmental'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-moss-soft text-moss text-sm font-bold border border-moss/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <p className="font-semibold text-ink mb-3">You must not:</p>
              <LegalList
                variant="x"
                items={[
                  'Overshare personal details',
                  'Interrogate or psychoanalyze',
                  'Discuss sensitive personal topics unless clearly invited',
                ]}
              />
            </div>
          </div>
          <p className="text-center italic text-moss font-semibold">
            Silence is always acceptable on prsnn.
          </p>
        </LegalSection>

        <LegalSection number="05" title="Safety expectations">
          <p className="font-semibold text-ink">
            If something feels unsafe or uncomfortable:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>End the session immediately</li>
            <li>Leave the area if needed</li>
            <li>Report the incident in-app</li>
          </ol>
          <div className="rounded-2xl bg-mist border border-line px-5 py-4 text-center font-semibold text-ink">
            prsnn. prioritizes safety over completion or refunds.
          </div>
        </LegalSection>

        <div className="grid md:grid-cols-2 gap-5">
          <LegalSection number="06" title="Misuse of the platform">
            <p className="text-sm font-semibold text-ink">Misuse includes:</p>
            <LegalList
              items={[
                'Repeated cancellations',
                'False reporting',
                'Gaming refunds',
                'Using prsnn. for unintended purposes',
              ]}
            />
            <p className="text-sm font-bold uppercase tracking-wider text-ink/50 pt-2 border-t border-line">
              Accounts engaged in misuse may be restricted or terminated.
            </p>
          </LegalSection>

          <LegalSection number="07" title="Enforcement authority">
            <p className="text-sm font-semibold text-ink">
              prsnn. reserves the right to:
            </p>
            <LegalList
              items={[
                'Investigate behavior',
                'Review session data',
                'Suspend or terminate accounts',
                'Deny refunds or payouts',
              ]}
            />
            <p className="text-sm font-bold uppercase tracking-wider text-ink/50 pt-2 border-t border-line">
              All enforcement decisions are final.
            </p>
          </LegalSection>
        </div>

        <LegalSection dark>
          <div className="text-center py-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-signal mb-4">
              Acknowledgment
            </p>
            <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
              By continuing to use prsnn., you acknowledge that{' '}
              <span className="text-white font-semibold">
                participation is voluntary
              </span>
              ,{' '}
              <span className="text-white font-semibold">
                boundaries are mandatory
              </span>
              , and enforcement decisions protect the platform as a whole.
            </p>
            <p className="mt-8 inline-flex px-5 py-2 rounded-full border border-signal/40 text-signal text-sm font-bold">
              Play safe. Be kind. Respect all.
            </p>
          </div>
        </LegalSection>
      </LegalBody>
    </LegalShell>
  );
}
