(function () {
  function FeaturedGame(ctx) {
    const ui = window.FoganchorUI;
    const f = ctx.t.featured;
    const h = ctx.t.hero;
    const facts = (f.fileFacts || []).map(([label, value]) => `
      <div class="case-fact">
        <dt>${ui.escapeHtml(label)}</dt>
        <dd>${ui.escapeHtml(value)}</dd>
      </div>
    `).join("");
    const highlights = f.highlights.map((item, index) => `
      <article class="highlight-item">
        <span class="highlight-num">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 class="highlight-title">${ui.escapeHtml(item.title)}</h3>
          <p class="highlight-desc">${ui.escapeHtml(item.desc)}</p>
        </div>
      </article>
    `).join("");

    return `
      <section class="section" id="featured" data-screen-label="Featured Game">
        <div class="container grid-2">
          <div class="stack featured-copy">
            <p class="eyebrow">${ui.escapeHtml(f.eyebrow)}</p>
            <h2 class="section-title">${ui.escapeHtml(f.title)}</h2>
            <p class="meta-line">${ui.escapeHtml(f.meta)}</p>
            <dl class="case-file">${facts}</dl>
            <p class="fantasy-line">${ui.escapeHtml(f.fantasy)}</p>
            <p class="body-copy">${ui.escapeHtml(f.body)}</p>
            <div class="highlight-list">${highlights}</div>
            <div class="cluster">
              ${ui.button({ href: ctx.links.steamUrl, label: h.ctaWishlist, variant: "primary", icon: "link" })}
              ${ui.button({ href: "#media", label: f.ctaTrailer, variant: "secondary", icon: "play" })}
            </div>
          </div>
          <div class="stack media-stack">
            ${ui.placeholder(f.trailerLabel, "media-large", { video: true })}
            ${ui.placeholder(f.shotLabel, "media-strip")}
          </div>
        </div>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.FeaturedGame = FeaturedGame;
})();
