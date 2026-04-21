"use client";

import { cn } from "@/lib/utils";
import type { IconKey } from "@/lib/data";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Camera,
  Music2,
  Sparkles,
  Utensils,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const icons: Record<IconKey, LucideIcon> = {
  sparkles: Sparkles,
  music: Music2,
  camera: Camera,
  utensils: Utensils,
  wand: Wand2,
  building: Building2,
};

type Props = {
  icon: IconKey;
  title: string;
  description: string;
  href?: string;
  index?: number;
  className?: string;
};

export function ServiceCard({
  icon,
  title,
  description,
  href,
  index = 0,
  className,
}: Props) {
  const Icon = icons[icon];

  const content = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className={cn(
        "group relative flex flex-col gap-6 p-8 lg:p-10 border border-[var(--color-border)] bg-[var(--color-surface)]/40 transition-all duration-500 h-full",
        "hover:bg-[var(--color-surface)]/80 hover:border-[var(--color-primary)]/60",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"
      />
      <div className="flex items-center justify-between">
        <div className="inline-flex h-14 w-14 items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-colors">
          <Icon className="h-5 w-5" strokeWidth={1.25} />
        </div>
        <span className="font-serif text-sm text-[var(--color-muted-foreground)] tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif text-2xl lg:text-3xl text-balance">{title}</h3>
        <p className="text-[var(--color-muted-foreground)] leading-relaxed text-pretty">
          {description}
        </p>
      </div>

      {href && (
        <div className="mt-auto pt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[var(--color-primary)]">
          En savoir plus
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-out-luxe)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </div>
      )}
    </motion.article>
  );

  if (href) {
    return (
      <Link href={href} className="block focus-visible:outline-none h-full">
        {content}
      </Link>
    );
  }
  return content;
}
