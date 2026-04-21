"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <div className="grid gap-0 md:grid-cols-2 border-t border-l border-[var(--color-border)]">
      {testimonials.map((t, i) => (
        <motion.figure
          key={t.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: (i % 2) * 0.08,
          }}
          className="group relative flex flex-col gap-8 p-10 lg:p-14 border-r border-b border-[var(--color-border)] bg-[var(--color-surface)]/20 hover:bg-[var(--color-surface)]/50 transition-colors duration-500"
        >
          <span
            aria-hidden
            className="font-serif text-6xl leading-none text-[var(--color-primary)] opacity-60"
          >
            &ldquo;
          </span>
          <blockquote className="font-serif text-xl lg:text-2xl leading-snug text-pretty">
            {t.quote}
          </blockquote>
          <figcaption className="flex items-center gap-4 mt-auto pt-4">
            <span
              aria-hidden
              className="h-px w-8 bg-[var(--color-primary)]"
            />
            <div className="flex flex-col gap-0.5">
              <cite className="not-italic font-serif text-base">{t.name}</cite>
              <span className="text-sm text-[var(--color-muted-foreground)]">
                {t.role}
              </span>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
