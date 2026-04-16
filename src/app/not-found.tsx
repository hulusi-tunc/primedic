import Link from "next/link";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <>
      <MenuBar />
      <main className="flex min-h-[70vh] items-center justify-center">
        <Container>
          <div className="mx-auto max-w-[600px] py-[120px] text-center">
            <p className="text-[120px] font-bold leading-none text-[#b21c1c]">
              404
            </p>
            <h1 className="mt-6 text-[28px] font-semibold text-white md:text-[36px]">
              Sayfa Bulunamadı
            </h1>
            <p className="mt-4 text-[17px] leading-[1.6] text-white/70 md:text-[20px]">
              Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex h-[52px] items-center justify-center rounded-[24px] border-2 border-[#b21c1c] bg-white px-8 text-[18px] font-medium text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
