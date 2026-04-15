import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Yazar",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ad Soyad",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Ünvan",
      type: "string",
    }),
    defineField({
      name: "avatar",
      title: "Profil Fotoğrafı",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Kısa Biyografi",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "avatar" },
  },
});
