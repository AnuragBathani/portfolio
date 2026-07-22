# Anurag Bathani — Portfolio

A calm, editorial portfolio built with [Astro](https://astro.build/).
Static output, near-zero client JS, deployed on Vercel.

## Stack

- **Astro 5** (static `output: 'static'` — no SSR adapter needed)
- **Tailwind 3** via `@astrojs/tailwind`
- **Content Collections** for the blog (`src/content/blog/*.md`), rendered with
  built-in markdown + Shiki syntax highlighting
- **@astrojs/rss** → `/feed.xml`, **@astrojs/sitemap** → `/sitemap-index.xml`
- Fonts self-hosted via `@fontsource` (Inter, Playfair Display, JetBrains Mono)
- Interactivity is plain `<script>` — no React / framer-motion / GSAP / Lenis

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # astro check (types + templates)
npm run build      # → dist/
npm run preview    # serve the built site
```

## Content

All copy lives in `src/data/content.ts` (profile, projects, skills,
achievements, etc.). Blog posts are markdown files in `src/content/blog/`
with `title / date / category / excerpt` frontmatter — the filename is the URL
slug. Add a post by dropping in a new `.md` file; the index, detail pages, and
RSS feed pick it up automatically.

## Design notes

- One restrained **signal-amber** accent (`#d9a23f`), used only on active nav,
  link-hover underlines, eyebrow ticks, and the focus ring. CVE severity stays
  semantic red.
- Removed the "AI cyber-template" effects (WebGL shader, matrix rain, glitch
  text, terminal typing, scanlines, sweep/flicker/glow).
- Scroll reveals and the page fade are **progressive enhancement** — gated on
  `html.js`, so content is fully visible without JavaScript.
