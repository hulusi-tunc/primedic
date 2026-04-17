import type { Metadata } from "next";
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
import { faq } from "@/lib/content";

const SITE_URL = "https://primedic.com.tr";

export const metadata: Metadata = {
  title: "Primedic HeartSave myPAD — Her Yerde Kalbiniz Güvende | Bilgin Tıp",
  description:
    "HeartSave myPAD otomatik eksternal defibrilatör (OED/AED): biphasic defibrilasyon, gerçek zamanlı CPR geri bildirimi, IoT uzaktan yönetim, IP66 dayanıklılık. Türkiye distribütörü Bilgin Tıp.",
  keywords: [
    "Primedic",
    "HeartSave myPAD",
    "AED",
    "OED",
    "otomatik eksternal defibrilatör",
    "defibrilatör",
    "CPR",
    "kalp krizi",
    "ani kalp durması",
    "Bilgin Tıp",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      "tr-TR": SITE_URL,
      "en-US": `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Primedic HeartSave myPAD — Her Yerde Kalbiniz Güvende",
    description:
      "HeartSave myPAD: biphasic defibrilasyon, CPR geri bildirimi, IoT bağlantısı. Türkiye distribütörü Bilgin Tıp.",
    locale: "tr_TR",
    siteName: "Primedic — Bilgin Tıp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Primedic HeartSave myPAD — Her Yerde Kalbiniz Güvende",
    description:
      "HeartSave myPAD: biphasic defibrilasyon, CPR geri bildirimi, IoT bağlantısı. Türkiye distribütörü Bilgin Tıp.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Primedic — Bilgin Tıp",
      description:
        "HeartSave myPAD otomatik eksternal defibrilatör (OED/AED) — Türkiye distribütörü Bilgin Tıp Medikal",
      inLanguage: "tr-TR",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Bilgin Tıp Medikal",
      url: SITE_URL,
      description:
        "Primedic HeartSave myPAD Türkiye distribütörü — 35 yıllık medikal cihaz deneyimi",
    },
    {
      "@type": "MedicalDevice",
      "@id": `${SITE_URL}#product`,
      name: "HeartSave myPAD",
      category: "Automated External Defibrillator",
      brand: { "@type": "Brand", name: "Primedic" },
      manufacturer: {
        "@type": "Organization",
        name: "Primedic GmbH",
        countryOfOrigin: "DE",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}#faq`,
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
