import { siteContent } from "../../content/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Footer.css";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <strong>{t(siteContent.studio.name)}</strong>
        <span>{t(siteContent.studio.tagline)}</span>
        <small>© 2026 Chroma Fantasy Studio</small>
      </div>
    </footer>
  );
}
