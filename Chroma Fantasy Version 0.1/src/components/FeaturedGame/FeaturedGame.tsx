import { siteContent } from "../../content/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { SectionHeader } from "../common/SectionHeader";
import "./FeaturedGame.css";

export function FeaturedGame() {
  const { t, language } = useLanguage();
  const featured = siteContent.featuredGame;

  return (
    <section className="section featured-game" id="featured" aria-labelledby="featured-title">
      <div className="section-inner featured-game__inner">
        <div className="featured-game__image-wrap reveal">
          <ImageWithFallback
            src={featured.image}
            alt={t({ zh: "云上旧城概念场景图", en: "City Above the Clouds concept scene" })}
            className="featured-game__image"
            fallbackLabel={t({ zh: "云海旧城场景生成中", en: "Cloud city scene in progress" })}
          />
        </div>

        <div className="featured-game__content reveal">
          <SectionHeader
            kicker={{ zh: "Featured Project", en: "Featured Project" }}
            title={featured.sectionTitle}
            intro={featured.promo}
          />
          <div className="featured-game__meta">
            <span>{t(featured.type)}</span>
            <span>{featured.platform}</span>
            <span>{t(featured.status)}</span>
          </div>
          <h3>{t(featured.title)}</h3>
          <p className="featured-game__summary">{t(featured.summary)}</p>
          <p>{t(featured.detail)}</p>
          <ul className="feature-list">
            {featured.highlights[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="featured-game__actions">
            {featured.buttons.map((button) => (
              <a className="soft-button soft-button--subtle" href={button.href} key={button.href}>
                {t(button.label)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
