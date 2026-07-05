import { devlogSection } from "../../data/siteContent";
import { devlogs } from "../../data/devlogs";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import "./DevlogSection.css";

export function DevlogSection() {
  const { language } = useLanguage();

  return (
    <section className="devlog section" id="devlog">
      <SectionHeading copy={devlogSection} language={language} />
      <div className="devlog__list">
        {devlogs.slice(0, 3).map((entry) => (
          <article className="devlog-card" key={entry.id}>
            <span className="devlog-card__date">{entry.date}</span>
            <span className="devlog-card__category">
              {entry.category[language]}
            </span>
            <div className="devlog-card__copy">
              <h3>{entry.title[language]}</h3>
              <p>{entry.summary[language]}</p>
            </div>
            <a href="#devlog">{language === "zh" ? "阅读更多" : "Read More"}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
