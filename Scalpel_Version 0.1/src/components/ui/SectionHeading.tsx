import type { Language, SectionCopy } from "../../types";
import "./SectionHeading.css";

type SectionHeadingProps = {
  copy: SectionCopy;
  language: Language;
  align?: "left" | "center";
};

export function SectionHeading({
  copy,
  language,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {copy.eyebrow ? (
        <span className="section-heading__eyebrow">
          {copy.eyebrow[language]}
        </span>
      ) : null}
      <h2>{copy.title[language]}</h2>
      {copy.description ? <p>{copy.description[language]}</p> : null}
    </div>
  );
}
