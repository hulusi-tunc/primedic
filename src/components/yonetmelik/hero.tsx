import { Container } from "@/components/ui/container";
import { yonetmelik } from "@/lib/content.yonetmelik";

export function YonetmelikHero() {
  const { title, linkText, linkHref, bodyText } = yonetmelik.hero;

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#080e18] to-[#555c6a]">
      <Container width="wide">
        <div className="flex min-h-[640px] flex-col justify-end pt-[200px] pb-[120px] md:pt-[260px] md:pb-[160px] lg:min-h-[862px]">
          <h1 className="max-w-[1320px] text-[36px] font-bold uppercase leading-[1.1] text-white md:text-[48px] lg:text-[60px]">
            {title}
          </h1>

          <p className="mt-12 max-w-[1500px] text-[20px] font-light leading-[1.45] tracking-[1.4px] text-white md:mt-16 md:text-[28px] md:tracking-[1.6px] lg:text-[36px] lg:tracking-[1.8px]">
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-solid underline-offset-[6px] transition-colors hover:text-white/80"
            >
              {linkText}
            </a>
            <span>{bodyText}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
