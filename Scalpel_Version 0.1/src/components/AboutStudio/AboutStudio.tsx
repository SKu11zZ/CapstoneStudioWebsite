import { aboutStudio } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import "./AboutStudio.css";

export function AboutStudio() {
  const { language } = useLanguage();

  return (
    <section className="about section" id="about">
      <div className="about__copy">
        <SectionHeading copy={aboutStudio.section} language={language} />
        <p>{aboutStudio.body[language]}</p>
      </div>
      <div className="about__keywords">
        {aboutStudio.keywords.map((keyword, index) => (
          <article key={keyword.en} className="about__keyword">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{keyword[language]}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
