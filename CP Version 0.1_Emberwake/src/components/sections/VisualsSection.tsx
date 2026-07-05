import type { MediaFilter, MediaItem, SiteContent } from "../../types/site";
import { useMediaFilter } from "../../hooks/useMediaFilter";
import { MediaTile } from "../ui/MediaTile";
import { SectionHeading } from "../ui/SectionHeading";

type VisualsSectionProps = {
  content: SiteContent;
  items: MediaItem[];
};

const filters: MediaFilter[] = ["all", "featured", "gameplay", "concept", "trailer"];

export function VisualsSection({ content, items }: VisualsSectionProps) {
  const { filter, setFilter, filteredItems } = useMediaFilter(items);

  return (
    <section className="section-band visuals" id="visuals">
      <div className="section-inner">
        <SectionHeading eyebrow={content.media.eyebrow} title={content.media.title} body={content.media.body} />
        <div className="tab-row" role="group" aria-label={content.a11y.mediaFilter}>
          {filters.map((item) => (
            <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>
              {content.media.tabs[item]}
            </button>
          ))}
        </div>
        <div className="visuals-wall">
          {filteredItems.map((item) => (
            <MediaTile item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
