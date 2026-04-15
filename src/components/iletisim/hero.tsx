import { Container } from "@/components/ui/container";
import { iletisim } from "@/lib/content.iletisim";

export function IletisimHero() {
  const { title, description } = iletisim.hero;

  return (
    <section
      className="relative isolate overflow-hidden pt-[180px] pb-[120px] md:pt-[240px] md:pb-[160px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #080e18 0%, #2b3240 55%, #555c6a 100%)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 55%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[13%] hidden h-[640px] w-[640px] -translate-x-1/2 rounded-full border border-white/5 lg:block"
      />

      <Container width="wide">
        <div className="mx-auto flex max-w-[780px] flex-col items-center gap-8 text-center text-white">
          <h1 className="font-normal tracking-[0.2px]">
            {title}
          </h1>
          <p className="text-lead text-white/90">
            {description.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}
