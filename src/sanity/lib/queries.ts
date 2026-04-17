import { groq } from "next-sanity";

export const postsListQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    "title": select($locale == "en" => coalesce(title_en, title), title),
    "slug": slug.current,
    "excerpt": select($locale == "en" => coalesce(excerpt_en, excerpt), excerpt),
    publishedAt,
    featured,
    coverImage { ..., "alt": select($locale == "en" => coalesce(alt_en, alt, ""), coalesce(alt, "")) },
    "categories": categories[]->{ _id, "title": select($locale == "en" => coalesce(title_en, title), title), "slug": slug.current }
  }
`;

export const featuredPostQuery = groq`
  *[_type == "post" && featured == true && defined(slug.current)]
    | order(publishedAt desc)[0] {
    _id,
    "title": select($locale == "en" => coalesce(title_en, title), title),
    "slug": slug.current,
    "excerpt": select($locale == "en" => coalesce(excerpt_en, excerpt), excerpt),
    publishedAt,
    coverImage { ..., "alt": select($locale == "en" => coalesce(alt_en, alt, ""), coalesce(alt, "")) },
    "categories": categories[]->{ _id, "title": select($locale == "en" => coalesce(title_en, title), title), "slug": slug.current }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    "title": select($locale == "en" => coalesce(title_en, title), title),
    "slug": slug.current,
    "excerpt": select($locale == "en" => coalesce(excerpt_en, excerpt), excerpt),
    publishedAt,
    coverImage { ..., "alt": select($locale == "en" => coalesce(alt_en, alt, ""), coalesce(alt, "")) },
    "body": select($locale == "en" => coalesce(body_en, body), body),
    tags,
    "seo": select($locale == "en" => coalesce(seo_en, seo), seo),
    "categories": categories[]->{ _id, "title": select($locale == "en" => coalesce(title_en, title), title), "slug": slug.current }
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;
