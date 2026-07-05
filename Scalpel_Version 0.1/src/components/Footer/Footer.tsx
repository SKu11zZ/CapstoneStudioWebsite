import { footer } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Footer.css";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <p>{footer.copyright[language]}</p>
      <span>{footer.slogan[language]}</span>
    </footer>
  );
}
