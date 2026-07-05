import type { MediaItem } from "../../types/site";
import { CinematicFrame } from "./CinematicFrame";

type MediaTileProps = {
  item: MediaItem;
};

export function MediaTile({ item }: MediaTileProps) {
  return (
    <article className={`media-tile media-tile--${item.aspect.replace(":", "-")}`}>
      <CinematicFrame variant={item.kind === "video" ? "video" : "image"} label={item.label} meta={item.meta} isVideo={item.kind === "video"} />
      <div className="media-tile__meta">
        <span>{item.game}</span>
        <strong>{item.label}</strong>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
