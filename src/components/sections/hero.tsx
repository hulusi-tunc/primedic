import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Pretitle } from "@/components/ui/pretitle";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1a0303] pt-[160px] pb-[80px] md:pt-[200px] md:pb-[120px]">
      {/* Figma hero backdrop (1920×1503) — object-cover so the natural dark bottom of the image
          always lives right above the white Bilgin Tıp band */}
      <Image
        src="/images/hero/backdrop.webp"
        alt=""
        width={1920}
        height={1503}
        priority
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top select-none"
      />

      <Container width="wide">
        <div className="relative flex flex-col items-center text-center">
          <div className="relative z-10 flex flex-col items-center">
            <Pretitle>{hero.pretitle}</Pretitle>

            <h1 className="text-display mt-8 max-w-[940px] text-white">
              <span className="block">{hero.titleLine1}</span>
              <span className="block">{hero.titleLine2}</span>
            </h1>

            <p className="text-lead mt-6 max-w-[820px] text-white/75">
              {hero.description}
            </p>
          </div>

          <div className="pointer-events-none relative z-0 -mt-16 flex w-full justify-center md:-mt-20 lg:-mt-28">
            <Image
              src="/images/hero/composition.webp"
              alt="HeartSave myPAD — kompakt defibrilatör cihazı: LTE & Wifi bağlantı, CPR geri bildirimi, IP66 dayanıklılık, 1.1 kg, 5 yıl batarya, pediatrik mod"
              width={1248}
              height={1248}
              priority
              sizes="(min-width: 1024px) 960px, (min-width: 640px) 600px, 90vw"
              className="h-auto w-full max-w-[960px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
