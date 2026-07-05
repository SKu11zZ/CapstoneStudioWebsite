import { useState } from "react";
import { assetManifest } from "../../content/assetManifest";
import { siteContent } from "../../content/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import "./Header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" onClick={closeMenu} aria-label={t(siteContent.studio.name)}>
        <span className="brand-mark__symbol" aria-hidden="true" />
        <span>
          <strong>{t(siteContent.studio.name)}</strong>
          <small>{siteContent.studio.englishName}</small>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <img src={isOpen ? assetManifest.icons.close : assetManifest.icons.menu} alt="" aria-hidden="true" />
      </button>

      <div className={`header-actions ${isOpen ? "is-open" : ""}`} id="site-navigation">
        <nav className="site-nav" aria-label="Primary navigation">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {t(item.label)}
            </a>
          ))}
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
