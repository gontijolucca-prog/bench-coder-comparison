import { ArrowUpRight } from './icons';

export default function Hero() {
  return (
    <section className="relative px-6 pt-28 pb-24 sm:pt-36 sm:pb-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-pulse-soft rounded-full bg-amber-glow" />
            <span className="relative size-2 rounded-full bg-amber-glow" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-bone-200">
            NebulaTask · v3.0 · 2026
          </span>
        </div>

        <h1 className="font-display text-bone-50 text-[clamp(3.25rem,9.5vw,8.5rem)] leading-[0.92] tracking-tightest text-balance">
          <span className="font-black">Tasks that</span>{' '}
          <span className="font-light italic text-amber-glow">orbit</span>
          <br />
          <span className="font-black">around your&nbsp;team.</span>
        </h1>

        <div className="mt-10 grid max-w-5xl gap-10 sm:mt-14 sm:grid-cols-12">
          <p className="font-sans text-lg leading-relaxed text-bone-100 sm:col-span-7 sm:text-xl">
            AI-ranked priorities, real-time sync across every timezone, and a focus mode that
            actually defends your attention. Built for distributed teams that ship without the
            chaos.
          </p>

          <div className="flex items-end sm:col-span-5 sm:justify-end">
            <a
              href="#trial"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-glow px-7 py-4 font-sans text-base font-medium text-ink-950 shadow-[0_18px_50px_-15px_rgba(255,107,44,0.55)] transition duration-300 hover:bg-amber-soft hover:shadow-[0_22px_60px_-15px_rgba(255,182,39,0.6)]"
            >
              Start Free Trial
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
