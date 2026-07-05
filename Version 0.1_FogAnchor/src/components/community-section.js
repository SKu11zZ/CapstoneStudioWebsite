(function () {
  function CommunitySection(ctx) {
    const ui = window.FoganchorUI;
    const c = ctx.t.community;
    const buttonLabel = ctx.state.subscribed ? c.subscribed : c.subscribe;
    return `
      <section class="section community" id="community" data-screen-label="Community">
        <div class="community-content">
          <h2 class="section-title">${ui.escapeHtml(c.title)}</h2>
          <p class="body-copy">${ui.escapeHtml(c.body)}</p>
          <div class="cluster">
            ${ui.button({ href: ctx.links.discordUrl, label: c.ctaDiscord, variant: "primary", icon: "message" })}
            ${ui.button({ href: ctx.links.steamUrl, label: c.ctaWishlist, variant: "secondary", icon: "link" })}
          </div>
          <form class="subscribe-form" data-subscribe-form aria-label="${ui.escapeHtml(ctx.t.a11y.newsletter)}">
            <input type="email" name="email" placeholder="${ui.escapeHtml(c.emailPlaceholder)}" ${ctx.state.subscribed ? "disabled" : ""}>
            <button type="submit">${ui.icon("paper-plane", "submit-icon")}<span>${ui.escapeHtml(buttonLabel)}</span></button>
          </form>
        </div>
      </section>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.CommunitySection = CommunitySection;
})();
