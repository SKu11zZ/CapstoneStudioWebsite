import type { Game } from "../../types/site";
import { ButtonLink } from "./ButtonLink";
import { CinematicFrame } from "./CinematicFrame";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <article className={`game-card game-card--${game.id}`}>
      <CinematicFrame variant="poster" label={game.coverLabel} meta={game.platforms} />
      <div className="game-card__body">
        <div className="game-card__meta">
          <span className={`status status--${game.statusKey}`}>{game.status}</span>
          <span>{game.genre}</span>
        </div>
        <h3>
          {game.title}
          {game.zhTitle ? <small>{game.zhTitle}</small> : null}
        </h3>
        <p>{game.description}</p>
        <ButtonLink href={game.ctaHref} variant={game.statusKey === "featured" ? "primary" : "secondary"}>
          {game.cta}
        </ButtonLink>
      </div>
    </article>
  );
}
