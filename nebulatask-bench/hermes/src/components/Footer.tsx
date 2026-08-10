export function Footer() {
  return (
    <footer className="relative z-10 max-w-6xl mx-auto px-6 py-12 border-t border-stone-800/40 mt-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="font-mono text-sm">
          <span className="text-amber-500">▣</span> NebulaTask
        </div>
        <div className="flex gap-8 text-sm text-stone-400">
          <a href="#" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Pricing</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
        </div>
        <div className="font-mono text-xs text-stone-500">© 2026 NebulaTask Inc.</div>
      </div>
    </footer>
  )
}
