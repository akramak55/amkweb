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
  summary: string;
  scope: string[];
  guests: string;
  duration: string;
};

export const events: EventItem[] = [
  {
    title: "Nuit de la Haute Horlogerie",
    category: "Luxe · Lancement",
    location: "Palais Brongniart, Paris",
    year: "2024",
    slug: "nuit-haute-horlogerie",
    summary:
      "Dévoilement d'une collection capsule pour une grande maison horlogère, dans un dispositif scénographique inspiré des mécanismes de haute précision : cuivre, laiton brossé, lumières rasantes. Dîner signature, performance musicale live, moment d'intimité avec les créateurs.",
    scope: ["Direction artistique", "Scénographie", "Régie technique", "Hospitality", "Captation"],
    guests: "320 invités",
    duration: "Une soirée",
  },
  {
    title: "Gala annuel Fondation Lumière",
    category: "Institution · Gala",
    location: "Opéra Garnier, Paris",
    year: "2024",
    slug: "gala-fondation-lumiere",
    summary:
      "Soirée de mécénat au profit d'une fondation éducative. Accueil au grand foyer, dîner assis sous les plafonds peints, vente aux enchères silencieuse et concert exceptionnel. Une cérémonie tenue à l'exacte mesure du lieu.",
    scope: ["Direction artistique", "Scénographie florale", "Production technique", "Protocole"],
    guests: "480 invités",
    duration: "Une soirée",
  },
  {
    title: "Union — Célébration privée",
    category: "Mariage · Privé",
    location: "Domaine de la Trappe, Provence",
    year: "2023",
    slug: "union-privee",
    summary:
      "Trois jours de célébration pour une famille qui souhaitait réunir ses proches dans le Sud. Cérémonie sous les oliviers, dîner en longue table, fête sous chapiteau. Chaque détail — papeterie, menu, lumière — a été dessiné sur-mesure.",
    scope: ["Conception d'ensemble", "Scénographie", "Hospitality", "Captation photo & film"],
    guests: "210 invités",
    duration: "Trois jours",
  },
  {
    title: "Lancement collection Printemps",
    category: "Mode · Défilé",
    location: "Hôtel de Crillon, Paris",
    year: "2023",
    slug: "collection-printemps",
    summary:
      "Présentation presse et acheteurs d'une collection prêt-à-porter. Défilé épuré au salon des Aigles, cocktail en rooftop, contenus vidéo pensés pour le digital. Une production dense, exécutée dans un calendrier court.",
    scope: ["Direction artistique", "Casting", "Régie plateau", "Captation vidéo"],
    guests: "190 invités",
    duration: "Une journée",
  },
  {
    title: "Convention internationale Atlas",
    category: "Corporate · Convention",
    location: "Palais des Congrès, Genève",
    year: "2023",
    slug: "convention-atlas",
    summary:
      "Convention annuelle d'un groupe international réunissant ses équipes sur trois jours. Plénières, ateliers, soirée de clôture au bord du lac. Identité scénique construite autour d'une metaphor géographique : la traversée.",
    scope: ["Stratégie scénique", "Production technique", "Contenus vidéo", "Logistique"],
    guests: "900 collaborateurs",
    duration: "Trois jours",
  },
  {
    title: "Soirée d'ouverture Biennale",
    category: "Art · Vernissage",
    location: "La Villa Médicis, Rome",
    year: "2022",
    slug: "biennale-vernissage",
    summary:
      "Vernissage d'une biennale d'art contemporain : parcours nocturne dans les jardins, dîner en plein air, performance sonore dédiée. Une soirée construite avec les commissaires, dans le respect absolu du patrimoine du lieu.",
    scope: ["Direction artistique", "Scénographie lumière", "Hospitality"],
    guests: "260 invités",
    duration: "Une soirée",
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

export const testimonials = [
  {
    quote:
      "Ce que nous aimons chez AMK, c'est cette façon rare de faire disparaître le dispositif pour ne laisser que l'émotion. Rien ne dépasse, tout est juste.",
    name: "Camille Rivière",
    role: "Directrice Mécénat, Maison Lumière",
  },
  {
    quote:
      "Trois jours sans un accroc pour un mariage à haute attente familiale. La préparation, la direction, la tenue du timing : tout a été d'une douceur stupéfiante.",
    name: "Éléonore & Hadrien",
    role: "Union privée, Provence 2023",
  },
  {
    quote:
      "Une équipe capable de tenir une vision artistique face à des contraintes corporate lourdes. Rare, et précieux.",
    name: "Michaël Desné",
    role: "Chief Brand Officer, Groupe Atlas",
  },
  {
    quote:
      "Nous avons travaillé avec beaucoup d'agences. Celle-ci écoute vraiment, et ce qu'elle propose nous ressemble — pas l'inverse.",
    name: "Léa Fontaine",
    role: "Fondatrice, Maison Fontaine Parfums",
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
