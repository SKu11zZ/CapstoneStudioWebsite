import { useLanguage } from "../../i18n/LanguageContext";
import { ImageWithFallback } from "../common/ImageWithFallback";
import "./GameCard.css";

type GameCardProps = {
  game: {
    id: string;
    title: { zh: string; en: string };
    type: { zh: string; en: string };
    status: { zh: string; en: string };
    summary: { zh: string; en: string };
    cardCopy: { zh: string; en: string };
    image: string;
  };
};

export function GameCard({ game }: GameCardProps) {
  const { t } = useLanguage();

  return (
    <article className="game-card reveal">
      <ImageWithFallback
        src={game.image}
        alt={t(game.title)}
        className="game-card__image"
        fallbackLabel={t(game.title)}
      />
      <div className="game-card__body">
        <div className="game-card__status">
          <span>{t(game.status)}</span>
        </div>
        <h3>{t(game.title)}</h3>
        <p className="game-card__type">{t(game.type)}</p>
        <p>{t(game.summary)}</p>
        <blockquote>{t(game.cardCopy)}</blockquote>
        <a href="#playtest" className="text-link">
          {t({ zh: "关注项目", en: "Follow Project" })}
        </a>
      </div>
    </article>
  );
}
