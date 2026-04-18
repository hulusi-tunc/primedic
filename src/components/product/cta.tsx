import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { getHeartsaveMypad } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function ProductCTA() {
  const locale = await getLocale();
  const heartsaveMypad = getHeartsaveMypad(locale);

  const { pretitle, title, description, actionLabel, actionHref } =
    heartsaveMypad.cta;

  return (
    <section className="bg-white py-[96px] text-[#2D2E2E] md:py-[140px]">
      <Container>
        <div className="mx-auto flex max-w-[1386px] flex-col items-center text-center">
          <span className="inline-flex h-[45px] items-center justify-center rounded-full border border-[#b21c1c] bg-white px-6 text-[20px] font-bold leading-none text-[#2D2E2E] md:text-[24px]">
            {pretitle}
          </span>

          <h2
            className="text-display mt-6 max-w-[960px] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #b21c1c 38%, #2D2E2E 73%)",
            }}
          >
            {title}
          </h2>

          <div className="mt-6 h-[5px] w-[240px] bg-[#b21c1c] md:w-[300px]" />

          <p className="text-lead-lg mx-auto mt-12 max-w-[1100px] font-medium text-[#2D2E2E]">
            {description}
          </p>

          <div className="mt-12">
            <Link
              href={actionHref}
              className="inline-flex h-[48px] items-center justify-center whitespace-nowrap rounded-[24px] border-2 border-[#b21c1c] bg-white px-6 text-[16px] font-medium text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b21c1c]/40 md:h-[56px] md:px-8 md:text-[20px] lg:text-[24px]"
            >
              {actionLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
