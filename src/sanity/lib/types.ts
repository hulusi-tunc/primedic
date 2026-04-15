import type { PortableTextBlock } from "@portabletext/react";
import type { Image as SanityImage } from "sanity";

export type CoverImage = SanityImage & { alt?: string };

export type AuthorRef = {
  name: string;
  slug?: string;
  role?: string;
  avatar?: SanityImage;
  bio?: string;
};

export type CategoryRef = {
  _id: string;
  title: string;
  slug: string;
};

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  featured?: boolean;
  coverImage: CoverImage;
  categories?: CategoryRef[];
  author?: AuthorRef;
};

export type Post = PostListItem & {
  body?: PortableTextBlock[];
  tags?: string[];
  seo?: { title?: string; description?: string };
};
