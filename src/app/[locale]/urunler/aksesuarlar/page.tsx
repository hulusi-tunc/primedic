import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { MidCTA } from "@/components/sections/mid-cta";
import { AksesuarHero } from "@/components/aksesuarlar/hero";
import { AksesuarAccessories } from "@/components/aksesuarlar/accessories";
import { aksesuarlar } from "@/lib/content.aksesuarlar";

const SITE_URL = "https://primedic.com.tr";
const PAGE_PATH = "/urunler/aksesuarlar";
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: aksesuarlar.seo.title,
  description: aksesuarlar.seo.description,
  keywords: [...aksesuarlar.seo.keywords],
  alternates: {
    canonical: CANONICAL,
    languages: {
      "tr-TR": CANONICAL,
      "en-US": `${SITE_URL}/en/products/accessories`,
      "x-default": CANONICAL,
    },
  },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: aksesuarlar.seo.title,
    description: aksesuarlar.seo.description,
    locale: "tr_TR",
    siteName: "Primedic — Bilgin Tıp",
  },
  twitter: {
    card: "summary_large_image",
    title: aksesuarlar.seo.title,
    description: aksesuarlar.seo.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${CANONICAL}#accessories`,
      url: CANONICAL,
      name: aksesuarlar.seo.title,
      description: aksesuarlar.seo.description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": `${SITE_URL}#website` },
      hasPart: aksesuarlar.groups.flatMap((g) =>
        g.rows.map((r) => ({
          "@type": "Product",
          name: r.title,
          description: r.subtitle,
          category: g.title,
          brand: { "@type": "Brand", name: "Primedic" },
        })),
      ),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ürünler",
          item: `${SITE_URL}/urunler/heartsave-mypad`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Aksesuarlar",
          item: CANONICAL,
        },
      ],
    },
  ],
};

export default function AksesuarlarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuBar />
      <main>
        <AksesuarHero />
        <AksesuarAccessories />
        <MidCTA />
      </main>
      <Footer />
    </>
  );
}
