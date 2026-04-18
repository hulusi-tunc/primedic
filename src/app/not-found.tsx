import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "404 — Primedic",
};

export default function RootNotFound() {
  return (
    <html lang="tr">
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
          <Link href="/" aria-label="Primedic">
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
            Sayfa Bulunamadı · Page Not Found
          </h1>

          <p className="mt-4 text-[17px] leading-[1.6] text-white/70 md:text-[20px]">
            Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
            <br />
            The page you're looking for may have moved or never existed.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tr"
              className="inline-flex h-[52px] items-center justify-center rounded-[24px] border-2 border-[#b21c1c] bg-white px-8 text-[18px] font-medium text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/en"
              className="inline-flex h-[52px] items-center justify-center rounded-[24px] border-2 border-white/30 bg-transparent px-8 text-[18px] font-medium text-white transition-colors hover:bg-white hover:text-[#3c0a0a]"
            >
              Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
