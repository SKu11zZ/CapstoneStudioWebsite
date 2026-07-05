(function () {
  const shortLabels = {
    zh: {
      "#top": "顶部",
      "#featured": "主推",
      "#roadmap": "路线",
      "#games": "作品",
      "#studio": "宣言",
      "#media": "档案",
      "#news": "札记",
      "#partners": "合作"
    },
    en: {
      "#top": "TP",
      "#featured": "FE",
      "#roadmap": "RD",
      "#games": "WK",
      "#studio": "MF",
      "#media": "AR",
      "#news": "NT",
      "#partners": "PT"
    }
  };

  function PageProgress(ctx) {
    const ui = window.FoganchorUI;
    const t = ctx.t;
    const lang = ctx.state.lang === "zh" ? "zh" : "en";
    const homeLabel = lang === "zh" ? "顶部" : "Top";
    const items = [["#top", homeLabel], ...ctx.navItems];
    const links = items.map(([href, label]) => {
      const shortLabel = shortLabels[lang][href] || String(label).slice(0, 2);

      return `
        <a class="page-progress-link" href="${href}" data-progress-target="${href}" aria-label="${ui.escapeHtml(label)}">
          <span class="page-progress-node" aria-hidden="true"></span>
          <span class="page-progress-label">${ui.escapeHtml(shortLabel)}</span>
        </a>
      `;
    }).join("");

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
