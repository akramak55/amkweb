"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate" | "whileInView" | "transition">;

export function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...props
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
