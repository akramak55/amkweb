export type IconKey =
  | "sparkles"
  | "music"
  | "camera"
  | "utensils"
  | "wand"
  | "building";

export type Service = {
  icon: IconKey;
  title: string;
  description: string;
  href: string;
};

export const services: Service[] = [
  {
    icon: "sparkles",
    title: "Conception & direction artistique",
    description:
      "De l'intention première au scénographique, nous traduisons votre univers en une narration claire, cohérente et mémorable.",
    href: "/services#direction-artistique",
  },
  {
    icon: "music",
    title: "Production & régie",
    description:
      "Son, lumière, vidéo, plateau. Une équipe pluridisciplinaire orchestre chaque détail technique avec précision et sang-froid.",
    href: "/services#production",
  },
  {
    icon: "wand",
    title: "Scénographie & décor",
    description:
      "Installations sur-mesure, matières nobles, volumes travaillés. Nous fabriquons l'espace qui révèle votre message.",
    href: "/services#scenographie",
  },
  {
    icon: "camera",
    title: "Captation & image",
    description:
      "Photographie éditoriale, films d'après-événement, livestream. Des contenus pensés pour durer au-delà de la soirée.",
    href: "/services#captation",
  },
  {
    icon: "utensils",
    title: "Hospitality & expérience",
    description:
      "Accueil, gastronomie, mixologie, cadeaux. Chaque point de contact est calibré pour surprendre sans jamais déranger.",
    href: "/services#hospitality",
  },
  {
    icon: "building",
    title: "Événements corporate",
    description:
      "Lancements, conventions, soirées d'entreprise, galas. Nous servons votre stratégie avec la rigueur qu'elle mérite.",
    href: "/services#corporate",
  },
];

export type EventItem = {
  title: string;
  category: string;
  location: string;
  year: string;
  slug: string;
};

export const events: EventItem[] = [
  {
    title: "Nuit de la Haute Horlogerie",
    category: "Luxe · Lancement",
    location: "Palais Brongniart, Paris",
    year: "2024",
    slug: "nuit-haute-horlogerie",
  },
  {
    title: "Gala annuel Fondation Lumière",
    category: "Institution · Gala",
    location: "Opéra Garnier, Paris",
    year: "2024",
    slug: "gala-fondation-lumiere",
  },
  {
    title: "Union — Célébration privée",
    category: "Mariage · Privé",
    location: "Domaine de la Trappe, Provence",
    year: "2023",
    slug: "union-privee",
  },
  {
    title: "Lancement collection Printemps",
    category: "Mode · Défilé",
    location: "Hôtel de Crillon, Paris",
    year: "2023",
    slug: "collection-printemps",
  },
  {
    title: "Convention internationale Atlas",
    category: "Corporate · Convention",
    location: "Palais des Congrès, Genève",
    year: "2023",
    slug: "convention-atlas",
  },
  {
    title: "Soirée d'ouverture Biennale",
    category: "Art · Vernissage",
    location: "La Villa Médicis, Rome",
    year: "2022",
    slug: "biennale-vernissage",
  },
];

export const stats = [
  { value: "14", label: "années d'expérience" },
  { value: "+380", label: "événements signés" },
  { value: "27", label: "pays d'intervention" },
  { value: "98%", label: "clients fidèles" },
];

export const values = [
  {
    title: "Exigence",
    description:
      "Le détail n'est jamais accessoire. Chaque choix — typographique, sonore, culinaire — est pesé, défendu, assumé.",
  },
  {
    title: "Discrétion",
    description:
      "Nos clients nous confient des moments décisifs. Nous travaillons dans l'ombre pour que seule la lumière de l'événement reste.",
  },
  {
    title: "Artisanat",
    description:
      "Nous pensons en artisan : main, matière, savoir-faire. Chaque production est conçue pièce à pièce, sans recette.",
  },
  {
    title: "Engagement",
    description:
      "Sourcing responsable, logistique optimisée, partenaires durables. Le geste juste autant que le geste beau.",
  },
];

export const process = [
  {
    step: "01",
    title: "Écoute",
    description:
      "Nous ouvrons la conversation sans a priori. Vos intentions, contraintes, non-dits — tout nourrit la direction à venir.",
  },
  {
    step: "02",
    title: "Direction",
    description:
      "Nous proposons un parti pris fort, défendu par un moodboard, une scénographie, une narration et un budget transparents.",
  },
  {
    step: "03",
    title: "Production",
    description:
      "Les équipes se déploient. Repérages, castings, ingénierie, répétitions. Chaque semaine, un point de synthèse structuré.",
  },
  {
    step: "04",
    title: "Jour J",
    description:
      "Un chef de projet, un régisseur général, une équipe dédiée. Vous profitez pleinement, nous orchestrons sans bruit.",
  },
  {
    step: "05",
    title: "Traces",
    description:
      "Débrief, images, films, rapport d'impact. Votre événement continue de vivre longtemps après les dernières lumières.",
  },
];

export const galleryItems = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  ratio: [
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[4/5]",
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-[5/4]",
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[4/5]",
  ][i],
  gradient: [
    "linear-gradient(135deg, oklch(0.32 0.08 75) 0%, oklch(0.16 0.02 80) 100%)",
    "linear-gradient(160deg, oklch(0.28 0.06 60) 0%, oklch(0.14 0.01 80) 100%)",
    "linear-gradient(120deg, oklch(0.34 0.09 90) 0%, oklch(0.18 0.02 80) 100%)",
    "linear-gradient(145deg, oklch(0.26 0.05 45) 0%, oklch(0.15 0.01 80) 100%)",
    "linear-gradient(135deg, oklch(0.30 0.07 70) 0%, oklch(0.16 0.02 80) 100%)",
    "linear-gradient(170deg, oklch(0.24 0.04 55) 0%, oklch(0.14 0.01 80) 100%)",
    "linear-gradient(125deg, oklch(0.32 0.08 82) 0%, oklch(0.17 0.02 80) 100%)",
    "linear-gradient(140deg, oklch(0.26 0.05 65) 0%, oklch(0.15 0.01 80) 100%)",
    "linear-gradient(155deg, oklch(0.30 0.07 95) 0%, oklch(0.16 0.02 80) 100%)",
  ][i],
}));
