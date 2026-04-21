"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { JournalArticle } from "@/lib/journal";
import { cn } from "@/lib/utils";

type Props = {
  article: JournalArticle;
  index?: number;
  featured?: boolean;
  className?: string;
};

export function ArticleCard({
  article,
  index = 0,
  featured = false,
  className,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.06,
      }}
      className={cn("group", className)}
    >
      <Link
        href={`/journal/${article.slug}`}
        className="block focus-visible:outline-none"
      >
        <div
          className={cn(
            "relative overflow-hidden mb-8",
            featured ? "aspect-[16/9]" : "aspect-[4/5]"
          )}
        >
          <div
            aria-hidden
            className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease-out-luxe)] group-hover:scale-105"
            style={{
              background: `linear-gradient(${135 + index * 20}deg, oklch(0.30 0.07 ${60 + index * 10}) 0%, oklch(0.16 0.02 80) 100%)`,
            }}
          />
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id={`art-${article.slug}`}
                width="5"
                height="5"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#art-${article.slug})`} />
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-[var(--color-muted-foreground)]">
            <span className="text-[var(--color-primary)]">{article.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={article.dateISO}>{article.date}</time>
            <span aria-hidden>·</span>
            <span>{article.readTime}</span>
          </div>
          <h3
            className={cn(
              "font-serif text-balance transition-colors group-hover:text-[var(--color-primary)]",
              featured ? "text-4xl lg:text-5xl" : "text-2xl lg:text-3xl"
            )}
          >
            {article.title}
          </h3>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed text-pretty max-w-xl">
            {article.excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[var(--color-primary)] pt-2">
            Lire l&apos;article
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-out-luxe)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
