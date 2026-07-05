import type { Language } from "../../types/site";

type LanguageToggleProps = {
  lang: Language;
  onChange: (lang: Language) => void;
  label: string;
};

export function LanguageToggle({ lang, onChange, label }: LanguageToggleProps) {
  return (
    <div className="language-toggle" role="group" aria-label={label}>
      <button type="button" aria-pressed={lang === "en"} onClick={() => onChange("en")}>
        EN
      </button>
      <button type="button" aria-pressed={lang === "zh"} onClick={() => onChange("zh")}>
        中文
      </button>
    </div>
  );
}
