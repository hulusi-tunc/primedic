import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { IletisimHero } from "@/components/iletisim/hero";
import { IletisimContactForm } from "@/components/iletisim/contact-form";
import { iletisim } from "@/lib/content.iletisim";

const SITE_URL = "https://primedic.com.tr";

const meta = {
  tr: {
    title: "AED Teklif Talebi ve İletişim | Primedic Türkiye",
    description:
      "Primedic HeartSave myPAD için fiyat teklifi alın. İş yeri OED zorunluluğu, kurulum ve aksesuar sorularınız için Bilgin Tıp ekibi yanınızda.",
    path: "/tr/iletisim",
  },
  en: {
    title: "Contact & Quote Request | Primedic Turkey — Bilgin Tıp",
    description:
      "Get a quote for the Primedic HeartSave myPAD. Workplace AED requirements, installation, and accessories — the Bilgin Tıp team is here to help.",
    path: "/en/contact",
  },
} as const;

const CANONICAL = `${SITE_URL}/tr/iletisim`;

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
    keywords: [...iletisim.seo.keywords],
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${SITE_URL}/tr/iletisim`,
        "en-US": `${SITE_URL}/en/contact`,
        "x-default": `${SITE_URL}/tr/iletisim`,
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
      "@type": "ContactPage",
      "@id": `${CANONICAL}#contact`,
      url: CANONICAL,
      name: iletisim.seo.title,
      description: iletisim.seo.description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": `${SITE_URL}#website` },
    },
    {
      "@type": "Organization",
      name: "Bilgin Tıp Medikal",
      url: "https://www.bilgintip.com.tr",
      email: iletisim.form.contact.email,
      telephone: iletisim.form.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: iletisim.form.contact.address,
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "İletişim", item: CANONICAL },
      ],
    },
  ],
};

export default function IletisimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuBar />
      <main>
        <IletisimHero />
        <IletisimContactForm />
      </main>
      <Footer />
    </>
  );
}
