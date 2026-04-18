import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";

export const metadata = {
  title: "404 — Primedic",
};

const copy = {
  tr: {
    htmlLang: "tr",
    title: "Sayfa Bulunamadı",
    description:
      "Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.",
    cta: "Ana Sayfaya Dön",
    homeHref: "/tr",
  },
  en: {
    htmlLang: "en",
    title: "Page Not Found",
    description:
      "The page you're looking for may have moved, been deleted, or never existed.",
    cta: "Back to Home",
    homeHref: "/en",
  },
} as const;

function detectLocale(acceptLanguage: string | null): "tr" | "en" {
  if (!acceptLanguage) return "tr";
  const langs = acceptLanguage
    .split(",")
    .map((l) => l.split(";")[0].trim().toLowerCase());
  for (const lang of langs) {
    if (lang.startsWith("en")) return "en";
    if (lang.startsWith("tr")) return "tr";
  }
  return "tr";
}

export default async function RootNotFound() {
  const h = await headers();
  const locale = detectLocale(h.get("accept-language"));
  const t = copy[locale];

  return (
    <html lang={t.htmlLang}>
      <body
        className="min-h-screen antialiased"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #3c0a0a 0%, #1a0303 60%, #0a0101 100%)",
          color: "#ffffff",
          fontFamily:
            "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <main className="mx-auto flex min-h-screen max-w-[720px] flex-col items-center justify-center px-6 py-24 text-center">
          <Link href={t.homeHref} aria-label="Primedic">
            <Image
              src="/logos/primedic.webp"
              alt="Primedic"
              width={316}
              height={66}
              priority
              className="h-[48px] w-auto"
            />
          </Link>

          <p
            className="mt-16 text-[120px] font-bold leading-none"
            style={{ color: "#b21c1c" }}
          >
            404
          </p>

          <h1 className="mt-6 text-[28px] font-semibold md:text-[36px]">
            {t.title}
          </h1>

          <p className="mt-4 text-[17px] leading-[1.6] text-white/70 md:text-[20px]">
            {t.description}
          </p>

          <div className="mt-10">
            <Link
              href={t.homeHref}
              className="inline-flex h-[52px] items-center justify-center rounded-[24px] border-2 border-[#b21c1c] bg-white px-8 text-[18px] font-medium text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white"
            >
              {t.cta}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
