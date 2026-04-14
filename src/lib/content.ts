export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href?: string;
  children?: ReadonlyArray<NavChild>;
};

export const nav: {
  brandLogoAlt: string;
  items: ReadonlyArray<NavItem>;
} = {
  brandLogoAlt: "Primedic HeartSave myPAD",
  items: [
    {
      label: "Ürünler",
      children: [
        { label: "HeartSave myPAD", href: "/urunler/heartsave-mypad" },
        { label: "Aksesuarlar", href: "/urunler/aksesuarlar" },
      ],
    },
    { label: "Yönetmelik", href: "/yonetmelik" },
    { label: "Hakkımızda", href: "/#hakkimizda" },
    { label: "İletişim", href: "/#iletisim" },
    { label: "Blog", href: "/blog" },
  ],
};

export const hero = {
  pretitle: "HeartSave myPAD",
  titleLine1: "Her Yerde",
  titleLine2: "Kalbiniz Güvende",
  description:
    "HeartSave myPAD cihazı hafif yapısı ve yenilikçi teknolojisi sayesinde, her saniyenin kritik olduğu anlar için özel olarak tasarlanmıştır.",
  chips: [
    { label: "BATARYA ÖMRÜ", value: "5 YIL" },
    { label: "AĞIRLIK", value: "1,1 KG" },
    { label: "DAYANIKLILIK", value: "IP66" },
    { label: "BAĞLANTI", value: "LTE & Wifi" },
    { label: "PEDİATRİK MODU", value: "TEK TUŞLA" },
    { label: "GARANTİ", value: "8 YIL" },
    { label: "DİL SEÇENEĞİ", value: "6 DİL" },
    { label: "ŞOK ARALIĞI", value: "150 – 200 J" },
  ],
};

export type StatsQuotePart = { text: string; strong?: boolean };

export const stats: {
  title: string;
  slides: ReadonlyArray<{
    source: string;
    quote: ReadonlyArray<StatsQuotePart>;
  }>;
} = {
  title: "Kalp Durmasında Erken Müdahalenin Önemi",
  slides: [
    {
      source: "American Heart Association (AHA)",
      quote: [
        { text: "Kalp durmasından sonra " },
        { text: "3–5 dakika", strong: true },
        {
          text: " içinde beyne oksijen gitmezse kalıcı hasar başlar. Kalp durması sonrasında her geçen dakika hayatta kalma ihtimali yaklaşık ",
        },
        { text: "%10 azalır.", strong: true },
      ],
    },
    {
      source: "European Resuscitation Council (ERC)",
      quote: [
        { text: "İlk " },
        { text: "3–5 dakika", strong: true },
        { text: " içinde defibrilasyon uygulandığında hayatta kalma oranı " },
        { text: "%50–70", strong: true },
        { text: "'e kadar yükselebilir." },
      ],
    },
    {
      source: "Dünya Sağlık Örgütü (WHO)",
      quote: [
        {
          text: "Ani kalp durması, dünya genelinde kardiyovasküler kaynaklı ölümlerin önde gelen nedenlerinden biridir.",
        },
      ],
    },
    {
      source: "Sağlık Bakanlığı",
      quote: [
        {
          text: "Kamuya açık alanlarda erişilebilir OED cihazları, ambulans ulaşana kadar geçen sürede hayat kurtarıcı bir köprü görevi görür.",
        },
      ],
    },
  ],
};

export type RichPart = { text: string; strong?: boolean };
export type SpecBadge = {
  icon: "shield" | "target" | "pulse";
  label: string;
  value: string;
};
export type FeatureRow = {
  title: string;
  image: string;
  imageAlt: string;
  bullets: ReadonlyArray<ReadonlyArray<RichPart>>;
  badges?: ReadonlyArray<SpecBadge>;
};

