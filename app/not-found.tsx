import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center pt-40 pb-24">
      <Container>
        <div className="flex flex-col gap-8 max-w-2xl">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
            Erreur 404
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-balance">
            La page que vous cherchez <em className="italic gold-gradient">s&apos;est absentée</em>.
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            Rejoignons l&apos;accueil et repartons sur de bonnes bases.
          </p>
          <div>
            <ButtonLink href="/" size="lg" withArrow>
              Retour à l&apos;accueil
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
