import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getHakkimizda } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function HakkimizdaStory() {
  const locale = await getLocale();
  const hakkimizda = getHakkimizda(locale);
  const { eyebrow, paragraphs, image, quote } = hakkimizda.story;

  return (
    <section
      className="relative isolate overflow-hidden py-[96px] md:py-[160px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(178, 28, 28, 0.92) 0%, rgba(26, 29, 33, 0.92) 100%)",
      }}
    >
      <Container width="wide">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-[90px]">
          <div className="text-white">
            <h2 className="font-medium">
              {eyebrow}
            </h2>
            <div className="mt-8 space-y-5 md:mt-10">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-body-lg text-white/95"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[420/700] w-full max-w-[520px] overflow-hidden rounded-[30px] ring-1 ring-white/10 lg:mx-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 520px, 80vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-[1260px] border-t border-white/25 pt-16 text-center text-white md:mt-28 md:pt-20">
          <h3>
            {quote.title}
          </h3>
          <p className="text-lead-lg mx-auto mt-8 max-w-[1171px] text-white/95">
            {quote.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
