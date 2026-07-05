import { useEffect, useMemo, useState, type CSSProperties } from "react";
import type { SiteContent } from "../../types/site";

type PageProgressProps = {
  content: SiteContent;
};

const progressLabels: Record<string, string> = {
  top: "\u4e3b\u9875",
  featured: "\u4e3b\u63a8",
  games: "\u6e38\u620f",
  team: "\u6210\u5458",
  visuals: "\u753b\u9762",
  timeline: "\u8def\u7ebf",
  contact: "\u8054\u7cfb"
};

export function PageProgress({ content }: PageProgressProps) {
  const items = useMemo(
    () => [
      { id: "top", href: "#top", label: progressLabels.top, ariaLabel: content.brand.full },
      ...content.nav.map((item) => ({
        ...item,
        label: progressLabels[item.id] ?? item.label,
        ariaLabel: item.label
      }))
    ],
    [content]
  );
  const [activeId, setActiveId] = useState(items[0].id);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const probeY = window.scrollY + window.innerHeight * 0.36;
      const nextActive =
        items
          .map((item) => ({ id: item.id, element: document.getElementById(item.id) }))
          .filter((item): item is { id: string; element: HTMLElement } => Boolean(item.element))
          .reduce((current, item) => {
            return item.element.offsetTop <= probeY ? item.id : current;
          }, items[0].id) ?? items[0].id;

      setActiveId(nextActive);
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [items]);

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId)
  );
  const progress = items.length > 1 ? activeIndex / (items.length - 1) : 0;

  return (
    <nav
      className="page-progress"
      aria-label={`${content.brand.full} page progress`}
      style={{ "--progress-ratio": progress } as CSSProperties}
    >
      <span className="page-progress__track" aria-hidden="true" />
      {items.map((item, index) => (
        <a
          className="page-progress__item"
          href={item.href}
          key={item.id}
          aria-label={item.ariaLabel}
          aria-current={item.id === activeId ? "location" : undefined}
          data-active={item.id === activeId ? "true" : undefined}
          data-passed={index <= activeIndex ? "true" : undefined}
        >
          <span className="page-progress__dot" aria-hidden="true" />
          <span className="page-progress__label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
