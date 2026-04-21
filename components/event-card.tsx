"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  category: string;
  location: string;
  year: string;
  gradient?: string;
  href?: string;
  index?: number;
  className?: string;
};

const defaultGradients = [
  "linear-gradient(135deg, oklch(0.30 0.08 70) 0%, oklch(0.18 0.02 80) 100%)",
  "linear-gradient(135deg, oklch(0.28 0.06 55) 0%, oklch(0.16 0.01 80) 100%)",
  "linear-gradient(135deg, oklch(0.32 0.07 95) 0%, oklch(0.17 0.01 80) 100%)",
  "linear-gradient(135deg, oklch(0.26 0.05 40) 0%, oklch(0.15 0.01 80) 100%)",
];

export function EventCard({
  title,
  category,
  location,
  year,
  gradient,
  href,
  index = 0,
  className,
}: Props) {
  const bg = gradient ?? defaultGradients[index % defaultGradients.length];

  const content = (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className={cn("group relative block overflow-hidden", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease-out-luxe)] group-hover:scale-105"
          style={{ background: bg }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />

        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id={`event-pattern-${index}`}
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#event-pattern-${index})`} />
        </svg>

        <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/80">
            <span className="h-px w-6 bg-white/60" aria-hidden />
            {category}
          </span>
          <span className="font-serif text-sm text-white/70 tabular-nums">{year}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col gap-2">
          <h3 className="font-serif text-2xl lg:text-3xl text-white text-balance leading-tight">
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm text-white/80">
            <span>{location}</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-out-luxe)] group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.25}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );

  if (href) {
    return (
      <Link href={href} className="block focus-visible:outline-none">
        {content}
      </Link>
    );
  }
  return content;
}
