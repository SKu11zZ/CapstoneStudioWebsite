import type { Game, Language } from "../../types";
import "./GameCard.css";

type GameCardProps = {
  game: Game;
  language: Language;
};

export function GameCard({ game, language }: GameCardProps) {
  return (
    <article className="game-card">
      <div className="game-card__body">
        <div className="game-card__topline">
          <span className="game-card__status">{game.status[language]}</span>
          <span>{game.platform[language]}</span>
        </div>
        <h3>{game.name[language]}</h3>
        {language === "zh" ? <small>{game.englishName}</small> : null}
        <p className="game-card__genre">{game.genre[language]}</p>
        <p>{game.tagline[language]}</p>
        <p className="game-card__note">{game.description[language]}</p>
        <dl className="game-card__facts">
          <div>
            <dt>{language === "zh" ? "阶段" : "Stage"}</dt>
            <dd>{game.stage[language]}</dd>
          </div>
          <div>
            <dt>{language === "zh" ? "人数" : "Players"}</dt>
            <dd>{game.players[language]}</dd>
          </div>
          <div>
            <dt>{language === "zh" ? "平台" : "Platform"}</dt>
            <dd>{game.platform[language]}</dd>
          </div>
        </dl>
        <ul className="game-card__focus">
          {game.focus.map((item) => (
            <li key={item.en}>{item[language]}</li>
          ))}
        </ul>
      </div>
      <div className="game-card__footer">
        <span>{game.owner[language]}</span>
        <a href={game.href}>{game.button[language]}</a>
      </div>
    </article>
  );
}
