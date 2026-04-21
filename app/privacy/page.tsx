import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment AMK Promotion collecte, utilise et protège vos données personnelles.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="pt-40 pb-32 lg:pt-56">
      <Container size="md">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)] mb-8">
            <span className="h-px w-8 inline-block bg-[var(--color-primary)] align-middle mr-3" />
            Confidentialité
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance mb-6">
            Politique de confidentialité
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-[var(--color-muted-foreground)] mb-16">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-12 text-[var(--color-foreground)]/90 leading-relaxed text-lg">
          <Block title="Responsable du traitement">
            <p>
              {site.name} est responsable du traitement des données personnelles collectées via le présent site. Pour toute question, écrivez à{" "}
              <a href={`mailto:${site.email}`} className="underline decoration-[var(--color-primary)]/40 underline-offset-4 hover:text-[var(--color-primary)]">
                {site.email}
              </a>.
            </p>
          </Block>

          <Block title="Données collectées">
            <p>
              Nous collectons uniquement les informations que vous nous transmettez volontairement via le formulaire de contact : nom, adresse e-mail, téléphone, type et date d&apos;événement, et le contenu libre de votre message.
            </p>
          </Block>

          <Block title="Finalité du traitement">
            <p>
              Ces données servent exclusivement à vous répondre, à préparer un rendez-vous et, le cas échéant, à construire une proposition. Elles ne sont ni revendues, ni utilisées à des fins commerciales externes.
            </p>
          </Block>

          <Block title="Durée de conservation">
            <p>
              Les demandes sans suite sont conservées 12 mois puis supprimées. Les données liées à une collaboration effective sont conservées selon les durées légales applicables (comptabilité, droit commercial).
            </p>
          </Block>

          <Block title="Cookies">
            <p>
              Ce site n&apos;utilise pas de cookies de traçage tiers. Seuls des cookies techniques strictement nécessaires au bon fonctionnement peuvent être déposés.
            </p>
          </Block>

          <Block title="Vos droits">
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation et d&apos;opposition sur vos données. Exercez-les en nous écrivant à{" "}
              <a href={`mailto:${site.email}`} className="underline decoration-[var(--color-primary)]/40 underline-offset-4 hover:text-[var(--color-primary)]">
                {site.email}
              </a>.
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
