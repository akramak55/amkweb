import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Racontez-nous votre projet. Nous revenons sous 24 h avec une première lecture et des pistes concrètes.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-56 lg:pb-24">
        <Container>
          <div className="flex flex-col gap-8 max-w-4xl">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
                <span className="h-px w-8 inline-block bg-[var(--color-primary)] align-middle mr-3" />
                Contact
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-[0.95] text-balance">
                Racontez-nous <em className="italic gold-gradient">l&apos;idée</em>.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl leading-relaxed">
                Un lieu, une date, une intuition — ça suffit pour commencer. Nous revenons sous 24 heures avec une première lecture.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 border-t border-[var(--color-border)]">
        <Container>
          <div className="grid gap-16 lg:gap-24 lg:grid-cols-12">
            <aside className="lg:col-span-4 flex flex-col gap-10 lg:sticky lg:top-32 lg:self-start">
              <div className="flex flex-col gap-3">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]">
                  Écrire
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-serif text-2xl hover:text-[var(--color-primary)] transition-colors"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]">
                  Appeler
                </p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="font-serif text-2xl hover:text-[var(--color-primary)] transition-colors"
                >
                  {site.phone}
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]">
                  Studios
                </p>
                <address className="not-italic font-serif text-2xl leading-snug">
                  {site.address}
                </address>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]">
                  Horaires
                </p>
                <p className="text-[var(--color-muted-foreground)]">
                  Lundi – vendredi
                  <br />
                  10 h – 19 h (CET)
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
