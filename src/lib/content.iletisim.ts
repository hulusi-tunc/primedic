// Content for the İletişim (Contact) page (/iletisim).
// Source: Figma node 1:67. All copy in Turkish; ready for i18n extraction.

export const iletisim = {
  seo: {
    title: "İletişim | Bilgin Tıp Medikal & Primedic",
    description:
      "OED cihazı, aksesuarları, uygulama süreçleri ve teklif talepleriniz için Bilgin Tıp Medikal ekibiyle iletişime geçin.",
    keywords: [
      "Bilgin Tıp iletişim",
      "Primedic Türkiye iletişim",
      "OED teklif",
      "AED fiyat teklifi",
      "defibrilatör satın al",
    ],
  },

  hero: {
    title: "OED Çözümleri İçin Yanınızdayız",
    description: [
      "OED Cihazı, aksesuarları, uygulama süreçleri ve",
      "teklif talepleriniz için ekibimizle iletişime geçin.",
    ],
  },

  form: {
    heading: "Size nasıl yardımcı olabiliriz?",
    paragraphs: [
      "Bilgi almak, teklif talep etmek veya sorularınızı iletmek için formu doldurabilirsiniz.",
      "Ekibimiz en kısa sürede sizinle iletişime geçecektir.",
    ],
    contact: {
      address: "Şaşmaz Plaza Kozyatağı, Kadıköy",
      phone: "0216 999 22 29",
      phoneHref: "tel:+902169992229",
      email: "info@bilgintip.com",
      emailHref: "mailto:info@bilgintip.com",
    },
    fields: {
      firstName: { label: "Ad", placeholder: "Adınız", required: true },
      lastName: { label: "Soyad", placeholder: "Soyadınız*", required: true },
      email: { label: "E-posta", placeholder: "E-posta*", required: true },
      phone: { label: "Telefon", placeholder: "Telefon Numaranız*", required: true },
      message: { label: "Mesajınız", placeholder: "Mesajınız...", required: true },
    },
    submitLabel: "Mesaj Gönder",
  },
} as const;
