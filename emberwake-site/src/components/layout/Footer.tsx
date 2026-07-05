import type { Language, SiteContent } from "../../types/site";
import { LanguageToggle } from "../ui/LanguageToggle";

type FooterProps = {
  lang: Language;
  onLangChange: (lang: Language) => void;
  content: SiteContent;
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function Footer({ lang, onLangChange, content }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <span className="brand-mark__sigil" />
        <strong>{content.brand.full}</strong>
        <span>{content.brand.zh}</span>
      </div>
      <nav className="footer-links" aria-label="Footer">
        {content.footer.links.map((link) => {
          const external = isExternal(link.href);
          return (
            <a key={link.label} href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer noopener" : undefined}>
              {link.label}
            </a>
          );
        })}
      </nav>
      <LanguageToggle lang={lang} onChange={onLangChange} label={content.a11y.language} />
      <p>{content.footer.copyright}</p>
    </footer>
  );
}
