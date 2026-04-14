import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[38px] font-semibold leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3c0a0a] disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-white text-[#272d27] hover:bg-white/90 border border-white/0",
  outline:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-[#272d27]",
  ghost: "bg-transparent text-white hover:bg-white/10 border border-transparent",
} as const;

const sizes = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-[18px]",
} as const;

export function Button({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "lg",
  className,
  children,
  href,
  external = false,
  ...rest
}: ButtonBaseProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], sizes[size], className)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}
