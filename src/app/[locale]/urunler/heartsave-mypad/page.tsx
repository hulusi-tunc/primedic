import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { ProductHero } from "@/components/product/hero";
import { ProductOverview } from "@/components/product/overview";
import { ProductVideo } from "@/components/product/video";
import { ProductConnectivity } from "@/components/product/connectivity";
import { ProductDetails } from "@/components/product/details";
import { ProductCTA } from "@/components/product/cta";
import { heartsaveMypad } from "@/lib/content.heartsave-mypad";

const SITE_URL = "https://primedic.com.tr";
const CANONICAL = `${SITE_URL}/tr/urunler/heartsave-mypad`;

const meta = {
  tr: {
    title: "HeartSave myPAD — Tam Otomatik AED Cihazı | Primedic",
    description:
      "Primedic HeartSave myPAD: 1,1 kg, 8 yıl garanti, IP66, otomatik defibrilasyon ve adım adım CPR rehberliği. Sağlık personeli olmadan kullanılabilen AED cihazı.",
    path: "/tr/urunler/heartsave-mypad",
  },
  en: {
    title: "HeartSave myPAD — Fully Automatic AED Device | Primedic",
    description:
      "Primedic HeartSave myPAD: 1.1 kg, 8-year warranty, IP66 rated, automatic defibrillation and step-by-step CPR guidance. An AED anyone can use — no medical training required.",
    path: "/en/products/heartsave-mypad",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale] ?? meta.tr;
  const canonical = `${SITE_URL}${t.path}`;

  return {
    title: t.title,
    description: t.description,
    keywords: [...heartsaveMypad.seo.keywords],
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${SITE_URL}/tr/urunler/heartsave-mypad`,
        "en-US": `${SITE_URL}/en/products/heartsave-mypad`,
        "x-default": `${SITE_URL}/tr/urunler/heartsave-mypad`,
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
      "@type": "MedicalDevice",
      "@id": `${CANONICAL}#product`,
      name: "HeartSave myPAD",
      alternateName: "Primedic HeartSave myPAD AED",
      category: "Automated External Defibrillator",
      description: heartsaveMypad.seo.description,
      url: CANONICAL,
      brand: { "@type": "Brand", name: "Primedic" },
      manufacturer: {
        "@type": "Organization",
        name: "Primedic GmbH",
        countryOfOrigin: "DE",
      },
      purpose:
        "Ani kalp durması (kardiyak arrest) durumlarında otomatik kalp ritmi analizi ve defibrilasyon tedavisi",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Bilgin Tıp",
      alternateName: "Bilgin Tıp Medikal",
      url: SITE_URL,
      description:
        "Primedic HeartSave myPAD Türkiye distribütörü — 35 yıllık medikal cihaz deneyimi",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ürünler",
          item: `${SITE_URL}/urunler`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "HeartSave myPAD",
          item: CANONICAL,
        },
      ],
    },
  ],
};

export default function HeartSaveMyPadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuBar />
      <main>
        <ProductHero />
        <ProductOverview />
        <ProductVideo />
        <ProductConnectivity />
        <ProductDetails />
        <ProductCTA />
      </main>
      <Footer />
    </>
  );
}
