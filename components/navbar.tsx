"use client";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "./ui/button";
import { Container } from "./ui/container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-[var(--color-border)] py-3"
            : "py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 font-serif text-xl tracking-tight"
            aria-label={site.name}
          >
            <span className="gold-gradient font-medium">AMK</span>
            <span className="text-[var(--color-muted-foreground)] text-sm tracking-[0.3em] uppercase hidden sm:inline">
              Promotion
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-10">
            {site.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[11px] tracking-[0.25em] uppercase transition-colors duration-200",
                    active
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-[var(--color-primary)]"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/contact" size="sm" variant="outline" withArrow>
              Prendre contact
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-[var(--color-foreground)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[var(--color-background)]"
          >
            <div className="flex flex-col h-full pt-24 pb-12 px-6">
              <nav aria-label="Navigation mobile" className="flex flex-col gap-2">
                {site.nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1 + i * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block font-serif text-5xl py-3 border-b border-[var(--color-border)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pt-12 text-sm text-[var(--color-muted-foreground)]">
                <p>{site.email}</p>
                <p className="mt-1">{site.address}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
