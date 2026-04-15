import Link from "next/link";
import { Container } from "@/components/ui/container";
import { hakkimizda } from "@/lib/content.hakkimizda";

export function HakkimizdaIntro() {
  const { paragraphs, actionLabel, actionHref } = hakkimizda.intro;

  return (
    <section className="bg-white py-[96px] text-[#2d2e2e] md:py-[140px]">
      <Container width="wide">
        <div className="mx-auto flex max-w-[1404px] flex-col items-center text-center">
          <div className="space-y-8 md:space-y-10">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[18px] font-normal leading-[1.55] tracking-[0.2px] text-black md:text-[26px] md:leading-[1.4] lg:text-[32px] lg:leading-[46px]"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14 md:mt-20">
            <Link
              href={actionHref}
              target={actionHref.startsWith("http") ? "_blank" : undefined}
              rel={
                actionHref.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="inline-flex h-[56px] items-center justify-center rounded-[24px] border-2 border-[#b21c1c] bg-white px-10 text-[20px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b21c1c]/40 md:text-[24px]"
            >
              {actionLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
