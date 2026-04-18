import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { MidCTA } from "@/components/sections/mid-cta";
import { AksesuarHero } from "@/components/aksesuarlar/hero";
import { AksesuarAccessories } from "@/components/aksesuarlar/accessories";
import { aksesuarlar } from "@/lib/content.aksesuarlar";

const SITE_URL = "https://primedic.com.tr";
const CANONICAL = `${SITE_URL}/tr/urunler/aksesuarlar`;

const meta = {
  tr: {
    title: "HeartSave myPAD Aksesuarları — Elektrot, Batarya, Çanta | Primedic",
    description:
      "AED kurulumu için gereken her şey: duvar aparatı, taşıma çantası, yedek elektrot ve eğitim kiti. Primedic HeartSave myPAD orijinal aksesuarları Bilgin Tıp'ta.",
    path: "/tr/urunler/aksesuarlar",
  },
  en: {
    title:
      "HeartSave myPAD Accessories — Electrodes, Battery, Case | Primedic",
    description:
      "Everything you need for AED setup: wall mount, carry case, replacement electrodes and training kit. Original Primedic HeartSave myPAD accessories at Bilgin Tıp.",
    path: "/en/products/accessories",
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
    keywords: [...aksesuarlar.seo.keywords],
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${SITE_URL}/tr/urunler/aksesuarlar`,
        "en-US": `${SITE_URL}/en/products/accessories`,
        "x-default": `${SITE_URL}/tr/urunler/aksesuarlar`,
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
