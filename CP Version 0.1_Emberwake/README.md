# Emberwake Studio Website

Emberwake Studio official static game studio site, rebuilt from the original `.dc.html` content direction as a new interactive studio dossier rather than a visual copy.

## What This Refactor Fixes

- Removes the old `support.js` runtime.
- Removes external CDN runtime dependencies.
- Removes dynamic code execution, runtime HTML template compilation, and unsafe HTML injection patterns.
- Rebuilds the site as Vite + React + TypeScript.
- Splits copy, game data, links, components, and theme tokens into maintainable files.
- Adds a CSP-friendly Netlify `_headers` file.
- Upgrades the visual language into a dossier-like game studio site with project files, developer ID cards, a visual archive, and a comms console.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run serve
```

## Content Guide

- General bilingual copy and navigation: `src/data/content.ts`
- Games: `src/data/games.ts`
- Team members: `src/data/team.ts`
- Visual/media archive: `src/data/media.ts`
- Development roadmap: `src/data/timeline.ts`
- External and placeholder links: `src/data/links.ts`
- Theme color tokens: `src/styles/tokens.css`
- Media assets: `public/media`
- Self-hosted fonts from Public Resources: `public/fonts`
- Self-hosted icons from Public Resources: `public/icons`

To add real trailer stills, screenshots, or cover art, place files in `public/media`, reference them from `src/data/media.ts`, and extend the media components if needed. The current placeholders are CSS-built so the default production build does not fetch remote images.

## Subscription Form

The email form performs client-side validation only. It does not send email to any third party and does not store the address in `localStorage`.

A future backend can be connected through `VITE_SUBSCRIBE_ENDPOINT`, preferably a same-origin `/api/subscribe` route. If that endpoint or any analytics, video iframe, or third-party service is added later, update `public/_headers` explicitly.

## Security Notes

The production target is designed to run without `unsafe-inline` or `unsafe-eval`:

```txt
default-src 'self';
script-src 'self';
style-src 'self';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
object-src 'none';
base-uri 'self';
frame-ancestors 'none';
form-action 'self';
```

Vite's dev server is not identical to the final production CSP environment, so use `npm run build` and `npm run preview` for deployment checks.

## Design Notes

The new version deliberately leaves the original visual frame behind. The concept is an interactive game studio dossier: the hero acts as a public access file, the featured game reads like a confidential project brief, games are project records, team members are developer ID cards, visuals are an asset archive, and contact is a comms console.

The five required core sections are:

- Featured Game
- Games
- Team
- Visuals
- Contact

Additional support sections include the studio manifesto and Project Lantern development route. Placeholder visuals use CSS-built plates with crop marks, scan texture, metadata labels, and controlled warm/cool contrast so the site does not depend on external images.

Fonts and icons are selected from `G:\CapstoneWebsite\StudioPages\Public Resources` and copied into `public/fonts` and `public/icons` so production does not request Google Fonts, icon CDNs, or remote image assets.
