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
const PAGE_PATH = "/urunler/heartsave-mypad";
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: heartsaveMypad.seo.title,
  description: heartsaveMypad.seo.description,
  keywords: [...heartsaveMypad.seo.keywords],
  alternates: {
    canonical: CANONICAL,
    languages: {
      "tr-TR": CANONICAL,
      "en-US": `${SITE_URL}/en/products/heartsave-mypad`,
      "x-default": CANONICAL,
    },
  },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: heartsaveMypad.seo.title,
    description: heartsaveMypad.seo.description,
    locale: "tr_TR",
    siteName: "Primedic — Bilgin Tıp",
  },
  twitter: {
    card: "summary_large_image",
    title: heartsaveMypad.seo.title,
    description: heartsaveMypad.seo.description,
  },
};

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
