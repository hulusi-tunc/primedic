import { Container } from "@/components/ui/container";
import { Pretitle } from "@/components/ui/pretitle";
import { ButtonLink } from "@/components/ui/button";
import { useCases } from "@/lib/content";
import { UseCaseIcon } from "@/components/ui/use-case-icon";

export function UseCases() {
  return (
    <section
      id="yonetmelik"
      className="relative bg-[#3c0a0a] py-[120px]"
      aria-labelledby="use-cases-title"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <Pretitle>{useCases.pretitle}</Pretitle>
          <h2
            id="use-cases-title"
            className="mt-8 max-w-[900px] text-balance text-[32px] font-semibold leading-[1.15] text-white md:text-[52px]"
          >
            {useCases.title}
          </h2>
          <p className="mt-6 max-w-[1100px] text-[17px] leading-[1.55] text-white/75 md:text-[20px]">
            {useCases.description}
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:max-w-[1075px] xl:mx-auto">
          {useCases.items.map((item) => (
            <li
              key={item.title}
              className="group flex flex-col gap-6 rounded-[24px] border border-white/10 bg-white/[0.04] p-8 transition-colors hover:bg-white/[0.07]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-[16px] border border-white/15 bg-white/10 text-white">
                <UseCaseIcon name={item.icon} />
              </span>
              <div>
                <h3 className="text-[20px] font-semibold leading-[1.2] text-white md:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-white/70 md:text-[16px]">
                  {item.description}
                </p>
              </div>
            </li>
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
