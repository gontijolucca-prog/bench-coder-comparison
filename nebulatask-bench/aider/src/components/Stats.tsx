const stats = [
  { value: '50K+', label: 'teams shipping daily', accent: 'text-cosmos-violet' },
  { value: '4.9/5', label: 'average rating', accent: 'text-cosmos-fuchsia' },
  { value: '120+', label: 'countries represented', accent: 'text-cosmos-cyan' },
]

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-nebula-800/80 via-nebula-900/80 to-nebula-950 px-6 py-10 sm:px-10 sm:py-12">
          <div className="absolute inset-0 -z-10 bg-nebula-gradient opacity-60" aria-hidden />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cosmos-violet/60 to-transparent" aria-hidden />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center text-center ${i !== 0 ? 'sm:border-l sm:border-white/10' : ''}`}
              >
                <div className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${s.accent}`}>
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