export const features: {
  pretitle: string;
  title: string;
  description: string;
  rows: ReadonlyArray<FeatureRow>;
} = {
  pretitle: "Kompakt Tasarım. Maximum Güven.",
  title: "Hayat Kurtaran Teknoloji",
  description:
    "HeartSave myPAD; akıllı defibrilasyon teknolojisi, gerçek zamanlı CPR geri bildirimi, üstün dayanıklılık ve IoT bağlantı özelliklerini tek bir kompakt yapıda birleştirir. Her saniyenin kritik olduğu ortamlarda güvenle müdahale için tasarlanmıştır.",
  rows: [
    {
      title: "Her An Kalbiniz Güvende",
      image: "/images/features/heartsave-mypad-device.png",
      imageAlt: "HeartSave myPAD defibrilatör cihazı",
      bullets: [
        [
          {
            text: "Cihaz kalp ritmini analiz eder ve gerekli durumlarda defibrilasyon şokunu otomatik olarak uygular.",
          },
        ],
        [
          {
            text: "Otomatik artan enerji teknolojisi sayesinde müdahale sırasında doğru şok seviyesini sağlar.",
          },
        ],
        [
          { text: "Yaklaşık " },
          { text: "1,1 kg ağırlığı", strong: true },
          { text: " ve kompakt tasarımı sayesinde her ortamda kolay taşınabilir." },
        ],
        [
          { text: "Yetişkin ve " },
          { text: "pediatrik mod", strong: true },
          { text: " desteği ile farklı hasta gruplarında güvenle kullanılabilir." },
        ],
      ],
    },
    {
      title: "Dayanıklı ve Her Zaman Hazır",
      image: "/images/features/heartsave-mypad-field.png",
      imageAlt: "HeartSave myPAD saha kullanımı",
      bullets: [
        [
          { text: "8 yıl garanti", strong: true },
          {
            text: " ile uzun vadeli güven ve düşük bakım maliyeti sunar. 5 yıla kadar batarya ve elektrot raf ömrü ile uzun süre hazır kalır.",
          },
        ],
        [
          { text: "IP66", strong: true },
          {
            text: " koruma sınıfı sayesinde cihaz suya ve toza karşı yüksek dayanıklılık gösterir.",
          },
        ],
        [
          {
            text: "−5°C ile +55°C çalışma sıcaklığı aralığında güvenle çalışacak şekilde tasarlanmıştır.",
          },
        ],
        [
          {
            text: "−30°C ile +70°C depolama koşullarında güvenli taşıma ve saklama imkânı sunar.",
          },
        ],
        [
          { text: "1.6 m düşme", strong: true },
          { text: " dayanımı ile zorlu saha koşullarında güvenilir performans sağlar." },
        ],
      ],
      badges: [
        { icon: "shield", label: "GARANTİ", value: "8 Yıl" },
        { icon: "target", label: "DAYANIKLILIK", value: "IP66" },
        { icon: "pulse", label: "BATARYA ÖMRÜ", value: "5 Yıl" },
      ],
    },
    {
      title: "Kullanıcı Dostu Tasarım",
      image: "/images/features/heartsave-mypad-screen.png",
      imageAlt: "HeartSave myPAD renkli ekran arayüzü",
      bullets: [
        [
          { text: "CPR geri bildirim sensörü", strong: true },
          {
            text: ", kalp masajının hız ve basınç kalitesini gerçek zamanlı analiz eder.",
          },
        ],
        [
          { text: "4.3” renkli ekranı", strong: true },
          {
            text: " ile sesli ve görsel yönlendirme yaparak kullanıcıyı adım adım yönlendirir.",
          },
        ],
        [
          {
            text: "Metronom destekli sistem, doğru kompresyon ritmini korumaya yardımcı olur.",
          },
        ],
        [
          { text: "6 dile", strong: true },
          { text: " kadar çoklu dil desteği farklı kullanıcılar için kolay kullanım sağlar." },
        ],
      ],
    },
  ],
};

export const ctaBanner = {
  pretitle: "HeartSave myPAD",
  title: "Bireysel ve Kurumsal",
  titleAccent: "AED Çözümleri",
  description:
    "İş yerleri, kurumlar ve bireysel kullanıcılar için uygun Primedic defibrilatör çözümleri hakkında bilgi almak ve sipariş oluşturmak için bizimle iletişime geçin.",
  actionLabel: "İletişime Geç",
  actionHref: "/#iletisim",
};

