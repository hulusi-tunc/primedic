import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { IletisimHero } from "@/components/iletisim/hero";
import { IletisimContactForm } from "@/components/iletisim/contact-form";
import { iletisim } from "@/lib/content.iletisim";

const SITE_URL = "https://primedic.com.tr";
const PAGE_PATH = "/iletisim";
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: iletisim.seo.title,
  description: iletisim.seo.description,
  keywords: [...iletisim.seo.keywords],
  alternates: {
    canonical: CANONICAL,
    languages: {
      "tr-TR": CANONICAL,
      "en-US": `${SITE_URL}/en/contact`,
      "x-default": CANONICAL,
    },
  },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: iletisim.seo.title,
    description: iletisim.seo.description,
    locale: "tr_TR",
    siteName: "Primedic — Bilgin Tıp",
  },
  twitter: {
    card: "summary_large_image",
    title: iletisim.seo.title,
    description: iletisim.seo.description,
  },
};

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
