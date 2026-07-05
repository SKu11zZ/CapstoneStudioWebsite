import { useEffect, useMemo, useState, type CSSProperties } from "react";
import type { SiteContent } from "../../types/site";

type PageProgressProps = {
  content: SiteContent;
};

export function PageProgress({ content }: PageProgressProps) {
  const items = useMemo(
    () => [{ id: "top", href: "#top", label: content.brand.short }, ...content.nav],
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
