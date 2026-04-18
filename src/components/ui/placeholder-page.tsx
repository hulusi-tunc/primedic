import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Link } from "@/i18n/navigation";

type PlaceholderCopy = {
  badge: string;
  title: string;
  description: string;
  cta: string;
};

const defaults: Record<"tr" | "en", PlaceholderCopy> = {
  tr: {
    badge: "Hazırlanıyor",
    title: "Bu sayfa yakında yayında",
    description:
      "İçerik şu anda hazırlanıyor. En kısa sürede sizinle buluşturacağız.",
    cta: "Ana Sayfaya Dön",
  },
  en: {
    badge: "Coming Soon",
    title: "This page is on the way",
    description:
      "We're putting this content together. It'll be available soon.",
    cta: "Back to Home",
  },
};

export function PlaceholderPage({
  locale,
  title,
  description,
}: {
  locale: "tr" | "en";
  title?: string;
  description?: string;
}) {
  const t = defaults[locale];

  return (
    <>
      <MenuBar />
      <main
        className="relative isolate flex min-h-[80vh] items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #3c0a0a 0%, #1a0303 60%, #0a0101 100%)",
        }}
      >
        <Container>
          <div className="mx-auto flex max-w-[640px] flex-col items-center py-[160px] text-center text-white md:py-[200px]">
            <span className="inline-flex items-center justify-center rounded-full border border-[#b21c1c] bg-white/5 px-5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#b21c1c]">
              {t.badge}
            </span>
            <h1 className="mt-8 text-balance text-white">
              {title ?? t.title}
            </h1>
            <p className="text-lead mt-6 max-w-[520px] text-white/75">
              {description ?? t.description}
            </p>
            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex h-[52px] items-center justify-center rounded-[24px] border-2 border-[#b21c1c] bg-white px-8 text-[18px] font-medium text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white"
              >
                {t.cta}
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
