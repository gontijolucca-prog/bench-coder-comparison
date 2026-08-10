export function Hero() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32">
      <div className="flex items-center gap-2 mb-12">
        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
        <span className="font-mono text-[10px] tracking-[0.3em] text-amber-500/80 uppercase">HERMES · AGENT BUILD</span>
      </div>
      <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tight mb-8">
        <span className="block">Your team's</span>
        <span className="block italic font-thin text-amber-500">second brain.</span>
      </h1>
      <p className="max-w-xl text-lg md:text-xl text-stone-400 leading-relaxed mb-12">
        NebulaTask removes the noise. AI ranks what matters, your team stays in sync, and focus time is sacred again.
      </p>
      <div className="flex flex-wrap items-center gap-6">
        <button className="group relative px-8 py-4 bg-amber-500 text-stone-950 font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-colors">
          Start Free Trial
          <span className="absolute -right-2 -top-2 w-4 h-4 border border-amber-500 bg-stone-950"></span>
        </button>
        <span className="font-mono text-xs text-stone-500">14 days · no card · cancel anytime</span>
      </div>
    </section>
  )
}
