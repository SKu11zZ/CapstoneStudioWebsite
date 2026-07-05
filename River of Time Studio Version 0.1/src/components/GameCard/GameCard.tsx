import { useLanguage } from "../../i18n/LanguageContext";
import { VisualPlate } from "../VisualPlate";

type GameCardProps = {
  game: {
    id: string;
    title: { zh: string; en: string };
    status: { zh: string; en: string };
    genre: { zh: string; en: string };
    summary: { zh: string; en: string };
    visual: string;
  };
};

export function GameCard({ game }: GameCardProps) {
  const { language } = useLanguage();

  return (
    <article className="game-card">
      <VisualPlate label={`${game.title[language]} cover`} variant={game.visual} />
      <div className="game-card-body">
        <div className="card-meta">
          <span>{game.status[language]}</span>
        </div>
        <h3>{game.title[language]}</h3>
        <p className="game-genre">{game.genre[language]}</p>
        <p>{game.summary[language]}</p>
      </div>
    </article>
  );
}
