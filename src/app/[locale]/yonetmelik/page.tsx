import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { YonetmelikHero } from "@/components/yonetmelik/hero";
import { YonetmelikRegulation } from "@/components/yonetmelik/regulation";
import { ProductCTA } from "@/components/product/cta";
import { yonetmelik } from "@/lib/content.yonetmelik";

const SITE_URL = "https://primedic.com.tr";
const PAGE_PATH = "/yonetmelik";
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: yonetmelik.seo.title,
  description: yonetmelik.seo.description,
  keywords: [...yonetmelik.seo.keywords],
  alternates: {
    canonical: CANONICAL,
    languages: {
      "tr-TR": CANONICAL,
      "en-US": `${SITE_URL}/en/regulation`,
      "x-default": CANONICAL,
    },
  },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: yonetmelik.seo.title,
    description: yonetmelik.seo.description,
    locale: "tr_TR",
    siteName: "Primedic — Bilgin Tıp",
  },
  twitter: {
    card: "summary_large_image",
    title: yonetmelik.seo.title,
    description: yonetmelik.seo.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${CANONICAL}#article`,
      headline: yonetmelik.regulation.title,
      description: yonetmelik.seo.description,
      url: CANONICAL,
      inLanguage: "tr-TR",
      isAccessibleForFree: true,
      author: {
        "@type": "Organization",
        name: "T.C. Sağlık Bakanlığı",
      },
      publisher: {
        "@type": "Organization",
        name: "Bilgin Tıp",
        url: SITE_URL,
      },
      datePublished: "2025-12-09",
      about: {
        "@type": "Thing",
        name: "Taşınabilir Otomatik Şok Cihazı (OED) Yönetmeliği",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Yönetmelik",
          item: CANONICAL,
        },
      ],
    },
  ],
};

export default function YonetmelikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuBar />
      <main>
        <YonetmelikHero />
        <YonetmelikRegulation />
        <ProductCTA />
      </main>
      <Footer />
    </>
  );
}
