import type { TeamMember } from "../../types/site";

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="team-card">
      <div className="team-card__avatar" aria-label={`${member.name} avatar placeholder`}>
        <span>{member.monogram}</span>
      </div>
      <div className="team-card__body">
        <p>{member.role}</p>
        <h3>{member.name}</h3>
        <p>{member.bio}</p>
        <div className="team-card__tags">
          {member.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
