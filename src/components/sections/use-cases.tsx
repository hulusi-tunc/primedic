import { Container } from "@/components/ui/container";
import { Pretitle } from "@/components/ui/pretitle";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getUseCases } from "@/lib/get-content";
import { getLocale } from "next-intl/server";
import { UseCaseIcon } from "@/components/ui/use-case-icon";

export async function UseCases() {
  const locale = await getLocale();
  const useCases = getUseCases(locale);

  return (
    <section
      id="yonetmelik"
      className="relative bg-[#3c0a0a] py-[120px]"
      aria-labelledby="use-cases-title"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal y={20}>
            <Pretitle>{useCases.pretitle}</Pretitle>
          </Reveal>
          <Reveal delay={0.1} y={24}>
            <h2
              id="use-cases-title"
              className="mt-8 max-w-[900px] text-white"
            >
              {useCases.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p className="text-body-lg mt-6 max-w-[1100px] text-white/75">
              {useCases.description}
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:max-w-[1075px] xl:mx-auto">
          {useCases.items.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.08} y={28}>
              <div className="group flex h-full flex-col gap-6 rounded-[24px] border border-white/10 bg-white/[0.04] p-8 transition-colors hover:bg-white/[0.07]">
                <span className="flex h-14 w-14 items-center justify-center rounded-[16px] border border-white/15 bg-white/10 text-white">
                  <UseCaseIcon name={item.icon} />
                </span>
                <div>
                  <h3 className="text-[20px] leading-[1.2] text-white md:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="text-body-sm mt-3 text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <ButtonLink href={useCases.actionHref} variant="outline">
            {useCases.actionLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
