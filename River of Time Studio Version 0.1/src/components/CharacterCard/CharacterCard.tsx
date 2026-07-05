import { useLanguage } from "../../i18n/LanguageContext";
import { VisualPlate } from "../VisualPlate";

type CharacterCardProps = {
  character: {
    id: string;
    name: { zh: string; en: string };
    role: { zh: string; en: string };
    project: { zh: string; en: string };
    description: { zh: string; en: string };
    quote: { zh: string; en: string };
    visual: string;
  };
};

export function CharacterCard({ character }: CharacterCardProps) {
  const { language } = useLanguage();

  return (
    <article className="character-card">
      <VisualPlate label={`${character.name[language]} portrait`} variant={character.visual} portrait />
      <div className="character-copy">
        <span>{character.project[language]}</span>
        <h3>{character.name[language]}</h3>
        <p className="character-role">{character.role[language]}</p>
        <p>{character.description[language]}</p>
        <blockquote>{character.quote[language]}</blockquote>
      </div>
    </article>
  );
}
