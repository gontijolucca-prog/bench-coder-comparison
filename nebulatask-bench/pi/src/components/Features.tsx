import { SparkIcon, GlobeIcon, FocusIcon } from './icons';

type Feature = {
  icon: (props: { className?: string }) => JSX.Element;
  index: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: SparkIcon,
    index: '01',
    title: 'Smart Prioritization',
    description:
      'AI ranks your tasks by impact, urgency, and team load. The next right thing surfaces on its own — no triage meetings required.',
  },
  {
    icon: GlobeIcon,
    index: '02',
    title: 'Team Sync',
    description:
      'Real-time collaboration across every timezone. Hand off work without losing context, and see who is working on what right now.',
  },
  {
    icon: FocusIcon,
    index: '03',
    title: 'Deep Focus Mode',
    description:
      'One click silences notifications, hides non-essential tabs, and locks your calendar. Defend the hours that matter.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-end justify-between gap-8 sm:mb-20">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-glow">
              What's inside
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-tightest text-bone-50 sm:text-5xl text-balance">
              Three primitives.<br />
              <span className="font-light italic">Zero meetings about workflow.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-3">
          {features.map(({ icon: Icon, index, title, description }) => (
            <article
              key={title}
              className="group relative flex flex-col gap-6 bg-ink-900 p-8 transition duration-500 hover:bg-ink-800 sm:p-10"
            >
              <div className="flex items-start justify-between">
                <Icon className="size-9 text-amber-glow transition-transform duration-500 group-hover:rotate-[8deg]" />
                <span className="font-mono text-xs tracking-widest text-bone-200/60">
                  /{index}
                </span>
              </div>

              <h3 className="font-display text-2xl font-black leading-tight tracking-tightest text-bone-50 sm:text-[1.75rem]">
                {title}
              </h3>

              <p className="font-sans text-sm leading-relaxed text-bone-200 sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
