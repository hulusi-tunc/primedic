import Image from "next/image";
import { Container } from "@/components/ui/container";
import { heartsaveMypad } from "@/lib/content.heartsave-mypad";

export function ProductOverview() {
  const { title, description, groups } = heartsaveMypad.overview;

  return (
    <section className="relative overflow-hidden bg-white py-[88px] text-[#2D2E2E] md:py-[140px]">
      <Image
        src="/images/product/heartbeat-left.svg"
        alt=""
        aria-hidden
        width={384}
        height={184}
        unoptimized
        className="pointer-events-none absolute left-[-30px] top-[110px] hidden w-[380px] select-none lg:block xl:left-[-10px] xl:w-[460px]"
      />
      <Image
        src="/images/product/heartbeat-right.svg"
        alt=""
        aria-hidden
        width={375}
        height={184}
        unoptimized
        className="pointer-events-none absolute right-[-30px] top-[110px] hidden w-[380px] select-none lg:block xl:right-[-10px] xl:w-[460px]"
      />

      <Container>
        <div className="mx-auto max-w-[1055px] text-center">
          <h2
            className="bg-clip-text text-[48px] font-semibold leading-[1.15] text-transparent md:text-[48px] md:leading-[64px]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #b21c1c 30%, #2D2E2E 100%)",
            }}
          >
            {title}
          </h2>
          <p className="mt-10 text-[17px] leading-[1.55] text-[#2D2E2E]/85 md:text-[22px] md:leading-[32px] md:tracking-[-0.45px]">
            {description}
          </p>
        </div>

        <div className="mt-20 space-y-20 md:space-y-28">
          {groups.map((group) => (
            <div key={group.tag}>
              <div className="mb-12 flex justify-center">
                <span className="inline-flex items-center rounded-full border border-[#b21c1c] bg-white px-5 py-2 text-[16px] font-normal leading-none text-[#b21c1c] md:text-[20px]">
                  {group.tag}
                </span>
              </div>

              <ul className="grid gap-x-14 gap-y-16 md:grid-cols-3">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <h3 className="text-[20px] font-bold leading-[30px] text-[#2D2E2E] md:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-[15px] leading-[1.5] text-[#2D2E2E]/85 md:text-[20px] md:leading-[25px]">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-16 h-px w-full bg-[#b21c1c]/30 md:mt-20" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
