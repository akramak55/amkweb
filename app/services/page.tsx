import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { process, services } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Conception, production, scénographie, captation, hospitality, corporate. Découvrez les six métiers d'AMK Promotion.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-24 lg:pt-56 lg:pb-32">
        <Container>
          <div className="flex flex-col gap-8 max-w-4xl">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
                <span className="h-px w-8 inline-block bg-[var(--color-primary)] align-middle mr-3" />
                Services
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-[0.95] text-balance">
                Six métiers, <em className="italic gold-gradient">une seule équipe</em>.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl leading-relaxed">
                Nous intervenons en bout-en-bout ou par compétence, selon ce qui sert votre projet. Tout est internalisé ; rien n&apos;est sous-traité sans contrôle étroit.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Service grid */}
      <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
        <Container>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-border)]">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="border-r border-b border-[var(--color-border)]"
              >
                <ServiceCard {...service} index={i} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            eyebrow="Méthode"
            title={
              <>
                De la première
                <br />
                conversation <span className="italic gold-gradient">aux dernières traces.</span>
              </>
            }
            description="Un processus clair en cinq temps, adapté à chaque commande. Transparence sur les délais, les livrables et les budgets à chaque étape."
          />

          <ol className="mt-24 flex flex-col">
            {process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.05}>
                <li className="group grid gap-8 lg:grid-cols-12 items-start py-10 lg:py-14 border-t border-[var(--color-border)]">
                  <div className="lg:col-span-2">
                    <span className="font-serif text-5xl lg:text-6xl gold-gradient tabular-nums">
                      {step.step}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-serif text-4xl lg:text-5xl">{step.title}</h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed text-pretty max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col items-start gap-8 max-w-3xl">
            <ScrollReveal>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
                Un brief en tête ?<br />
                <span className="italic gold-gradient">Commençons.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ButtonLink href="/contact" size="lg" withArrow>
                Démarrer un projet
              </ButtonLink>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
