# The Midnight Calls — Official Website

The official site for **The Midnight Calls**, built with [Astro](https://astro.build) and deployed on Netlify.

## Stack

- **Framework:** Astro v6
- **Deployment:** Netlify
- **Package manager:** pnpm

## Project Structure

```
src/
├── assets/          # Images and static media
├── components/      # Section and UI components
│   ├── Hero.astro
│   ├── AboutSection.astro
│   ├── MusicSection.astro
│   ├── TourSection.astro
│   ├── GallerySection.astro
│   ├── VideosSection.astro
│   ├── PressSection.astro
│   ├── MerchSection.astro
│   ├── ContactSection.astro
│   └── ...
├── content/         # Content collections
├── data/            # Structured site data
├── i18n/            # Internationalization
├── layouts/         # Page layouts
├── lib/             # Utilities
├── pages/           # Routes (index + past-shows)
└── styles/          # Global styles
public/              # Static assets (logo, OG image, posters)
```

## Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Install dependencies                        |
| `pnpm dev`     | Start dev server at `localhost:4321`        |
| `pnpm build`   | Build production site to `./dist/`          |
| `pnpm preview` | Preview production build locally            |

## Deployment

Pushes to `main` deploy automatically to Netlify. Build config lives in [netlify.toml](netlify.toml).
