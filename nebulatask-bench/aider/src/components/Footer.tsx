const links = [
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-nebula-950">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cosmos-fuchsia/40 to-transparent" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-aurora shadow-glow-violet">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" aria-hidden>
              <path d="M4 14c2-4 5-7 8-7s6 3 8 7c-2 4-5 7-8 7s-6-3-8-7Z" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="14" r="2.4" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </span>
          <span className="font-display text-base font-semibold text-white">NebulaTask</span>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-slate-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-slate-500">© 2026 NebulaTask Inc.</p>
      </div>
    </footer>
  )
}
