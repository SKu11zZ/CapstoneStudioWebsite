(function () {
  function RoadmapSection(ctx) {
    const ui = window.FoganchorUI;
    const r = ctx.t.roadmap;
    const items = r.items.map((item) => `
      <article class="roadmap-item">
        <div class="roadmap-head">
          <span class="roadmap-phase">${ui.escapeHtml(item.phase)}</span>
          <span class="roadmap-status">${ui.escapeHtml(item.status)}</span>
        </div>
        <p class="roadmap-date">${ui.escapeHtml(item.date)}</p>
        <h3>${ui.escapeHtml(item.title)}</h3>
        <p>${ui.escapeHtml(item.desc)}</p>
      </article>
    `).join("");

    return `
      <section class="section roadmap-section" id="roadmap" data-screen-label="Roadmap">
        <div class="container">
          <div class="roadmap-heading">
            ${ui.sectionHeader({ eyebrow: r.eyebrow, title: r.title, subtitle: r.subtitle, wide: true })}
            <div class="roadmap-device" aria-hidden="true">
              ${ui.icon("settings", "roadmap-device-icon")}
              <span>SLATE / OPEN PRODUCTION</span>
            </div>
          </div>
          <div class="roadmap-track">${items}</div>
        </div>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.RoadmapSection = RoadmapSection;
})();
