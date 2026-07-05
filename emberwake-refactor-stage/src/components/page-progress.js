(function () {
  function PageProgress(ctx) {
    const ui = window.FoganchorUI;
    const t = ctx.t;
    const homeLabel = ctx.state.lang === "zh" ? "顶部" : "Top";
    const items = [["#top", homeLabel], ...ctx.navItems];
    const links = items.map(([href, label]) => `
      <a class="page-progress-link" href="${href}" data-progress-target="${href}" aria-label="${ui.escapeHtml(label)}">
        <span class="page-progress-node" aria-hidden="true"></span>
        <span class="page-progress-label">${ui.escapeHtml(label)}</span>
      </a>
    `).join("");

    return `
      <aside class="page-progress" data-page-progress aria-label="${ui.escapeHtml(t.a11y.progressNav)}" style="--page-progress: 0;">
        <div class="page-progress-track" aria-hidden="true">
          <span class="page-progress-fill"></span>
        </div>
        <nav class="page-progress-links">
          ${links}
        </nav>
      </aside>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.PageProgress = PageProgress;
})();
