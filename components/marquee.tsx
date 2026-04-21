"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  speed?: number;
  className?: string;
};

export function Marquee({ items, speed = 40, className }: Props) {
  const loop = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((item, i) => (
          <div key={i} className="shrink-0 flex items-center gap-16">
            {item}
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
