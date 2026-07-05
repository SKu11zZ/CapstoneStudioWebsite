import type { SiteContent } from "../../types/site";

type StudioSectionProps = {
  content: SiteContent;
};

export function StudioSection({ content }: StudioSectionProps) {
  return (
    <section className="section-band studio" id="studio">
      <div className="studio__statement">
        <p className="eyebrow">{content.studio.eyebrow}</p>
        <h2>{content.studio.title}</h2>
        <p>{content.studio.body}</p>
        <p>{content.studio.promise}</p>
        <div className="studio__principles">
          {content.studio.principles.map((principle) => (
            <span key={principle}>{principle}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
