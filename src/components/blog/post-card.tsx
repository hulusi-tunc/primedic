import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { urlForImage } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/lib/types";

const PLACEHOLDER_IMAGE = "/placeholder-blog.jpg";

export function PostCard({ post }: { post: PostListItem }) {
  const category = post.categories?.[0];
  const imageUrl = post.coverUrl
    ? post.coverUrl
    : post.coverImage
      ? urlForImage(post.coverImage).width(1160).height(840).url()
      : PLACEHOLDER_IMAGE;

  return (
    <article className="group flex flex-col gap-5">
      <Link
        href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
        className="relative block aspect-[580/420] overflow-hidden rounded-[16px] bg-black/5 ring-1 ring-black/[0.04]"
        aria-label={post.title}
      >
        <Image
          src={imageUrl}
          alt={post.coverImage?.alt ?? post.title}
          width={1160}
          height={840}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-col gap-3">
        <h3 className="font-medium text-black transition-colors group-hover:text-[#b21c1c]">
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
            className="focus-visible:outline-none focus-visible:underline"
          >
            {post.title}
          </Link>
        </h3>

        {category ? (
          <span className="inline-flex w-fit items-center justify-center rounded-[30px] border border-[#b21c1c] px-5 py-1 text-[12px] font-medium leading-[16px] tracking-[0.2px] text-[#b21c1c]">
            {category.title}
          </span>
        ) : null}
      </div>
    </article>
  );
}
