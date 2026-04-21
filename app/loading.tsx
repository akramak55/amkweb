import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <section className="min-h-[80svh] flex items-center pt-40 pb-24">
      <Container>
        <div
          className="flex items-center gap-4 text-[var(--color-muted-foreground)]"
          role="status"
          aria-live="polite"
        >
          <span className="inline-block h-px w-12 bg-[var(--color-primary)] animate-pulse" aria-hidden />
          <span className="text-[11px] tracking-[0.3em] uppercase">Chargement</span>
        </div>
      </Container>
    </section>
  );
}
