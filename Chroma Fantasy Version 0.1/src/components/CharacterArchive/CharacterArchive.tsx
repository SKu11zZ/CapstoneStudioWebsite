import { useState } from "react";
import { characters } from "../../content/characters";
import { useLanguage } from "../../i18n/LanguageContext";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { SectionHeader } from "../common/SectionHeader";
import "./CharacterArchive.css";

export function CharacterArchive() {
  const [activeId, setActiveId] = useState(characters[0].id);
  const { t, language } = useLanguage();
  const active = characters.find((character) => character.id === activeId) ?? characters[0];

  return (
    <section className="section character-archive" id="characters" aria-labelledby="characters-title">
      <div className="section-inner">
        <SectionHeader
          kicker={{ zh: "Character Archive", en: "Character Archive" }}
          title={{ zh: "角色档案", en: "Characters" }}
          intro={{
            zh: "角色不是头像，而是通向世界的入口",
            en: "Characters are not avatars, but entrances into the world",
          }}
          align="center"
        />
        <div className="character-archive__stage reveal">
          <div className="character-archive__portrait">
            <ImageWithFallback
              src={active.image}
              alt={t(active.name)}
              className="character-archive__image"
              fallbackLabel={t(active.name)}
            />
          </div>
          <div className="character-archive__copy">
            <p className="section-kicker">{active.project}</p>
            <h3>{t(active.name)}</h3>
            <p className="character-archive__role">{t(active.role)}</p>
            <blockquote>{t(active.quote)}</blockquote>
            <p>{t(active.background)}</p>
            <div className="character-tags" aria-label={language === "zh" ? "角色标签" : "Character tags"}>
              {active.tags[language].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="character-tabs" role="tablist" aria-label={t({ zh: "选择角色", en: "Select character" })}>
            {characters.map((character) => (
              <button
                className={character.id === active.id ? "is-active" : ""}
                type="button"
                role="tab"
                aria-selected={character.id === active.id}
                key={character.id}
                onClick={() => setActiveId(character.id)}
              >
                <span>{t(character.name)}</span>
                <small>{t(character.role)}</small>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
