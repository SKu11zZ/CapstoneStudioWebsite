import type { Game, SiteContent } from "../../types/site";
import { GameCard } from "../ui/GameCard";
import { SectionHeading } from "../ui/SectionHeading";

type GamesSectionProps = {
  content: SiteContent;
  games: Game[];
};

export function GamesSection({ content, games }: GamesSectionProps) {
  return (
    <section className="section-band" id="games">
      <div className="section-inner">
        <SectionHeading eyebrow={content.gamesIntro.eyebrow} title={content.gamesIntro.title} body={content.gamesIntro.body} />
        <div className="card-grid card-grid--games">
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
