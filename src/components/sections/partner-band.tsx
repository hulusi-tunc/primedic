import Image from "next/image";
import { Container } from "@/components/ui/container";

export function PartnerBand() {
  return (
    <section
      aria-label="Primedic — Designed & Developed in Germany"
      className="bg-white py-12"
    >
      <Container>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/primedic-german-approved.png"
            alt="Designed & Developed in Germany — PRIMEDIC Saves Life. Everywhere."
            width={672}
            height={141}
            sizes="(min-width: 768px) 672px, 80vw"
            className="h-auto w-full max-w-[672px] object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
