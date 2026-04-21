---
name: ui-ux-pro-max
description: Expert-level UI/UX design and implementation guidance. Use when the user asks for UI/UX review, redesign, component design, design system creation, accessibility audits, responsive layouts, microinteractions, design tokens, or modern frontend styling (Tailwind, CSS, shadcn/ui, Radix, Framer Motion). Triggers on requests like "améliore l'UI", "design system", "redesign this page", "make it look pro", "accessibility audit", "responsive layout".
---

# UI/UX Pro Max

A professional-grade UI/UX engineering skill. Use it to design, critique, and implement interfaces that feel polished, accessible, fast, and on-brand.

## When to use

Invoke this skill when the task involves:

- Designing or redesigning a UI (page, component, flow, landing, dashboard, form)
- Auditing existing UI for visual, UX, accessibility, or performance problems
- Building or extending a design system (tokens, components, primitives)
- Writing or refactoring frontend code that affects how things look or feel
- Producing copy, hierarchy, spacing, motion, or responsive behavior decisions

If the task is purely backend, data, or config without visual/UX impact, skip this skill.

## Core principles

Follow these in order when a tradeoff appears:

1. **Accessibility first.** WCAG 2.2 AA is the baseline, not a bonus. Keyboard nav, focus states, color contrast (≥ 4.5:1 body, ≥ 3:1 large/UI), semantic HTML, ARIA only when semantics aren't enough.
2. **Clarity over cleverness.** One primary action per screen. Users should never guess what's clickable, what state they're in, or what will happen next.
3. **Consistency beats novelty.** Reuse tokens, spacing scales, component variants. Novel patterns cost users attention — spend that budget sparingly.
4. **Performance is UX.** CLS < 0.1, LCP < 2.5s, INP < 200ms. Skeletons over spinners. Optimistic UI where safe.
5. **Content first.** Design around real copy, real data, real edge cases (empty, loading, error, long text, zero items, 10,000 items).
6. **Motion with purpose.** Motion should explain causality (where did it go, what changed), never decorate. Respect `prefers-reduced-motion`.

## Design tokens (default scale)

Use these as a starting point unless the project already defines its own. Prefer CSS variables or a tokens file.

**Spacing (4px base):** `0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`

**Radius:** `none=0, sm=4, md=8, lg=12, xl=16, 2xl=24, full=9999`

**Typography scale (1.25 ratio):** `xs=12, sm=14, base=16, lg=18, xl=20, 2xl=24, 3xl=30, 4xl=36, 5xl=48, 6xl=60`

**Line height:** tight=1.1 (headings), snug=1.25, normal=1.5 (body), relaxed=1.65 (long-form)

**Font weight:** regular=400, medium=500, semibold=600, bold=700. Avoid 300 on body — readability drops.

**Color roles (semantic, not literal):**
- `background`, `foreground`
- `muted`, `muted-foreground`
- `card`, `card-foreground`
- `primary`, `primary-foreground`
- `secondary`, `accent`
- `destructive`, `success`, `warning`, `info`
- `border`, `input`, `ring`

Always define **light and dark** variants. Never hardcode hex in components.

**Shadows (subtle, layered):**
- `sm`: `0 1px 2px rgb(0 0 0 / 0.05)`
- `md`: `0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.05)`
- `lg`: `0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)`

**Z-index scale:** `base=0, dropdown=1000, sticky=1100, overlay=1200, modal=1300, popover=1400, toast=1500, tooltip=1600`

## Layout & responsive

- Mobile-first. Design the 360px view first, then scale up.
- Breakpoints: `sm=640, md=768, lg=1024, xl=1280, 2xl=1536`.
- Max content width: `65ch` for prose, `1280–1440px` for app shells.
- Use CSS Grid for 2D layout, Flexbox for 1D. Avoid absolute positioning except for overlays.
- Container queries (`@container`) when a component needs to adapt to its parent, not the viewport.
- Touch targets ≥ 44×44px.

## Component checklist

Every interactive component must handle:

- [ ] Default
- [ ] Hover
- [ ] Focus-visible (keyboard)
- [ ] Active/pressed
- [ ] Disabled
- [ ] Loading
- [ ] Error
- [ ] Empty (for lists, tables, search)
- [ ] RTL if the app supports it
- [ ] Dark mode
- [ ] Reduced motion
- [ ] Long content / truncation
- [ ] Narrow viewport (360px)

## Forms

