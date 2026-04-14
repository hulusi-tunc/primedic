import { cn } from "@/lib/cn";

export function Pretitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[38px] border border-[#9f2322] bg-white px-6 py-2.5 text-[20px] font-semibold leading-none text-[#272d27] md:text-[24px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
