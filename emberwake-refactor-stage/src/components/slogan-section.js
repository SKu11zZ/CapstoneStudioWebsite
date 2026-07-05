(function () {
  function SloganSection(ctx) {
    const ui = window.FoganchorUI;
    const s = ctx.t.slogan;
    const beats = s.beats.map((beat) => `
      <article class="slogan-beat">
        <span class="beat-label">${ui.escapeHtml(beat.label)}</span>
        <h3>${ui.escapeHtml(beat.title)}</h3>
        <p>${ui.escapeHtml(beat.desc)}</p>
      </article>
    `).join("");

    return `
      <section class="section slogan-section" id="slogan" data-screen-label="Slogan">
        <div class="container slogan-grid">
          <div class="slogan-card">
            <p class="eyebrow">${ui.escapeHtml(s.eyebrow)}</p>
            <h2>${ui.escapeHtml(s.title)}</h2>
            <p>${ui.escapeHtml(s.body)}</p>
          </div>
          <div class="slogan-beats">${beats}</div>
        </div>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.SloganSection = SloganSection;
})();
