"use client";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[80svh] flex items-center pt-40 pb-24">
      <Container>
        <div className="flex flex-col gap-8 max-w-2xl">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-primary)]">
            Erreur inattendue
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-balance">
            Quelque chose <em className="italic gold-gradient">a glissé</em>.
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            Nous sommes désolés pour la gêne. Vous pouvez réessayer, ou revenir à l&apos;accueil.
          </p>
          {error.digest && (
            <p className="text-xs text-[var(--color-muted-foreground)] font-mono">
              Réf. {error.digest}
            </p>
          )}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button onClick={reset} size="lg" withArrow>
              Réessayer
            </Button>
            <ButtonLink href="/" size="lg" variant="ghost">
              Retour à l&apos;accueil
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
