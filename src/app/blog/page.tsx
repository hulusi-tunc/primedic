import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { BlogHero } from "@/components/blog/hero";
import { PostGrid } from "@/components/blog/post-grid";
import { client } from "@/sanity/lib/client";
import { postsListQuery } from "@/sanity/lib/queries";
import type { PostListItem } from "@/sanity/lib/types";
import { dummyPosts } from "@/lib/dummy-posts";

const SITE_URL = "https://primedic.com.tr";
const CANONICAL = `${SITE_URL}/blog`;

const PAGE_COPY = {
  heroTitle: "Acil Müdahale ve OED Rehberleri",
  heroDescription:
    "OED kullanımı, yönetmelikler ve uygulama süreçleri hakkında güncel içeriklerimizi keşfedin.",
  listHeading: "Son Yayınlanan İçerikler",
};

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — Acil Müdahale ve OED Rehberleri | Primedic",
  description: PAGE_COPY.heroDescription,
  alternates: {
    canonical: CANONICAL,
    languages: {
      "tr-TR": CANONICAL,
      "en-US": `${SITE_URL}/en/blog`,
      "x-default": CANONICAL,
    },
  },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Primedic Blog",
    description: PAGE_COPY.heroDescription,
    locale: "tr_TR",
    siteName: "Primedic — Bilgin Tıp",
  },
};

export default async function BlogPage() {
  const sanityPosts = await client.fetch<PostListItem[]>(
    postsListQuery,
    {},
    { next: { revalidate: 60, tags: ["post"] } },
  );
  const posts = sanityPosts && sanityPosts.length > 0 ? sanityPosts : dummyPosts;

  return (
    <>
      <MenuBar />
      <main>
        <BlogHero
          title={PAGE_COPY.heroTitle}
          description={PAGE_COPY.heroDescription}
        />
        <PostGrid heading={PAGE_COPY.listHeading} posts={posts} />
      </main>
      <Footer />
    </>
  );
}
