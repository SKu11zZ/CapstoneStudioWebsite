import type { LocalizedText } from "../../i18n/types";
import { useLanguage } from "../../i18n/LanguageContext";

type SectionHeaderProps = {
  kicker?: LocalizedText;
  title: LocalizedText;
  intro?: LocalizedText;
  align?: "left" | "center";
};

export function SectionHeader({ kicker, title, intro, align = "left" }: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className={`section-heading section-heading--${align}`}>
      {kicker ? <p className="section-kicker">{t(kicker)}</p> : null}
      <h2 className="section-title">{t(title)}</h2>
      {intro ? <p className="section-lead">{t(intro)}</p> : null}
    </div>
  );
}
