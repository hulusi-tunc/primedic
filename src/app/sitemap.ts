import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const SITE_URL = "https://primedic.com.tr";

type SanityPost = { slug: string; publishedAt: string; language: string };

const staticPages: Array<{
  tr: string;
  en: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
}> = [
  { tr: "/", en: "/en", priority: 1, changeFrequency: "monthly" },
  {
    tr: "/urunler/heartsave-mypad",
    en: "/en/products/heartsave-mypad",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    tr: "/urunler/aksesuarlar",
    en: "/en/products/accessories",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    tr: "/yonetmelik",
    en: "/en/regulation",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    tr: "/hakkimizda",
    en: "/en/about-us",
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    tr: "/iletisim",
    en: "/en/contact",
    priority: 0.6,
    changeFrequency: "yearly",
  },
  { tr: "/blog", en: "/en/blog", priority: 0.7, changeFrequency: "weekly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) => [
    {
      url: `${SITE_URL}${page.tr}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    },
    {
      url: `${SITE_URL}${page.en}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    },
  ]);

  let posts: SanityPost[] = [];
  try {
    posts = await client.fetch<SanityPost[]>(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt, language }`,
    );
  } catch {
    // sitemap degrades gracefully if Sanity is unreachable
  }

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url:
      post.language === "en"
        ? `${SITE_URL}/en/blog/${post.slug}`
        : `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