- Label every input visibly. Placeholders are not labels.
- Show validation inline, on blur (not on every keystroke), and summarize on submit.
- Error messages explain *what* and *how to fix*, not just "invalid".
- Group related fields with `<fieldset>`/`<legend>`.
- Autocomplete attributes (`autocomplete="email"`, etc.) on every relevant field.
- Disable submit only while the request is in flight, never to gate validation.
- Preserve user input on error. Never clear a form.

## Accessibility quick audit

Run through this list on any UI change:

1. Tab through the whole flow with keyboard only. Can you complete every task?
2. Every interactive element has a visible focus ring (`:focus-visible`).
3. Contrast checker on every text/background pair.
4. Screen reader: headings form a logical outline (one `h1`, no level skips).
5. Images have `alt`; decorative images have `alt=""`.
6. Icons that convey meaning have an accessible name (`aria-label` or visually-hidden text).
7. Live regions (`aria-live="polite"`) for async updates (toasts, validation).
8. Motion respects `@media (prefers-reduced-motion: reduce)`.
9. Forms are usable at 200% zoom and 400% zoom without horizontal scroll.
10. Color is never the only signal (pair with icon, text, or pattern).

## Microinteractions & motion

- Durations: `fast=120ms, base=200ms, slow=320ms, slower=500ms`.
- Easing: `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for movement.
- Prefer transform/opacity over layout properties (avoid animating width/height/top/left).
- Stagger list items by 30–50ms for entrance animations.
- Framer Motion patterns: `layout` for shared-element transitions, `AnimatePresence` for exits.

## Recommended stack (when starting fresh)

- **Framework:** Next.js (App Router) or Vite + React
- **Styling:** Tailwind CSS v4 + CSS variables for tokens
- **Primitives:** Radix UI or shadcn/ui (accessible, unstyled)
- **Icons:** Lucide
- **Motion:** Framer Motion (`motion/react`)
- **Forms:** React Hook Form + Zod
- **Fonts:** Geist, Inter, or a variable font via `next/font`
- **State:** URL > server > local. Only reach for Zustand/Jotai when truly client-side.

If the project already has a stack, match it — don't introduce a parallel one.

## Workflow when designing

1. **Clarify intent.** Who uses this, what are they trying to do, what's the success state?
2. **Inventory content.** List every piece of data/copy/action before laying anything out.
3. **Sketch hierarchy.** One primary action, supporting info, secondary actions, metadata.
4. **Pick the pattern.** Prefer an existing pattern (list, form, dashboard, wizard) over inventing.
5. **Apply tokens.** Spacing, type, color from the scale — no magic numbers.
6. **Walk every state.** Loading, empty, error, success, partial.
7. **Test on 360px and keyboard-only** before declaring done.
8. **Verify in the browser.** Code that type-checks isn't the same as UI that works. Open it, click it, tab through it.

## Review rubric

When critiquing an existing UI, score each dimension 1–5 and call out the top 3 issues:

- **Hierarchy** — is the primary action obvious within 1 second?
- **Rhythm** — are spacing and type consistent, or arbitrary?
- **Contrast** — does meaningful info pop and quiet info recede?
- **Density** — right amount of info per screen, or crowded/sparse?
- **State coverage** — are loading/empty/error designed, or afterthoughts?
- **Accessibility** — keyboard, contrast, semantics, motion.
- **Responsiveness** — does it hold up at 360px and 1440px?
- **Polish** — alignment, radii consistency, icon weight, shadow depth.

Report findings as: what's working, top 3 issues ranked by impact, and concrete fixes (not vague advice).

## Anti-patterns to flag

- Placeholder-as-label
- Disabled buttons with no explanation
- Error toasts that disappear before the user reads them
- Infinite scroll without a "load more" fallback
- Modals stacked on modals
- Horizontal scroll on mobile (unless it's a carousel, deliberately)
- Hover-only affordances (fails on touch)
- Contrast-failing gray-on-gray
- Icon-only buttons without tooltips or labels
- Forms that lose input on error
- Animations that can't be skipped or reduced
- Custom `<div>` buttons instead of `<button>`

## Deliverables format

When producing a design or redesign, output in this order:

1. **Goal** — one sentence.
2. **Key decisions** — 3–5 bullets on tradeoffs you made.
3. **Implementation** — the code or spec.
4. **States handled** — checklist from the component checklist above.
5. **Follow-ups** — what you'd do next if given more time.
