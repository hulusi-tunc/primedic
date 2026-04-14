import { Container } from "@/components/ui/container";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import { heartsaveMypad } from "@/lib/content.heartsave-mypad";

export function ProductVideo() {
  const { posterSrc, posterAlt } = heartsaveMypad.video;

  return (
    <section className="relative overflow-hidden py-[88px] md:py-[112px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(256.46deg, rgba(197, 39, 39, 0.92) 4%, rgba(26, 29, 33, 0.94) 96%)",
        }}
      />

      <Container width="wide">
        <div className="relative mx-auto w-full max-w-[1437px]">
          <AssetPlaceholder
            path={posterSrc}
            label={posterAlt}
            aspect="aspect-[1437/808]"
            tone="dark"
            className="overflow-hidden rounded-[40px] border border-white/15 bg-black/30"
          />
        </div>
      </Container>
    </section>
  );
}
