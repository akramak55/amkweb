import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { galleryItems } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Images et captations issues de nos productions. Un regard éditorial sur quatorze ans d'événements.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-40 pb-24 lg:pt-56 lg:pb-32">
        <Container>
          <div className="flex flex-col gap-8 max-w-4xl">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
                <span className="h-px w-8 inline-block bg-[var(--color-primary)] align-middle mr-3" />
                Galerie
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-[0.95] text-balance">
                Fragments, <em className="italic gold-gradient">lumières</em>, instants.
              </h1>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 border-t border-[var(--color-border)]">
        <Container>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {galleryItems.map((item, i) => (
              <ScrollReveal
                key={item.id}
                delay={(i % 3) * 0.08}
                className="mb-6 break-inside-avoid"
              >
                <figure className={`relative ${item.ratio} overflow-hidden group`}>
                  <div
                    className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease-out-luxe)] group-hover:scale-105"
                    style={{ background: item.gradient }}
                  />
                  <svg
                    aria-hidden
                    className="absolute inset-0 h-full w-full opacity-[0.06] mix-blend-overlay"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern
                        id={`g-pattern-${item.id}`}
                        width="5"
                        height="5"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="1" cy="1" r="0.4" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#g-pattern-${item.id})`} />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </figure>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-16 text-center text-sm text-[var(--color-muted-foreground)]">
            Les visuels définitifs seront intégrés depuis votre bibliothèque (crédits photographes conservés).
          </p>
        </Container>
      </section>
    </>
  );
}
