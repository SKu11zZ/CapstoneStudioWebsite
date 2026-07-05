import type { MediaItem } from "../../types/site";
import { CinematicFrame } from "./CinematicFrame";

type PlaceholderMediaProps = {
  item: MediaItem;
};

export function PlaceholderMedia({ item }: PlaceholderMediaProps) {
  return <CinematicFrame variant={item.kind === "video" ? "video" : "image"} label={item.label} meta={item.meta} isVideo={item.kind === "video"} />;
}
