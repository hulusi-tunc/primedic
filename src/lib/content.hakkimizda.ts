// Content for the Hakkımızda (About) page (/hakkimizda).
// Source: Figma node 1:3282. All copy in Turkish; ready for i18n extraction.

export type SolutionCard = {
  number: string;
  title: string;
  body: string;
};

export type HeroTile = {
  src: string;
  alt: string;
  area: "tall-left" | "tall-right" | "short-top" | "short-bottom";
};

export const hakkimizda = {
  seo: {
    title: "Hakkımızda | Bilgin Tıp Medikal & Primedic",
    description:
      "35 yılı aşkın tecrübesi ile Bilgin Tıp Medikal; ostomi, yara bakımı ve acil müdahale sistemleri alanlarında güvenilir çözüm ortağınız.",
    keywords: [
      "Bilgin Tıp Medikal",
      "Primedic Türkiye",
      "medikal çözüm ortağı",
      "ostomi çözümleri",
      "yara bakım",
      "OED acil müdahale",
    ],
  },

  hero: {
    titleLine1: "Sağlıkta Güvenilir",
    titleLine2: "Çözüm Ortağınız",
    actionLabel: "İletişime Geç",
    actionHref: "/iletisim",
    tiles: [
      {
        src: "/images/hakkimizda/hero-tall-left.webp",
        alt: "Bilgin Tıp Medikal uzman ekibi",
        area: "tall-left",
      },
      {
        src: "/images/hakkimizda/hero-short-top.webp",
        alt: "Ürün portföyünden medikal cihaz",
        area: "short-top",
      },
      {
        src: "/images/hakkimizda/hero-short-bottom.webp",
        alt: "Sahada eğitim ve kurulum",
        area: "short-bottom",
      },
      {
        src: "/images/hakkimizda/hero-tall-right.webp",
        alt: "Acil müdahale çözümleri",
        area: "tall-right",
      },
    ] as ReadonlyArray<HeroTile>,
  },

  intro: {
    paragraphs: [
      "Bilgin Tıp Medikal, sağlık sektöründe 35 yılı aşkın tecrübesiyle faaliyet gösteren köklü bir çözüm ortağıdır. Kurulduğu günden bu yana kalite, güven ve sürdürülebilir hizmet anlayışını temel alarak, medikal ürün tedariğinin ötesinde kapsamlı çözümler sunmaktadır.",
      "Geniş ürün portföyü, güçlü tedarik ağı ve uzman kadrosu ile kamu ve özel sektördeki kurumlara hizmet veren Bilgin Tıp Medikal; satış, kurulum, eğitim ve satış sonrası destek süreçlerini bütüncül bir yaklaşımla yönetir.",
      "Amacımız, sağlık alanında güvenilir teknolojileri doğru kullanım ve sürdürülebilir sistemlerle buluşturarak, hayat kurtaran çözümleri daha erişilebilir hale getirmektir.",
    ],
    actionLabel: "Bilgin Tıp Medikal'i Keşfet",
    actionHref: "https://bilgintip.com/",
  },

  solutions: {
    title: "Çözüm Alanlarımız",
    description:
      "Sağlık sektöründe üç temel alanda uzmanlaşmış, güvenilir ve sürdürülebilir çözümler sunuyoruz.",
    cards: [
      {
        number: "1",
        title: "Ostomi Çözümleri",
        body: "Ostomi bakımına yönelik ürün ve çözümler ile kullanıcıların yaşam kalitesini artırmaya odaklanıyoruz. Günlük kullanımda konfor ve güven sağlayan ürünler sunuyoruz.",
      },
      {
        number: "2",
        title: "Yara Bakım Ürünleri",
        body: "Modern yara bakım ürünleri ile tedavi süreçlerini destekleyen etkili çözümler sağlıyoruz. Sağlık profesyonelleri için güvenilir ve pratik ürünler sunuyoruz.",
      },
      {
        number: "3",
        title: "Acil Müdahale Sistemleri",
        body: "Ani kalp durmalarında hızlı ve doğru müdahale için OED çözümleri sunuyoruz. Cihaz, aksesuar ve eğitim süreçleriyle uçtan uca sistem kuruyoruz.",
      },
    ] as ReadonlyArray<SolutionCard>,
  },

  story: {
    eyebrow: "Defibrilasyonda Global Güç",
    paragraphs: [
      "PRIMEDIC, 50 yılı aşkın deneyimiyle yalnızca defibrilasyon teknolojilerine odaklanan, Alman mühendisliği ile geliştirilmiş acil müdahale çözümleri sunan global bir markadır.",
      "Kuruluşundan bu yana tek bir alanda derinleşmeyi tercih eden PRIMEDIC, ani kalp durmalarına karşı hızlı, doğru ve güvenilir müdahale sağlayan sistemler geliştirir. Kullanıcı dostu yönlendirme yapısı, yüksek güvenilirlik standartları ve zorlu koşullara dayanıklı tasarımı ile dünya genelinde acil müdahale çözümlerinin önemli bir parçası haline gelmiştir.",
      "PRIMEDIC, global medikal teknoloji ekosisteminin güçlü oyuncularından biri olan Yuwell Medical çatısı altında faaliyet göstermektedir. Bu yapı sayesinde ileri üretim teknolojileri, güçlü Ar-Ge altyapısı ve sürdürülebilir kalite standartları ile defibrilasyon alanında sürekli gelişim ve inovasyon sunar.",
      "Hayat kurtarmaya odaklanan bu yaklaşım, PRIMEDIC'i yalnızca bir cihaz üreticisi değil, acil müdahale süreçlerinin güvenilir çözüm ortağı haline getirir.",
    ],
    image: {
      src: "/images/hakkimizda/primedic-team.webp",
      alt: "PRIMEDIC — defibrilasyonda global güç, saha ekibi",
    },
    quote: {
      title: "Güven, Deneyim ve Teknoloji",
      body: "PRIMEDIC, 50 yılı aşkın deneyimiyle yalnızca defibrilasyon teknolojilerine odaklanan global bir markadır. Alman mühendisliği ile geliştirilen çözümleri, ani kalp durmalarında hızlı ve güvenilir müdahale sağlar. Yuwell Medical çatısı altında faaliyet gösteren PRIMEDIC, güçlü Ar-Ge ve üretim altyapısı ile acil müdahale teknolojilerinde sürekli inovasyon sunar.",
    },
  },
} as const;
