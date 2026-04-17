import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Kategori",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık (TR)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title_en",
      title: "Title (EN)",
      type: "string",
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
      title: "Açıklama (TR)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "description_en",
      title: "Description (EN)",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: { title: "title", titleEn: "title_en" },
    prepare({ title, titleEn }) {
      return {
        title,
        subtitle: titleEn ? `EN: ${titleEn}` : undefined,
      };
    },
  },
});
