import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { BlogHero } from "@/components/blog/hero";
import { PostGrid } from "@/components/blog/post-grid";
import { client } from "@/sanity/lib/client";
import { postsListQuery } from "@/sanity/lib/queries";
import type { PostListItem } from "@/sanity/lib/types";
import { dummyPosts } from "@/lib/dummy-posts";
import { getLocale } from "next-intl/server";

const SITE_URL = "https://primedic.com.tr";

const meta = {
  tr: {
    title: "OED ve CPR Rehberleri | Primedic Türkiye Blog",
    description:
      "Kalp durması, CPR ve OED yönetmelikleri hakkında Türkçe rehberler ve güncel içerikler — Primedic Türkiye blog.",
    heroTitle: "Acil Müdahale ve OED Rehberleri",
    heroDescription:
      "OED kullanımı, yönetmelikler ve uygulama süreçleri hakkında güncel içeriklerimizi keşfedin.",
    listHeading: "Son Yayınlanan İçerikler",
    empty: {
      badge: "Çok yakında",
      heading: "İlk yazılarımız hazırlanıyor",
      bodyPrefix: "Primedic Studio'dan yayınlanan içerikler burada görünecek. İçerik eklemek için ",
      bodySuffix: " sayfasını ziyaret edin.",
    },
  },
  en: {
    title: "AED & CPR Guides | Primedic Turkey Blog",
    description:
      "Guides and updates on cardiac arrest, CPR, and AED regulations in Turkey — Primedic blog.",
    heroTitle: "Emergency Response & AED Guides",
    heroDescription:
      "Discover up-to-date content on AED use, regulations, and implementation processes.",
    listHeading: "Latest Articles",
    empty: {
      badge: "Coming soon",
      heading: "Our first articles are on the way",
      bodyPrefix: "Articles published from Primedic Studio will appear here. To add content, visit ",
      bodySuffix: ".",
    },
  },
} as const;

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale] ?? meta.tr;
  const canonical =
    locale === "en" ? `${SITE_URL}/en/blog` : `${SITE_URL}/tr/blog`;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${SITE_URL}/tr/blog`,
        "en-US": `${SITE_URL}/en/blog`,
        "x-default": `${SITE_URL}/tr/blog`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: t.title,
      description: t.description,
      locale: locale === "en" ? "en_US" : "tr_TR",
      siteName: "Primedic — Bilgin Tıp",
    },
  };
}

export default async function BlogPage() {
  const locale = (await getLocale()) as "tr" | "en";
  const t = meta[locale] ?? meta.tr;
  const sanityPosts = await client.fetch<PostListItem[]>(
    postsListQuery,
    { locale },
    { next: { revalidate: 60, tags: ["post"] } },
  );
  const fallbackPosts = dummyPosts.filter((p) => p.language === locale);
  const posts =
    sanityPosts && sanityPosts.length > 0 ? sanityPosts : fallbackPosts;

  return (
    <>
      <MenuBar />
      <main>
        <BlogHero title={t.heroTitle} description={t.heroDescription} />
        <PostGrid heading={t.listHeading} posts={posts} empty={t.empty} />
      </main>
      <Footer />
    </>
  );
}
