import { sectionCopies } from "../../data/siteContent";
import { team } from "../../data/team";
import { useLanguage } from "../../i18n/LanguageContext";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";

const roleIcons = [
  "/assets/icons/explore-products-white.png",
  "/assets/icons/message-white.png",
  "/assets/icons/developer-white.png",
  "/assets/icons/build-website-white.png",
  "/assets/icons/play-circle-white.png",
];

export function TeamSection() {
  const { language } = useLanguage();

  return (
    <section className="page-section" id="team">
      <SectionHeading copy={sectionCopies.team} align="center" />
      <div className="team-grid">
        {team.map((member, index) => (
          <article className="team-card" key={member.name.en}>
            <div className="team-avatar" aria-hidden="true">
              <Icon src={roleIcons[index % roleIcons.length]} />
            </div>
            <div>
              <h3>{member.name[language]}</h3>
              <p className="team-role">{member.role[language]}</p>
              <p>{member.focus[language]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
