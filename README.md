# Extrudia — website

Neobrutalist Next.js site for Extrudia, a rapid prototyping studio in Sahibabad, Ghaziabad. App Router, Tailwind v4, no design-system dependencies — the look is built from CSS variables and three Google Fonts.

```
app/            App Router pages (home, services, gallery, about, contact, privacy, terms, api/newsletter)
components/    Reusable UI: Nav, Footer, NewsletterForm, ContactForm, ImagePlaceholder…
lib/data.ts    Services, process, and project photo slots
lib/config.ts  Shared phone placeholder and generated phone/WhatsApp links
app/globals.css Design tokens, brut-* component classes, background patterns
```

## Quick start

```bash
npm install
cp .env.local.example .env.local   # then fill in the keys (see below)
npm run dev
```

Open http://localhost:3000.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

| Key                          | Where to get it                                                  | Used for                       |
| ---------------------------- | ---------------------------------------------------------------- | ------------------------------ |
| `NEXT_PUBLIC_FORMSPREE_ID`   | Create a form at [formspree.io](https://formspree.io) → form ID  | Contact form on `/contact`     |
| `BREVO_API_KEY`              | Brevo dashboard → *SMTP & API* → *API keys*                     | Newsletter API route           |
| `BREVO_LIST_ID`              | Brevo *Contacts* → *Lists* → numeric ID                          | Which Brevo list to add to     |

The Brevo key is server-only (no `NEXT_PUBLIC_` prefix) — it lives in `app/api/newsletter/route.ts` and never reaches the browser.

## Replacing placeholders

- **Gallery** — add images under `public/gallery/`, then set `src` and descriptive `alt` values in the `projects` array in `lib/data.ts`.
- **Phone and WhatsApp** — replace the `TODO` value in `lib/config.ts` with the business number in international format.
- **Laser limits** — confirm work area and maximum material thickness where marked TODO.
- **Build volume** — confirm the printer build volume where marked TODO before publishing.
- **Legal pages and founder story** — complete the visible TODOs before publishing.

## Design system

| Token         | Value      | Used for                          |
| ------------- | ---------- | --------------------------------- |
| `--color-canvas` | `#f1ebda` | Page background (warm paper)     |
| `--color-paper`  | `#fffaee` | Cards (lighter cream)             |
| `--color-ink`    | `#0a0a0a` | Text, borders, hard shadows       |
| `--color-yellow` | `#ffd60a` | Primary accent (CTAs)             |
| `--color-orange` | `#ff5722` | Secondary accent (alerts, hover)  |
| `--color-mint`   | `#c8f3b8` | Tertiary accent                   |
| `--color-blue`   | `#5b7cfa` | Highlight                         |

Component classes live in `app/globals.css` under `@layer components`:
`.brut-card`, `.brut-btn`, `.brut-tag`, `.brut-input` — plus modifiers like `.brut-btn--ghost`, `.brut-btn--dark`, `.brut-btn--orange`.

## Deploying to Vercel

```bash
npm i -g vercel        # if not already
vercel                 # links the project
vercel env add BREVO_API_KEY production
vercel env add BREVO_LIST_ID production
vercel env add NEXT_PUBLIC_FORMSPREE_ID production
vercel --prod
```

## Stack

- Next.js 15+ App Router
- React 19
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- `next/font/google` for Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono
- Formspree (contact) + Brevo (newsletter) — no other third-party services
