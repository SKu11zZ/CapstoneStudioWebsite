(function () {
  function navLinks(ctx, mobile) {
    const closeAttr = mobile ? " data-menu-close" : "";
    return ctx.navItems
      .map(([href, label]) => `<a class="nav-link" href="${href}"${closeAttr}>${window.FoganchorUI.escapeHtml(label)}</a>`)
      .join("");
  }

  function Header(ctx) {
    const ui = window.FoganchorUI;
    const t = ctx.t;
    const menuIcon = ctx.state.menuOpen ? "close" : "menu";
    return `
      <header class="site-header">
        <a class="brand" href="#top" data-menu-close aria-label="${ui.escapeHtml(t.brand)}">
          <span class="brand-seal" aria-hidden="true">
            ${ui.icon("safety-certificate", "brand-seal-icon")}
          </span>
          <span class="brand-lockup">
            <span class="brand-code">FA-06</span>
            <span class="brand-text">${ui.escapeHtml(t.brand)}</span>
          </span>
        </a>
        <nav class="main-nav" aria-label="${ui.escapeHtml(t.a11y.nav)}">
          ${navLinks(ctx, false)}
        </nav>
        <div class="header-actions">
          <div class="language-toggle" role="group" aria-label="${ui.escapeHtml(t.a11y.language)}">
            <button type="button" data-lang="en" aria-pressed="${ctx.state.lang === "en"}">EN</button>
            <button type="button" data-lang="zh" aria-pressed="${ctx.state.lang === "zh"}">中文</button>
          </div>
          <button class="menu-button" type="button" data-menu-toggle aria-expanded="${ctx.state.menuOpen}" aria-label="${ui.escapeHtml(t.a11y.menu)}">${ui.icon(menuIcon, "menu-icon")}</button>
        </div>
      </header>
      <nav class="mobile-menu ${ctx.state.menuOpen ? "is-open" : ""}" aria-label="${ui.escapeHtml(t.a11y.nav)}">
        ${navLinks(ctx, true)}
        ${ui.button({ href: ctx.links.steamUrl, label: t.hero.ctaWishlist, variant: "primary", attrs: "data-menu-close", icon: "link" })}
      </nav>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.Header = Header;
})();
