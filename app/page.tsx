import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { EventCard } from "@/components/event-card";
import { Marquee } from "@/components/marquee";
import { Testimonials } from "@/components/testimonials";
import { Clients } from "@/components/clients";
import { ArticleCard } from "@/components/article-card";
import { events, services, stats } from "@/lib/data";
import { articles } from "@/lib/journal";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Marquee */}
      <section aria-hidden className="py-12 border-y border-[var(--color-border)]">
        <Marquee
          items={[
            <span key="1" className="font-serif text-2xl text-[var(--color-muted-foreground)]">
              Paris
            </span>,
            <span key="2" className="font-serif text-2xl italic gold-gradient">
              Genève
            </span>,
            <span key="3" className="font-serif text-2xl text-[var(--color-muted-foreground)]">
              Marrakech
            </span>,
            <span key="4" className="font-serif text-2xl italic gold-gradient">
              Monaco
            </span>,
            <span key="5" className="font-serif text-2xl text-[var(--color-muted-foreground)]">
              Rome
            </span>,
            <span key="6" className="font-serif text-2xl italic gold-gradient">
              Saint-Tropez
            </span>,
            <span key="7" className="font-serif text-2xl text-[var(--color-muted-foreground)]">
              New York
            </span>,
            <span key="8" className="font-serif text-2xl italic gold-gradient">
              Dubaï
            </span>,
          ]}
        />
      </section>

      {/* Intro */}
      <section className="py-32 lg:py-48">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
                  <span className="h-px w-8 inline-block bg-[var(--color-primary)] align-middle mr-3" />
                  L&apos;agence
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8">
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] text-balance">
                  Nous sommes un atelier d&apos;
                  <em className="italic gold-gradient">événements rares</em>,
                  obsédé par la justesse du geste et la tenue du détail. Depuis quatorze ans, nous composons des soirées, des lancements et des cérémonies qui laissent une empreinte — parce qu&apos;elles
                  <em className="italic"> ressemblent à ceux qui les signent</em>.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="mt-12 flex items-center gap-6">
                  <ButtonLink href="/about" variant="outline" withArrow>
                    Notre vision
                  </ButtonLink>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
            <SectionHeading
              eyebrow="Savoir-faire"
              title={
                <>
                  Six métiers,
                  <br />
                  <span className="italic gold-gradient">une orchestration.</span>
                </>
              }
              description="De la première intuition jusqu'à la dernière lumière, nos équipes couvrent l'ensemble de la chaîne événementielle avec une exigence artisanale."
            />
            <ButtonLink href="/services" variant="outline" withArrow>
              Tous les services
            </ButtonLink>
          </div>

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

      {/* Stats */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <div className="grid gap-y-16 gap-x-8 grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div className="flex flex-col gap-3">
                  <span className="font-serif text-6xl lg:text-7xl gold-gradient tabular-nums">
                    {s.value}
                  </span>
                  <span className="text-sm text-[var(--color-muted-foreground)] uppercase tracking-[0.2em]">
                    {s.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Events */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
            <SectionHeading
              eyebrow="Réalisations"
              title={
                <>
                  Quelques
                  <br />
                  <span className="italic gold-gradient">moments signés.</span>
                </>
              }
              description="Sélection resserrée de collaborations récentes. Certaines sont publiques ; d'autres restent confidentielles, par respect pour nos clients."
            />
            <ButtonLink href="/events" variant="outline" withArrow>
              Voir tout
            </ButtonLink>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.slice(0, 6).map((event, i) => (
              <EventCard
                key={event.slug}
                title={event.title}
                category={event.category}
                location={event.location}
                year={event.year}
                href={`/events/${event.slug}`}
                index={i}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Clients */}
      <section className="py-24 lg:py-28 border-t border-[var(--color-border)]">
        <Container className="mb-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)] text-center">
            Quelques maisons qui nous font confiance
          </p>
        </Container>
        <Clients />
      </section>

      {/* Testimonials */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            eyebrow="Ils nous ont confié leurs moments"
            title={
              <>
                Paroles
                <br />
                <span className="italic gold-gradient">de clients.</span>
              </>
            }
            className="mb-20"
          />
          <Testimonials />
        </Container>
      </section>

      {/* Journal */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
            <SectionHeading
              eyebrow="Journal"
              title={
                <>
                  Ce qu&apos;on écrit
                  <br />
                  <span className="italic gold-gradient">entre deux productions.</span>
                </>
              }
              description="Essais courts, coulisses, convictions d'atelier."
            />
            <ButtonLink href="/journal" variant="outline" withArrow>
              Tout lire
            </ButtonLink>
          </div>

          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col items-start lg:items-center gap-10 lg:text-center">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
                Prêt à commencer
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-balance max-w-4xl">
                Racontez-nous votre projet.
                <br />
                <span className="italic gold-gradient">Nous écoutons.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-4 pt-4">
                <ButtonLink href="/contact" size="lg" withArrow>
                  Prendre rendez-vous
                </ButtonLink>
                <ButtonLink href="/services" size="lg" variant="ghost">
                  Nos services
                </ButtonLink>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
