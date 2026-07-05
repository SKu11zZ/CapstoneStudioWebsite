import { sectionCopies } from "../../data/siteContent";
import { techNotes } from "../../data/techNotes";
import { useLanguage } from "../../i18n/LanguageContext";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";

export function TechNotes() {
  const { language } = useLanguage();

  return (
    <section className="page-section" id="tech-notes">
      <SectionHeading copy={sectionCopies.techNotes} align="center" />
      <div className="tech-grid">
        {techNotes.map((note) => (
          <article className="tech-card" key={note.tag}>
            <Icon src={note.icon} />
            <span>{note.tag}</span>
            <h3>{note.title[language]}</h3>
            <p>{note.body[language]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
