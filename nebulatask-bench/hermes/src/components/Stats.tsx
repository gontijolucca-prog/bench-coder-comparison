export function Stats() {
  const stats = [
    { num: "50K+", label: "teams shipped" },
    { num: "4.9/5", label: "rating across stores" },
    { num: "120+", label: "countries" },
  ]
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-stone-800/40">
      <div className="grid grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="relative">
            <div className="font-mono text-[10px] tracking-widest text-stone-500 uppercase absolute -top-3 left-0">{s.label}</div>
            <div className="text-6xl md:text-7xl font-thin text-stone-200 font-mono">{s.num}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
