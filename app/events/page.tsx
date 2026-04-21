import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";
import { EventCard } from "@/components/event-card";
import { events } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Sélection de productions récentes — lancements, galas, mariages, conventions. Références signées AMK Promotion.",
};

export default function EventsPage() {
  return (
    <>
      <section className="pt-40 pb-24 lg:pt-56 lg:pb-32">
        <Container>
          <div className="flex flex-col gap-8 max-w-4xl">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
                <span className="h-px w-8 inline-block bg-[var(--color-primary)] align-middle mr-3" />
                Événements
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-[0.95] text-balance">
                Chaque production <em className="italic gold-gradient">raconte</em> quelque chose.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl leading-relaxed">
                Sélection non-exhaustive. Certaines créations demeurent confidentielles à la demande de nos clients — nous les partageons sur demande, en rendez-vous.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 border-t border-[var(--color-border)]">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
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

      <section className="py-32 lg:py-40 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col items-start gap-8 max-w-3xl">
            <ScrollReveal>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
                Une idée similaire ?<br />
                <span className="italic gold-gradient">Parlons-en.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ButtonLink href="/contact" size="lg" withArrow>
                Demander un rendez-vous
              </ButtonLink>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
