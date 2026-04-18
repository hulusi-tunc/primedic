import type { StructureResolver } from "sanity/structure";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("İçerik / Content")
    .items([
      S.listItem()
        .title("🇹🇷 Türkçe Yazılar")
        .child(
          S.documentList()
            .title("Türkçe Yazılar")
            .filter('_type == "post" && language == "tr"')
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
            .initialValueTemplates([
              S.initialValueTemplateItem("post-tr"),
            ]),
        ),
      S.listItem()
        .title("🇬🇧 English Posts")
        .child(
          S.documentList()
            .title("English Posts")
            .filter('_type == "post" && language == "en"')
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
            .initialValueTemplates([
              S.initialValueTemplateItem("post-en"),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("🇹🇷 Türkçe Kategoriler")
        .child(
          S.documentList()
            .title("Türkçe Kategoriler")
            .filter('_type == "category" && language == "tr"')
            .initialValueTemplates([
              S.initialValueTemplateItem("category-tr"),
            ]),
        ),
      S.listItem()
        .title("🇬🇧 English Categories")
        .child(
          S.documentList()
            .title("English Categories")
            .filter('_type == "category" && language == "en"')
            .initialValueTemplates([
              S.initialValueTemplateItem("category-en"),
            ]),
        ),
    ]);

export const initialValueTemplates = [
  {
    id: "post-tr",
    title: "🇹🇷 Türkçe Yazı",
    schemaType: "post",
    value: { language: "tr" },
  },
  {
    id: "post-en",
    title: "🇬🇧 English Post",
    schemaType: "post",
    value: { language: "en" },
  },
  {
    id: "category-tr",
    title: "🇹🇷 Türkçe Kategori",
    schemaType: "category",
    value: { language: "tr" },
  },
  {
    id: "category-en",
    title: "🇬🇧 English Category",
    schemaType: "category",
    value: { language: "en" },
  },
];
