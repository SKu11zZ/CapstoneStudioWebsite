import { useLanguage } from "../../i18n/LanguageContext";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const label = language === "zh" ? "切换到英文" : "Switch to Chinese";

  return (
    <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={label}>
      <span>{language === "zh" ? "中文 / EN" : "CN / EN"}</span>
    </button>
  );
}