export const useCases = {
  pretitle: "Hayat Kurtaran Teknoloji",
  title: "OED Kullanımı Gereken Alanlar",
  description:
    "HeartSave myPAD; akıllı defibrilasyon teknolojisi, gerçek zamanlı CPR geri bildirimi, üstün dayanıklılık ve IoT bağlantı özelliklerini tek bir kompakt yapıda birleştirir. Her saniyenin kritik olduğu ortamlarda güvenle müdahale için tasarlanmıştır.",
  actionLabel: "Yönetmeliği Oku",
  actionHref: "/#yonetmelik",
  items: [
    {
      icon: "briefcase",
      title: "Kurumsal İş Yerleri",
      description:
        "Çalışan yoğunluğunun yüksek olduğu iş yerlerinde ani kalp durmalarına hızlı müdahale büyük önem taşır.",
    },
    {
      icon: "home",
      title: "Konaklama ve Turizm",
      description:
        "OED cihazları acil durumlarda hızlı müdahale sağlayarak misafir güvenliğini artırır.",
    },
    {
      icon: "cart",
      title: "Ticari Alanlar",
      description:
        "AVM'ler ve yoğun ziyaretçi trafiğine sahip ticari alanlarda hızlı müdahale kritik önem taşır.",
    },
    {
      icon: "basketball",
      title: "Spor Tesisleri",
      description:
        "Yoğun fiziksel aktivitenin gerçekleştiği spor alanlarında ani kalp durması riski artabilir.",
    },
    {
      icon: "book",
      title: "Eğitim Kurumları",
      description:
        "Okullar ve kampüslerde öğrenciler, çalışanlar ve ziyaretçiler için güvenli bir ortam sağlamak önemlidir.",
    },
    {
      icon: "pin",
      title: "Kamusal Alanlar",
      description:
        "Meydanlar ve parklar gibi kamuya açık alanlarda ani kalp durmalarına hızlı müdahale hayat kurtarıcıdır.",
    },
    {
      icon: "plane",
      title: "Ulaşım ve Terminaller",
      description:
        "Havalimanları, metro ve otobüs terminalleri gibi ulaşım noktalarında OED cihazları kritik rol oynar.",
    },
    {
      icon: "music",
      title: "Etkinlik Alanları",
      description:
        "Festival, konser ve büyük organizasyonlarda kalabalık ortamlarda sağlık güvenliği önemlidir.",
    },
  ],
} as const;

export const faq = {
  title: "Sıkça Sorulan Sorular",
  items: [
    {
      question: "Primedic OED cihazını herkes kullanabilir mi?",
      answer:
        "Evet. OED cihazları sağlık personeli olmayan kişiler tarafından da kullanılabilecek şekilde tasarlanmıştır. Cihaz, sesli ve görsel yönlendirmeler ile kullanıcıyı adım adım yönlendirir ve yanlış müdahaleyi önlemek için gerekli güvenlik kontrollerini otomatik olarak yapar.",
    },
    {
      question:
        "Şok verilip verilmeyeceğini nasıl anlayacağım? Müdahale etmem gerekir mi?",
      answer:
        "HeartSave myPAD hastanın kalp ritmini otomatik olarak analiz eder. Şok gereken bir ritim tespit edilirse cihaz sizi sesli uyarılarla yönlendirir; gerekli değilse şok uygulanmaz.",
    },
    {
      question: "Cihazın bakımı nasıl yapılır?",
      answer:
        "Cihaz otomatik öz testler yapar ve batarya durumunu sürekli izler. Periyodik bakım için elektrot ped ve batarya raf ömrü takibi yeterlidir.",
    },
    {
      question: "Primedic OED cihazı yanlışlıkla şok verebilir mi?",
      answer:
        "Hayır. Cihaz yalnızca şok uygulanması gereken bir kalp ritmi tespit ettiğinde enerji yükler. Güvenlik kontrolleri otomatik olarak çalışır ve yanlış müdahale riski en aza indirilir.",
    },
    {
      question: "CPR sensörü cihazla birlikte mi gelir?",
      answer:
        "Evet. HeartSave myPAD, CPR geri bildirim sensörü ile birlikte sunulur ve kalp masajının hız ve basınç kalitesini gerçek zamanlı olarak değerlendirir.",
    },
  ],
};

export const footerContent = {
  companyColumns: [
    {
      title: "Menü",
      links: [
        { label: "Ana Sayfa", href: "/" },
        { label: "Ürünler", href: "/#urunler" },
        { label: "Yönetmelik", href: "/yonetmelik" },
        { label: "Hakkımızda", href: "/#hakkimizda" },
        { label: "İletişim", href: "/#iletisim" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Yasal",
      links: [
        { label: "Gizlilik Politikası", href: "/privacy" },
        { label: "Kullanım Şartları", href: "/terms" },
        { label: "Yayınlar", href: "/publications" },
      ],
    },
  ],
  socials: [
    { id: "facebook", label: "Facebook", href: "#" },
    { id: "instagram", label: "Instagram", href: "#" },
    { id: "twitter", label: "Twitter", href: "#" },
    { id: "linkedin", label: "LinkedIn", href: "#" },
  ],
};
