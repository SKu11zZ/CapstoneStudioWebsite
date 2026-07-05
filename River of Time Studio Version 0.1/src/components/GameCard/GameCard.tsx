import { useLanguage } from "../../i18n/LanguageContext";
import { ProjectCover } from "../ProjectCover/ProjectCover";

type GameCardProps = {
  game: {
    id: string;
    title: { zh: string; en: string };
    status: { zh: string; en: string };
    genre: { zh: string; en: string };
    summary: { zh: string; en: string };
    action: { zh: string; en: string };
    featured: boolean;
    chapter: { zh: string; en: string };
    visual: string;
  };
};

export function GameCard({ game }: GameCardProps) {
  const { language } = useLanguage();

  return (
    <article className={`game-card ${game.featured ? "game-card-featured" : ""}`}>
      <ProjectCover title={game.title} chapter={game.chapter} variant={game.visual} compact />
      <div className="game-card-body">
        <div className="card-meta">
          {game.featured ? <span>{language === "zh" ? "主推" : "Featured"}</span> : null}
          <span>{game.status[language]}</span>
        </div>
        <h3>{game.title[language]}</h3>
        <p className="game-genre">{game.genre[language]}</p>
        <p>{game.summary[language]}</p>
        <a className="game-card-action" href={game.featured ? "#featured" : "#games"}>
          {game.action[language]}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
