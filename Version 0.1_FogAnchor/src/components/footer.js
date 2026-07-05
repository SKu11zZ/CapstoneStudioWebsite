(function () {
  function Footer(ctx) {
    const ui = window.FoganchorUI;
    const links = ctx.t.footer.links.map((label, index) => {
      const href = [ctx.links.steamUrl, ctx.links.discordUrl, "#", "#", "#", ctx.links.contactUrl][index] || "#";
      return `<a href="${href}">${ui.escapeHtml(label)}</a>`;
    }).join("");
    return `
      <footer class="site-footer">
        <div class="footer-inner">
          <span>${ui.escapeHtml(ctx.t.footer.copyright)}</span>
          <nav class="footer-links" aria-label="Footer">${links}</nav>
        </div>
      </footer>
    `;
  }

  window.FoganchorSections = window.FoganchorSections || {};
  window.FoganchorSections.Footer = Footer;
})();
