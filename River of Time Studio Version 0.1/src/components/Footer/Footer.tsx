import { footerContent } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="site-footer">
      <p>{footerContent.copyright[language]}</p>
      <span>{footerContent.slogan[language]}</span>
    </footer>
  );
}
