# Foganchor Studio Static Refactor

This version replaces the original `.dc.html` runtime with a dependency-free static implementation.

- No external CDN or package install is required.
- `index.html` loads local CSS and component scripts only.
- Chinese copy is stored as clean UTF-8 in `src/data/site-data.js`.
- Fonts and icons are sourced from `G:\CapstoneWebsite\StudioPages\Public Resources` and copied into local `assets/fonts` and `assets/icons` for stable static serving.
- Visual structure evolves the provided studio screenshots into the new Foganchor identity: fog/anchor language, warm beacon accent, fixed navigation, layered hero glow, archive-style media frames, game cards, production notes, community CTA, and partner section.

## Structure

```text
index.html
src/
  data/site-data.js
  components/
  styles/
assets/
  fonts/
  icons/
```

## Run

Open `index.html` directly in a browser, or serve the folder with any static file server.
