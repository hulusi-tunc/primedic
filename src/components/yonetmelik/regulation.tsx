import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { yonetmelik } from "@/lib/content.yonetmelik";

function ParagraphText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className="text-lead text-white">
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} className="font-semibold">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

export function YonetmelikRegulation() {
  const { pretitle, title, chapters } = yonetmelik.regulation;
  const download = yonetmelik.download;

  return (
    <section
      className="relative isolate overflow-hidden py-[88px] md:py-[140px]"
      style={{
        background:
          "linear-gradient(111.27deg, rgba(178, 28, 28, 0.9) 48.04%, rgba(26, 29, 33, 0.81) 90.38%)",
      }}
    >
      <Container width="wide">
        <header className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#6b8e6f] bg-white px-6 py-3 text-[16px] font-semibold leading-none text-black md:text-[20px] lg:text-[24px]">
            {pretitle}
          </span>

          <h2 className="mt-12 text-white">
            {title}
          </h2>
        </header>

        <div className="mx-auto mt-20 max-w-[1444px] space-y-24">
          {chapters.map((chapter) => (
            <div key={chapter.number}>
              <header className="mx-auto max-w-[990px] text-center">
                <h3 className="text-white">
                  {chapter.number}
                </h3>
                <p className="text-[28px] font-semibold leading-[1.2] text-white md:text-[32px] lg:text-[36px] lg:leading-[50px]">
                  {chapter.title}
                </p>
              </header>

              <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
                {chapter.articles.map((article) => (
                  <article key={article.heading}>
                    <h4 className="font-bold text-white lg:leading-[50px]">
                      {article.heading}
                    </h4>
                    <div className="mt-4 space-y-3 md:mt-6 md:space-y-4">
                      {article.paragraphs.map((para, i) => (
                        <ParagraphText key={i} text={para} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 md:mt-28">
          <Image
            src="/images/yonetmelik/pdf-icon.svg"
            alt="PDF belgesi"
            width={166}
            height={172}
            unoptimized
            className="h-[120px] w-auto md:h-[160px]"
          />
          <Link
            href={download.href}
            className="inline-flex h-[56px] w-[242px] items-center justify-center rounded-[24px] border-2 border-[#b21c1c] bg-white text-[20px] font-bold text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3c0a0a] md:text-[24px]"
          >
            {download.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
