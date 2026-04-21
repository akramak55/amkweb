import { site } from "@/lib/site";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Container } from "./ui/container";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--color-border)] pt-24 pb-12 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-40"
      />

      <Container>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6 flex flex-col gap-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
              Créons ensemble
            </p>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-balance leading-[0.95]">
              Un projet,
              <br />
              <span className="gold-gradient">une signature.</span>
            </h2>
            <p className="text-[var(--color-muted-foreground)] max-w-md text-pretty">
              Parlez-nous de votre événement. Nous vous répondons sous 24 h avec une première lecture et des pistes concrètes.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="font-serif text-2xl">{site.email}</span>
              <span
                aria-hidden
                className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12"
              />
            </Link>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]">
              Coordonnées
            </p>
            <address className="not-italic text-[var(--color-foreground)] flex flex-col gap-2">
              <span>{site.address}</span>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {site.phone}
              </a>
            </address>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--color-muted-foreground)]">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal" className="hover:text-[var(--color-foreground)] transition-colors">
              Mentions légales
            </Link>
            <Link href="/privacy" className="hover:text-[var(--color-foreground)] transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-24 left-1/2 -translate-x-1/2 font-serif text-[22vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-border-strong)] to-transparent opacity-40"
      >
        AMK
      </div>
    </footer>
  );
}
