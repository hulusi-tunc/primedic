import type { Post } from "@/sanity/lib/types";

type DummyPost = Post & { coverUrl: string };

export const dummyPosts: DummyPost[] = [
  {
    _id: "dummy-1",
    title: "OED Nedir? Otomatik Eksternal Defibrilatör Rehberi",
    slug: "oed-nedir",
    excerpt:
      "Ani kalp durmasında hayat kurtaran OED cihazlarının çalışma prensibi, kullanım alanları ve doğru müdahale adımlarını keşfedin.",
    publishedAt: "2026-04-10T09:00:00Z",
    featured: true,
    coverImage: {} as Post["coverImage"],
    coverUrl: "/images/features/heartsave-mypad-device.webp",
    categories: [{ _id: "cat-1", title: "Rehber", slug: "rehber" }],
    tags: ["OED", "AED", "defibrilatör", "acil müdahale"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Otomatik Eksternal Defibrilatör (OED), ani kalp durması yaşayan bir kişinin kalp ritmini analiz eden ve gerektiğinde elektrik şoku uygulayan taşınabilir bir tıbbi cihazdır. OED cihazları, tıbbi eğitim almamış kişiler tarafından da güvenle kullanılabilecek şekilde tasarlanmıştır.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "OED Nasıl Çalışır?" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "OED cihazı açıldığında, kullanıcıya sesli ve görsel komutlarla adım adım yol gösterir. Elektrot pedleri hastanın göğsüne yerleştirildikten sonra cihaz kalp ritmini otomatik olarak analiz eder. Eğer şok uygulanabilir bir ritim tespit edilirse, cihaz kullanıcıyı şok butonuna basması için yönlendirir.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b4",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s4",
            text: "Kimler OED Kullanabilir?",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "OED cihazları herkes tarafından kullanılabilir. Cihazın sesli yönergeleri, ilk yardım eğitimi almamış kişilerin bile doğru müdahaleyi yapmasına olanak tanır. Yine de düzenli ilk yardım eğitimi almak, acil durumlarda daha etkili müdahale sağlar.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b6",
        style: "h2",
        children: [
          { _type: "span", _key: "s6", text: "OED Nerelerde Bulunmalı?" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b7",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Alışveriş merkezleri, havalimanları, spor tesisleri, okullar, iş yerleri ve toplu taşıma araçları gibi insan yoğunluğunun fazla olduğu alanlarda OED cihazı bulundurulması hayat kurtarıcı olabilir. Türkiye'deki güncel yönetmelikler de belirli alanlarda OED bulundurulmasını zorunlu kılmaktadır.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "dummy-2",
    title: "Ani Kalp Durmasında İlk 5 Dakika Neden Kritik?",
    slug: "ilk-5-dakika",
    excerpt:
      "Kalp durmasından sonra geçen her dakika hayatta kalma şansını %10 azaltır. İlk 5 dakikada doğru müdahalenin önemi.",
    publishedAt: "2026-04-05T14:30:00Z",
    featured: false,
    coverImage: {} as Post["coverImage"],
    coverUrl: "/images/features/heartsave-mypad-field.webp",
    categories: [{ _id: "cat-2", title: "Bilgi", slug: "bilgi" }],
    tags: ["kalp durması", "CPR", "ilk müdahale"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Ani kalp durması, kalbin aniden ve beklenmedik şekilde durmasıdır. Bu durumda beyne oksijen gitmesi saniyeler içinde kesilir ve 3-5 dakika içinde kalıcı beyin hasarı başlar. Bu nedenle ilk müdahale süresini mümkün olduğunca kısa tutmak hayati önem taşır.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "Hayatta Kalma Zinciri" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Acil durumun erken fark edilmesi, hızlı CPR uygulaması, erken defibrilasyon ve ileri yaşam desteği — bu dört halka birlikte hayatta kalma şansını dramatik şekilde artırır. İlk 3-5 dakika içinde defibrilasyon uygulandığında hayatta kalma oranı %50-70'e kadar yükselebilir.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "dummy-3",
    title: "İş Yerinde OED Bulundurma Yönetmeliği 2026",
    slug: "isyeri-oed-yonetmeligi",
    excerpt:
      "2026 yılı itibarıyla iş yerlerinde OED bulundurma zorunluluğu ve güncel mevzuat hakkında bilmeniz gerekenler.",
    publishedAt: "2026-03-28T10:00:00Z",
    featured: false,
    coverImage: {} as Post["coverImage"],
    coverUrl: "/images/features/heartsave-mypad-screen.webp",
    categories: [
      { _id: "cat-3", title: "Yönetmelik", slug: "yonetmelik" },
    ],
    tags: ["yönetmelik", "iş yeri", "zorunluluk"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Türkiye'de iş sağlığı ve güvenliği mevzuatı kapsamında belirli çalışan sayısı ve risk grubundaki iş yerlerinde OED bulundurulması zorunlu hale getirilmiştir. Bu düzenleme, çalışanların ani kalp durmasına karşı korunmasını ve erken müdahale imkânının sağlanmasını amaçlamaktadır.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "Hangi İş Yerleri Kapsam Dahilinde?" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "50 ve üzeri çalışanı bulunan tüm iş yerleri, spor ve fitness merkezleri, alışveriş merkezleri, oteller ve tatil köyleri, havalimanları ve tren istasyonları, eğitim kurumları ve kamu binaları yönetmelik kapsamına girmektedir.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "dummy-4",
    title: "CPR Nasıl Yapılır? Adım Adım Göğüs Kompresyonu Rehberi",
    slug: "cpr-nasil-yapilir",
    excerpt:
      "Doğru CPR tekniği ile hayat kurtarın. Göğüs kompresyonu hızı, derinliği ve suni solunum adımları.",
    publishedAt: "2026-03-20T08:00:00Z",
    featured: false,
    coverImage: {} as Post["coverImage"],
    coverUrl: "/images/product/cpr-sensor.webp",
    categories: [{ _id: "cat-1", title: "Rehber", slug: "rehber" }],
    tags: ["CPR", "göğüs kompresyonu", "ilk yardım"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Kardiyopulmoner resüsitasyon (CPR), kalbi durmuş bir kişinin kan dolaşımını ve solunumunu yapay olarak sürdürmek için uygulanan bir ilk yardım tekniğidir. Doğru CPR uygulaması, OED cihazı gelene kadar hastanın hayatta kalma şansını önemli ölçüde artırır.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "Doğru Kompresyon Tekniği" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Göğüs kompresyonu sırasında ellerinizi göğüs kemiğinin alt yarısına yerleştirin. Dakikada 100-120 kompresyon hızıyla, 5-6 cm derinliğinde bası uygulayın. Her kompresyon sonrasında göğsün tamamen geri gelmesine izin verin. HeartSave myPAD'in CPR geri bildirim sensörü, bu değerleri gerçek zamanlı olarak ölçerek size yol gösterir.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "dummy-5",
    title: "HeartSave myPAD ile Tanışın: Kompakt AED Teknolojisi",
    slug: "heartsave-mypad-tanitim",
    excerpt:
      "1.1 kg ağırlığı, IP66 dayanıklılığı ve IoT bağlantısıyla HeartSave myPAD'in sunduğu yenilikler.",
    publishedAt: "2026-03-15T12:00:00Z",
    featured: false,
    coverImage: {} as Post["coverImage"],
    coverUrl: "/images/product/heartsave-mypad-hero.webp",
    categories: [{ _id: "cat-4", title: "Ürün", slug: "urun" }],
    tags: ["HeartSave myPAD", "AED", "IoT", "defibrilatör"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "HeartSave myPAD, Primedic'in en yeni nesil otomatik eksternal defibrilatörüdür. Sadece 1.1 kg ağırlığı ile dünyanın en hafif tam donanımlı AED cihazlarından biridir. IP66 sertifikası sayesinde toz, su ve zorlu çevre koşullarına dayanıklıdır.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "IoT ile Uzaktan İzleme" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "LTE ve WiFi bağlantısı sayesinde HeartSave myPAD, cihaz durumunu, batarya seviyesini ve elektrot durumunu uzaktan izlemenize olanak tanır. Bakım ihtiyaçları otomatik olarak bildirilir, böylece cihazınızın her zaman hazır olduğundan emin olabilirsiniz.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "dummy-6",
    title: "Spor Tesislerinde Ani Kalp Durması Riski ve Önlemler",
    slug: "spor-tesisleri-risk",
    excerpt:
      "Egzersiz sırasında ani kalp durması riski ve spor tesislerinde OED bulundurmanın yaşamsal önemi.",
    publishedAt: "2026-03-08T16:00:00Z",
    featured: false,
    coverImage: {} as Post["coverImage"],
    coverUrl: "/images/primedic-family.webp",
    categories: [{ _id: "cat-2", title: "Bilgi", slug: "bilgi" }],
    tags: ["spor", "risk", "önlem", "OED"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Yoğun fiziksel aktivite sırasında kalp üzerindeki yük artar ve özellikle daha önce teşhis edilmemiş kalp rahatsızlıkları olan bireylerde ani kalp durması riski yükselir. Profesyonel sporculardan amatör sporculara kadar herkes bu riskle karşı karşıyadır.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Spor Tesislerinde OED Zorunluluğu",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Güncel mevzuat uyarınca spor salonları, yüzme havuzları, stadyumlar ve fitness merkezlerinde OED bulundurulması zorunludur. Cihazın kolay erişilebilir bir noktada konumlandırılması ve personelin temel kullanım eğitimi almış olması gerekmektedir.",
          },
        ],
        markDefs: [],
      },
    ],
  },
];
