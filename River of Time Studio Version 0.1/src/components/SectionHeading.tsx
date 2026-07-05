import type { SectionCopy } from "../i18n/types";
import { useLanguage } from "../i18n/LanguageContext";

type SectionHeadingProps = {
  copy: SectionCopy;
  align?: "left" | "center";
};

export function SectionHeading({ copy, align = "left" }: SectionHeadingProps) {
  const { language } = useLanguage();

  return (
    <header className={`section-heading section-heading-${align}`}>
      <h2 className="section-title">{copy.title[language]}</h2>
      {copy.intro ? <p>{copy.intro[language]}</p> : null}
    </header>
  );
}
