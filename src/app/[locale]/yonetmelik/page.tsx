import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { YonetmelikHero } from "@/components/yonetmelik/hero";
import { YonetmelikRegulation } from "@/components/yonetmelik/regulation";
import { ProductCTA } from "@/components/product/cta";
import { yonetmelik } from "@/lib/content.yonetmelik";

const SITE_URL = "https://primedic.com.tr";
const CANONICAL = `${SITE_URL}/tr/yonetmelik`;

const meta = {
  tr: {
    title: "OED Yönetmeliği — İş Yeri Zorunlulukları | Primedic",
    description:
      "İş yerinizde OED bulundurmak zorunlu mu? Aralık 2025 yönetmeliği kimleri kapsıyor, ne zaman uygulanıyor? Resmi Gazete metnini ve özet rehberi burada okuyun.",
    path: "/tr/yonetmelik",
  },
  en: {
    title: "AED Regulation Turkey — Workplace Requirements | Primedic",
    description:
      "Is your workplace required to have an AED in Turkey? Find out who the December 2025 regulation covers, key deadlines, and read the full official text with a summary guide.",
    path: "/en/regulation",
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
    keywords: [...yonetmelik.seo.keywords],
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${SITE_URL}/tr/yonetmelik`,
        "en-US": `${SITE_URL}/en/regulation`,
        "x-default": `${SITE_URL}/tr/yonetmelik`,
      },
    },
    openGraph: {
      type: "article",
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
