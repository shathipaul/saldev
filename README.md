# SalDev — OutboundOS marketing site

Next.js 16 (App Router, Turbopack), React 19, TypeScript and Tailwind CSS v4.
The site is a port of the original single-file landing page
(`SalDev-website-outboundos-tailwind.html`) into components.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the public
origin (no trailing slash). It drives the canonical URL, Open Graph URLs,
`robots.txt` and `sitemap.xml`. On Vercel the production domain is used as a
fallback; locally it falls back to `http://localhost:3000`.

## Where things live

| Path | What |
| --- | --- |
| `src/app/layout.tsx` | Root layout: fonts (`next/font`), site-wide metadata, JSON-LD (Organization, WebSite) |
| `src/app/(main)/` | Navbar + footer layout, the home page, `/about`, `/how-it-works`, `/pricing`, `/services`, `/contact`, `/privacy` and `/terms` (section composition, page metadata, JSON-LD) |
| `src/app/globals.css` | Tailwind v4 theme tokens, custom variants/utilities, component CSS |
| `src/app/robots.ts`, `sitemap.ts` | Generated `robots.txt` and `sitemap.xml` |
| `src/app/icon.svg`, `apple-icon.tsx`, `opengraph-image.tsx` | Favicon, Apple touch icon and the generated Open Graph image |
| `src/components/home/` | One component per section of the home page |
| `src/components/about/`, `src/components/how-it-works/`, `src/components/pricing/`, `src/components/services/`, `src/components/contact/` | Page-specific sections of `/about`, `/how-it-works`, `/pricing`, `/services` and `/contact` (the contact form is a client component that opens a prefilled mailto) |
| `src/components/legal/` | Legal pages: the shared date line, jump links and document column (`LegalArticle`, styled by the `.legal` rules in `globals.css`) plus the privacy policy and terms text |
| `src/components/shared/` | Navbar, footer, brand mark, icons, section header, page hero, timeline, dark list, scroll reveal |
| `src/data/` | Copy and content tables (logos, FAQ, pricing, steps, proof, footer links) |
| `public/logos/` | Client logos extracted from the original page |

Interactive parts (sticky nav, mobile menu, statement/exhibit switcher, word
marquee, pricing tags, FAQ accordion, scroll reveals) are client components;
everything else renders on the server.
