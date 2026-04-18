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

const meta = {
  tr: {
    title: "Primedic HeartSave myPAD — Otomatik Defibrilatör | Bilgin Tıp",
    description:
      "Türkiye'de AED cihazı arıyorsanız: Primedic HeartSave myPAD, 8 yıl garanti, IP66 dayanıklılık, IoT yönetim. İş yeri ve kurum OED çözümleri için Bilgin Tıp.",
  },
  en: {
    title: "Primedic HeartSave myPAD — Automatic Defibrillator | Bilgin Tıp",
    description:
      "Looking for an AED? Primedic HeartSave myPAD — 8-year warranty, IP66 rated, IoT-enabled. Workplace and institutional defibrillator solutions by Bilgin Tıp.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale] ?? meta.tr;
  const canonical = locale === "en" ? `${SITE_URL}/en` : `${SITE_URL}/tr`;

  return {
    title: t.title,
    description: t.description,
    keywords: [
      "Primedic",
      "HeartSave myPAD",
      "AED",
      "OED",
      "otomatik eksternal defibrilatör",
      "defibrilatör",
      "CPR",
      "Bilgin Tıp",
    ],
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${SITE_URL}/tr`,
        "en-US": `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/tr`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: t.title,
      description: t.description,
      locale: locale === "en" ? "en_US" : "tr_TR",
      siteName: "Primedic — Bilgin Tıp",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
  };
}

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
