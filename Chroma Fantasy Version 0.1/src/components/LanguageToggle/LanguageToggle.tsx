import { useLanguage } from "../../i18n/LanguageContext";
import "./LanguageToggle.css";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const label = language === "zh" ? "CN / EN" : "EN / CN";

  return (
    <button
      className="language-toggle"
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "zh" ? "Switch to English" : "切换到中文"}
    >
      {label}
    </button>
  );
}
