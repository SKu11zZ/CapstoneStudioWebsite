import { siteContent } from "../../content/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { ImageWithFallback } from "../common/ImageWithFallback";
import "./Hero.css";

export function Hero() {
  const { t, language } = useLanguage();
  const hero = siteContent.hero;
  const studio = siteContent.studio;

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <img className="hero-section__background" src={hero.background} alt="" aria-hidden="true" />
      <div className="hero-section__mist" aria-hidden="true" />
      <div className="hero-section__inner">
        <div className="hero-copy reveal">
          <p className="hero-copy__eyebrow">{t(hero.eyebrow)}</p>
          <h1 id="hero-title">
            {language === "zh" ? t(studio.name) : studio.englishName}
            {language === "zh" ? <span>{studio.englishName}</span> : null}
          </h1>
          <p className="hero-copy__tagline">{t(studio.tagline)}</p>
          <p className="hero-copy__positioning">{t(studio.positioning)}</p>
          <div className="hero-project">
            <strong>{t(hero.project)}</strong>
            <span>{t(hero.genre)}</span>
          </div>
          <div className="hero-actions" aria-label="Hero actions">
            {hero.buttons.map((button) => (
              <a className="soft-button" href={button.href} key={button.href}>
                {t(button.label)}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-character reveal" aria-hidden="true">
          <ImageWithFallback
            src={hero.character}
            alt={t({ zh: "巡游画师角色设定图", en: "Wandering painter character concept art" })}
            className="hero-character__image"
            fallbackLabel={t({ zh: "角色设定图生成中", en: "Character art in progress" })}
            lazy={false}
          />
        </div>
      </div>
    </section>
  );
}
