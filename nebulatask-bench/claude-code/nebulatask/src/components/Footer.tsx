import type { JSX } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer(): JSX.Element {
  return (
    <footer
      id="contact"
      className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:py-20"
    >
      <div className="hairline" />

      <div className="mt-12 grid grid-cols-12 items-end gap-y-10">
        {/* Logo */}
        <div className="col-span-12 lg:col-span-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-full bg-ink"
            >
              <span className="h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="display-upright text-[1.85rem] tracking-crush text-ink">
              NebulaTask
            </span>
          </div>
          <p className="mt-4 max-w-[26rem] text-[0.95rem] leading-[1.55] text-ash pretty">
            Built quietly in Lisbon, Berlin and São Paulo. Helping distributed
            teams ship since 2023.
          </p>
        </div>

        {/* Links */}
        <nav
          aria-label="Footer"
          className="col-span-12 flex flex-wrap items-end gap-x-8 gap-y-3 lg:col-span-4 lg:justify-end"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink underline-offset-4 transition hover:text-signal hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mono meta */}
        <div className="col-span-12 lg:col-span-2 lg:text-right">
          <div className="mono-tag text-ash">Edition 02 · 2026</div>
        </div>
      </div>

      <div className="hairline mt-12" />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
        <span>© 2026 NebulaTask Inc.</span>
        <span>All rights reserved · Privacy · Terms · Security</span>
      </div>
    </footer>
  )
}