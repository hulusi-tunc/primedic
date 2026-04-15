import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { PostBody } from "@/components/blog/portable-text";
import { client } from "@/sanity/lib/client";
import {
  postBySlugQuery,
  postSlugsQuery,
} from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import type { Post } from "@/sanity/lib/types";

const SITE_URL = "https://primedic.com.tr";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(postSlugsQuery);
  return (slugs ?? []).map((slug) => ({ slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug });
  if (!post) return { title: "Yazı bulunamadı — Primedic Blog" };

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const title = post.seo?.title ?? `${post.title} | Primedic Blog`;
  const description =
    post.seo?.description ?? post.excerpt ?? undefined;
  const ogImage = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      locale: "tr_TR",
      siteName: "Primedic — Bilgin Tıp",
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(
    postBySlugQuery,
    { slug },
    { next: { revalidate: 60, tags: ["post", `post:${slug}`] } },
  );

  if (!post) notFound();

  const coverUrl = urlForImage(post.coverImage).width(2000).height(1125).url();
  const dateLabel = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const category = post.categories?.[0];

  return (
    <>
      <MenuBar />
      <main>
        <article className="bg-white">
          <header className="bg-gradient-to-b from-[#080e18] to-[#555c6a] pt-[180px] pb-[72px] text-white md:pt-[220px] md:pb-[96px]">
            <Container>
              <div className="mx-auto max-w-[880px]">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-white/70 transition-colors hover:text-white"
                >
                  <span aria-hidden>←</span> Blog
                </Link>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-white/75">
                  {category ? (
                    <span className="inline-flex items-center rounded-[30px] border border-white/40 px-4 py-1 text-[12px] font-medium tracking-[0.2px] text-white">
                      {category.title}
                    </span>
                  ) : null}
                  <time dateTime={post.publishedAt}>{dateLabel}</time>
                  {post.author?.name ? (
                    <>
                      <span aria-hidden>·</span>
                      <span>{post.author.name}</span>
                    </>
                  ) : null}
                </div>

                <h1 className="mt-6 text-[36px] font-semibold leading-[1.15] md:text-[48px] lg:text-[56px] lg:leading-[1.1]">
                  {post.title}
                </h1>

                {post.excerpt ? (
                  <p className="mt-6 text-[18px] leading-[1.55] text-white/85 md:text-[22px]">
                    {post.excerpt}
                  </p>
                ) : null}
              </div>
            </Container>
          </header>

          <div className="bg-white pb-[96px] md:pb-[140px]">
            <Container>
              <div className="mx-auto -mt-[48px] max-w-[1120px] md:-mt-[72px]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-black/5 ring-1 ring-black/5">
                  <Image
                    src={coverUrl}
                    alt={post.coverImage.alt ?? post.title}
                    fill
                    sizes="(min-width: 1024px) 1100px, 92vw"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mx-auto mt-16 max-w-[880px] md:mt-20">
                {post.body ? <PostBody value={post.body} /> : null}

                {post.tags && post.tags.length > 0 ? (
                  <ul className="mt-16 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-black/[0.04] px-4 py-1.5 text-[13px] font-medium text-black/75"
                      >
                        #{tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Container>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
