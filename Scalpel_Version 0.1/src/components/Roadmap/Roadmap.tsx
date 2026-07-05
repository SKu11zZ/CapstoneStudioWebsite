import { roadmapSection } from "../../data/siteContent";
import { roadmap } from "../../data/roadmap";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import "./Roadmap.css";

export function Roadmap() {
  const { language } = useLanguage();

  return (
    <section className="roadmap section" id="roadmap">
      <SectionHeading copy={roadmapSection} language={language} align="center" />
      <div className="roadmap__track">
        {roadmap.map((phase) => (
          <article className="roadmap__phase" key={phase.id}>
            <span className="roadmap__strip" aria-hidden="true" />
            <span className="roadmap__arrow" aria-hidden="true" />
            <span className="roadmap__phase-number">{phase.phase}</span>
            <div className="roadmap__phase-content">
              <h3>{phase.title[language]}</h3>
              <p>{phase.body[language]}</p>
              <strong>{phase.status[language]}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
