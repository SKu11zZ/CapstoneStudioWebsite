import { featuredProject } from "../../data/featuredProject";
import { sectionCopies } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeading } from "../SectionHeading";
import { VisualPlate } from "../VisualPlate";

export function FeaturedProject() {
  const { language } = useLanguage();

  return (
    <section className="page-section featured-section" id="featured">
      <SectionHeading copy={sectionCopies.featured} />
      <div className="featured-layout">
        <div className="featured-copy">
          <h3 className="feature-title">{featuredProject.titleLine[language]}</h3>
          <div className="project-details">
            {featuredProject.details.map((detail) => (
              <p key={detail.label.en}>
                <span>{detail.label[language]}</span>
                <strong>{detail.value[language]}</strong>
              </p>
            ))}
          </div>
          {featuredProject.paragraphs.map((paragraph) => (
            <p className="body-copy" key={paragraph.en}>
              {paragraph[language]}
            </p>
          ))}
          <blockquote>{featuredProject.slogan[language]}</blockquote>
          <div className="featured-actions">
            {featuredProject.ctas.map((cta, index) => (
              <a className={`button ${index === 0 ? "button-primary" : "button-secondary"}`} href={cta.href} key={cta.href}>
                {cta.label[language]}
              </a>
            ))}
          </div>
        </div>
        <div className="featured-visual-wrap">
          <VisualPlate label={language === "zh" ? "长河彼岸主视觉占位" : "Beyond the River of Time key visual placeholder"} variant="featured" />
          <div className="feature-list">
            {featuredProject.features.map((feature, index) => (
              <article key={feature.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{feature.title[language]}</h4>
                  <p>{feature.body[language]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
