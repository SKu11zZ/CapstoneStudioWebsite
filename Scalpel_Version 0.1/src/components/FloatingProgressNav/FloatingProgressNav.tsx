import { type CSSProperties, useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import type { LocalizedString } from "../../types";
import "./FloatingProgressNav.css";

type ProgressNavItem = {
  id: string;
  label: LocalizedString;
};

const progressNavItems: ProgressNavItem[] = [
  { id: "home", label: { zh: "首页", en: "Home" } },
  { id: "featured", label: { zh: "主推", en: "Featured" } },
  { id: "about", label: { zh: "工作室", en: "Studio" } },
  { id: "games", label: { zh: "项目", en: "Games" } },
  { id: "devlog", label: { zh: "日志", en: "Devlog" } },
  { id: "team", label: { zh: "团队", en: "Team" } },
  { id: "contact", label: { zh: "联系", en: "Contact" } },
];

export function FloatingProgressNav() {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState(progressNavItems[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;

      const probeLine = window.scrollY + window.innerHeight * 0.42;
      const current =
        progressNavItems
          .map((item) => {
            const element = document.getElementById(item.id);
            return element
              ? { id: item.id, top: element.offsetTop }
              : { id: item.id, top: Number.POSITIVE_INFINITY };
          })
          .filter((item) => item.top <= probeLine)
          .at(-1)?.id ?? progressNavItems[0].id;

      setScrollProgress(nextProgress);
      setActiveId(current);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <nav
      className="floating-progress"
      aria-label={language === "zh" ? "页面快速定位" : "Page quick navigation"}
    >
      <div className="floating-progress__bar" aria-hidden="true">
        <span style={{ "--progress": `${scrollProgress}%` } as CSSProperties} />
      </div>
      <div className="floating-progress__items">
        {progressNavItems.map((item, index) => (
          <a
            className={`floating-progress__item ${
              activeId === item.id ? "is-active" : ""
            }`}
            href={`#${item.id}`}
            key={item.id}
            aria-label={item.label[language]}
            aria-current={activeId === item.id ? "location" : undefined}
          >
            <span className="floating-progress__dot">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="floating-progress__label">
              {item.label[language]}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
