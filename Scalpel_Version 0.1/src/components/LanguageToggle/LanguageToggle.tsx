import { useLanguage } from "../../i18n/LanguageContext";
import "./LanguageToggle.css";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const label = language === "zh" ? "中文 / EN" : "CN / English";
  const ariaLabel =
    language === "zh" ? "切换到英文" : "Switch language to Chinese";

  return (
    <button
      className="language-toggle"
      type="button"
      onClick={toggleLanguage}
      aria-label={ariaLabel}
    >
      <span className="language-toggle__status">
        {language === "zh" ? "CN" : "EN"}
      </span>
      <span>{label}</span>
    </button>
  );
}
