import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getCtaBanner } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function MidCTA() {
  const locale = await getLocale();
  const ctaBanner = getCtaBanner(locale);

  return (
    <section
      id="hakkimizda"
      className="relative bg-white py-[120px]"
      aria-labelledby="cta-title"
    >
      <Container width="wide">
        <div className="flex flex-col items-center gap-[51px] text-center">
          <Reveal y={24}>
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex h-[45px] items-center justify-center rounded-[38px] border border-[#b21c1c] bg-white px-6 text-[20px] font-bold leading-none text-black md:text-[24px]">
                {ctaBanner.pretitle}
              </span>

              <h2
                id="cta-title"
                className="text-display-xl max-w-[952px] bg-gradient-to-b from-[#b21c1c] from-[37.567%] to-black to-[73.375%] bg-clip-text text-transparent"
              >
                {ctaBanner.title} {ctaBanner.titleAccent}
              </h2>

              <span
                aria-hidden
                className="h-[5px] w-[300px] max-w-[60%] bg-[#b21c1c]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} y={20}>
            <p className="text-lead-lg max-w-[1386px] font-medium text-[#2d2e2e]">
              {ctaBanner.description}
            </p>
          </Reveal>

          <Reveal delay={0.25} y={16}>
            <Link
              href={ctaBanner.actionHref}
              className="inline-flex h-[48px] items-center justify-center whitespace-nowrap rounded-[24px] border-2 border-[#b21c1c] bg-white px-6 text-[16px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white md:h-[56px] md:px-8 md:text-[20px] lg:text-[24px]"
            >
              {ctaBanner.actionLabel}
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
