import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Yazısı",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Özet",
      type: "text",
      rows: 3,
      description: "Liste ve SEO için kısa özet (≈160 karakter).",
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: "coverImage",
      title: "Kapak Görseli",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt metni",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Yazar",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "categories",
      title: "Kategoriler",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "tags",
      title: "Etiketler",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın Tarihi",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Öne Çıkar",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "body",
      title: "İçerik",
      type: "blockContent",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
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
      author: "author.name",
      media: "coverImage",
      date: "publishedAt",
    },
    prepare({ title, author, media, date }) {
      const subtitle = [
        author,
        date ? new Date(date).toLocaleDateString("tr-TR") : null,
      ]
        .filter(Boolean)
        .join(" · ");
      return { title, subtitle, media };
    },
  },
});
