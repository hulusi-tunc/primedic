import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { yonetmelik } from "@/lib/content.yonetmelik";

export function YonetmelikHero() {
  const { title, linkText, linkHref, bodyText } = yonetmelik.hero;

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#080e18] to-[#555c6a]">
      <Container width="wide">
        <div className="flex min-h-[640px] flex-col justify-end pt-[200px] pb-[120px] md:pt-[260px] md:pb-[160px] lg:min-h-[862px]">
          <Reveal delay={0.1} y={28}>
            <h1 className="max-w-[1320px] font-bold uppercase text-white">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.25} y={24} className="text-lead-lg mt-12 max-w-[1500px] font-light tracking-[1.4px] text-white md:mt-16 md:tracking-[1.6px] lg:tracking-[1.8px]">
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-solid underline-offset-[6px] transition-colors hover:text-white/80"
            >
              {linkText}
            </a>
            <span>{bodyText}</span>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
