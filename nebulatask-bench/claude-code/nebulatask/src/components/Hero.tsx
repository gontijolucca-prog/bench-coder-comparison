import type { JSX } from 'react'

export default function Hero(): JSX.Element {
  return (
    <section className="atmos relative overflow-hidden">
      {/* Top eyebrow row */}
      <header className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-6 pt-8 sm:px-10 sm:pt-10">
        <div className="reveal delay-0 flex items-center gap-2.5">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-signal animate-pulse-signal" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink">
            NebulaTask <span className="text-ash">/ v2.4</span>
          </span>
        </div>

        <nav className="reveal delay-1 hidden items-center gap-7 md:flex">
          <a
            href="#features"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70 transition hover:text-ink"
          >
            Features
          </a>
          <a
            href="#proof"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70 transition hover:text-ink"
          >
            Proof
          </a>
          <a
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70 transition hover:text-ink"
          >
            Contact
          </a>
        </nav>

        <a
          href="#trial"
          className="reveal delay-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink underline-offset-4 hover:underline"
        >
          Sign in →
        </a>
      </header>

      {/* Hero body */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-16 sm:px-10 sm:pt-24 lg:pb-36 lg:pt-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          {/* Left — headline + tagline */}
          <div className="col-span-12 lg:col-span-9">
            <p className="reveal delay-1 mono-tag text-ash">
              ◍ Built for distributed teams · ship in days, not quarters
            </p>

            <h1 className="reveal delay-2 mt-7 text-[clamp(3.5rem,12vw,11.5rem)] text-ink">
              <span className="display block">Focus is</span>
              <span className="display-upright block">
                the new <span className="text-signal">productivity</span>.
              </span>
            </h1>

            <p className="reveal delay-4 mt-8 max-w-[34rem] text-[1.18rem] leading-[1.45] text-ink/75 pretty sm:text-[1.32rem]">
              NebulaTask is the calm operating system for remote teams —
              ranked priorities, real-time presence, and one-click deep
              focus. Less coordination tax. More shipping.
            </p>

            <div className="reveal delay-5 mt-10 flex flex-wrap items-center gap-4">
              <a href="#trial" className="cta group" id="trial">
                Start Free Trial
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-bone transition group-hover:translate-x-0.5"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h7m0 0L5.5 2.5M9 6L5.5 9.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <a href="#features" className="cta-ghost">
                See how it works
                <span aria-hidden>↓</span>
              </a>
            </div>

            <div className="reveal delay-6 mt-10 flex items-center gap-4 text-[13px] text-ash">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border border-bone bg-card" />
                <span className="h-7 w-7 rounded-full border border-bone bg-ink" />
                <span className="h-7 w-7 rounded-full border border-bone bg-signal" />
                <span className="h-7 w-7 rounded-full border border-bone bg-rule" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                No card · 14-day pro trial · cancel anytime
              </span>
            </div>
          </div>

          {/* Right — vertical mono metadata rail */}
          <aside className="reveal delay-3 col-span-12 hidden flex-col items-end justify-end gap-3 lg:flex">
            <div className="mono-tag text-ash">/// System status</div>
            <div className="border border-ink/20 bg-bone/60 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className="text-ink">All systems</span>
                <span className="text-signal">● Online</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-ink">
                <div>
                  <div className="mono-tag text-ash">Sync</div>
                  <div className="font-mono text-[15px] tracking-tight">38ms</div>
                </div>
                <div>
                  <div className="mono-tag text-ash">Uptime</div>
                  <div className="font-mono text-[15px] tracking-tight">
                    99.99
                  </div>
                </div>
                <div>
                  <div className="mono-tag text-ash">Regions</div>
                  <div className="font-mono text-[15px] tracking-tight">14</div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom hairline + scroller */}
        <div className="reveal delay-7 mt-20 flex items-center justify-between">
          <div className="mono-tag text-ash">Scroll · more below</div>
          <div className="hidden h-px flex-1 mx-6 bg-ink/15 sm:block" />
          <div className="mono-tag text-ash">2026 · Edition 02</div>
        </div>
      </div>
    </section>
  )
}