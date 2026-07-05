(function () {
  function MediaSection(ctx) {
    const ui = window.FoganchorUI;
    const m = ctx.t.media;
    const tabs = ["all", "featured", "dev", "released"].map((key) => `
      <button type="button" data-filter="${key}" aria-pressed="${ctx.state.mediaFilter === key}">
        ${ui.escapeHtml(m.tabs[key])}
      </button>
    `).join("");
    const items = ctx.mediaItems.map((item) => `
      <article class="media-item">
        ${ui.placeholder(item.label, "media-frame", { video: item.isVideo })}
        <span class="media-game">${ui.escapeHtml(item.game)}</span>
      </article>
    `).join("");

    return `
      <section class="section" id="media" data-screen-label="Media">
        <div class="container">
          ${ui.sectionHeader({ eyebrow: m.eyebrow, title: m.title })}
          <div class="filter-tabs" role="group" aria-label="${ui.escapeHtml(ctx.t.a11y.mediaFilter)}">${tabs}</div>
          <div class="media-grid">${items}</div>
        </div>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.MediaSection = MediaSection;
})();
