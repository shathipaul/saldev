type IconProps = { className?: string; strokeWidth?: number };

function Stroke({ className, strokeWidth, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowIcon({ className, strokeWidth = 2.4 }: IconProps) {
  return (
    <Stroke className={className} strokeWidth={strokeWidth}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </Stroke>
  );
}

export function CheckIcon({ className, strokeWidth = 2.6 }: IconProps) {
  return (
    <Stroke className={className} strokeWidth={strokeWidth}>
      <path d="M20 6 9 17l-5-5" />
    </Stroke>
  );
}

export function InfoIcon({ className, strokeWidth = 2.2 }: IconProps) {
  return (
    <Stroke className={className} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4M12 8h.01" />
    </Stroke>
  );
}

export function WarnIcon({ className, strokeWidth = 2.2 }: IconProps) {
  return (
    <Stroke className={className} strokeWidth={strokeWidth}>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </Stroke>
  );
}

export function ClockIcon({ className, strokeWidth = 2.2 }: IconProps) {
  return (
    <Stroke className={className} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Stroke>
  );
}

export function DollarIcon({ className, strokeWidth = 2.2 }: IconProps) {
  return (
    <Stroke className={className} strokeWidth={strokeWidth}>
      <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </Stroke>
  );
}

export function GridIcon({ className, strokeWidth = 2.2 }: IconProps) {
  return (
    <Stroke className={className} strokeWidth={strokeWidth}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </Stroke>
  );
}

export function PeopleIcon({ className, strokeWidth = 2.2 }: IconProps) {
  return (
    <Stroke className={className} strokeWidth={strokeWidth}>
      <path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87" />
      <circle cx="12" cy="7" r="4" />
    </Stroke>
  );
}

export function HelpIcon({ className, strokeWidth = 2.2 }: IconProps) {
  return (
    <Stroke className={className} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 9a2.9 2.9 0 0 1 5.6 1c0 2-2.8 2.5-2.8 2.5M12 17h.01" />
    </Stroke>
  );
}
