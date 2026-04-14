import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SpecIcon } from "@/components/product/spec-icon";
import { heartsaveMypad } from "@/lib/content.heartsave-mypad";

export function ProductDetails() {
  const { heading, description, cards } = heartsaveMypad.details;

  return (
    <section className="relative overflow-hidden py-[96px] text-white md:py-[140px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(34.64deg, rgba(178, 28, 28, 0.92) 54%, rgba(26, 29, 33, 0.94) 89%)",
        }}
      />

      <Container width="wide">
        <header className="mx-auto max-w-[1030px] text-center">
          <h2 className="text-[36px] font-semibold leading-[1.15] text-white md:text-[48px] md:leading-[64px]">
            {heading}
          </h2>
          <p className="mx-auto mt-8 max-w-[920px] text-[18px] leading-[1.5] text-white/85 md:text-[24px] md:leading-[36px] md:tracking-[-0.45px]">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-16 max-w-[1644px] space-y-10 md:mt-24">
          {cards.map((card) => (
            <article
              key={card.title}
              className="grid gap-10 rounded-[44px] border border-white/15 p-8 md:p-12 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-center lg:gap-14"
              style={{
                background:
                  "linear-gradient(63.23deg, rgba(0, 0, 0, 0.35) 25%, rgba(83, 84, 108, 0.35) 98%)",
              }}
            >
              <div
                className={`relative ${card.imageOnRight ? "lg:order-2" : "lg:order-1"}`}
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={card.imageWidth}
                  height={card.imageHeight}
                  sizes="(min-width: 1024px) 540px, 90vw"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className={card.imageOnRight ? "lg:order-1" : "lg:order-2"}>
                <h3 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.45px] text-white md:text-[36px] md:leading-[40px]">
                  {card.title}
                </h3>
                <p className="mt-6 text-[16px] leading-[1.55] text-white/90 md:text-[22px] md:leading-[30px] md:tracking-[-0.3px]">
                  {card.description}
                </p>

                <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {card.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col items-center justify-center gap-2 border border-white px-3 py-5 text-center"
                    >
                      <SpecIcon name={spec.icon} className="h-7 w-7 text-white" />
                      <dt className="mt-1 text-[10px] font-normal uppercase leading-[14px] text-white md:text-[11px]">
                        {spec.label}
                      </dt>
                      <dd className="text-[14px] font-bold leading-[20px] tracking-[-0.3px] text-white md:text-[16px]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
