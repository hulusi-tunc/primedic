// English translations for the Contact page.

export const iletisim = {
  seo: {
    title: "Contact | Bilgin Tıp Medikal & Primedic",
    description:
      "Contact the Bilgin Tıp Medikal team for AED devices, accessories, implementation processes, and quotation requests.",
    keywords: [
      "Bilgin Tıp contact",
      "Primedic Turkey contact",
      "AED quote",
      "AED price quote",
      "buy defibrillator",
    ],
  },

  hero: {
    title: "We're Here for Your AED Solutions",
    description: [
      "Contact our team for AED devices, accessories,",
      "implementation processes, and quotation requests.",
    ],
  },

  form: {
    heading: "How can we help you?",
    paragraphs: [
      "Fill out the form to get information, request a quote, or submit your questions.",
      "Our team will get back to you as soon as possible.",
    ],
    contact: {
      address: "Şaşmaz Plaza Kozyatağı, Kadıköy",
      phone: "0216 999 22 29",
      phoneHref: "tel:+902169992229",
      email: "info@bilgintip.com",
      emailHref: "mailto:info@bilgintip.com",
    },
    fields: {
      firstName: { label: "First Name", placeholder: "Your first name", required: true },
      lastName: { label: "Last Name", placeholder: "Your last name*", required: true },
      email: { label: "Email", placeholder: "Email*", required: true },
      phone: { label: "Phone", placeholder: "Your phone number*", required: true },
      message: { label: "Message", placeholder: "Your message...", required: true },
    },
    submitLabel: "Send Message",
  },
} as const;
