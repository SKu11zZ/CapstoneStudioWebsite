(function () {
  function motes() {
    return Array.from({ length: 18 }, (_, index) => {
      const size = 2 + (index % 4);
      const x = ((index * 6.7 + 3) % 100).toFixed(1);
      const y = ((index * 11) % 30).toFixed(1);
      const duration = (7 + (index % 5) * 1.7).toFixed(1);
      const delay = (index * 0.9).toFixed(1);
      return `<span class="particle-dot" style="--x:${x}%;--y:${y}%;--s:${size}px;--d:${duration}s;--delay:${delay}s"></span>`;
    }).join("");
  }

  function Hero(ctx) {
    const ui = window.FoganchorUI;
    const h = ctx.t.hero;
    const ledgerItems = (h.ledgerItems || []).map((item) => `<li>${ui.escapeHtml(item)}</li>`).join("");
    const stats = (h.stats || []).map((item) => `
      <div class="hero-stat">
        <strong>${ui.escapeHtml(item.value)}</strong>
        <span>${ui.escapeHtml(item.label)}</span>
      </div>
    `).join("");
    return `
      <section class="section hero" id="top" data-screen-label="Hero">
        <div class="particle-field" aria-hidden="true">${motes()}</div>
        <div class="hero-stage">
          <div class="hero-content">
            <p class="eyebrow">${ui.escapeHtml(h.eyebrow)}</p>
            <h1 class="display-title">${ui.escapeHtml(h.title)}</h1>
            <p class="hero-subtitle">${ui.escapeHtml(h.subtitle)}</p>
            <a class="featured-pill" href="#featured">
              <span class="label">${ui.escapeHtml(h.featuredTag)}</span>
              <span class="name">${ui.escapeHtml(h.featuredName)}</span>
              ${ui.icon("return", "pill-icon")}
            </a>
            <p class="fantasy-line">${ui.escapeHtml(h.fantasy)}</p>
            <div class="cluster hero-actions">
              ${ui.button({ href: ctx.links.steamUrl, label: h.ctaWishlist, variant: "primary", icon: "link" })}
              ${ui.button({ href: "#games", label: h.ctaGames, variant: "secondary", icon: "explore" })}
              ${ui.button({ href: ctx.links.discordUrl, label: h.ctaDiscord, variant: "text", icon: "message" })}
            </div>
            <div class="hero-stats" aria-label="${ui.escapeHtml(h.ledgerTitle)}">${stats}</div>
          </div>
          <aside class="hero-system" aria-label="${ui.escapeHtml(h.ledgerTitle)}">
            <span class="system-label">${ui.escapeHtml(h.ledgerTitle)}</span>
            <ol>${ledgerItems}</ol>
          </aside>
        </div>
        <a class="scroll-cue" href="#featured">
          <span>${ui.escapeHtml(h.scroll)}</span>
          ${ui.icon("return", "arrow")}
        </a>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.Hero = Hero;
})();
