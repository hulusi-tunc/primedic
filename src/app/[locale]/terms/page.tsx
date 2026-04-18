import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

const copy = {
  tr: {
    title: "Kullanım Şartları",
    description:
      "Web sitesi kullanım koşulları ve sorumluluklarına dair bilgiler bu sayfada yakında yayınlanacaktır.",
    seoTitle: "Kullanım Şartları | Primedic — Bilgin Tıp",
  },
  en: {
    title: "Terms of Use",
    description:
      "Information about website terms of use and responsibilities will be published on this page soon.",
    seoTitle: "Terms of Use | Primedic — Bilgin Tıp",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[locale] ?? copy.tr;
  return {
    title: t.seoTitle,
    description: t.description,
    robots: { index: false, follow: true },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.tr;
  return (
    <PlaceholderPage
      locale={locale}
      title={t.title}
      description={t.description}
    />
  );
}
