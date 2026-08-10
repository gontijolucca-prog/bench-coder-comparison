type Feature = {
  title: string
  description: string
  icon: React.ReactNode
  accent: string
  ring: string
  delay?: string
}

const features: Feature[] = [
  {
    title: 'Smart Prioritization',
    description: 'AI ranks your tasks automatically based on deadlines, dependencies, and team capacity.',
    accent: 'from-cosmos-violet/30 to-cosmos-violet/0',
    ring: 'group-hover:ring-cosmos-violet/50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5-2.1 2.1M9.6 14.4l-2.1 2.1m0-9 2.1 2.1m4.8 4.8 2.1 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'Team Sync',
    description: 'Real-time collaboration across timezones — async comments, live cursors, smart handoffs.',
    accent: 'from-cosmos-fuchsia/30 to-cosmos-fuchsia/0',
    ring: 'group-hover:ring-cosmos-fuchsia/50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="11" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 19c.7-2.6 2.9-4.2 5.5-4.2s4.8 1.6 5.5 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14.5 18.4c.5-1.8 2-3 3.7-3 1.4 0 2.6.8 3.3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Deep Focus Mode',
    description: 'Block distractions with one click — silences notifications and surfaces only what matters now.',
    accent: 'from-cosmos-cyan/30 to-cosmos-cyan/0',
    ring: 'group-hover:ring-cosmos-cyan/50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M3 12c2.5-4 5.5-6 9-6s6.5 2 9 6c-2.5 4-5.5 6-9 6s-6.5-2-9-6Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cosmos-fuchsia/90">Features</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Built for the way remote teams actually work
          </h2>
          <p className="mt-4 text-slate-400">
            Three pillars. No clutter. Everything you need to ship, nothing you don't.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-glow-pink ring-1 ring-transparent ${f.ring}`}
            >
              <div className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${f.accent} blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100`} aria-hidden />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-nebula-900/80 text-cosmos-violet group-hover:text-white">
                  {f.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
