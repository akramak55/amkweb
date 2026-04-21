import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/journal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Réflexions, coulisses et regards de l'équipe AMK Promotion sur l'événementiel, la scénographie et l'art de recevoir.",
};

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="pt-40 pb-24 lg:pt-56 lg:pb-32">
        <Container>
          <div className="flex flex-col gap-8 max-w-4xl">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
                <span className="h-px w-8 inline-block bg-[var(--color-primary)] align-middle mr-3" />
                Journal
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-[0.95] text-balance">
                Nos regards, <em className="italic gold-gradient">nos silences</em>.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl leading-relaxed">
                Essais courts, coulisses de production, convictions d&apos;atelier. Nous y partageons ce que nous apprenons — et ce que nous refusons d&apos;oublier.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {featured && (
        <section className="py-12 lg:py-16 border-t border-[var(--color-border)]">
          <Container>
            <ArticleCard article={featured} index={0} featured />
          </Container>
        </section>
      )}

      <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
        <Container>
          <div className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i + 1} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
