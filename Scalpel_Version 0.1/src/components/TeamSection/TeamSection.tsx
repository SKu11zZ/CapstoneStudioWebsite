import { teamSection } from "../../data/siteContent";
import { team } from "../../data/team";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import "./TeamSection.css";

export function TeamSection() {
  const { language } = useLanguage();

  return (
    <section className="team section" id="team">
      <SectionHeading copy={teamSection} language={language} />
      <div className="team__grid">
        {team.map((member) => (
          <article className="team-card" key={member.id}>
            <div className="team-card__avatar" aria-hidden="true">
              <span>{member.signal}</span>
            </div>
            <div>
              <h3>{member.name}</h3>
              <strong>{member.role[language]}</strong>
              <p>{member.bio[language]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
