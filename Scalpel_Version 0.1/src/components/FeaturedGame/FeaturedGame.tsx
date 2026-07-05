import { featuredGame } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { ActionLink } from "../ui/ActionLink";
import { SectionHeading } from "../ui/SectionHeading";
import "./FeaturedGame.css";

export function FeaturedGame() {
  const { language } = useLanguage();

  return (
    <section className="featured section" id="featured">
      <SectionHeading copy={featuredGame.section} language={language} />

      <div className="featured__grid">
        <div className="featured__content">
          <div className="featured__tags" aria-label="Game tags">
            {featuredGame.tags.map((tag) => (
              <span key={tag.en}>{tag[language]}</span>
            ))}
          </div>

          <div className="featured__copy">
            {featuredGame.body.map((paragraph) => (
              <p key={paragraph.en}>{paragraph[language]}</p>
            ))}
          </div>

          <div className="featured__actions">
            {featuredGame.ctas.map((action) => (
              <ActionLink
                key={action.label.en}
                action={action}
                language={language}
              />
            ))}
          </div>
        </div>

        <figure className="featured__media">
          <div className="featured__media-image">
            <img
              src={featuredGame.mediaPanel.image}
              alt={featuredGame.mediaPanel.alt[language]}
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>{featuredGame.mediaPanel.eyebrow[language]}</span>
            <strong>{featuredGame.mediaPanel.title[language]}</strong>
            <small>{featuredGame.mediaPanel.caption[language]}</small>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
