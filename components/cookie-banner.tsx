"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "amk_cookie_choice";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(STORAGE_KEY);
      if (!choice) {
        const t = window.setTimeout(() => setVisible(true), 800);
        return () => window.clearTimeout(t);
      }
    } catch {
      // localStorage unavailable — fail silently
    }
  }, []);

  const persist = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Consentement aux cookies"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[80] max-w-xl mx-auto lg:mx-0 lg:left-6 lg:right-auto"
        >
          <div className="glass border border-[var(--color-border-strong)] p-6 lg:p-8 flex flex-col gap-5 shadow-[var(--shadow-lg)]">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
              Confidentialité
            </p>
            <p className="text-[var(--color-foreground)]/90 leading-relaxed text-pretty">
              Ce site utilise uniquement des cookies strictement nécessaires à
              son fonctionnement. Aucun traceur tiers, aucune mesure comportementale.{" "}
              <Link
                href="/privacy"
                className="underline decoration-[var(--color-primary)]/60 underline-offset-4 hover:text-[var(--color-primary)] transition-colors"
              >
                En savoir plus
              </Link>
              .
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => persist("accepted")}
                className="inline-flex h-10 items-center justify-center px-5 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
              >
                J&apos;accepte
              </button>
              <button
                type="button"
                onClick={() => persist("declined")}
                className="inline-flex h-10 items-center justify-center px-5 border border-[var(--color-border-strong)] text-[var(--color-foreground)] text-[11px] tracking-[0.25em] uppercase hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
              >
                Refuser
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
