import { Container } from "@/components/ui/container";

export function BlogHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#080e18] to-[#555c6a] pt-[180px] pb-[120px] md:pt-[240px] md:pb-[160px]">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)",
        }}
      />
      <Container width="wide">
        <div className="relative mx-auto flex max-w-[720px] flex-col items-center gap-8 text-center text-white">
          <h1 className="font-normal tracking-[0.2px]">
            {title}
          </h1>
          <p className="text-lead text-white/90">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
