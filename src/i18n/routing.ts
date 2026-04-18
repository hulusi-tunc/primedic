import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  pathnames: {
    "/": "/",
    "/hakkimizda": { tr: "/hakkimizda", en: "/about-us" },
    "/yonetmelik": { tr: "/yonetmelik", en: "/regulation" },
    "/iletisim": { tr: "/iletisim", en: "/contact" },
    "/urunler/heartsave-mypad": {
      tr: "/urunler/heartsave-mypad",
      en: "/products/heartsave-mypad",
    },
    "/urunler/aksesuarlar": {
      tr: "/urunler/aksesuarlar",
      en: "/products/accessories",
    },
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/privacy": "/privacy",
    "/terms": "/terms",
    "/publications": "/publications",
  },
});

export type Locale = (typeof routing.locales)[number];
