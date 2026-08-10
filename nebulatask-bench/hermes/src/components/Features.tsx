export function Features() {
  const features = [
    { title: "Smart Prioritization", body: "AI ranks your tasks automatically, surfacing what matters today — not what shouted loudest.", glyph: "01" },
    { title: "Team Sync", body: "Real-time collaboration across timezones without the meeting tax.", glyph: "02" },
    { title: "Deep Focus Mode", body: "Block distractions with one click. Notifications, peers, your own slack — all silenced.", glyph: "03" },
  ]
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 border-t border-stone-800/40">
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="font-mono text-xs text-amber-500/60 mb-6">{f.glyph} / 03</div>
            <h3 className="text-3xl mb-4 font-light group-hover:text-amber-500 transition-colors">{f.title}</h3>
            <p className="text-stone-400 leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
