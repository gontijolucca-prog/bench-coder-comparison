import type { ReactNode } from "react";

type Feature = {
  icon: string;
  num: string;
  title: string;
  body: string;
  offset: string;
};

const features: Feature[] = [
  {
    num: "01",
    icon: "✺",
    title: "Smart Prioritization",
    body: "An onboard model reorders your backlog every morning, surfaces blockers, and kills the tasks that don't matter this week.",
    offset: "md:translate-y-6",
  },
  {
    num: "02",
    icon: "◐",
    title: "Team Sync",
    body: "Live cursors, async stand-ups, and timezone-aware windows. The map shrinks and the work lines up.",
    offset: "",
  },
  {
    num: "03",
    icon: "◑",
    title: "Deep Focus Mode",
    body: "One toggle kills chat, hides notifications, and locks the sidebar. The whole planet quiets down.",
    offset: "md:translate-y-12",
  },
];

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] bg-[var(--color-cream)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)]">
      <span className="inline-block size-1.5 rounded-full bg-[var(--color-coral)]" style={{ animation: "pulseDot 2.4s ease-in-out infinite" }} />
      {children}
    </span>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <header className="reveal-1 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 sm:px-10">
        <a href="#" className="flex items-center gap-2 font-display text-2xl font-extrabold leading-none tracking-tight">
          NebulaTask<span className="text-[var(--color-coral)]">.</span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)] sm:flex">
          <a href="#features" className="hover:text-[var(--color-coral)] transition-colors">Features</a>
          <a href="#proof" className="hover:text-[var(--color-coral)] transition-colors">Numbers</a>
          <a href="#" className="hover:text-[var(--color-coral)] transition-colors">Sign in</a>
        </nav>
      </header>

      <section className="relative mx-auto w-full max-w-6xl px-6 pt-16 pb-24 sm:px-10 sm:pt-24 sm:pb-32">
        <div className="absolute right-0 top-10 hidden size-72 dotgrid opacity-50 sm:block drift" aria-hidden />

        <Pill>v3 — now with on-device ranking</Pill>

        <h1 className="reveal-2 mt-6 font-display font-extrabold tracking-[-0.04em] text-[clamp(3rem,9vw,7.5rem)] leading-[0.92]">
          Work,<br />
          <span className="italic font-extralight text-[var(--color-coral)]">without</span>{" "}
          <span className="relative inline-block">
            the
            <span className="absolute left-0 -bottom-1 h-[6px] w-full bg-[var(--color-ink)]" aria-hidden />
          </span>{" "}
          noise.
        </h1>

        <p className="reveal-3 mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">
          NebulaTask is the calm operating system for distributed teams. One inbox, one ranking engine, one quiet workspace — built so the work gets done before the meeting about the work gets scheduled.
        </p>

        <div className="reveal-4 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="btn-primary inline-flex items-center gap-3 px-7 py-4 font-mono text-sm uppercase tracking-[0.18em]"
          >
            Start Free Trial
            <span aria-hidden>↗</span>
          </a>
          <a href="#features" className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-ink-soft)] underline-offset-4 hover:text-[var(--color-coral)] hover:underline">
            See how it works →
          </a>
        </div>
      </section>

      <section id="features" className="border-y border-[var(--color-ink)] bg-[var(--color-cream-deep)] py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-coral)]">
                — what you get
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
                Three habits.<br />
                <span className="italic font-extralight">One quiet app.</span>
              </h2>
            </div>
            <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-[var(--color-ink-soft)]">
              / 01 · priority <br />/ 02 · sync <br />/ 03 · focus
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {features.map((f) => (
              <article
                key={f.num}
                className={`card relative p-7 ${f.offset}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl leading-none text-[var(--color-coral)]">
                    {f.icon}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
                    {f.num}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-extrabold leading-tight tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                  {f.body}
                </p>
                <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink)]">
                  <span className="h-px w-8 bg-[var(--color-ink)]" />
                  learn more
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="flex items-end justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-coral)]">
              — by the numbers
            </p>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)] sm:inline">
              updated · q4 2026
            </span>
          </div>

          <div className="mt-6 ruler h-px" />

          <div className="grid grid-cols-1 divide-y divide-[var(--color-ink)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <Stat number="50K+" label="teams shipping" sub="monthly active" />
            <Stat number="4.9/5" label="rating" sub="across 8,200 reviews" accent />
            <Stat number="120+" label="countries" sub="and counting" />
          </div>

          <div className="mt-6 ruler h-px" />
        </div>
      </section>

      <footer className="border-t border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-cream)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-10">
          <div>
            <p className="font-display text-3xl font-extrabold tracking-tight">
              NebulaTask<span className="text-[var(--color-coral)]">.</span>
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-cream-deep)]">
              © 2026 NebulaTask Inc.
            </p>
          </div>
          <ul className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.22em]">
            <li><a href="#" className="hover:text-[var(--color-coral)] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[var(--color-coral)] transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-[var(--color-coral)] transition-colors">Contact</a></li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

function Stat({ number, label, sub, accent }: { number: string; label: string; sub: string; accent?: boolean }) {
  return (
    <div className="flex flex-col gap-3 py-10 sm:px-10 sm:py-6">
      <span className={`font-display text-6xl font-extrabold leading-none tracking-[-0.04em] sm:text-7xl ${accent ? "text-[var(--color-coral)]" : ""}`}>
        {number}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink)]">
        {label}
      </span>
      <span className="font-sans text-sm text-[var(--color-ink-soft)]">{sub}</span>
    </div>
  );
}
