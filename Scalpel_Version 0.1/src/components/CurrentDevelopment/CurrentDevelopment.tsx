import { currentDevelopment } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import "./CurrentDevelopment.css";

export function CurrentDevelopment() {
  const { language } = useLanguage();

  return (
    <section className="current-dev section" id="current-development">
      <SectionHeading copy={currentDevelopment.section} language={language} align="center" />
      <div className="current-dev__timeline">
        {currentDevelopment.timeline.map((item, index) => (
          <article className="current-dev__milestone" key={item.window}>
            <span className="current-dev__node">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <small>{item.window}</small>
              <h3>{item.title[language]}</h3>
              <strong>{item.state[language]}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
