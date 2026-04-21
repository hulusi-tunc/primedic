/**
 * Migrates dummy blog posts to Sanity.
 * Usage: SANITY_TOKEN=<token> node scripts/seed-sanity.mjs
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, "../public");

const TOKEN = process.env.SANITY_TOKEN;
if (!TOKEN) {
  console.error("SANITY_TOKEN env var required");
  process.exit(1);
}

const PROJECT_ID = "1389kln8";
const DATASET = "production";
const API_VERSION = "2025-01-01";
const BASE = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}`;

async function api(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${res.status} ${path}: ${text}`);
  return JSON.parse(text);
}

async function uploadImage(relPath, filename) {
  const data = readFileSync(resolve(PUBLIC_DIR, relPath.replace(/^\//, "")));
  const res = await fetch(
    `${BASE}/assets/images/${DATASET}?filename=${filename}`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "image/webp" },
      body: data,
    },
  );
  const text = await res.text();
  if (!res.ok) throw new Error(`Upload failed ${filename}: ${text}`);
  return JSON.parse(text).document._id;
}

async function mutate(mutations) {
  return api(`/data/mutate/${DATASET}`, {
    method: "POST",
    body: JSON.stringify({ mutations }),
  });
}

async function findBySlug(type, slug) {
  const query = encodeURIComponent(
    `*[_type=="${type}" && slug.current=="${slug}"][0]._id`,
  );
  const r = await api(`/data/query/${DATASET}?query=${query}`);
  return r.result || null;
}

// ── Categories ─────────────────────────────────────────────────────────────

const CATEGORIES = [
  { title: "Rehber", slug: "rehber", language: "tr" },
  { title: "Bilgi", slug: "bilgi", language: "tr" },
  { title: "Yönetmelik", slug: "yonetmelik", language: "tr" },
  { title: "Ürün", slug: "urun", language: "tr" },
];

const catIds = {};

for (const cat of CATEGORIES) {
  const existing = await findBySlug("category", cat.slug);
  if (existing) {
    catIds[cat.slug] = existing;
    console.log(`  skip category "${cat.title}" (exists: ${existing})`);
  } else {
    const r = await mutate([
      {
        create: {
          _type: "category",
          title: cat.title,
          language: cat.language,
          slug: { _type: "slug", current: cat.slug },
        },
      },
    ]);
    catIds[cat.slug] = r.results[0].id;
    console.log(`  created category "${cat.title}" → ${catIds[cat.slug]}`);
  }
}

// ── Posts ───────────────────────────────────────────────────────────────────

const POSTS = [
  {
    slug: "oed-nedir",
    title: "OED Nedir? Otomatik Eksternal Defibrilatör Rehberi",
    excerpt:
      "Ani kalp durmasında hayat kurtaran OED cihazlarının çalışma prensibi, kullanım alanları ve doğru müdahale adımlarını keşfedin.",
    publishedAt: "2026-04-10T09:00:00Z",
    featured: true,
    image: "images/features/heartsave-mypad-device.webp",
    category: "rehber",
    tags: ["OED", "AED", "defibrilatör", "acil müdahale"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Otomatik Eksternal Defibrilatör (OED), ani kalp durması yaşayan bir kişinin kalp ritmini analiz eden ve gerektiğinde elektrik şoku uygulayan taşınabilir bir tıbbi cihazdır. OED cihazları, tıbbi eğitim almamış kişiler tarafından da güvenle kullanılabilecek şekilde tasarlanmıştır.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        markDefs: [],
        children: [{ _type: "span", _key: "s2", text: "OED Nasıl Çalışır?" }],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "OED cihazı açıldığında, kullanıcıya sesli ve görsel komutlarla adım adım yol gösterir. Elektrot pedleri hastanın göğsüne yerleştirildikten sonra cihaz kalp ritmini otomatik olarak analiz eder. Eğer şok uygulanabilir bir ritim tespit edilirse, cihaz kullanıcıyı şok butonuna basması için yönlendirir.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b4",
        style: "h2",
        markDefs: [],
        children: [
          { _type: "span", _key: "s4", text: "Kimler OED Kullanabilir?" },
        ],
      },
      {
        _type: "block",
        _key: "b5",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "OED cihazları herkes tarafından kullanılabilir. Cihazın sesli yönergeleri, ilk yardım eğitimi almamış kişilerin bile doğru müdahaleyi yapmasına olanak tanır. Yine de düzenli ilk yardım eğitimi almak, acil durumlarda daha etkili müdahale sağlar.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b6",
        style: "h2",
        markDefs: [],
        children: [
          { _type: "span", _key: "s6", text: "OED Nerelerde Bulunmalı?" },
        ],
      },
      {
        _type: "block",
        _key: "b7",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Alışveriş merkezleri, havalimanları, spor tesisleri, okullar, iş yerleri ve toplu taşıma araçları gibi insan yoğunluğunun fazla olduğu alanlarda OED cihazı bulundurulması hayat kurtarıcı olabilir. Türkiye'deki güncel yönetmelikler de belirli alanlarda OED bulundurulmasını zorunlu kılmaktadır.",
          },
        ],
      },
    ],
  },
  {
    slug: "ilk-5-dakika",
    title: "Ani Kalp Durmasında İlk 5 Dakika Neden Kritik?",
    excerpt:
      "Kalp durmasından sonra geçen her dakika hayatta kalma şansını %10 azaltır. İlk 5 dakikada doğru müdahalenin önemi.",
    publishedAt: "2026-04-05T14:30:00Z",
    featured: false,
    image: "images/features/heartsave-mypad-field.webp",
    category: "bilgi",
    tags: ["kalp durması", "CPR", "ilk müdahale"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Ani kalp durması, kalbin aniden ve beklenmedik şekilde durmasıdır. Bu durumda beyne oksijen gitmesi saniyeler içinde kesilir ve 3-5 dakika içinde kalıcı beyin hasarı başlar. Bu nedenle ilk müdahale süresini mümkün olduğunca kısa tutmak hayati önem taşır.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        markDefs: [],
        children: [
          { _type: "span", _key: "s2", text: "Hayatta Kalma Zinciri" },
        ],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Acil durumun erken fark edilmesi, hızlı CPR uygulaması, erken defibrilasyon ve ileri yaşam desteği — bu dört halka birlikte hayatta kalma şansını dramatik şekilde artırır. İlk 3-5 dakika içinde defibrilasyon uygulandığında hayatta kalma oranı %50-70'e kadar yükselebilir.",
          },
        ],
      },
    ],
  },
  {
    slug: "isyeri-oed-yonetmeligi",
    title: "İş Yerinde OED Bulundurma Yönetmeliği 2026",
    excerpt:
      "2026 yılı itibarıyla iş yerlerinde OED bulundurma zorunluluğu ve güncel mevzuat hakkında bilmeniz gerekenler.",
    publishedAt: "2026-03-28T10:00:00Z",
    featured: false,
    image: "images/features/heartsave-mypad-screen.webp",
    category: "yonetmelik",
    tags: ["yönetmelik", "iş yeri", "zorunluluk"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Türkiye'de iş sağlığı ve güvenliği mevzuatı kapsamında belirli çalışan sayısı ve risk grubundaki iş yerlerinde OED bulundurulması zorunlu hale getirilmiştir. Bu düzenleme, çalışanların ani kalp durmasına karşı korunmasını ve erken müdahale imkânının sağlanmasını amaçlamaktadır.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Hangi İş Yerleri Kapsam Dahilinde?",
          },
        ],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "50 ve üzeri çalışanı bulunan tüm iş yerleri, spor ve fitness merkezleri, alışveriş merkezleri, oteller ve tatil köyleri, havalimanları ve tren istasyonları, eğitim kurumları ve kamu binaları yönetmelik kapsamına girmektedir.",
          },
        ],
      },
    ],
  },
  {
    slug: "cpr-nasil-yapilir",
    title: "CPR Nasıl Yapılır? Adım Adım Göğüs Kompresyonu Rehberi",
    excerpt:
      "Doğru CPR tekniği ile hayat kurtarın. Göğüs kompresyonu hızı, derinliği ve suni solunum adımları.",
    publishedAt: "2026-03-20T08:00:00Z",
    featured: false,
    image: "images/product/cpr-sensor.webp",
    category: "rehber",
    tags: ["CPR", "göğüs kompresyonu", "ilk yardım"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Kardiyopulmoner resüsitasyon (CPR), kalbi durmuş bir kişinin kan dolaşımını ve solunumunu yapay olarak sürdürmek için uygulanan bir ilk yardım tekniğidir. Doğru CPR uygulaması, OED cihazı gelene kadar hastanın hayatta kalma şansını önemli ölçüde artırır.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        markDefs: [],
        children: [
          { _type: "span", _key: "s2", text: "Doğru Kompresyon Tekniği" },
        ],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Göğüs kompresyonu sırasında ellerinizi göğüs kemiğinin alt yarısına yerleştirin. Dakikada 100-120 kompresyon hızıyla, 5-6 cm derinliğinde bası uygulayın. Her kompresyon sonrasında göğsün tamamen geri gelmesine izin verin. HeartSave myPAD'in CPR geri bildirim sensörü, bu değerleri gerçek zamanlı olarak ölçerek size yol gösterir.",
          },
        ],
      },
    ],
  },
  {
    slug: "heartsave-mypad-tanitim",
    title: "HeartSave myPAD ile Tanışın: Kompakt AED Teknolojisi",
    excerpt:
      "1.1 kg ağırlığı, IP66 dayanıklılığı ve IoT bağlantısıyla HeartSave myPAD'in sunduğu yenilikler.",
    publishedAt: "2026-03-15T12:00:00Z",
    featured: false,
    image: "images/product/heartsave-mypad-hero.webp",
    category: "urun",
    tags: ["HeartSave myPAD", "AED", "IoT", "defibrilatör"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "HeartSave myPAD, Primedic'in en yeni nesil otomatik eksternal defibrilatörüdür. Sadece 1.1 kg ağırlığı ile dünyanın en hafif tam donanımlı AED cihazlarından biridir. IP66 sertifikası sayesinde toz, su ve zorlu çevre koşullarına dayanıklıdır.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        markDefs: [],
        children: [
          { _type: "span", _key: "s2", text: "IoT ile Uzaktan İzleme" },
        ],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "LTE ve WiFi bağlantısı sayesinde HeartSave myPAD, cihaz durumunu, batarya seviyesini ve elektrot durumunu uzaktan izlemenize olanak tanır. Bakım ihtiyaçları otomatik olarak bildirilir, böylece cihazınızın her zaman hazır olduğundan emin olabilirsiniz.",
          },
        ],
      },
    ],
  },
  {
    slug: "spor-tesisleri-risk",
    title: "Spor Tesislerinde Ani Kalp Durması Riski ve Önlemler",
    excerpt:
      "Egzersiz sırasında ani kalp durması riski ve spor tesislerinde OED bulundurmanın yaşamsal önemi.",
    publishedAt: "2026-03-08T16:00:00Z",
    featured: false,
    image: "images/primedic-family.webp",
    category: "bilgi",
    tags: ["spor", "risk", "önlem", "OED"],
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Yoğun fiziksel aktivite sırasında kalp üzerindeki yük artar ve özellikle daha önce teşhis edilmemiş kalp rahatsızlıkları olan bireylerde ani kalp durması riski yükselir. Profesyonel sporculardan amatör sporculara kadar herkes bu riskle karşı karşıyadır.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Spor Tesislerinde OED Zorunluluğu",
          },
        ],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Güncel mevzuat uyarınca spor salonları, yüzme havuzları, stadyumlar ve fitness merkezlerinde OED bulundurulması zorunludur. Cihazın kolay erişilebilir bir noktada konumlandırılması ve personelin temel kullanım eğitimi almış olması gerekmektedir.",
          },
        ],
      },
    ],
  },
];

// ── Run ─────────────────────────────────────────────────────────────────────

for (const post of POSTS) {
  const existing = await findBySlug("post", post.slug);
  if (existing) {
    console.log(`  skip post "${post.slug}" (exists)`);
    continue;
  }

  process.stdout.write(`  uploading image for "${post.slug}"... `);
  const imageId = await uploadImage(post.image, post.image.split("/").pop());
  console.log(`done (${imageId})`);

  await mutate([
    {
      create: {
        _type: "post",
        language: "tr",
        title: post.title,
        slug: { _type: "slug", current: post.slug },
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        featured: post.featured,
        coverImage: {
          _type: "image",
          asset: { _type: "reference", _ref: imageId },
          alt: post.title,
        },
        categories: [
          { _type: "reference", _ref: catIds[post.category] },
        ],
        tags: post.tags,
        body: post.body,
      },
    },
  ]);
  console.log(`  created post "${post.slug}"`);
}

console.log("\nDone.");
