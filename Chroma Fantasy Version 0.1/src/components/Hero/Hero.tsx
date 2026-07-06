import { useState } from "react";
import { characters } from "../../content/characters";
import { siteContent } from "../../content/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { ImageWithFallback } from "../common/ImageWithFallback";
import "./Hero.css";

export function Hero() {
  const { t, language } = useLanguage();
  const hero = siteContent.hero;
  const studio = siteContent.studio;
  const [activeCharacterId, setActiveCharacterId] = useState(characters[0].id);
  const activeCharacter = characters.find((character) => character.id === activeCharacterId) ?? characters[0];
  const [projectZh, projectEn] = activeCharacter.project.split(" / ");
  const activeProject = language === "zh" ? projectZh : projectEn ?? activeCharacter.project;

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

        <div className="hero-character reveal">
          <ImageWithFallback
            src={activeCharacter.image}
            alt={`${t(activeCharacter.name)} ${t(activeCharacter.role)}`}
            className="hero-character__image"
            fallbackLabel={t({ zh: "角色设定图生成中", en: "Character art in progress" })}
            lazy={false}
          />
          <div className="hero-character__caption" aria-live="polite">
            <strong>{t(activeCharacter.name)}</strong>
            <span>{activeProject}</span>
          </div>
          <div
            className="hero-character__tabs"
            aria-label={t({ zh: "切换展示角色", en: "Switch featured character" })}
          >
            {characters.slice(0, 5).map((character) => (
              <button
                className="hero-character__tab"
                type="button"
                key={character.id}
                aria-pressed={character.id === activeCharacterId}
                onClick={() => setActiveCharacterId(character.id)}
              >
                {t(character.name)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
