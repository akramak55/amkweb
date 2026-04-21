import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";
import { EventCard } from "@/components/event-card";
import { events } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.summary,
  };
}

export default async function EventPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const related = events.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-44">
        <Container>
          <ScrollReveal>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors mb-16"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
              Tous les événements
            </Link>
          </ScrollReveal>

          <div className="flex flex-col gap-8 max-w-5xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
                <span className="h-px w-8 bg-[var(--color-primary)]" aria-hidden />
                {event.category}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] leading-[0.95] text-balance">
                {event.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-x-10 gap-y-3 text-[var(--color-muted-foreground)] mt-4">
                <span>{event.location}</span>
                <span aria-hidden>·</span>
                <span className="tabular-nums">{event.year}</span>
                <span aria-hidden>·</span>
                <span>{event.duration}</span>
                <span aria-hidden>·</span>
                <span>{event.guests}</span>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Hero visual */}
      <section className="py-8">
        <Container>
          <ScrollReveal>
            <div className="relative aspect-[16/9] overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.30 0.08 75) 0%, oklch(0.16 0.02 80) 100%)",
                }}
              />
              <svg
                aria-hidden
                className="absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern id="ev-detail" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.5" fill="white" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#ev-detail)" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Body */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="flex flex-col gap-10">
                  <Meta label="Lieu" value={event.location} />
                  <Meta label="Année" value={event.year} />
                  <Meta label="Durée" value={event.duration} />
                  <Meta label="Invités" value={event.guests} />
                  <div className="flex flex-col gap-3">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]">
                      Périmètre
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {event.scope.map((s) => (
                        <li key={s} className="font-serif text-lg">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8">
              <ScrollReveal delay={0.1}>
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-balance text-[var(--color-foreground)]/95">
                  {event.summary}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-[var(--color-muted-foreground)] text-lg leading-relaxed max-w-2xl">
                  <p>
                    Les détails complets, photographies et film d&apos;après-événement sont partagés en rendez-vous, dans le respect de la confidentialité de nos clients.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex items-end justify-between gap-10 mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-balance">
              Autres <em className="italic gold-gradient">moments</em>
            </h2>
            <ButtonLink href="/events" variant="outline" withArrow>
              Tout voir
            </ButtonLink>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e, i) => (
              <EventCard
                key={e.slug}
                title={e.title}
                category={e.category}
                location={e.location}
                year={e.year}
                href={`/events/${e.slug}`}
                index={i}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col items-start gap-8 max-w-3xl">
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
              Un projet dans le même esprit ?<br />
              <span className="italic gold-gradient">Écrivons-le ensemble.</span>
            </h2>
            <ButtonLink href="/contact" size="lg" withArrow>
              Prendre contact
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]">
        {label}
      </p>
      <p className="font-serif text-xl">{value}</p>
    </div>
  );
}
