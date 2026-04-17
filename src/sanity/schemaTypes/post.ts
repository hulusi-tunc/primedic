import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Yazısı",
  type: "document",
  groups: [
    { name: "tr", title: "🇹🇷 Türkçe", default: true },
    { name: "en", title: "🇬🇧 English" },
    { name: "meta", title: "Meta" },
  ],
  fields: [
    // --- Turkish ---
    defineField({
      name: "title",
      title: "Başlık (TR)",
      type: "string",
      group: "tr",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "excerpt",
      title: "Özet (TR)",
      type: "text",
      rows: 3,
      group: "tr",
      description: "Liste ve SEO için kısa özet (≈160 karakter).",
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: "body",
      title: "İçerik (TR)",
      type: "blockContent",
      group: "tr",
    }),

    // --- English ---
    defineField({
      name: "title_en",
      title: "Title (EN)",
      type: "string",
      group: "en",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "excerpt_en",
      title: "Excerpt (EN)",
      type: "text",
      rows: 3,
      group: "en",
      description: "Short summary for listing and SEO (≈160 chars).",
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: "body_en",
      title: "Content (EN)",
      type: "blockContent",
      group: "en",
    }),

    // --- Shared / Meta ---
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "meta",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Kapak Görseli",
      type: "image",
      group: "meta",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alt metni (TR)" },
        { name: "alt_en", type: "string", title: "Alt text (EN)" },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Kategoriler",
      type: "array",
      group: "meta",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "tags",
      title: "Etiketler",
      type: "array",
      group: "meta",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın Tarihi",
      type: "datetime",
      group: "meta",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Öne Çıkar",
      type: "boolean",
      group: "meta",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO (TR)",
      type: "object",
      group: "tr",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "title", title: "Meta Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text", rows: 2 },
      ],
    }),
    defineField({
      name: "seo_en",
      title: "SEO (EN)",
      type: "object",
      group: "en",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "title", title: "Meta Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text", rows: 2 },
      ],
    }),
  ],
  orderings: [
    {
      title: "Yayın tarihi, yeni → eski",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      titleEn: "title_en",
      media: "coverImage",
      date: "publishedAt",
    },
    prepare({ title, titleEn, media, date }) {
      const subtitle = [
        titleEn ? `EN: ${titleEn}` : null,
        date ? new Date(date).toLocaleDateString("tr-TR") : null,
      ]
        .filter(Boolean)
        .join(" · ");
      return { title, subtitle, media };
    },
  },
});
