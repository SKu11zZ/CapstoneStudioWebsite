(function () {
  function NewsSection(ctx) {
    const ui = window.FoganchorUI;
    const n = ctx.t.news;
    const cards = n.items.map((item) => `
      <a class="news-card" href="#">
        <div class="news-meta">
          <span class="news-date">${ui.escapeHtml(item.date)}</span>
          <span class="news-tag">${ui.escapeHtml(item.tag)}</span>
        </div>
        <h3 class="news-title">${ui.escapeHtml(item.title)}</h3>
        <p class="news-excerpt">${ui.escapeHtml(item.excerpt)}</p>
        <span class="read-more">${ui.escapeHtml(n.read)} ${ui.icon("return", "inline-icon")}</span>
      </a>
    `).join("");

    return `
      <section class="section" id="news" data-screen-label="News">
        <div class="container">
          <div class="news-heading-row">
            ${ui.sectionHeader({ eyebrow: n.eyebrow, title: n.title })}
            <a class="text-link" href="#">${ui.escapeHtml(n.all)} ${ui.icon("return", "inline-icon")}</a>
          </div>
          <div class="news-grid">${cards}</div>
        </div>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.NewsSection = NewsSection;
})();
