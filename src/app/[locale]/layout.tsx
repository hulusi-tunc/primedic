import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Primedic HeartSave myPAD — Her Yerde Kalbiniz Güvende",
  description:
    "HeartSave myPAD defibrilatör: akıllı defibrilasyon teknolojisi, gerçek zamanlı CPR geri bildirimi, IP66 dayanıklılık ve 8 yıl garanti. Bireysel ve kurumsal AED çözümleri.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
