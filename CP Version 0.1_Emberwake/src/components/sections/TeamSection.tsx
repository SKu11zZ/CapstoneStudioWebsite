import type { SiteContent, TeamMember } from "../../types/site";
import { SectionHeading } from "../ui/SectionHeading";
import { TeamCard } from "../ui/TeamCard";

type TeamSectionProps = {
  content: SiteContent;
  members: TeamMember[];
};

export function TeamSection({ content, members }: TeamSectionProps) {
  return (
    <section className="section-band team" id="team">
      <div className="section-inner">
        <SectionHeading eyebrow={content.teamIntro.eyebrow} title={content.teamIntro.title} body={content.teamIntro.body} />
        <div className="team-grid">
          {members.map((member) => (
            <TeamCard member={member} key={member.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
