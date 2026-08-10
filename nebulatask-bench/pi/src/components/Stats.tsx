type Stat = {
  value: string;
  label: string;
  caption: string;
};

const stats: Stat[] = [
  { value: '50K+', label: 'teams', caption: 'shipping with NebulaTask' },
  { value: '4.9/5', label: 'rating', caption: 'across app stores & G2' },
  { value: '120+', label: 'countries', caption: 'one timezone at a time' },
];

export default function Stats() {
  return (
    <section className="relative px-6 py-20 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 sm:grid-cols-3">
          {stats.map(({ value, label, caption }, i) => (
            <div
              key={label}
              className={`relative flex flex-col gap-3 px-8 py-10 sm:px-10 sm:py-12 ${
                i !== 0 ? 'sm:border-l sm:border-ink-700' : ''
              } ${i !== 0 ? 'border-t border-ink-700 sm:border-t-0' : ''}`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl font-black leading-none tracking-tightest text-bone-50 sm:text-7xl">
                  {value}
                </span>
                <span className="font-display text-xl font-light italic text-amber-glow sm:text-2xl">
                  {label}
                </span>
              </div>
              <p className="max-w-[18ch] font-mono text-[11px] uppercase tracking-[0.22em] text-bone-200">
                {caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
