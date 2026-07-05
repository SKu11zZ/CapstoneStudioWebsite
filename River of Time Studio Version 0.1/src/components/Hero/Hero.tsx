import { heroContent } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { featuredProject } from "../../data/featuredProject";
import { ProjectCover } from "../ProjectCover/ProjectCover";

export function Hero() {
  const { language } = useLanguage();
  const coverMeta = featuredProject.details.map((detail) => ({
    label: detail.label,
    value: detail.value,
  }));

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">{heroContent.kicker[language]}</p>
        <h1 className="hero-title" id="hero-title">
          {heroContent.title[language]}
        </h1>
        <p className="hero-subtitle">{heroContent.subtitle[language]}</p>
        <p className="hero-line">{heroContent.line[language]}</p>
        <p className="hero-pitch">{heroContent.pitch[language]}</p>
        <div className="hero-tags" aria-label={language === "zh" ? "工作室方向" : "Studio focus"}>
          {heroContent.tags[language].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="hero-echo">{heroContent.echo[language]}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={heroContent.ctas[0].href}>
            {heroContent.ctas[0].label[language]}
          </a>
          <a className="button button-secondary" href={heroContent.ctas[1].href}>
            {heroContent.ctas[1].label[language]}
          </a>
          <a className="text-action" href={heroContent.ctas[2].href}>
            {heroContent.ctas[2].label[language]}
          </a>
        </div>
        <div className="hero-status-strip" aria-label={language === "zh" ? "当前项目状态" : "Current project status"}>
          {heroContent.status.map((item) => (
            <p key={item.label.en}>
              <span>{item.label[language]}</span>
              <strong>{item.value[language]}</strong>
            </p>
          ))}
        </div>
      </div>
      <aside className="hero-dossier" aria-label={language === "zh" ? "主推游戏档案" : "Featured game dossier"}>
        <ProjectCover
          title={featuredProject.title}
          subtitle={{ zh: "Beyond the River of Time", en: "Beyond the River of Time" }}
          chapter={featuredProject.chapter}
          variant="river"
          meta={coverMeta}
        />
      </aside>
    </section>
  );
}
