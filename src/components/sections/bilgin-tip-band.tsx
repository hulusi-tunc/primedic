import Image from "next/image";
import { Container } from "@/components/ui/container";

export function BilginTipBand() {
  return (
    <section
      aria-label="Bilgin Tıp Medikal — 35. yıl"
      className="bg-white py-14 md:py-16"
    >
      <Container>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/bilgin-tip.png"
            alt="Bilgin Tıp Medikal — 35. yıl"
            width={345}
            height={199}
            sizes="(min-width: 768px) 345px, 60vw"
            className="h-auto w-full max-w-[345px] object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
