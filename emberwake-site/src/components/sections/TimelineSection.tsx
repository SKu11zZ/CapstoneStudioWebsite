import type { SiteContent, TimelineItem } from "../../types/site";
import { SectionHeading } from "../ui/SectionHeading";

type TimelineSectionProps = {
  content: SiteContent;
  items: TimelineItem[];
};

export function TimelineSection({ content, items }: TimelineSectionProps) {
  return (
    <section className="section-band timeline" id="timeline">
      <div className="section-inner">
        <SectionHeading eyebrow={content.timeline.eyebrow} title={content.timeline.title} body={content.timeline.body} />
        <div className="timeline-track">
          {items.map((item) => (
            <article key={item.phase}>
              <span>{item.phase}</span>
              <small>{item.date}</small>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
