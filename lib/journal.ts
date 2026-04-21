export type JournalArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  readTime: string;
  author: string;
  body: string[];
};

export const articles: JournalArticle[] = [
  {
    slug: "art-du-silence",
    category: "Essai",
    title: "L'art du silence : ce que l'on retire d'un événement",
    excerpt:
      "On croit qu'un événement se compose de ce que l'on ajoute. L'expérience nous apprend le contraire : les plus marquants sont souvent ceux dont on a su retirer le superflu.",
    date: "14 février 2025",
    dateISO: "2025-02-14",
    readTime: "5 min",
    author: "Direction artistique",
    body: [
      "Il y a cette tentation, dans notre métier, d'en mettre plus. Un effet de lumière supplémentaire, une intervention musicale, une prise de parole inattendue, une surprise à table. Et puis, en répétition, on s'aperçoit que ce détail auquel on tenait tant alourdit la pièce. Qu'il dit quelque chose qu'on avait déjà dit, ou que personne n'avait besoin d'entendre.",
      "Le réflexe est alors de défendre l'idée — pour ne pas perdre le temps qu'on y a passé, pour ne pas décevoir l'équipe qui l'a préparée. C'est précisément à cet instant que la décision la plus juste est de retirer.",
      "Un événement n'est pas une accumulation. C'est une composition. Et toute composition tient à ce qu'elle n'énonce pas. Le silence entre deux phrases, le noir entre deux apparitions, l'espace vide qui laisse respirer une scénographie. Ces absences ne sont pas des creux : ce sont elles qui donnent leur poids aux présences.",
      "Nos clients, souvent, nous remercient pour ce qu'ils n'ont pas vu. Un dispositif technique invisible. Une transition dont personne n'a perçu la mécanique. Un timing si naturel qu'il en paraissait improvisé. Ce que l'on nous paye, en vérité, c'est cette discrétion. L'événement réussit d'autant mieux qu'il laisse croire qu'il n'a pas été mis en scène.",
      "La difficulté est là : produire énormément pour que rien ne se remarque. C'est un exercice de retenue, d'arbitrage, parfois de renoncement. Mais c'est à ce prix que l'émotion peut se déposer — sans concurrent, sans bruit de fond — dans le souvenir de l'invité.",
    ],
  },
  {
    slug: "72-heures-avant-gala",
    category: "Coulisses",
    title: "Derrière la scène : 72 heures avant un gala",
    excerpt:
      "Trois jours avant un gala majeur, l'agence bascule dans un autre rythme. Récit des heures qui séparent une idée répétée d'un moment vécu.",
    date: "22 janvier 2025",
    dateISO: "2025-01-22",
    readTime: "6 min",
    author: "Production",
    body: [
      "Jour J moins trois. L'équipe production arrive sur site avant l'aube. Les premiers camions techniques sont déjà à quai, et la première question du matin — toujours la même — n'a rien de créatif : avons-nous l'électricité que nous avions demandée ?",
      "Tout l'enjeu de ces trois jours tient dans ce glissement. De l'intention artistique à l'organisation matérielle, il y a cent cinquante points qui doivent coïncider : poids de structure et charge au sol, niveaux sonores et règlement du lieu, approvisionnement traiteur et minutage de service, plan d'évacuation et trajectoire des invités VIP.",
      "Chaque corps de métier a sa propre langue. Les régisseurs plateau ne parlent pas comme les fleuristes, qui ne parlent pas comme les sommeliers. Le rôle du chef de projet est de tenir cette polyphonie, de traduire une contrainte technique en ajustement créatif, et l'inverse.",
      "Jour J moins deux, on procède au montage scénographique. On découvre — toujours — que certaines mesures relevées il y a trois mois ne correspondent plus tout à fait. Un radiateur qu'on n'avait pas vu, un câble qui dépasse, un plafond trois centimètres plus bas que prévu. Ce sont ces trois centimètres qui fatiguent, parce qu'il faut refaire, sans se plaindre.",
      "Jour J moins un, répétition générale. On chronomètre. On reprend. On découvre un éclairage qui grille à l'effet d'intro. On change le projecteur, on refait le cue, on rechronomètre. Le soir, on s'autorise un dîner d'équipe rapide — pour se rappeler qu'on fait ça ensemble.",
      "Jour J, la fatigue est là. Le trac aussi, un peu. Puis les premiers invités arrivent, la musique démarre, les visages s'éclairent. Et tout ce qu'on a préparé se met en marche, dans l'ordre, dans le silence de l'équipe qui murmure dans les oreillettes. On n'existe plus pour les invités ; c'est exactement ce qu'on cherchait.",
    ],
  },
  {
    slug: "chaque-table-raconte",
    category: "Scénographie",
    title: "Parce que chaque table raconte quelque chose",
    excerpt:
      "L'art de la table n'est pas un supplément décoratif. C'est l'endroit où se joue, plusieurs heures durant, la relation entre l'invité et l'événement.",
    date: "3 janvier 2025",
    dateISO: "2025-01-03",
    readTime: "4 min",
    author: "Scénographie",
    body: [
      "Une table bien dressée ne se remarque pas — elle installe. Elle dit à l'invité, avant même qu'on n'ait commencé à lui parler, qu'il est attendu, pensé, respecté.",
      "Dans notre travail, la table est un objet de scénographie à part entière. Elle a un rythme : la nappe, la vaisselle, les verres, les fleurs, les cartons, la lumière qui tombe dessus. Et elle a un sens : vers l'assiette, vers le voisin, vers la scène.",
      "Ce qui fait la différence, ce ne sont pas les matériaux précieux — ce sont les choix qui construisent une cohérence. Une couleur d'argenterie qui dialogue avec la papeterie. Une hauteur florale calibrée pour ne pas cacher le regard d'un convive à un autre. Une bougie qui accepte le mouvement du service sans vaciller.",
      "Et puis il y a ce que la table n'a pas. Pas de marque commerciale ostentatoire, pas de dispositif technique visible, pas de signalétique gadget. Simplement : l'hospitalité silencieuse, posée là, prête à recevoir.",
    ],
  },
  {
    slug: "directions-2025",
    category: "Regard",
    title: "Directions artistiques 2025 : trois convictions",
    excerpt:
      "Moins d'ornement, plus de lieu. Moins d'effet, plus de rythme. Moins de marque, plus de narration. Ce que nous emportons dans l'année qui vient.",
    date: "10 décembre 2024",
    dateISO: "2024-12-10",
    readTime: "5 min",
    author: "Direction artistique",
    body: [
      "Chaque fin d'année, nous réunissons l'équipe sur deux jours pour reposer la question qui fonde tout le reste : que défendons-nous dans nos productions ?",
      "Cette année, trois convictions sont remontées avec insistance.",
      "La première : privilégier le lieu. Nous travaillons de plus en plus dans des lieux patrimoniaux, et nous refusons de les recouvrir. Notre tâche est de révéler ce qui existe déjà — un plafond, une lumière naturelle, une texture de pierre — et de composer avec, plutôt que par-dessus. Cela demande de la retenue, mais produit des événements beaucoup plus singuliers.",
      "La deuxième : travailler le rythme. Un événement, comme un film, a un tempo. Il se construit par un enchaînement de séquences de durées variables : arrivée longue et lente, temps social dense, moment central concentré, sortie douce. Nous dessinons ces courbes en amont — c'est souvent plus important que le choix des prestataires.",
      "La troisième : faire place à la narration. Une marque n'impose pas. Elle raconte. Nous voulons continuer de préférer le récit subtil à l'affichage frontal, la suggestion à la démonstration. C'est plus exigeant ; c'est aussi plus juste pour celles et ceux qui nous confient leur image.",
      "Ces convictions ne sont pas nouvelles. Elles nous tiennent depuis toujours. Mais nous les reformulons, chaque année, pour que rien ne devienne automatisme. C'est à ce prix que nous continuons à faire ce métier avec le désir du premier jour.",
    ],
  },
];
