"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire to real endpoint (Resend, Formspree, API route, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-6 p-10 border border-[var(--color-primary)]/40 bg-[var(--color-surface)]/40"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
          <Check className="h-5 w-5" strokeWidth={2} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-3xl">Message reçu.</h3>
          <p className="text-[var(--color-muted-foreground)]">
            Nous revenons vers vous sous 24 h avec une première lecture de votre projet.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8" noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Prénom & nom" name="name" type="text" autoComplete="name" required />
        <Field label="Adresse e-mail" name="email" type="email" autoComplete="email" required />
        <Field label="Téléphone" name="phone" type="tel" autoComplete="tel" />
        <Field
          label="Type d'événement"
          name="type"
          type="text"
          placeholder="Mariage, lancement, soirée privée…"
        />
      </div>

      <Field
        label="Date envisagée"
        name="date"
        type="text"
        placeholder="Mois / saison / année"
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]"
        >
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-[var(--color-border-strong)] py-3 text-lg font-serif text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)]/40 focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none"
          placeholder="Parlez-nous de votre vision, du lieu, de l'ambiance souhaitée…"
        />
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          size="lg"
          withArrow
          disabled={status === "sending"}
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
};

function Field({ label, name, type, required, autoComplete, placeholder }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-muted-foreground)]"
      >
        {label} {required && <span className="text-[var(--color-primary)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[var(--color-border-strong)] py-3 text-lg font-serif text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)]/40 focus:border-[var(--color-primary)] focus:outline-none transition-colors"
      />
    </div>
  );
}
