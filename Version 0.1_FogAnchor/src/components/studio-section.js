(function () {
  function StudioSection(ctx) {
    const ui = window.FoganchorUI;
    const s = ctx.t.studio;
    return `
      <section class="section studio-band" id="studio" data-screen-label="Studio">
        <div class="container">
          <div class="stack studio-copy">
            <p class="eyebrow">${ui.escapeHtml(s.eyebrow)}</p>
            <h2 class="section-title">${ui.escapeHtml(s.title)}</h2>
            <p class="body-copy">${ui.escapeHtml(s.body)}</p>
          </div>
        </div>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.StudioSection = StudioSection;
})();
