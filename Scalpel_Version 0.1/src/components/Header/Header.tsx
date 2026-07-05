import { useEffect, useState } from "react";
import { brand, navItems } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import "./Header.css";

export function Header() {
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.toggleAttribute("data-menu-open", menuOpen);
    return () => document.body.removeAttribute("data-menu-open");
  }, [menuOpen]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <a className="site-header__brand" href="#home" aria-label={brand.studioName[language]}>
        <span className="site-header__mark">
          <img src={brand.markImage} alt="" aria-hidden="true" />
        </span>
        <span className="site-header__brand-text">
          <strong>{brand.studioName[language]}</strong>
          {language === "zh" ? <small>{brand.latinName}</small> : null}
        </span>
      </a>

      <nav className={`site-header__nav ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.id} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label[language]}
          </a>
        ))}
        <LanguageToggle />
      </nav>

      <button
        className="site-header__menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <img
          src={menuOpen ? "/assets/icons/close-white.png" : "/assets/icons/menu-white.png"}
          alt=""
          aria-hidden="true"
        />
      </button>
    </header>
  );
}
