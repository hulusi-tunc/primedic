// English translations for the About page.

import type { SolutionCard, HeroTile } from "./content.hakkimizda";

export const hakkimizda = {
  seo: {
    title: "About Us | Bilgin Tıp Medikal & Primedic",
    description:
      "With over 35 years of experience, Bilgin Tıp Medikal is your trusted partner in ostomy care, wound care, and emergency response systems.",
    keywords: [
      "Bilgin Tıp Medikal",
      "Primedic Turkey",
      "medical solutions partner",
      "ostomy solutions",
      "wound care",
      "AED emergency response",
    ],
  },

  hero: {
    titleLine1: "Your Trusted Partner",
    titleLine2: "in Healthcare",
    actionLabel: "Contact Us",
    actionHref: "/iletisim",
    tiles: [
      {
        src: "/images/hakkimizda/hero-tall-left.webp",
        alt: "Bilgin Tıp Medikal expert team",
        area: "tall-left",
      },
      {
        src: "/images/hakkimizda/hero-short-top.webp",
        alt: "Medical device from product portfolio",
        area: "short-top",
      },
      {
        src: "/images/hakkimizda/hero-short-bottom.webp",
        alt: "Field training and installation",
        area: "short-bottom",
      },
      {
        src: "/images/hakkimizda/hero-tall-right.webp",
        alt: "Emergency response solutions",
        area: "tall-right",
      },
    ] as ReadonlyArray<HeroTile>,
  },

  intro: {
    paragraphs: [
      "Bilgin Tıp Medikal is a well-established solutions partner with over 35 years of experience in the healthcare sector. Since its founding, the company has been guided by the principles of quality, trust, and sustainable service, offering comprehensive solutions beyond medical product distribution.",
      "Serving both public and private sector institutions with an extensive product portfolio, a strong supply network, and a team of experts, Bilgin Tıp Medikal manages the entire process — from sales, installation, and training to after-sales support — with a holistic approach.",
      "Our goal is to make life-saving solutions more accessible by combining reliable technologies with proper usage and sustainable systems in the healthcare field.",
    ],
    actionLabel: "Discover Bilgin Tıp Medikal",
    actionHref: "https://www.bilgintip.com.tr",
  },

  solutions: {
    title: "Our Solution Areas",
    description:
      "We provide reliable and sustainable solutions, specializing in three core areas of the healthcare sector.",
    cards: [
      {
        number: "1",
        title: "Ostomy Solutions",
        body: "We focus on improving the quality of life for users with products and solutions designed for ostomy care. We offer products that provide comfort and confidence in daily use.",
      },
      {
        number: "2",
        title: "Wound Care Products",
        body: "We provide effective solutions that support treatment processes with modern wound care products. We offer reliable and practical products for healthcare professionals.",
      },
      {
        number: "3",
        title: "Emergency Response Systems",
        body: "We offer AED solutions for rapid and accurate intervention during sudden cardiac arrests. We build end-to-end systems including devices, accessories, and training.",
      },
    ] as ReadonlyArray<SolutionCard>,
  },

  story: {
    eyebrow: "Global Leader in Defibrillation",
    paragraphs: [
      "PRIMEDIC is a global brand with over 50 years of experience focused exclusively on defibrillation technology, offering emergency response solutions developed with German engineering.",
      "Since its inception, PRIMEDIC has chosen to specialize in a single field, developing systems that provide fast, accurate, and reliable intervention for sudden cardiac arrests. With its user-friendly guidance, high reliability standards, and durable design built for challenging conditions, it has become a vital part of emergency response solutions worldwide.",
      "PRIMEDIC operates under the umbrella of Yuwell Medical, one of the key players in the global medical technology ecosystem. This structure enables continuous advancement and innovation in defibrillation through advanced manufacturing technologies, robust R&D infrastructure, and sustainable quality standards.",
      "This life-saving approach makes PRIMEDIC not just a device manufacturer, but a trusted solutions partner in emergency response processes.",
    ],
    image: {
      src: "/images/hakkimizda/primedic-team.webp",
      alt: "PRIMEDIC — global leader in defibrillation, field team",
    },
    quote: {
      title: "Trust and Experience in Defibrillation",
      body: "PRIMEDIC is a global brand with over 50 years of experience focused exclusively on defibrillation technology. Its solutions, developed with German engineering, provide fast and reliable intervention during sudden cardiac arrests. Operating under Yuwell Medical, PRIMEDIC delivers continuous innovation in emergency response technologies through its strong R&D and manufacturing infrastructure.",
    },
  },
} as const;
