import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ctaBanner } from "@/lib/content";

export function MidCTA() {
  return (
    <section
      id="hakkimizda"
      className="relative bg-white py-[120px]"
      aria-labelledby="cta-title"
    >
      <Container width="wide">
        <div className="flex flex-col items-center gap-[51px] text-center">
          <div className="flex flex-col items-center gap-4">
            <span className="inline-flex h-[45px] items-center justify-center rounded-[38px] border border-[#b21c1c] bg-white px-6 text-[20px] font-bold leading-none text-black md:text-[24px]">
              {ctaBanner.pretitle}
            </span>

            <h2
              id="cta-title"
              className="max-w-[952px] text-balance bg-gradient-to-b from-[#b21c1c] from-[37.567%] to-black to-[73.375%] bg-clip-text text-[44px] font-semibold leading-[1.2] text-transparent md:text-[78px]"
            >
              {ctaBanner.title} {ctaBanner.titleAccent}
            </h2>

            <span
              aria-hidden
              className="h-[5px] w-[300px] max-w-[60%] bg-[#b21c1c]"
            />
          </div>

          <p className="max-w-[1386px] text-[20px] font-medium leading-[1.4] text-[#2d2e2e] md:text-[36px] md:leading-[50px]">
            {ctaBanner.description}
          </p>

          <Link
            href={ctaBanner.actionHref}
            className="inline-flex h-[56px] items-center justify-center rounded-[24px] border-2 border-[#b21c1c] bg-white px-8 text-[20px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white md:text-[24px]"
          >
            {ctaBanner.actionLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
