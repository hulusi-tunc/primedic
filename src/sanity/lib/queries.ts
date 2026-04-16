import { groq } from "next-sanity";

export const postsListQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    featured,
    coverImage { ..., "alt": coalesce(alt, "") },
    "categories": categories[]->{ _id, title, "slug": slug.current }
  }
`;

export const featuredPostQuery = groq`
  *[_type == "post" && featured == true && defined(slug.current)]
    | order(publishedAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage { ..., "alt": coalesce(alt, "") },
    "categories": categories[]->{ _id, title, "slug": slug.current }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage { ..., "alt": coalesce(alt, "") },
    body,
    tags,
    seo,
    "categories": categories[]->{ _id, title, "slug": slug.current }
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;
