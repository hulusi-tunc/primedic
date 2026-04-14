import { MenuBar } from "@/components/sections/menu-bar";
import { Hero } from "@/components/sections/hero";
import { BilginTipBand } from "@/components/sections/bilgin-tip-band";
import { StatsCarousel } from "@/components/sections/stats-carousel";
import { PartnerBand } from "@/components/sections/partner-band";
import { Features } from "@/components/sections/features";
import { MidCTA } from "@/components/sections/mid-cta";
import { FamilyBand } from "@/components/sections/family-band";
import { UseCases } from "@/components/sections/use-cases";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <MenuBar />
      <main>
        <Hero />
        <BilginTipBand />
        <StatsCarousel />
        <PartnerBand />
        <Features />
        <MidCTA />
        <FamilyBand />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
