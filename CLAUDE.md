# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # dev server at localhost:4321
pnpm build      # production build to ./dist/
pnpm preview    # preview the production build
```

## Architecture

### Content is data-driven

All site content lives in `src/data/*.ts` — not in components. When adding or updating content, edit the relevant data file:

| Task | File |
| :--- | :--- |
| Add/edit a show | `src/data/shows.ts` |
| Add a single/release | `src/data/singles.ts` |
| Add a press quote | `src/data/press.ts` |
| Add a photo | `src/data/photos.ts` + add file to `src/assets/photos/` |
| Add a video | `src/data/videos.ts` |
| Update band members | `src/data/members.ts` |
| Update social links | `src/data/socials.ts` |

### Bilingual requirement (English + Spanish)

The site is fully bilingual. Every user-facing string must have both languages. There are two patterns:

1. **Inline on the data object** — used for content that varies per-item (press quotes, photo alt text, member roles):
   ```ts
   text: { en: 'Hello', es: 'Hola' }
   ```

2. **i18n dictionary** — used for UI labels and static copy. Add keys to both `src/i18n/en.json` and `src/i18n/es.json`, then call `t('your.key')` in components (the `t()` function is bound to the current locale via `useTranslations` in `src/i18n/ui.ts`).

Never add a user-facing string to only one language.

### Routing

- English: no prefix — `/`, `/past-shows`
- Spanish: `/es/` prefix — `/es/`, `/es/past-shows`
- Config: `prefixDefaultLocale: false` in `astro.config.mjs`
- Adding a new page requires two files: `src/pages/mypage.astro` **and** `src/pages/es/mypage.astro`
- `Layout.astro` auto-generates `hreflang` alternates from the current path — no manual linking needed

### Image placement

- `src/assets/` — images processed by Astro/Sharp at build time (live photos, cover art). Reference via `import.meta.glob()` or static import.
- `public/` — served as-is, no processing (logo, OG image, show posters). Reference with a root-relative path like `/posters/my-poster.jpg`.

Show posters go in `public/posters/` and are referenced by path string in `shows.ts` via the `poster` field.

### Page structure

`src/pages/index.astro` is a single-page site assembled from section components in `src/components/`. The `Layout.astro` wrapper handles all SEO meta tags, Open Graph, JSON-LD `MusicGroup` structured data, and hreflang — pass `title` and `description` props to override defaults.
