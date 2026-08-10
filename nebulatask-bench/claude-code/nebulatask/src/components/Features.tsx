import type { JSX } from 'react'

type Feature = {
  num: string
  title: string
  desc: string
  icon: JSX.Element
  variant: 'light' | 'dark' | 'accent'
  tag: string
}

const features: Feature[] = [
  {
    num: '01',
    title: 'Smart Prioritization',
    desc: 'An AI ranks every task against deadlines, dependencies, and team velocity — so the next thing is always obvious.',
    tag: 'Priority engine',
    variant: 'dark',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M24 4l5.4 12.6 13.6 1-10.4 9 3.2 13.4L24 32.6 12.2 40l3.2-13.4L5 17.6l13.6-1L24 4z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="3" fill="#FF4D2E" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Team Sync',
    desc: 'Real-time presence across every timezone. See who is in deep work, who is shipping, who is blocked — without a meeting.',
    tag: 'Live presence',
    variant: 'light',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle
          cx="16"
          cy="20"
          r="6"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle
          cx="32"
          cy="20"
          r="6"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M6 38c2-6 6-9 10-9s8 3 10 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M22 38c2-6 6-9 10-9s8 3 10 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="24" cy="34" r="2.2" fill="#FF4D2E" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Deep Focus Mode',
    desc: 'Block Slack, email, and every notification with one click. Time-boxed focus sessions write back to your timeline automatically.',
    tag: 'One-click quiet',
    variant: 'accent',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M24 6c-7 0-12 4.5-12 10.5 0 7.5 12 22 12 22s12-14.5 12-22C36 10.5 31 6 24 6z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="17" r="3.4" fill="#FF4D2E" />
        <circle cx="24" cy="17" r="6" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
]

export default function Features(): JSX.Element {
  return (
    <section
      id="features"
      className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:py-36"
    >
      {/* Section header — asymmetric */}
      <div className="grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 lg:col-span-7">
          <p className="mono-tag text-ash">/// Section 02 — What it does</p>
          <h2 className="display-upright mt-5 text-[clamp(2.2rem,6vw,5rem)] text-ink balance">
            Three rituals that
            <span className="serif-thin"> actually </span>
            compound.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <p className="text-[1.05rem] leading-[1.55] text-ink/75 pretty">
            Every team is different — but every team wastes time on the same
            three things: guessing what to do next, finding who is where, and
            defending deep work. NebulaTask takes all three off your plate.
          </p>
        </div>
      </div>

      <div className="hairline mt-14" />

      {/* Feature grid — asymmetric: one big + two stacked on the right */}
      <div className="mt-14 grid grid-cols-12 gap-5">
        {/* Big dark card */}
        <article
          className={`feature-card dark reveal delay-2 col-span-12 flex flex-col justify-between lg:col-span-7 lg:row-span-2 min-h-[28rem] p-10 lg:p-12`}
        >
          <div className="flex items-start justify-between">
            <span className="mono-tag text-bone/60">/ Feature {features[0].num}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone/50">
              {features[0].tag}
            </span>
          </div>

          <div className="text-bone">{features[0].icon}</div>

          <div className="mt-10">
            <h3 className="display-upright text-[clamp(2rem,4vw,3.6rem)] text-bone balance">
              {features[0].title}
            </h3>
            <p className="mt-5 max-w-[28rem] text-[1.02rem] leading-[1.55] text-bone/75 pretty">
              {features[0].desc}
            </p>
            <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal animate-pulse-signal" />
              Live in 50K+ workspaces
            </div>
          </div>
        </article>

        {/* Top right card — light */}
        <article
          className={`feature-card reveal delay-3 col-span-12 flex flex-col gap-6 lg:col-span-5`}
        >
          <div className="flex items-start justify-between">
            <span className="feature-num mono-tag text-ash">
              / Feature {features[1].num}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash">
              {features[1].tag}
            </span>
          </div>
          <div className="text-ink">{features[1].icon}</div>
          <h3 className="display-upright text-[clamp(1.6rem,2.6vw,2.3rem)] text-ink balance">
            {features[1].title}
          </h3>
          <p className="text-[0.98rem] leading-[1.55] text-ink/70 pretty">
            {features[1].desc}
          </p>
        </article>

        {/* Bottom right card — accent */}
        <article
          className={`feature-card reveal delay-4 col-span-12 flex flex-col gap-6 lg:col-span-5 bg-signal/10 border-signal/30`}
        >
          <div className="flex items-start justify-between">
            <span className="mono-tag text-signal">
              / Feature {features[2].num}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal/80">
              {features[2].tag}
            </span>
          </div>
          <div className="text-ink">{features[2].icon}</div>
          <h3 className="display-upright text-[clamp(1.6rem,2.6vw,2.3rem)] text-ink balance">
            {features[2].title}
          </h3>
          <p className="text-[0.98rem] leading-[1.55] text-ink/75 pretty">
            {features[2].desc}
          </p>
        </article>
      </div>
    </section>
  )
}