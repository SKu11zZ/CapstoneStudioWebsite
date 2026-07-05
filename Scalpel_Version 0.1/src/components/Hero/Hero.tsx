import { hero } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { ActionLink } from "../ui/ActionLink";
import "./Hero.css";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="hero section" id="home">
      <div className="hero__content">
        <span className="hero__eyebrow">{hero.eyebrow[language]}</span>
        <span className="hero__wordmark">{hero.wordmark}</span>
        <h1>{hero.title[language]}</h1>
        <p className="hero__subtitle">{hero.subtitle[language]}</p>
        <p className="hero__description">{hero.description[language]}</p>
        <span className="hero__project-line">{hero.projectLine[language]}</span>
        <div className="hero__actions" aria-label="Hero actions">
          {hero.ctas.map((action) => (
            <ActionLink
              key={action.href + action.label.en}
              action={action}
              language={language}
            />
          ))}
        </div>
      </div>

      <figure className="hero-visual" aria-label="Ashen Moonfront lunar defense visual">
        <img src={hero.visualImage} alt="Ashen Moonfront lunar base defensive line" />
        <figcaption className="hero-visual__caption">
          <span>ASHEN MOONFRONT</span>
          <strong>Communications Tower Holdout</strong>
        </figcaption>
      </figure>
    </section>
  );
}
