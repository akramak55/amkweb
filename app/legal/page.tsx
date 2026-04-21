import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d'AMK Promotion.",
  robots: { index: false },
};

export default function LegalPage() {
  return (
    <section className="pt-40 pb-32 lg:pt-56">
      <Container size="md">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)] mb-8">
            <span className="h-px w-8 inline-block bg-[var(--color-primary)] align-middle mr-3" />
            Informations légales
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance mb-16">
            Mentions légales
          </h1>
        </ScrollReveal>

        <div className="prose-like flex flex-col gap-12 text-[var(--color-foreground)]/90 leading-relaxed text-lg">
          <Block title="Éditeur du site">
            <p>
              Le site {site.url} est édité par <strong>{site.name}</strong>.
            </p>
            <p>
              Adresse : {site.address}
              <br />
              Contact : <a href={`mailto:${site.email}`} className="underline decoration-[var(--color-primary)]/40 underline-offset-4 hover:text-[var(--color-primary)]">{site.email}</a>
              <br />
              Téléphone : {site.phone}
            </p>
            <p className="text-[var(--color-muted-foreground)] text-base">
              Numéro de SIRET, forme juridique, capital social et numéro de TVA à compléter par l&apos;éditeur.
            </p>
          </Block>

          <Block title="Directeur de la publication">
            <p className="text-[var(--color-muted-foreground)] text-base">À compléter.</p>
          </Block>

          <Block title="Hébergement">
            <p className="text-[var(--color-muted-foreground)] text-base">
              Nom, adresse et contact de l&apos;hébergeur à compléter.
            </p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur ce site — textes, images, identité visuelle, code — est protégé par le droit d&apos;auteur et demeure la propriété exclusive de {site.name} ou de ses partenaires. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite.
            </p>
          </Block>

          <Block title="Crédits">
            <p>
              Conception et développement : équipe {site.name}. Typographies : Playfair Display et Inter (Google Fonts). Icônes : Lucide.
            </p>
          </Block>
        </div>
      </Container>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-serif text-3xl text-[var(--color-foreground)]">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
