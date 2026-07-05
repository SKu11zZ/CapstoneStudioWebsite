import { heroContent } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { VisualPlate } from "../VisualPlate";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">{heroContent.studioType[language]}</p>
        <h1 className="hero-title" id="hero-title">
          {heroContent.title[language]}
        </h1>
        <p className="hero-subtitle">{heroContent.subtitle[language]}</p>
        <p className="hero-line">{heroContent.line[language]}</p>
        <div className="hero-tags" aria-label={language === "zh" ? "工作室方向" : "Studio focus"}>
          {heroContent.tags[language].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="hero-echo">{heroContent.echo[language]}</p>
        <div className="hero-actions">
          {heroContent.ctas.map((cta, index) => (
            <a className={`button ${index === 0 ? "button-primary" : "button-secondary"}`} href={cta.href} key={cta.href}>
              {cta.label[language]}
            </a>
          ))}
        </div>
      </div>
      <VisualPlate className="hero-visual" label={language === "zh" ? "发光时间长河与旧地图" : "Glowing river of time and old map"} variant="hero" />
    </section>
  );
}
