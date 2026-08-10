import type { JSX } from 'react'

const stats = [
  {
    big: '50K+',
    label: 'Remote teams shipping',
    detail: 'From 4-person studios to 800-person ops orgs.',
  },
  {
    big: '4.9/5',
    label: 'Average rating',
    detail: 'Across G2, Capterra, and Product Hunt.',
  },
  {
    big: '120+',
    label: 'Countries on the network',
    detail: 'Localised in 14 languages. Translated by humans.',
  },
]

export default function Stats(): JSX.Element {
  return (
    <section
      id="proof"
      className="relative border-y border-ink/15 bg-ink text-bone"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:py-28">
        {/* Section label */}
        <div className="reveal delay-0 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono-tag text-bone/55">
              /// Section 03 — Receipts
            </p>
            <h2 className="display-upright mt-5 text-[clamp(2rem,5.2vw,4.2rem)] text-bone balance">
              The numbers we
              <span className="serif-thin"> keep </span>
              bragging about.
            </h2>
          </div>
          <p className="max-w-[22rem] text-[1rem] leading-[1.55] text-bone/70 pretty">
            No padded claims. We pull these straight from billing, app-store
            reviews, and the team-settings database — refreshed weekly.
          </p>
        </div>

        <div className="hairline mt-14 bg-bone/15" />

        {/* Stats row — asymmetric with massive numerals */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-bone/15 bg-bone/15 md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.big}
              className={`reveal delay-${i + 1} relative bg-ink p-8 lg:p-12`}
            >
              <div className="mono-tag flex items-center justify-between text-bone/55">
                <span>0{i + 1} / 03</span>
                <span>●</span>
              </div>

              <div className="big-number mt-8 text-[clamp(4.5rem,9vw,8.5rem)] text-bone">
                {s.big}
              </div>

              <div className="mt-6">
                <div className="text-[1.15rem] font-medium text-bone">
                  {s.label}
                </div>
                <p className="mt-2 max-w-[24rem] text-[0.95rem] leading-[1.55] text-bone/65 pretty">
                  {s.detail}
                </p>
              </div>

              {/* corner detail */}
              <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/40">
                ref · {`{team-${i + 1}}`}
              </div>
            </div>
          ))}
        </div>

        {/* Ticker marquee */}
        <div className="reveal delay-4 mt-14 overflow-hidden border-y border-bone/15 py-5">
          <div className="ticker-track gap-12 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.22em] text-bone/70">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-12 pr-12">
                <span>★ Rated #1 on G2 Spring 2026</span>
                <span className="text-signal">●</span>
                <span>SOC 2 Type II</span>
                <span className="text-signal">●</span>
                <span>GDPR · CCPA · LGPD compliant</span>
                <span className="text-signal">●</span>
                <span>99.99% uptime SLA</span>
                <span className="text-signal">●</span>
                <span>Backed by Index Ventures · a16z</span>
                <span className="text-signal">●</span>
                <span>Featured by The Verge · Wired · FT</span>
                <span className="text-signal">●</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}