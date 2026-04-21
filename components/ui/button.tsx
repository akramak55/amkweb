"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { forwardRef, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide uppercase text-xs transition-colors duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-accent)]",
  ghost:
    "text-[var(--color-foreground)] hover:text-[var(--color-primary)]",
  outline:
    "border border-[var(--color-border-strong)] text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[11px]",
  md: "h-12 px-6 text-xs",
  lg: "h-14 px-8 text-sm",
};

type ButtonProps = BaseProps & Omit<HTMLMotionProps<"button">, "children">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", withArrow, className, children, ...props },
    ref
  ) {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        <span>{children}</span>
        {withArrow && (
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-out-luxe)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    );
  }
);

type ButtonLinkProps = BaseProps & {
  href: string;
  external?: boolean;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  href,
  external,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-out-luxe)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
