import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";
import { values } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'agence",
  description:
    "Atelier d'événements sur-mesure. Découvrez notre vision, nos valeurs et l'équipe derrière les productions AMK Promotion.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 lg:pt-56 lg:pb-32">
        <Container>
          <div className="flex flex-col gap-8 max-w-4xl">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
                <span className="h-px w-8 inline-block bg-[var(--color-primary)] align-middle mr-3" />
                L&apos;agence
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-[0.95] text-balance">
                Un atelier <em className="italic gold-gradient">discret</em> au service d&apos;événements qui ne le sont pas.
              </h1>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Manifesto */}
      <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]">
                  Manifeste
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8 text-lg leading-relaxed text-[var(--color-foreground)]/90">
              <ScrollReveal delay={0.1}>
                <p>
                  AMK Promotion est né d&apos;une conviction simple : un événement réussi ne se remarque pas pour sa machinerie, mais pour le silence qui suit. Ce moment où l&apos;invité, encore ému, cherche les mots. Nous travaillons pour ce silence.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  Nous refusons l&apos;événementiel industriel, les effets dupliqués, les scénographies recyclées. Chaque production est une pièce unique, conçue pour un commanditaire unique, dans un lieu unique, à un instant que l&apos;on ne retrouvera plus.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>
                  Notre métier tient dans une tension : l&apos;ambition d&apos;une grande direction artistique, la discipline d&apos;une production sans faille. L&apos;une ne va pas sans l&apos;autre. C&apos;est ce que nous cherchons, chaque jour, pour chacun de nos clients.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            eyebrow="Valeurs"
            title={
              <>
                Quatre boussoles,
                <br />
                <span className="italic gold-gradient">rien de plus.</span>
              </>
            }
          />
          <div className="mt-20 grid gap-0 sm:grid-cols-2 border-t border-l border-[var(--color-border)]">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="p-10 lg:p-12 border-r border-b border-[var(--color-border)] h-full flex flex-col gap-4">
                  <span className="font-serif text-sm text-[var(--color-muted-foreground)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-3xl lg:text-4xl">{v.title}</h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed text-pretty">
                    {v.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team placeholder */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Équipe"
                title={
                  <>
                    Seize personnes,
                    <br />
                    <span className="italic gold-gradient">une même main.</span>
                  </>
                }
                description="Directeurs de production, scénographes, régisseurs, créatifs. Nous travaillons en équipe resserrée, avec un carnet d'adresses international d'artisans et d'artistes."
              />
            </div>
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.15}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.32 0.08 75) 0%, oklch(0.16 0.02 80) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white/90 text-sm">
                    <span className="font-serif text-xl">Studio AMK, Paris 8e</span>
                    <span className="tabular-nums">2024</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col items-start gap-8">
            <ScrollReveal>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-3xl">
                Envie de nous rencontrer ?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ButtonLink href="/contact" size="lg" withArrow>
                Prendre contact
              </ButtonLink>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
