const links = [
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-ink-700 px-6 py-12 sm:py-14 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid size-7 place-items-center rounded-md bg-amber-glow font-display text-sm font-black text-ink-950">
            N
          </span>
          <span className="font-display text-lg font-black tracking-tightest text-bone-50">
            NebulaTask
          </span>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 font-sans text-sm text-bone-200">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="transition-colors duration-200 hover:text-amber-glow"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-200/70">
          © 2026 NebulaTask Inc.
        </p>
      </div>
    </footer>
  );
}
