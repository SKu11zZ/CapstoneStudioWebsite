(function () {
  const coverTints = {
    mistlamp: "rgba(237, 165, 93, 0.12)",
    ferrypost: "rgba(110, 140, 175, 0.12)",
    ringfall: "rgba(200, 85, 65, 0.13)",
    rustroot: "rgba(135, 165, 115, 0.12)"
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function icon(name, extraClass = "") {
    return `<span class="icon is-${escapeHtml(name)} ${extraClass}" aria-hidden="true"></span>`;
  }

  function button({ href = "#", label, variant = "secondary", extraClass = "", attrs = "", icon: iconName = "", iconPosition = "start" }) {
    const iconMarkup = iconName ? icon(iconName, "button-icon") : "";
    const labelMarkup = `<span class="button-label">${escapeHtml(label)}</span>`;
    const content = iconPosition === "end" ? `${labelMarkup}${iconMarkup}` : `${iconMarkup}${labelMarkup}`;
    return `<a class="button is-${variant} ${extraClass}" href="${escapeHtml(href)}" ${attrs}>${content}</a>`;
  }

  function sectionHeader({ eyebrow, title, subtitle = "", wide = false }) {
    return `
      <div class="section-header ${wide ? "is-wide" : ""}">
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h2 class="section-title">${escapeHtml(title)}</h2>
        ${subtitle ? `<p class="muted-copy">${escapeHtml(subtitle)}</p>` : ""}
      </div>
    `;
  }

  function playIcon() {
    return `<span class="play-button" aria-hidden="true">${icon("play", "play-button-icon")}</span>`;
  }

  function placeholder(label, className = "", options = {}) {
    const style = options.tint ? ` style="--placeholder-tint:${escapeHtml(options.tint)}"` : "";
    return `
      <div class="placeholder ${className}"${style}>
        ${options.video ? playIcon() : ""}
        <span>${escapeHtml(label)}</span>
      </div>
    `;
  }

  function coverTint(id) {
    return coverTints[id] || coverTints.mistlamp;
  }

  function statusClass(statusKey) {
    return `is-${statusKey}`;
  }

  window.FoganchorUI = {
    escapeHtml,
    button,
    icon,
    sectionHeader,
    placeholder,
    playIcon,
    coverTint,
    statusClass
  };
})();
