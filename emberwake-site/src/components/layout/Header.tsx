import { useEffect, useState } from "react";
import type { Language, SiteContent } from "../../types/site";
import { LanguageToggle } from "../ui/LanguageToggle";
import { MobileMenu } from "./MobileMenu";

type HeaderProps = {
  lang: Language;
  onLangChange: (lang: Language) => void;
  content: SiteContent;
};

export function Header({ lang, onLangChange, content }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label={content.brand.full}>
        <span className="brand-mark__sigil" />
        <span>{content.brand.short}</span>
      </a>
      <nav className="desktop-nav" aria-label={content.a11y.nav}>
        {content.nav.map((item) => (
          <a href={item.href} key={item.id}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageToggle lang={lang} onChange={onLangChange} label={content.a11y.language} />
        <button
          className="menu-button"
          type="button"
          aria-label={open ? content.a11y.closeMenu : content.a11y.menu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <img src={open ? "/icons/close-white.png" : "/icons/menu-white.png"} alt="" aria-hidden="true" />
        </button>
      </div>
      <MobileMenu content={content} open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
