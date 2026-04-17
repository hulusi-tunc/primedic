import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { HakkimizdaHero } from "@/components/hakkimizda/hero";
import { HakkimizdaIntro } from "@/components/hakkimizda/intro";
import { HakkimizdaSolutions } from "@/components/hakkimizda/solutions";
import { HakkimizdaStory } from "@/components/hakkimizda/story";
import { ProductCTA } from "@/components/product/cta";
import { hakkimizda } from "@/lib/content.hakkimizda";

const SITE_URL = "https://primedic.com.tr";
const PAGE_PATH = "/hakkimizda";
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: hakkimizda.seo.title,
  description: hakkimizda.seo.description,
  keywords: [...hakkimizda.seo.keywords],
  alternates: {
    canonical: CANONICAL,
    languages: {
      "tr-TR": CANONICAL,
      "en-US": `${SITE_URL}/en/about`,
      "x-default": CANONICAL,
    },
  },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: hakkimizda.seo.title,
    description: hakkimizda.seo.description,
    locale: "tr_TR",
    siteName: "Primedic — Bilgin Tıp",
  },
  twitter: {
    card: "summary_large_image",
    title: hakkimizda.seo.title,
    description: hakkimizda.seo.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${CANONICAL}#about`,
      url: CANONICAL,
      name: hakkimizda.seo.title,
      description: hakkimizda.seo.description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: {
        "@type": "Organization",
        name: "Bilgin Tıp Medikal",
        url: "https://www.bilgintip.com.tr",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hakkımızda",
          item: CANONICAL,
        },
      ],
    },
  ],
};

export default function HakkimizdaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuBar />
      <main>
        <HakkimizdaHero />
        <HakkimizdaIntro />
        <HakkimizdaSolutions />
        <HakkimizdaStory />
        <ProductCTA />
      </main>
      <Footer />
    </>
  );
}
