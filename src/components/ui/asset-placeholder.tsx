import { cn } from "@/lib/cn";

type Tone = "dark" | "light";

export function AssetPlaceholder({
  path,
  label,
  tone = "dark",
  className,
  aspect,
}: {
  path: string;
  label: string;
  tone?: Tone;
  className?: string;
  aspect?: string;
}) {
  const palette =
    tone === "dark"
      ? "border-white/25 bg-white/5 text-white"
      : "border-[#2D2E2E]/25 bg-[#2D2E2E]/[0.03] text-[#2D2E2E]";

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex w-full items-center justify-center rounded-[24px] border-2 border-dashed p-8 text-center",
        palette,
        aspect,
        className,
      )}
    >
      <div>
        <div className="text-[14px] font-semibold leading-snug">{label}</div>
        <div className="mt-2 break-all font-mono text-[11px] opacity-60">
          {path}
        </div>
      </div>
    </div>
  );
}
