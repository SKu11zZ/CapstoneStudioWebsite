import type { LocalizedText } from "../../i18n/types";
import { useLanguage } from "../../i18n/LanguageContext";

type CoverMeta = {
  label: LocalizedText;
  value: LocalizedText;
};

type ProjectCoverProps = {
  title: LocalizedText;
  subtitle?: LocalizedText;
  chapter?: LocalizedText;
  variant: string;
  meta?: CoverMeta[];
  compact?: boolean;
};

export function ProjectCover({ title, subtitle, chapter, variant, meta = [], compact = false }: ProjectCoverProps) {
  const { language } = useLanguage();

  return (
    <div className={`project-cover cover-${variant} ${compact ? "project-cover-compact" : ""}`.trim()} aria-label={`${title[language]} cover`}>
      <div className="cover-art" aria-hidden="true">
        <span className="cover-grid" />
        <span className="cover-river" />
        <span className="cover-orbit cover-orbit-one" />
        <span className="cover-orbit cover-orbit-two" />
        <span className="cover-symbol" />
        <span className="cover-foreground" />
      </div>
      <div className="cover-content">
        {chapter ? <span className="cover-chapter">{chapter[language]}</span> : null}
        <strong>{title[language]}</strong>
        {subtitle ? <span>{subtitle[language]}</span> : null}
      </div>
      {meta.length > 0 ? (
        <dl className="cover-meta">
          {meta.map((item) => (
            <div key={item.label.en}>
              <dt>{item.label[language]}</dt>
              <dd>{item.value[language]}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}
