import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getHeartsaveMypad } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function ProductHero() {
  const locale = await getLocale();
  const heartsaveMypad = getHeartsaveMypad(locale);

  const { brand, tagline, ctaLabel, ctaHref, imageSrc, imageAlt } =
    heartsaveMypad.hero;

  return (
    <section className="relative isolate overflow-hidden lg:min-h-[860px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(231.66deg, rgba(178, 28, 28, 0.95) 12%, rgba(26, 29, 33, 0.95) 61%)",
        }}
      />

      <Container width="wide">
        <div className="mx-auto max-w-[720px] pt-[180px] pb-[60px] text-center md:pt-[220px] lg:mx-0 lg:ml-[6%] xl:ml-[10%]">
          <Reveal delay={0.1} y={24}>
            <h1 className="font-bold tracking-[0.26px] text-white">
              {brand}
            </h1>
          </Reveal>

          <Reveal delay={0.25} y={24}>
            <p className="text-tagline mt-10 text-white">
              {tagline}
            </p>
          </Reveal>

          <Reveal delay={0.4} y={16}>
            <div className="mt-12">
              <Link
                href={ctaHref}
                className="inline-flex h-[56px] w-[198px] items-center justify-center rounded-[24px] border-2 border-[#b21c1c] bg-white text-[20px] font-medium text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3c0a0a] md:text-[24px]"
              >
                {ctaLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>

      <div className="relative mr-auto max-w-[480px] pr-6 lg:absolute lg:bottom-0 lg:right-0 lg:mr-0 lg:max-w-none lg:p-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={968}
          height={864}
          priority
          sizes="(min-width: 1280px) 760px, (min-width: 1024px) 640px, (min-width: 480px) 480px, 92vw"
          className="h-auto w-full object-contain lg:w-[640px] xl:w-[760px] 2xl:w-[820px]"
        />
      </div>
    </section>
  );
}
