import { techNotes } from "../../content/techNotes";
import { useLanguage } from "../../i18n/LanguageContext";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { SectionHeader } from "../common/SectionHeader";
import "./TechNotes.css";

export function TechNotes() {
  const { t } = useLanguage();

  return (
    <section className="section tech-notes" id="tech" aria-labelledby="tech-title">
      <div className="section-inner">
        <SectionHeader
          kicker={{ zh: "Development Notes", en: "Development Notes" }}
          title={{ zh: "技术分享", en: "Tech Notes" }}
          intro={{
            zh: "我们记录开放世界、美术管线、叙事系统和镜头语言的开发过程",
            en: "Notes on open worlds, art pipelines, narrative systems, and cinematic presentation",
          }}
          align="center"
        />
        <div className="tech-notes__grid">
          {techNotes.map((note) => (
            <article className="tech-card reveal" key={note.id}>
              <ImageWithFallback
                src={note.image}
                alt={t(note.title)}
                className="tech-card__image"
                fallbackLabel={note.category}
              />
              <div className="tech-card__body">
                <div className="tech-card__meta">
                  <span>{note.category}</span>
                  <time>{note.date}</time>
                </div>
                <h3>{t(note.title)}</h3>
                <p>{t(note.summary)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
