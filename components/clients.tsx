"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { clients } from "@/lib/data";

export function Clients({ className }: { className?: string }) {
  const loop = [...clients, ...clients];

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      aria-label="Clients et partenaires"
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--color-background)] to-transparent"
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--color-background)] to-transparent"
      />
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="shrink-0 flex items-center gap-16"
          >
            <span className="font-serif text-2xl lg:text-3xl text-[var(--color-muted-foreground)] tracking-tight">
              {name}
            </span>
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]/60"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
