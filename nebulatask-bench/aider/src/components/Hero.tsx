export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 -z-10 bg-nebula-gradient" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden />
      <div className="absolute -top-32 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cosmos-violet/30 blur-[120px]" aria-hidden />
      <div className="absolute top-40 right-10 -z-10 h-3 w-3 rounded-full bg-cosmos-cyan animate-twinkle" aria-hidden />
      <div className="absolute top-56 left-16 -z-10 h-2 w-2 rounded-full bg-cosmos-pink animate-twinkle" style={{ animationDelay: '1.2s' }} aria-hidden />
      <div className="absolute bottom-20 right-1/3 -z-10 h-2 w-2 rounded-full bg-white animate-twinkle" style={{ animationDelay: '2.4s' }} aria-hidden />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 pb-24 text-center sm:pt-28 lg:pt-32 lg:pb-32">
        {/* eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cosmos-mint shadow-[0_0_10px_#a3e635]" />
          v3.0 · Now with AI workflows
        </div>

        {/* product name */}
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-gradient">NebulaTask</span>
        </h1>

        {/* tagline */}
        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
          The task management app that <span className="text-white">thinks with your team</span>.
          Prioritize intelligently, sync across timezones, and ship deep work without the chaos.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#start"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-aurora px-7 py-3.5 text-sm font-semibold text-white shadow-glow-violet transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cosmos-fuchsia/60"
          >
            Start Free Trial
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
            >
              <path d="M4 10h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="text-xs text-slate-400">No credit card · 14-day trial</span>
        </div>

        {/* mock product visual */}
        <div className="relative mt-16 w-full max-w-4xl">
          <div className="absolute -inset-x-6 -inset-y-6 -z-10 rounded-[2rem] bg-gradient-to-b from-cosmos-violet/20 via-transparent to-transparent blur-2xl" aria-hidden />
          <div className="rounded-2xl border border-white/10 bg-nebula-900/70 p-3 shadow-2xl ring-glow backdrop-blur">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-slate-500">nebulatask.app/board</span>
            </div>
            <div className="grid grid-cols-1 gap-3 rounded-xl bg-nebula-950/60 p-4 sm:grid-cols-3">
              {[
                { title: 'Backlog', accent: 'from-slate-500/40 to-slate-500/0', items: ['Refactor auth', 'User interviews', 'Q3 OKRs'] },
                { title: 'In progress', accent: 'from-cosmos-violet/40 to-cosmos-violet/0', items: ['Billing v2', 'Onboarding flow'] },
                { title: 'Shipped', accent: 'from-cosmos-mint/40 to-cosmos-mint/0', items: ['Dark mode', 'Mobile polish', 'AI sort'] },
              ].map((col) => (
                <div key={col.title} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                  <div className={`mb-3 h-1 w-12 rounded-full bg-gradient-to-r ${col.accent}`} />
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{col.title}</div>
                  <div className="space-y-2">
                    {col.items.map((item) => (
                      <div key={item} className="rounded-md border border-white/5 bg-nebula-900/80 px-3 py-2 text-left text-xs text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
