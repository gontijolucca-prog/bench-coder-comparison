import type { JSX } from "react";

function Logo({ className = "" }: { className?: string }): JSX.Element {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="60%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <path
          d="M16 42 L32 16 L48 42 Z"
          fill="none"
          stroke="url(#logoG)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="42" r="3.5" fill="url(#logoG)" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-white">
        NebulaTask
      </span>
    </div>
  );
}

type Feature = {
  title: string;
  body: string;
  icon: JSX.Element;
  accent: string;
};

const features: Feature[] = [
  {
    title: "Smart Prioritization",
    body: "AI ranks your tasks automatically — surfacing what unblocks the team first, every morning.",
    accent: "from-violet-500/40 via-violet-400/20 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <defs>
          <linearGradient id="f1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <path
          d="M12 2 L14.6 8.6 L21.5 9.2 L16.3 13.6 L17.9 20.3 L12 16.7 L6.1 20.3 L7.7 13.6 L2.5 9.2 L9.4 8.6 Z"
          stroke="url(#f1)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2" fill="url(#f1)" />
      </svg>
    ),
  },
  {
    title: "Team Sync",
    body: "Real-time collaboration across timezones — live cursors, instant handoffs, zero standups.",
    accent: "from-cyan-400/40 via-cyan-300/20 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <defs>
          <linearGradient id="f2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="3" stroke="url(#f2)" strokeWidth="1.5" />
        <path
          d="M3.5 12a8.5 8.5 0 0 1 17 0M5.5 12a6.5 6.5 0 0 1 13 0"
          stroke="url(#f2)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="1.2" fill="url(#f2)" />
      </svg>
    ),
  },
  {
    title: "Deep Focus Mode",
    body: "Block distractions with one click — notifications muted, Slack paused, work protected.",
    accent: "from-rose-400/40 via-fuchsia-400/20 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <defs>
          <linearGradient id="f3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
        <path
          d="M4 12c2.5-4 6-6 8-6s5.5 2 8 6c-2.5 4-6 6-8 6s-5.5-2-8-6Z"
          stroke="url(#f3)"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="2.5" stroke="url(#f3)" strokeWidth="1.5" />
        <path d="M12 9.5V7" stroke="url(#f3)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const stats = [
  { value: "50K+", label: "teams shipping daily" },
  { value: "4.9/5", label: "average rating" },
  { value: "120+", label: "countries and counting" },
];

function App(): JSX.Element {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="hidden gap-8 text-sm text-white/60 sm:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#stats" className="transition hover:text-white">Customers</a>
          <a href="#footer" className="transition hover:text-white">Company</a>
        </nav>
        <a
          href="#cta"
          className="hidden rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white sm:inline-block"
        >
          Sign in
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-12 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            New · AI prioritization is live
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
            Ship work,
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              not meetings.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/65">
            NebulaTask is the calm operating system for remote teams. One inbox for every task, ranked
            by what actually moves the needle.
          </p>

          <div id="cta" className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight"
            >
              Start Free Trial
            </button>
            <a
              href="#features"
              className="rounded-full px-6 py-3.5 text-sm font-medium text-white/70 transition hover:text-white"
            >
              See how it works →
            </a>
          </div>
          <p className="mt-4 text-xs text-white/40">
            Free for 14 days · no credit card · cancel anytime
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="card-glow relative overflow-hidden rounded-2xl p-7 transition hover:-translate-y-0.5"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${f.accent} blur-2xl`}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  {f.icon}
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
        <div className="card-glow relative overflow-hidden rounded-3xl px-6 py-10 sm:px-12">
          <div className="ring-divider absolute inset-x-0 top-0" aria-hidden="true" />
          <dl className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={
                  i < stats.length - 1
                    ? "sm:border-r sm:border-white/10"
                    : ""
                }
              >
                <dt className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm uppercase tracking-[0.18em] text-white/50">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="text-sm text-white/40">© 2026 NebulaTask Inc.</span>
          </div>
          <ul className="flex gap-6 text-sm text-white/60">
            <li>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="transition hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
