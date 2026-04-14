type IconName =
  | "clock"
  | "grid"
  | "cable"
  | "zap"
  | "metronome"
  | "depth"
  | "target";

export function SpecIcon({
  name,
  className = "h-7 w-7",
}: {
  name: string;
  className?: string;
}) {
  const props = {
    viewBox: "0 0 32 32",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name as IconName) {
    case "clock":
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="12" />
          <path d="M16 9v7l4.5 2.5" />
        </svg>
      );
    case "grid":
      return (
        <svg {...props}>
          <rect x="5" y="5" width="9" height="9" rx="1" />
          <rect x="18" y="5" width="9" height="9" rx="1" />
          <rect x="5" y="18" width="9" height="9" rx="1" />
          <rect x="18" y="18" width="9" height="9" rx="1" />
        </svg>
      );
    case "cable":
      return (
        <svg {...props}>
          <path d="M9 4v6a3 3 0 0 0 3 3h0a3 3 0 0 1 3 3v8a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-2" />
          <path d="M7 4h4M21 28h2" />
        </svg>
      );
    case "zap":
      return (
        <svg {...props}>
          <path d="M18 4L8 18h7l-1 10 10-14h-7l1-10z" />
        </svg>
      );
    case "metronome":
      return (
        <svg {...props}>
          <path d="M11 6h10l3 22H8L11 6z" />
          <path d="M14 14l4 8" />
        </svg>
      );
    case "depth":
      return (
        <svg {...props}>
          <path d="M16 5v22" />
          <path d="M10 21l6 6 6-6" />
          <path d="M6 5h20" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="6" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
