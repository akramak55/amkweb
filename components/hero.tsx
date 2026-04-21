"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { ButtonLink } from "./ui/button";
import { Container } from "./ui/container";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-20"
      aria-label="Introduction"
    >
      <motion.div
        style={{ scale }}
        aria-hidden
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.24_0.04_75)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.22_0.06_65/0.6)_0%,transparent_55%)]" />
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="white" strokeWidth="0.05" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </motion.div>

      <Container className="relative">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col gap-10 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]"
          >
            <span className="h-px w-10 bg-[var(--color-primary)]" aria-hidden />
            Agence événementielle — Depuis 2010
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-[-0.02em] text-balance"
          >
            L&apos;art de <span className="italic gold-gradient">l&apos;événement</span>,
            <br />
            la précision <br className="hidden sm:block" />
            <span className="text-[var(--color-muted-foreground)]">d&apos;une signature.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="text-lg sm:text-xl text-[var(--color-muted-foreground)] max-w-xl text-pretty leading-relaxed"
          >
            Nous concevons des expériences sur-mesure pour les marques, maisons et institutions qui placent l&apos;émotion au cœur de leur identité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <ButtonLink href="/services" size="lg" withArrow>
              Découvrir nos services
            </ButtonLink>
            <ButtonLink href="/gallery" size="lg" variant="ghost">
              Voir nos réalisations
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]"
        >
          <span>Faire défiler</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
        </motion.div>
      </Container>
    </section>
  );
}
