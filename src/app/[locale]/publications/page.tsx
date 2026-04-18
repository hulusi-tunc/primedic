import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

const copy = {
  tr: {
    title: "Yayınlar",
    description:
      "Primedic ve Bilgin Tıp yayınları, kurumsal dokümanlar ve basın kitlerine bu sayfadan erişebileceksiniz.",
    seoTitle: "Yayınlar | Primedic — Bilgin Tıp",
  },
  en: {
    title: "Publications",
    description:
      "You'll be able to access Primedic and Bilgin Tıp publications, corporate documents, and press kits from this page.",
    seoTitle: "Publications | Primedic — Bilgin Tıp",
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

export default async function PublicationsPage({
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
