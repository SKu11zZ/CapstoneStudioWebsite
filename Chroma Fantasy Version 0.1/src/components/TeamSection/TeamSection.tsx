import { teamMembers } from "../../content/team";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeader } from "../common/SectionHeader";
import "./TeamSection.css";

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <section className="section team-section" id="team" aria-labelledby="team-title">
      <div className="section-inner">
        <SectionHeader
          kicker={{ zh: "Studio Team", en: "Studio Team" }}
          title={{ zh: "团队成员", en: "Team" }}
          intro={{
            zh: "小团队负责把概念图、系统和情绪节奏接到同一条创作线上",
            en: "A compact team connecting concept art, systems, and emotional pacing",
          }}
        />
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card reveal" key={member.name}>
              <div className="team-card__initial" aria-hidden="true">
                {member.name.slice(0, 1)}
              </div>
              <h3>{member.name}</h3>
              <p className="team-card__role">{t(member.role)}</p>
              <p>{t(member.bio)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
