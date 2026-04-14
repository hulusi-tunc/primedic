type IconName =
  | "briefcase"
  | "home"
  | "cart"
  | "basketball"
  | "book"
  | "pin"
  | "plane"
  | "music";

const common = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function UseCaseIcon({
  name,
  className = "h-7 w-7",
}: {
  name: IconName | string;
  className?: string;
}) {
  const props = { ...common, className };

  switch (name as IconName) {
    case "briefcase":
      return (
        <svg {...props}>
          <rect x="4" y="9" width="24" height="17" rx="2" />
          <path d="M11 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3M4 16h24" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M4 13l12-9 12 9v13a2 2 0 0 1-2 2h-5v-9h-10v9H6a2 2 0 0 1-2-2z" />
        </svg>
      );
    case "cart":
      return (
        <svg {...props}>
          <path d="M3 4h3l2.5 13a2 2 0 0 0 2 1.6h11.5a2 2 0 0 0 2-1.5L27 8H7" />
          <circle cx="12" cy="26" r="2" />
          <circle cx="23" cy="26" r="2" />
        </svg>
      );
    case "basketball":
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="12" />
          <path d="M4 16h24M16 4v24M7 7l18 18M7 25L25 7" />
        </svg>
      );
    case "book":
      return (
        <svg {...props}>
          <path d="M6 5h13a3 3 0 0 1 3 3v19H9a3 3 0 0 1-3-3z" />
          <path d="M22 27V8" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M16 28s10-9 10-16a10 10 0 1 0-20 0c0 7 10 16 10 16z" />
          <circle cx="16" cy="12" r="3.5" />
        </svg>
      );
    case "plane":
      return (
        <svg {...props}>
          <path d="M3 17l26-8-4 19-7-6-4 6-2-8-9-3z" />
        </svg>
      );
    case "music":
      return (
        <svg {...props}>
          <path d="M12 23V6l14-2v17" />
          <circle cx="9" cy="23" r="3" />
          <circle cx="23" cy="21" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="10" />
        </svg>
      );
  }
}
