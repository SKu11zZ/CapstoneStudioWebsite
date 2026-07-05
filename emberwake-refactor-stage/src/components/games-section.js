(function () {
  function GameCard(game) {
    const ui = window.FoganchorUI;
    const variant = game.statusKey === "featured" ? "primary" : "secondary";
    const iconByStatus = {
      featured: "link",
      dev: "developer",
      released: "laptop-check",
      proto: "build"
    };
    return `
      <article class="game-card">
        <div class="placeholder game-cover" style="--cover-tint:${ui.coverTint(game.id)}">
          <span>${ui.escapeHtml(game.coverLabel)}</span>
        </div>
        <div class="game-body">
          <div class="badge-row">
            <span class="badge ${ui.statusClass(game.statusKey)}">${ui.escapeHtml(game.status)}</span>
            <span class="platform">${ui.escapeHtml(game.platforms)}</span>
          </div>
          <h3 class="game-title">${ui.escapeHtml(game.title)}</h3>
          <p class="game-genre">${ui.escapeHtml(game.genre)}</p>
          <p class="game-line">${ui.escapeHtml(game.line)}</p>
          ${ui.button({ href: game.ctaHref, label: game.cta, variant, icon: iconByStatus[game.statusKey] || "link" })}
        </div>
      </article>
    `;
  }

  function GamesSection(ctx) {
    const ui = window.FoganchorUI;
    const g = ctx.t.games;
    return `
      <section class="section" id="games" data-screen-label="Games">
        <div class="container">
          ${ui.sectionHeader({ eyebrow: g.eyebrow, title: g.title, subtitle: g.subtitle, wide: true })}
          <div class="games-grid">
            ${ctx.games.map(GameCard).join("")}
          </div>
        </div>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.GamesSection = GamesSection;
})();
