import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Primedic HeartSave myPAD — Her Yerde Kalbiniz Güvende",
  description:
    "HeartSave myPAD defibrilatör: akıllı defibrilasyon teknolojisi, gerçek zamanlı CPR geri bildirimi, IP66 dayanıklılık ve 8 yıl garanti. Bireysel ve kurumsal AED çözümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
