(function () {
  function PartnersSection(ctx) {
    const ui = window.FoganchorUI;
    const p = ctx.t.partners;
    const cards = p.items.map((item) => `
      <article class="partner-card">
        <h3>${ui.escapeHtml(item.title)}</h3>
        <p>${ui.escapeHtml(item.desc)}</p>
      </article>
    `).join("");

    return `
      <section class="section partners" id="partners" data-screen-label="Partners">
        <div class="container">
          ${ui.sectionHeader({ eyebrow: p.eyebrow, title: p.title, subtitle: p.body, wide: true })}
          <p class="meta-line">${ui.escapeHtml(p.status)}</p>
          <div class="partner-grid">${cards}</div>
          <div class="cluster" style="margin-top:30px">
            ${ui.button({ href: ctx.links.contactUrl, label: p.contact, variant: "secondary", icon: "paper-plane" })}
            <a class="text-link" href="#">${ui.escapeHtml(p.presskit)} ${ui.icon("link", "inline-icon")}</a>
          </div>
        </div>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.PartnersSection = PartnersSection;
})();
