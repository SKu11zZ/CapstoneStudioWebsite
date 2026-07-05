(function () {
  const STORAGE_KEY = "foganchor-lang";
  const data = window.FoganchorData;
  const sections = window.FoganchorSections;
  const root = document.getElementById("app");

  const savedLang = safeStorageGet(STORAGE_KEY);
  const browserLang = (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
  const preferredLang = savedLang || browserLang;

  const state = {
    lang: preferredLang === "en" ? "en" : "zh",
    menuOpen: false,
    mediaFilter: "all",
    subscribed: false
  };

  function safeStorageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {}
  }

  function context() {
    const t = data.copy[state.lang];
    return {
      state,
      t,
      links: data.links,
      navItems: data.nav[state.lang],
      games: data.games[state.lang],
      mediaItems: data.media[state.lang].filter((item) => state.mediaFilter === "all" || item.group === state.mediaFilter)
    };
  }

  function render() {
    const ctx = context();
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = ctx.t.docTitle;
    document.body.classList.toggle("has-open-menu", state.menuOpen);
    root.innerHTML = `
      <div class="site-shell">
        ${sections.Header(ctx)}
        <main>
          ${sections.Hero(ctx)}
          ${sections.FeaturedGame(ctx)}
          ${sections.GamesSection(ctx)}
          ${sections.StudioSection(ctx)}
          ${sections.MediaSection(ctx)}
          ${sections.NewsSection(ctx)}
          ${sections.CommunitySection(ctx)}
          ${sections.PartnersSection(ctx)}
        </main>
        ${sections.Footer(ctx)}
      </div>
    `;
  }

  function setLanguage(lang) {
    if (lang !== "zh" && lang !== "en") return;
    state.lang = lang;
    state.menuOpen = false;
    safeStorageSet(STORAGE_KEY, lang);
    render();
  }

  function setMediaFilter(filter) {
    if (!["all", "featured", "dev", "released"].includes(filter)) return;
    state.mediaFilter = filter;
    render();
  }

  document.addEventListener("click", (event) => {
    const languageButton = event.target.closest("[data-lang]");
    if (languageButton) {
      setLanguage(languageButton.dataset.lang);
      return;
    }

    const menuToggle = event.target.closest("[data-menu-toggle]");
    if (menuToggle) {
      state.menuOpen = !state.menuOpen;
      render();
      return;
    }

    const menuClose = event.target.closest("[data-menu-close]");
    if (menuClose && state.menuOpen) {
      state.menuOpen = false;
      render();
      return;
    }

    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      setMediaFilter(filterButton.dataset.filter);
    }
  });

  document.addEventListener("submit", (event) => {
    if (!event.target.matches("[data-subscribe-form]")) return;
    event.preventDefault();
    state.subscribed = true;
    render();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.menuOpen) {
      state.menuOpen = false;
      render();
    }
  });

  render();
})();
