type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 3v8M16 21v8M3 16h8M21 16h8M6.6 6.6l5.7 5.7M19.7 19.7l5.7 5.7M25.4 6.6l-5.7 5.7M12.3 19.7l-5.7 5.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <ellipse cx="16" cy="16" rx="12" ry="12" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="16" cy="16" rx="4.5" ry="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 4v24" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function FocusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 16h5M24 16h5M16 3v5M16 24v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
