import { useMemo, useState } from "react";
import type { MediaFilter, MediaItem } from "../types/site";

export function useMediaFilter(items: MediaItem[]) {
  const [filter, setFilter] = useState<MediaFilter>("all");
  const filteredItems = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.category === filter)),
    [filter, items]
  );

  return { filter, setFilter, filteredItems };
}
