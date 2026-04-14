import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Blog — Primedic HeartSave myPAD",
  description: "Primedic blog ve haberler — çok yakında.",
};

export default function BlogPage() {
  return (
    <>
      <MenuBar />
      <main className="flex min-h-screen items-center justify-center bg-[#3c0a0a] pt-[180px] pb-[120px]">
        <Container>
          <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/70">
              Çok yakında
            </span>
            <h1 className="mt-6 text-[44px] font-semibold leading-[1.1] text-white md:text-[64px]">
              Blog hazırlanıyor
            </h1>
            <p className="mt-6 text-[17px] leading-[1.6] text-white/75 md:text-[20px]">
              Primedic haberleri, kullanım rehberleri ve vaka çalışmaları için
              içerik alanımız yakında açılacaktır.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
