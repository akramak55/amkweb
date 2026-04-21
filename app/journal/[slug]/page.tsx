import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";
import { ArticleCard } from "@/components/article-card";
import { JsonLd, articleSchema } from "@/components/json-ld";
import { articles } from "@/lib/journal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.dateISO,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <section className="pt-32 pb-16 lg:pt-44">
        <Container size="md">
          <ScrollReveal>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors mb-16"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
              Tout le journal
            </Link>
          </ScrollReveal>

          <div className="flex flex-col gap-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-[var(--color-muted-foreground)]">
                <span className="text-[var(--color-primary)]">{article.category}</span>
                <span aria-hidden>·</span>
                <time dateTime={article.dateISO}>{article.date}</time>
                <span aria-hidden>·</span>
                <span>{article.readTime}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1] text-balance">
                {article.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-[var(--color-muted-foreground)] leading-relaxed text-pretty max-w-2xl">
                {article.excerpt}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container size="md">
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
                  <pattern id="art-hero" width="5" height="5" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.4" fill="white" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#art-hero)" />
              </svg>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="sm">
          <article className="flex flex-col gap-8">
            {article.body.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-lg lg:text-xl leading-[1.7] text-[var(--color-foreground)]/90 text-pretty font-serif">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </article>

          <ScrollReveal delay={0.2}>
            <div className="mt-20 pt-8 border-t border-[var(--color-border)] flex items-center gap-4 text-sm text-[var(--color-muted-foreground)]">
              <span
                aria-hidden
                className="h-px w-8 bg-[var(--color-primary)]"
              />
              Par {article.author} — {article.date}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex items-end justify-between gap-10 mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-balance">
              À <em className="italic gold-gradient">lire ensuite</em>
            </h2>
            <ButtonLink href="/journal" variant="outline" withArrow>
              Tout le journal
            </ButtonLink>
          </div>
          <div className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
