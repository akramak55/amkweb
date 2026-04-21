export const site = {
  name: "AMK Promotion",
  tagline: "Agence événementielle — Signature, production, émotion.",
  description:
    "Agence événementielle premium. Nous imaginons, produisons et orchestrons des expériences sur-mesure pour les marques, institutions et particuliers exigeants.",
  url: "https://amkpromotion.com",
  email: "contact@amkpromotion.com",
  phone: "+33 0 00 00 00 00",
  address: "Paris · Genève · Marrakech",
  socials: {
    instagram: "https://instagram.com/amkpromotion",
    linkedin: "https://linkedin.com/company/amkpromotion",
  },
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "L'agence" },
    { href: "/services", label: "Services" },
    { href: "/events", label: "Événements" },
    { href: "/gallery", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
