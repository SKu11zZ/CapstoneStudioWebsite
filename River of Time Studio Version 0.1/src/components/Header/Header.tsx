import { useState } from "react";
import { navItems } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { Icon } from "../Icon";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";

const menuIcon = "/assets/icons/menu-white.png";
const closeIcon = "/assets/icons/close-white.png";

export function Header() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand-lockup" href="#hero" onClick={closeMenu} aria-label="River of Time Studio">
        <span className="brand-mark" aria-hidden="true">
          <span />
        </span>
        <span className="brand-text">
          <strong>{language === "zh" ? "时光长河工作室" : "River of Time Studio"}</strong>
          <small>{language === "zh" ? "叙事 RPG" : "Narrative RPG"}</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
        {navItems.map((item) => (
          <a href={`#${item.target}`} key={item.target}>
            {item.label[language]}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <LanguageToggle />
        <button
          className="menu-button"
          type="button"
          aria-label={open ? (language === "zh" ? "关闭菜单" : "Close menu") : language === "zh" ? "打开菜单" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon src={open ? closeIcon : menuIcon} />
        </button>
      </div>

      <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label={language === "zh" ? "移动端导航" : "Mobile navigation"}>
        {navItems.map((item) => (
          <a href={`#${item.target}`} key={item.target} onClick={closeMenu}>
            {item.label[language]}
          </a>
        ))}
        <LanguageToggle />
      </nav>
    </header>
  );
}
