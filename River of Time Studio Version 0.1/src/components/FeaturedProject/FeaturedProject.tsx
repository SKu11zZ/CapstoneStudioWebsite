import { featuredProject } from "../../data/featuredProject";
import { sectionCopies } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { ProjectCover } from "../ProjectCover/ProjectCover";
import { SectionHeading } from "../SectionHeading";

export function FeaturedProject() {
  const { language } = useLanguage();

  return (
    <section className="page-section featured-section" id="featured">
      <SectionHeading copy={sectionCopies.featured} />
      <div className="featured-layout">
        <div className="featured-copy">
          <h3 className="feature-title">{featuredProject.titleLine[language]}</h3>
          <div className="project-fact-strip">
            {featuredProject.details.map((detail) => (
              <article key={detail.label.en}>
                <span>{detail.label[language]}</span>
                <strong>{detail.value[language]}</strong>
              </article>
            ))}
          </div>
          {featuredProject.paragraphs.map((paragraph) => (
            <p className="body-copy" key={paragraph.en}>
              {paragraph[language]}
            </p>
          ))}
          <div className="feature-grid">
            {featuredProject.features.map((feature, index) => (
              <article key={feature.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h4>{feature.title[language]}</h4>
                <p>{feature.body[language]}</p>
              </article>
            ))}
          </div>
          <blockquote>{featuredProject.slogan[language]}</blockquote>
          <div className="featured-actions">
            <a className="button button-primary" href={featuredProject.ctas[0].href}>
              {featuredProject.ctas[0].label[language]}
            </a>
            <a className="button button-secondary" href={featuredProject.ctas[1].href}>
              {featuredProject.ctas[1].label[language]}
            </a>
            <a className="text-action" href={featuredProject.ctas[2].href}>
              {featuredProject.ctas[2].label[language]}
            </a>
          </div>
        </div>
        <div className="featured-visual-wrap">
          <ProjectCover
            title={featuredProject.title}
            subtitle={{ zh: "Beyond the River of Time", en: "Beyond the River of Time" }}
            chapter={featuredProject.chapter}
            variant="featured"
            meta={featuredProject.details}
          />
          <div className="mechanic-notes" aria-label={language === "zh" ? "关键机制" : "Key mechanisms"}>
            {featuredProject.features.slice(0, 3).map((feature) => (
              <p key={feature.title.en}>
                <span>{feature.title[language]}</span>
                <strong>{feature.body[language]}</strong>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
