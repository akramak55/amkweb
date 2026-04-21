"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="flex flex-col border-t border-[var(--color-border)]">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <li key={item.q} className="border-b border-[var(--color-border)]">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-8 py-8 text-left group focus-visible:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl text-balance transition-colors group-hover:text-[var(--color-primary)]">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 inline-flex h-10 w-10 items-center justify-center text-[var(--color-primary)] mt-1"
                aria-hidden
              >
                <Plus className="h-5 w-5" strokeWidth={1.5} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pr-16 text-[var(--color-muted-foreground)] leading-relaxed text-lg text-pretty max-w-3xl">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
