import Image from "next/image";
import { Container } from "@/components/ui/container";
import { heartsaveMypad } from "@/lib/content.heartsave-mypad";

export function ProductConnectivity() {
  const { title, description, items } = heartsaveMypad.connectivity;

  return (
    <section className="relative overflow-hidden bg-white py-[88px] text-[#2D2E2E] md:py-[140px]">
      <Image
        src="/images/product/connectivity-screenshot-1.png"
        alt=""
        aria-hidden
        width={696}
        height={532}
        className="pointer-events-none absolute bottom-[80px] right-[-180px] hidden w-[640px] -rotate-[4.67deg] select-none lg:block"
      />
      <Image
        src="/images/product/connectivity-screenshot-2.png"
        alt=""
        aria-hidden
        width={522}
        height={401}
        className="pointer-events-none absolute left-[-200px] top-[-40px] hidden w-[480px] rotate-[8.78deg] select-none lg:block"
      />

      <Container className="relative z-10">
        <header className="mx-auto max-w-[800px] text-center">
          <h2 className="text-[40px] font-semibold leading-[1.1] text-[#b21c1c] md:text-[48px] md:leading-[64px]">
            {title}
          </h2>
          <p className="mt-8 text-[16px] leading-[1.55] text-[#2D2E2E] md:text-[22px] md:leading-[32px] md:tracking-[-0.45px]">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-16 grid max-w-[1440px] gap-6 md:grid-cols-2 md:gap-8">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[38px] border-2 border-[#b21c1c] p-10 md:p-14"
            >
              <h3 className="text-[24px] font-semibold leading-[30px] text-[#2D2E2E] md:text-[32px]">
                {item.title}
              </h3>
              <p className="mt-6 text-[16px] leading-[1.5] text-[#2D2E2E]/90 md:text-[22px] md:leading-[30px] md:tracking-[-0.3px]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
