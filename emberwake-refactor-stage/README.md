# FogAnchor Studio Static Refactor

This version replaces the original `.dc.html` runtime with a dependency-free static implementation.

- No external CDN or package install is required.
- `index.html` loads local CSS and component scripts only.
- Chinese copy is stored as clean UTF-8 in `src/data/site-data.js`.
- Fonts and icons are sourced from `G:\CapstoneWebsite\StudioPages\Public Resources` and copied into local `assets/fonts` and `assets/icons` for stable static serving.
- Visual structure evolves the provided studio screenshots into the new FogAnchor identity: industrial seal lockup, cinematic letterbox atmosphere, warm beacon accent, fixed navigation, layered hero glow, archive-style media frames, roadmap cards, game cards, production notes, community CTA, and partner section.
- The latest pass was informed by official game and film studio sites: sparse independent studio archives, film slate/newsletter patterns, production/news hubs, and cinematic release-card layouts.

## Structure

```text
index.html
src/
  data/site-data.js
  components/
    page-progress.js
    slogan-section.js
    roadmap-section.js
  styles/
assets/
  fonts/
  icons/
qa/
```

## Run

Open `index.html` directly in a browser, or serve the folder with any static file server.

Current local preview during QA: `http://127.0.0.1:4177/`.
