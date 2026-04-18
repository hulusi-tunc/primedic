import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Kategori / Category",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Dil / Language",
      type: "string",
      options: {
        list: [
          { title: "🇹🇷 Türkçe", value: "tr" },
          { title: "🇬🇧 English", value: "en" },
        ],
        layout: "radio",
      },
      initialValue: "tr",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Başlık / Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Açıklama / Description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: { title: "title", language: "language" },
    prepare({ title, language }) {
      const flag = language === "en" ? "🇬🇧" : "🇹🇷";
      return { title: `${flag}  ${title}` };
    },
  },
});
