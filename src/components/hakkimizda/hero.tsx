import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { hakkimizda } from "@/lib/content.hakkimizda";

export function HakkimizdaHero() {
  const { titleLine1, titleLine2, actionLabel, actionHref, tiles } =
    hakkimizda.hero;
  const [tallLeft, shortTop, shortBottom, tallRight] = tiles;

  return (
    <section
      className="relative isolate overflow-hidden pt-[160px] pb-[100px] md:pt-[220px] md:pb-[140px]"
      style={{
        backgroundImage:
          "linear-gradient(256deg, rgba(178, 28, 28, 0.92) 4%, rgba(26, 29, 33, 0.82) 84%), radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 0%, rgba(26,29,33,0.85) 70%, #1a1d21 100%)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 top-24 hidden h-[780px] w-[780px] rounded-full border border-white/10 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 hidden h-[620px] w-[620px] rounded-full border border-white/10 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-56 hidden h-[460px] w-[460px] rounded-full border border-white/10 lg:block"
      />

      <Container width="wide">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-20">
          <div className="flex flex-col items-start">
            <h1 className="font-bold tracking-[0.25px] text-white">
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
            </h1>

            <Link
              href={actionHref}
              className="mt-10 inline-flex h-[56px] items-center justify-center rounded-[24px] border-2 border-[#b21c1c] bg-white px-8 text-[20px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:text-[24px]"
            >
              {actionLabel}
            </Link>
          </div>

          <div className="grid h-[460px] grid-cols-3 grid-rows-2 gap-4 md:h-[560px] md:gap-5">
            <HeroTile
              src={tallLeft.src}
              alt={tallLeft.alt}
              className="col-start-1 row-span-2"
              priority
            />
            <HeroTile
              src={shortTop.src}
              alt={shortTop.alt}
              className="col-start-2 row-start-1"
            />
            <HeroTile
              src={shortBottom.src}
              alt={shortBottom.alt}
              className="col-start-2 row-start-2"
            />
            <HeroTile
              src={tallRight.src}
              alt={tallRight.alt}
              className="col-start-3 row-span-2"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroTile({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[30px] ring-1 ring-white/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 44vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
