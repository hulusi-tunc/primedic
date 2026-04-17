import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getHeartsaveMypad } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function ProductOverview() {
  const locale = await getLocale();
  const heartsaveMypad = getHeartsaveMypad(locale);

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
        className="pointer-events-none absolute top-[110px] hidden w-[380px] select-none lg:left-[calc(50%-948px)] lg:block xl:left-[calc(50%-1028px)] xl:w-[460px]"
      />
      <Image
        src="/images/product/heartbeat-right.svg"
        alt=""
        aria-hidden
        width={375}
        height={184}
        unoptimized
        className="pointer-events-none absolute top-[110px] hidden w-[380px] select-none lg:right-[calc(50%-948px)] lg:block xl:right-[calc(50%-1028px)] xl:w-[460px]"
      />

      <Container>
        <div className="mx-auto max-w-[1055px] text-center">
          <h2
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #b21c1c 30%, #2D2E2E 100%)",
            }}
          >
            {title}
          </h2>
          <p className="text-lead mt-10 text-[#2D2E2E]/85">
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
                    <h3 className="text-[20px] font-bold leading-[30px] text-[#2D2E2E] md:text-[24px] md:leading-[32px]">
                      {item.title}
                    </h3>
                    <p className="text-body mt-5 text-[#2D2E2E]/85">
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
